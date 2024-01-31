const categoryInfo = [
  {
    category: "nowPlaying",
    subTitle: "현재 상영작",
    endPoint:
      "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1&region=KR",
  },
  {
    category: "topRated",
    subTitle: "평점이 높은 영화",
    endPoint:
      "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1&region=KR",
  },
  {
    category: "popular",
    subTitle: "인기있는 영화",
    endPoint:
      "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1&region=KR",
  },
  {
    category: "upComing",
    subTitle: "상영 예정작",
    endPoint:
      "https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1&region=KR",
  },
];
function getCategoryInfo() {
  return categoryInfo;
}
function getTMDBImgSrc(path) {
  return "https://image.tmdb.org/t/p/w500" + path;
}
export const moviesUtils = {
  getCategoryInfo,
  getTMDBImgSrc,
};
export default moviesUtils;
