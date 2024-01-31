import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import styles from "./Header.module.scss";

function Header({}) {
  const { isLoggedIn, logOut } = useAuth();
  return (
    <header className={styles.header}>
      <Link to="/">Netflex</Link>
      <nav>
        <ul>
          {!isLoggedIn ? (
            <li>
              <Link to="/sign-in">
                <button className={styles.btn}>
                  <span>로그인</span>
                </button>
              </Link>
            </li>
          ) : (
            <>
              <ll>
                <button className={styles.btn} onClick={logOut}>
                  <span>로그아웃</span>
                </button>
              </ll>
              <ll>
                <Link to="/my-page">
                  <button className={styles.btn}>
                    <span>마이페이지</span>
                  </button>
                </Link>
              </ll>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
