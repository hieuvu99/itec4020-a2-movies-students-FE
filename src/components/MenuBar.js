import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
function MenuBar() {return(
    <Navbar>
            <NavLink to='/' activeClassName='active'>Home</NavLink>
            <NavLink to='/' activeClassName='active'>Account</NavLink>
        <div className="small">
        <input type="text" placeholder="Search.."/>
        <p >Test</p>
        </div>
    </Navbar>)}
export default MenuBar;
const Navbar = styled.div`
    >*  :not(.small) {
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

    input{
        width: 100%;
        text-align: center;
        padding-top: 0.5%;
        padding-bottom: 0.5%;
        border-radius: 5px;
        border: none;
        font-size: large;
    }
   
`;