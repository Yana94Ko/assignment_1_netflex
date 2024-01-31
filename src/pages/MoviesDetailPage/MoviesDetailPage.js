import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../api/api";
import utils from "../../utils/utils";
import styles from "./MoviesDetailPage.module.scss";

function MoviesDetailPage() {
  //   const params = useParams();
  //   const movieId = params.movieId;
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.movies.getMovie(movieId).then((movie) => {
      if (movie.overview === "" || movie.overview === undefined) {
        navigate(`/movies/${Number(movieId) + 1}`);
      } else {
        setMovie(movie);
      }
    });
  }, [movieId]);
  if (movie === null) return null;
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoWrapper}>
        <img
          className={styles.poster}
          src={utils.movies.getTMDBImgSrc(movie.backdrop_path)}
        />
        <div className={styles.infos}>
          <h2 className={styles.title}>{movie.title}</h2>
          <h2 className={styles.vote_average}>평점 : {movie.vote_average}</h2>
          <br />
          <ul className={styles.genres}>
            {movie.genres.map((genre) => (
              <li key={genre.id} className={styles.genre}>
                {genre.name}
              </li>
            ))}
          </ul>
          <br />
          <p className={styles.overview}>{movie.overview}</p>
        </div>
      </div>
      <div className={styles.moveBtns}>
        <Link to={`/movies/${Number(movieId) - 1}`}>◀️ 이전 영화</Link>
        <Link to={`/movies/${Number(movieId) + 1}`}>다음 영화 ▶️</Link>
      </div>
    </div>
  );
}

export default MoviesDetailPage;
