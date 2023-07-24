import React, { useEffect, useState } from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import MovieSlider from "../movie/MovieSlider";
import MovieSearch from "../movie/MovieSearch";
import MovieTag from "../movie/MovieTag";
import MovieCont from "../movie/MovieCont";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_M}&language=ko-KR&query=SEARCH_QUERY&page=1&limit=30&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_M}&language=ko-KR&query=SEARCH_QUERY&page=1&limit=30`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  }, []);

  const searchByGenre = async (genreId) => {
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_M}&language=ko-kr&with_genres=${genreId}`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Contents title="movie">
        <ContTitle title="movie" />
        <MovieSlider movies={movies} />
        <MovieSearch onSearch={search} />
        <MovieTag onSearch={searchByGenre} />
        <MovieCont movies={movies} />
      </Contents>
    </>
  );
};

export default MoviePage;
