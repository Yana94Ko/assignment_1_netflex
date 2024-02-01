import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import utils from "../../utils/utils";
import LikeButton from "../LikeButton";
import styles from "../MovieList/MovieList.module.scss";

function MovieListItem({ category, movie }) {
  const { isLoggedIn } = useAuth();
  return (
    <li className={styles.movie} key={movie.id}>
      <Link to={`/movies/${movie.id}`}>
        <img
          src={utils.movies.getTMDBImgSrc(movie.backdrop_path)}
          alt={movie.title}
        />
      </Link>
      <div className={styles.titleWrapper}>
        <h5 style={{ textDecoration: "none" }} className={styles.title}>
          {movie.title} (
          {category === "upComing"
            ? movie.release_date.substr(0, 7).replace("-", ".")
            : movie.release_date.substr(0, 4)}
          )
        </h5>
        {isLoggedIn && <LikeButton movie={movie} />}
      </div>
    </li>
  );
}

export default MovieListItem;
