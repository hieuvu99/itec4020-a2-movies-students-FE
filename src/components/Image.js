import { useEffect, useState } from "react"
import styled from "styled-components";
function Image({src, movieID}){
    
      const [data,setData] =  useState(null)
      useEffect (() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=e804947d3908fcc5b0353a5fcab28bf8&language=en-US`)
                            .then(res => res.json())
                            .then(result => setData(`https://image.tmdb.org/t/p/original${result.poster_path}`))
                            .catch((err) => {console.log(err)})
    },[src, movieID])
    
    return(<>
   
                <Photo>
                   
                    <img src= {src}
                    alt="%PUBLIC_URL%/NoImageAvailableLarge.jpg"
                     onError={(error)=>{
                        error.target.src = data
                            
                     }}/>   
                </Photo>
            
    </>)

}
export default Image
const Photo = styled.div`
position: relative;
padding: 0% 0% 0% 0%;
  img{
    width: 100%;
    border-radius: 10px;
  }
`;
