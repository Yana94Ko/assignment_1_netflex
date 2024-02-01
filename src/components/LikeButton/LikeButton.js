import React, { useState } from "react";
import { useProfile } from "../../contexts/profile.context";
import styles from "./LikeButton.module.scss";

function LikeButton({ movie }) {
  console.log(movie);
  const { likedMovies, likedMoviesUtil } = useProfile();
  const [isLikedMovie, setIsLikedMovie] = useState(
    likedMoviesUtil.isMovieLiked(movie.id)
  );
  console.log(likedMoviesUtil.isMovieLiked(movie.id));
  const handleClickLikeBtn = () => {
    likedMoviesUtil.addLikedMovies(movie);
    setIsLikedMovie(true);
  };
  const handleClickDislikeBtn = () => {
    likedMoviesUtil.removeLikedMovies(movie.id);
    setIsLikedMovie(false);
  };
  return (
    <>
      {!isLikedMovie ? (
        <i
          className={(styles.likeBtn, "far fa-heart")}
          onClick={handleClickLikeBtn}
        ></i>
      ) : (
        <i
          className={(styles.likeBtn, "fas fa-heart")}
          style={{ color: "red" }}
          onClick={handleClickDislikeBtn}
        ></i>
      )}
    </>
  );
}

export default LikeButton;
