import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import styles from "./SignInPage.module.scss";

function SignInPage({}) {
  const { isLoggedIn, signIn } = useAuth();
  const [username, setUsername] = useState("udemy");
  const [password, setPassword] = useState("udemy");
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    if (!username || !password)
      return alert("아이디와 비밀번호를 모두 입력하세요.");
    if (username === "udemy" && password === "udemy") {
      signIn();
      navigate("/");
    } else {
      return alert("아이디 혹은 비밀번호가 잘못되었습니다. 다시 입력하세요");
    }
  };

  return (
    <div className={styles.wrapper}>
      {!isLoggedIn && (
        <form className={styles.form}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <button
            type="button"
            onClick={handleClickSignIn}
            className={styles.button}
          >
            로그인
          </button>
        </form>
      )}
    </div>
  );
}

export default SignInPage;
