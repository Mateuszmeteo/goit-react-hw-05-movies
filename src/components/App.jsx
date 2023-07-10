import { Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";
import Header from "./Header/Header";

const Home = lazy(() => import("./Home/Home"))
const Movies = lazy(() => import("./Movies/Movies"))
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"))
const Cast = lazy(() => import("./Cast/Cast"))
const Reviews = lazy(() => import("./Reviews/Reviews"))




const App = () => {
  return (
    <div >
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Routes>
      </Suspense>
    </div>
  );
};
export default App
