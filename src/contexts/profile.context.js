import { createContext, useContext, useState } from "react";
import utils from "../utils/utils";

const initialValue = {
  nickname: null,
  profileImg: null,
  likedMovies: [],
  addLikedMovies: () => {},
  removeLikedMovies: () => {},
  isMovieLiked: () => {},
  likedMoviesUtil: null,
};

const ProfileContext = createContext(initialValue);

export function ProfileProvider({ children }) {
  const [nickname, setNickname] = useState(utils.nickname.getRandomNickName);
  const updateNickname = (newNickname) => setNickname(newNickname);
  const [likedMovies, setLikedMovies] = useState([]);
  const addLikedMovies = (movie) => {
    setLikedMovies([...likedMovies, movie]);
  };
  const removeLikedMovies = (targetMovieId) => {
    setLikedMovies((prevLikedMovies) =>
      prevLikedMovies.filter((movie) => movie.id !== targetMovieId)
    );
  };
  const isMovieLiked = (movieId) => {
    return likedMovies.some((likedMovie) => likedMovie.id === movieId);
  };
  const likedMoviesUtil = {
    addLikedMovies,
    removeLikedMovies,
    isMovieLiked,
  };

  const value = {
    nickname,
    updateNickname,
    likedMovies,
    likedMoviesUtil,
  };
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext);

export default ProfileContext;
