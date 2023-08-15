import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Lists from './components/lists-component'
import {Pokemon} from "./interface/Pokemon";
import Input from "./components/input-component";

function App() {
  // const pokemons=["皮卡丘","小火龙","杰尼龟"];
    const [pokemons,setPokemons] =useState<Pokemon[]>([]);
    const [filteredPokemons,setFilteredPokemons] =useState<Pokemon[]>([]);

    useEffect(()=> {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000")
            .then(res=>res.json())
            .then(json => {
                json.results.map((result:Pokemon,index:number)=>{result.id = index +1});
                setPokemons(json.results)
                setFilteredPokemons(json.results)
                console.log(json)
            })

    },[])
    const onChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        const comparedPokemons  = pokemons.filter(pokemon => {
            return pokemon.name.includes(event.target.value);
        });
        setFilteredPokemons(comparedPokemons);
    };

    return (
    <div className="App">
      <h1>宝可梦</h1>
        <Input onChangeHandler={onChangeHandler}/>
      <Lists pokemonsLists={filteredPokemons} />
    </div>
  );
}

export default App;
