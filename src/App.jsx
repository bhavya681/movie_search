/*
import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
import Navbar from './components/Navbar'

const App = () => {

  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const [loading, setLoding] = useState(false);

  const fetchMovieData = async () => {
    try {
      setLoding(true);
      const res = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`);
      const data = await res.json();
      setAllMovieData(data.Search);
      setLoding(false);
    } catch (error) {
      setLoding(false)
    }
  }

  return (
    <div>
      <Navbar />
      <div className='bg'>
        <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData}/>
        <MovieCard allMovieData={allMovieData} loading={loading}/>
      </div>
    </div>
  )
}

export default App
*/


import React from 'react'
import { useState } from 'react';
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
import Navbar from './components/Navbar'

const App = () => {

  const [allMovies, setAllMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMovieData = async () => {
    try {

      setLoading(true);
      const res = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`);
      const data = await res.json();
      setAllMovies(data.Search);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }


  return (
    <>
      <Navbar />
      <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData} />
      <MovieCard allMovies={allMovies} loading={loading} />
    </>
  )
}

export default App

// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import SearchBar from './components/SearchBar'
// import MovieCard from './components/MovieCard'
// import axios from 'axios'

// const App = () => {

//   const [allMovies, setAllMovies] = useState([]);
//   const [searchMovie, setSearchMovie] = useState('');
//   const [loading, setLoading] = useState(false);

//   const fetchMovieData = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`);
//       const data = await res.json();
//       setAllMovies(data.Search);
//       setSearchMovie("")
//       setLoading(false);
//     } catch (error) {
//       setLoading(false)
//     }
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className='bg'>
//         <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData} />
//         <MovieCard loading={loading} allMovies={allMovies} />
//       </div>
//     </div>
//   )
// }

// export default App
