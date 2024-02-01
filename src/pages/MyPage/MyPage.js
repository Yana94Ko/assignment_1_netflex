import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MyPage.module.scss";
import { useProfile } from "../../contexts/profile.context";
import { useAuth } from "../../contexts/auth.context";
import MovieList from "../../components/MovieList/MovieList";

function MyPage() {
  const { nickname, updateNickname, likedMovies } = useProfile();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [newNickname, setNewNickname] = useState(nickname);
  useEffect(() => {
    if (!isLoggedIn) {
      alert("먼저, 로그인 하세요");
      navigate("/sign-in");
    }
  }, []);
  const handleClickUpdateNickname = () => {
    if (!newNickname) {
      alert("변경할 닉네임을 입력하세요!");
    } else {
      updateNickname(newNickname);
      alert(newNickname + "님으로 변경 완료!");
    }
  };
  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <form className={styles.form}>
          <input
            type="text"
            value={newNickname}
            placeholder="닉네임을 변경하시겠어요?"
            onChange={(e) => setNewNickname(e.target.value)}
            maxLength={10}
            className={styles.input}
          />
          <button
            type="button"
            className={styles.btn}
            onClick={handleClickUpdateNickname}
          >
            변경하기
          </button>
        </form>
      </section>
      <section>
        <MovieList subTitle="좋아요 누른 영화들" likedMovies={likedMovies} />
      </section>
    </div>
  );
}

export default MyPage;
