import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';
const Pokedex = ({ pokemonArr }) => {
  return (
    <div className="Pokedex">
      <h1 className="Pokedex-title">Pokedex</h1>
      <div className="Pokedex-cards-container">
        {pokemonArr.map((pokemon) => (
          <Pokecard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
