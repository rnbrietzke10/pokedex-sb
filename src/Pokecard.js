import React from 'react';
import './Pokecard.css';

const Pokecard = ({ pokemon }) => {
  return (
    <div className="Pokecard">
      <h4 className="Pokecard-name">{pokemon.name}</h4>

      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
        className="Pokecard-img"
      />
      <div>
        <p>Type: {pokemon.type}</p>
        <p>EXP: {pokemon.base_experience}</p>
      </div>
    </div>
  );
};

export default Pokecard;
