import React from "react";
import styles from "./HomePage.module.scss";
import utils from "../../utils/utils";
import MovieList from "../../components/MovieList";

function HomePage() {
  return (
    <div className={styles.movieWrapper}>
      {utils.movies.getCategoryInfo().map((categoryInfo) => (
        <MovieList key={categoryInfo.category} categoryInfo={categoryInfo} />
      ))}
    </div>
  );
}

export default HomePage;
