import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Image from "./Image";
function Slider({genres}){
    
    const [data,setData] =  useState(null)
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollableContainerRef = useRef(null);
    const navigate = useNavigate();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "genres": [
        genres
      ]
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    
    const scrollAmount = 100;
   
    useEffect (() => {
      fetch("https://back-end-api.herokuapp.com/search/movies/by-genres", requestOptions)
      .then(response => response.json())
      .then(result => setData(result.data))
      .catch(error => console.log('error', error));
  },[data])
    
    
    return(<Slidercss ref={scrollableContainerRef}>
    <div className="video-grid">
    <button id="scroll-btn1" onClick={()=>{
      scrollableContainerRef.current.scrollLeft -= scrollAmount;
      setScrollPosition(scrollableContainerRef.current.scrollLeft);
    }}>{"<"}</button>
    {
      !data
      ? <h1> Loading ...</h1>
      : data?.map(({_id,original_id, poster_path}) => {
        return(
          <div class="video-card">
          <Link to={`/movies/${_id}`}>
                    <Image src={`https://image.tmdb.org/t/p/original/${poster_path}`} movieID= {original_id}/>
          </Link>
                </div>)
      })
    }        
    <button id="scroll-btn2" onClick ={()=>{
       scrollableContainerRef.current.scrollLeft += scrollAmount;
       setScrollPosition(scrollableContainerRef.current.scrollLeft);
    }}>{">"}</button> 
    </div>
    </Slidercss>)

}
export default Slider
const Slidercss = styled.div`
overflow-x: scroll;
::-webkit-scrollbar {
  display: none;
}
.video-grid{
  width: 300%;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
}
.video-card {
  width: 100%;
  margin-right: 0.1%;
  margin-left: 0.1%;
  z-index: 0;
}
.video-card :hover{
  opacity: 95%;
}
img{
    height: 20%;
    width: 100%;
    border-radius: 10px;
  }
  button{
    position: sticky;
    margin-top: 3.5%;
    height: 40px;
    width: 10%;
    z-index: 2;
  }
  #scroll-btn1 {
  left:0;
  }
  #scroll-btn2 {
  right: 0;
  }
  `;
