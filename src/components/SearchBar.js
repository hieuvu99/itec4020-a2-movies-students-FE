import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
function SearchBar() {
    const [input,setInput] = useState (null);
    const [search,setSearch] = useState (null);
    const navigate = useNavigate()
    //fetching movies' data to return appropriate results as the users type in the search bar
    useEffect (() => {
    fetch(`/search?text=${input}&pageNumber=1`)
        .then(res => res.json())    
        .then((data) => {setSearch(data.data);
        console.log(search)})    
        .catch((error) => {console.log(error)})    
    },[input]);
    return(
    <SearchStyle>
     <input className="padding-l" type="text" placeholder="Search.." onChange={(event)=>{setInput(event.target.value)}}/>
     <div class="autocom-box">
            {!(search&&input)
                ? <></>
                :search?.map(({id,
                    title})=>{
                    return(
                        <p className="padding-l"
                        onClick={()=> navigate(`/movies/${id}`)}>
                        {title}
                    </p>
                    )
                })
            }
         {!(search&&input)? <></>:   <p className="padding-l"
         onClick={()=> {
            navigate(`/search/${input}`)
            setInput(null)           } 
         }>More result</p> }
        </div>
        </SearchStyle>)
}

export default SearchBar;
const SearchStyle = styled.div`

input{
    width: 100%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
    border-radius: 5px;
    border: none;
    font-size: large;
}
.autocom-box {
position: absolute;
left: 109.7%;
top:115%;
background-color: whitesmoke;
width: 100.6%;
z-index: 1;
border-bottom-left-radius: 3%;
border-bottom-right-radius: 3%;
border-style: none ridge ridge ridge;
margin-top: -1.1%;
}
p{
    width: inherit;
    color: grey;
    border-style: ridge  none none  none;
    margin: 0% 0% 0% 0%;
    padding-top: 1.5%;
    padding-bottom: 1.5%;
}
p:hover{
    background-color:  rgb(218, 215, 228);
    color: darkblue;
    font-weight: bold;
}
.padding-l{
    padding-left: 1%;
}
`
;