import React, { Component } from "react";
import PokeCard from "./components/PokeCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import pokemon from "./pokemon.json";
import "./App.css";

class App extends Component {
  // Setting this.state.pokemon to the pokemon json array

  state = {
    pokemon,
    unselectedPokemon: pokemon,
    message: "Click an image to begin!",
    topScore: 0,
    currentScore: 0.1
  }

  componentDidMount() {
    // start timer (if I ever include it)
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  sortArray = array => {
    let sorted = [];
    for (let i = 0; i < array.length; i++) {
      sorted.push(array.find(obj => obj.id === i + 1));
    }
    return sorted;
  }

  selectPoke = name => {

    this.shuffleArray(this.state.pokemon);

    const findPoke = this.state.unselectedPokemon.find(item => item.name === name);

    if (findPoke === undefined) {
      // failure to select a new Poke
      this.setState({ 
        message: "You guessed incorrectly!",
        topScore: (this.state.currentScore >= this.state.topScore) ? this.state.currentScore : this.state.topScore,
        currentScore: 0,
        pokemon: this.sortArray(this.state.pokemon),
        unselectedPokemon: pokemon
      });
    }
    else {
      // success to select a new Poke
      const newUnselected = this.state.unselectedPokemon.filter(item => item.name !== name);
      
      this.setState({ 
        message: "You guessed correctly!",
        currentScore: Math.floor(this.state.currentScore + 1),
        unselectedPokemon: newUnselected
      });
    }
  };

  // Map over this.state.pokemon and render a PokeCard component for each poke object
  render() {
    return (
      <Wrapper>
        <Navbar 
          message={this.state.message}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Title>Don't click the same PKMN twice!</Title>
        {this.state.pokemon.map(poke => (
          <PokeCard
            selectPoke={this.selectPoke}
            key={poke.id}
            name={poke.name}
            image={poke.image}
            currentScore={this.state.currentScore}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

