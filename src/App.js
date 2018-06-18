import React, { Component } from "react";
import PokeCard from "./components/PokeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import pokemon from "./pokemon.json";
// import "./App.css";

class App extends Component {
  // Setting this.state.pokemon to the pokemon json array
  state = {
    pokemon
  };

  removePoke = id => {
    // Filter this.state.pokemon for pokemon with an id not equal to the id being removed
    const pokemon = this.state.pokemon.filter(poke => poke.id !== id);
    // Set this.state.pokemon equal to the new pokemon array
    this.setState({ pokemon });
  };

  // Map over this.state.pokemon and render a PokeCard component for each poke object
  render() {
    return (
      <Wrapper>
        <Title>Pokemon List</Title>
        {this.state.pokemon.map(poke => (
          <PokeCard
            removePoke={this.removePoke}
            id={poke.id}
            key={poke.id}
            name={poke.name}
            image={poke.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

