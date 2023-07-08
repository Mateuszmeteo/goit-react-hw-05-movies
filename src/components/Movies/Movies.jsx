import { useState } from "react"
import { useNavigate} from "react-router-dom"





const Movies = () => {

    const [keyword, setKeyword] = useState('')
    const navigate = useNavigate()

    const handleSearch = () => {
        navigate.push(`/movies?keyword=${keyword}`)
    }


    return(
    <div>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
    )
}
export default Movies