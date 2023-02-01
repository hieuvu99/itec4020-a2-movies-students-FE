import styled from "styled-components";
function MenuBar() {return(
    <Navbar>
        <div className="small">
            <h5>Home</h5>
            <h5>Account</h5>
        </div>
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