import { Link, NavLink } from "react-router-dom";
import Searchbar from "./SearchBar"
import styled from "styled-components";
function MenuBar() {return(
    <Navbar>
            <NavLink to='/' activeClassName='active'>Home</NavLink>
            <NavLink to='/page/1' activeClassName='active'>All Movies</NavLink>
        <div className="small">
        <Searchbar/>
        </div>
    </Navbar>)}
export default MenuBar;
const Navbar = styled.div`
    >*  :not(.small p) {
        display: inline;
    }
    .small{
        position: relative;
        width: 30%;
    }
    .small>*{
        margin-left: 110%;
    }
    h5{
        position: relative;
        display: inline-block;
        color: whitesmoke;
        padding-left: 1%;
    }

 
`;