import './App.css';
import Pokedex from './Pokedex';
import pokemonArr from './pokemon';
function App() {
  console.log(pokemonArr);
  return (
    <div className="App">
      <Pokedex pokemonArr={pokemonArr} />
    </div>
  );
}

export default App;
