import { Routes, Route } from "react-router-dom";
import  Home  from "./Home/Home"
import  {Movies}  from "./Movies/Movies";
import  MovieDetails  from "./MovieDetails/MovieDetails";
import  {Cast}  from "./Cast/Cast";
import  {Reviews}  from "./Reviews/Reviews";
import { lazy, Suspense } from "react";

// const Home = lazy(() => import("path/to/Home"))
// const Movies = lazy(() => import("path/to/Movies"))
// const MovieDetails = lazy(() => import("path/to/MovieDetails"))
// const Cast = lazy(() => import("path/to/Cast"))
// const Reviews = lazy(() => import("path/to/Reviews"))




export const App = () => {
  return (
    <div >
      <Suspense fallback={<div>Loading...</div>}>
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
