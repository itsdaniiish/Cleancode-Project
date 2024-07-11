import React, { useEffect, useState } from "react";
import "./Movies.css";

const Movies = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const datafetch = async (search) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=3a67d6b9&s=${search}&page=1`
      );
      const { Search, Response } = await res.json();
      if (Response === "False") {
        setMovies([]);
      } else {
        setMovies(Search);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    datafetch(search);
  }, [search]);

  return (
    <div className="movies-container">
      <h1>Movies</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search here to get movie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="movies-grid">
        {loading ? (
          <p>Loading...</p>
        ) : movies.length > 0 ? (
          movies.map((movie, index) => (
            <div key={index} className="movie-card">
              <img src={movie.Poster} alt={`${movie.Title} poster`} />
              <h2>{movie.Title}</h2>
              <p>{movie.Year}</p>
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default Movies;
