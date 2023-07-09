import { useState, useEffect } from "react"
import { Link, useParams, useNavigate, Outlet } from "react-router-dom"
import axios from "axios"

import styles from './movieDetails.module.scss'

const MovieDetails = () => {

    const {movieId} = useParams()
    const [movie, setMovie] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`,
                {
                    params: {api_key: 'eda34bd8773f8b183adc5281f556f30c'}
                }
            )
            setMovie(response.data)
            } catch (error) {
                // alert("error-movieDetails")
            }
        }
        fetchMovieDetails()
    }, [movieId])

    if (!movie) {
        return <div>loading...</div>
    }

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div className={styles.movieDetails}>
          <div className={styles.movieDetails__btnBack}>
            <button onClick={handleGoBack}>Go back...</button>
            {/* <Link to="/">Go back...</Link> */}
          </div>
          <div className={styles.movieDetails__frontDiv}>
            <div>
                <img className={styles.movieDetails__frontDivImg} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className={styles.movieDetails__frontDivNotes}>
                <h1>{movie.title}</h1>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <ul>
                {movie.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
                </ul>
            </div>
          </div>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      );
    };

export default MovieDetails