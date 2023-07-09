import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"


const Home = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fatchTrendingMovies = async () => {
            try {
                const response = await axios.get(
                    'https://api.themoviedb.org/3/trending/movie/day',
                    {params:{api_key:'eda34bd8773f8b183adc5281f556f30c'}}
                )
                setMovies(response.data.results)
            } catch (error) {
                alert('Upssss.... Error..')
            }
        }
        fatchTrendingMovies()
    }, [])



    return(
        <div>
            <h1>Trending movies</h1>
            <ul>
                {movies.map((item) => (
                    <li key={item.id}>
                        <Link to={`/movies/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Home