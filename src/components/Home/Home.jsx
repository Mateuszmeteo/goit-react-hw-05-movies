import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"


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
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default Home