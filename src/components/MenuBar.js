import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
function MenuBar() {return(
    <Navbar>

            <NavLink to='/' activeClassName='active'>Home</NavLink>
        
        <input type="text" placeholder="Search.."/>
    </Navbar>)}
export default MenuBar;
const Navbar = styled.div`
    >*  :not(.small) {
        display: inline;
    }
    .small{
        position: relative;
    }
    h5{
        position: relative;
        display: inline-block;
        color: whitesmoke;
        padding-left: 1%;
    }

    input{
        width: 30%;
        margin-left: 35%;
        text-align: center;
        padding-top: 0.5%;
        padding-bottom: 0.5%;
        border-radius: 5px;
        font-size: large;
    }
   
`;