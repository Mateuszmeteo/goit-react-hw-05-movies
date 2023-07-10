import { NavLink } from "react-router-dom"
import { styled } from "styled-components";

const StyledLink = styled(NavLink)`
    font-weight: 700;
    text-decoration: none;
    color: black;

    margin: 0 10px;


    &.active {
        color: rgb(214, 53, 53);
    }
`;



const Header = () => {

    return (
        <div>
            <StyledLink to="/" >Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
        </div>
    )
}
export default Header