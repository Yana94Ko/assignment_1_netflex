import React, { useEffect, useState } from "react";
import api from "../../api/api";
import MovieListItem from "../MovieListItem/MovieListItem";
import styles from "./MovieList.module.scss";

function MovieList({ categoryInfo }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.movies
      .getMovies(categoryInfo.endPoint)
      .then((movies) => setMovies(movies));
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.subTitle}>{categoryInfo.subTitle}</h2>
      <ul className={styles.movies}>
        {movies.map((movie) => (
          <MovieListItem
            key={movie.id}
            category={categoryInfo.category}
            movie={movie}
          />
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
