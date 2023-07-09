import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

const MovieDetails = () => {

    const {movieId} = useParams()
    const [movie, setMovie] = useState(null)

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

    return (
        <div>
          <div>
            <Link to="/">Go back...</Link>
          </div>
          <div>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </div>
          <div>
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
        </div>
      );
    };

export default MovieDetails