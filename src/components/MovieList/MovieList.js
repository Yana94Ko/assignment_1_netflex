import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";
import { useAuth } from "../../contexts/auth.context";
import MoviesUtils from "../../utils/movies/movies.utils";
import utils from "../../utils/utils";
import styles from "./MovieList.module.scss";
import MovieListItem from "../MovieListItem/MovieListItem";

function MovieList({ category, endPoint, subTitle }) {
  const { isLoggedIn } = useAuth();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.movies.getMovies(endPoint).then((movies) => setMovies(movies));
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.subTitle}>{subTitle}</h2>
      <ul className={styles.movies}>
        {movies.map((movie) => (
          <MovieListItem key={movie.id} category={category} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
