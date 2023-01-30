import './App.css';
import React, {useState} from "react";
import Movie from "./component/Movie";
import MovieForm from "./component/MovieForm";
import Navbar from "./component/Navbal";


function App(){
  const [movies,setMovies]=useState([]);
    const addMovie  = (movie) => {
      setMovies([
        ...movies,
        movie
      ])
    }

  const removeMovie = (id) => {
    setMovies(movies.filter(movie => {
      return movie.id !==id;
    }))
  }

  const renderMovies = movies.map((movie) => {
    return(
      <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />
    )
  })

  return(
    <div className="App">
        <Navbar/>
        <h1>영화 list</h1>
        <MovieForm addMovie={addMovie}/>
        {renderMovies}
    </div>
  );
};

export default App;

