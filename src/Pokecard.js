import React from 'react';
import './Pokecard.css';

const Pokecard = ({ pokemon }) => {
  return (
    <div className="Pokecard">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png.`}
        alt={pokemon.name}
      />
      <h4>Name: {pokemon.name}</h4>
      <p>Type: {pokemon.type}</p>
      <p>EXP: {pokemon.base_experience}</p>
    </div>
  );
};

export default Pokecard;
