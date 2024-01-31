import { createContext, useState } from "react";

const initialValue = {
  nickname: null,
  likedMovies: [],
};

const ProfileContext = createContext(initialValue);

export function ProfileProvider({ children }) {
  const [nickname, setNickname] = useState("");
  const updateNickname = (newNickname) => setNickname(newNickname);
  const value = {
    nickname,
    updateNickname,
  };
}
