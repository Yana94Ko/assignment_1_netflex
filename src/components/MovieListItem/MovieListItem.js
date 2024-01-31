import React from "react";
import { Link } from "react-router-dom";
import utils from "../../utils/utils";
import styles from "../MovieList/MovieList.module.scss";

function MovieListItem({ category, movie }) {
  return (
    <li className={styles.movie} key={movie.id}>
      <Link to={`/movies/${movie.id}`}>
        <img
          src={utils.movies.getTMDBImgSrc(movie.backdrop_path)}
          alt={movie.title}
        />
        <div className={styles.titleWrapper}>
          <h5 style={{ textDecoration: "none" }} className={styles.title}>
            {movie.title} (
            {category === "upComing"
              ? movie.release_date.substr(0, 7).replace("-", ".")
              : movie.release_date.substr(0, 4)}
            )
          </h5>
        </div>
      </Link>
    </li>
  );
}

export default MovieListItem;
