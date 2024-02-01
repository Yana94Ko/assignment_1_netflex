import React, { useEffect, useState } from "react";
import api from "../../api/api";
import MovieListItem from "../MovieListItem/MovieListItem";
import styles from "./MovieList.module.scss";

function MovieList({ categoryInfo, likedMovies }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (categoryInfo) {
      api.movies
        .getMovies(categoryInfo.endPoint)
        .then((movies) => setMovies(movies));
    } else {
      setMovies(likedMovies);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.subTitle}>
        {categoryInfo ? categoryInfo.subTitle : null}
      </h2>
      <ul className={styles.movies}>
        {movies.map((movie) => (
          <MovieListItem
            key={movie.id}
            category={categoryInfo ? categoryInfo.category : "none"}
            movie={movie}
          />
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
