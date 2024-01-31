import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import DefaultLayout from "./layouts/DefaultLayout";
import MoviesDetail from "./pages/MoviesDetailPage";
import { AuthProvider } from "./contexts/auth.context";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />\
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/movies/:movieId" element={<MoviesDetail />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
