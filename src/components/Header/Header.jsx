const { default: Home } = require("components/Home/Home")
const { Movies } = require("components/Movies/Movies")
const { NavLink } = require("react-router-dom")



const Header = () => {

    return (
        <div>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
        </div>
    )
}
export default Header