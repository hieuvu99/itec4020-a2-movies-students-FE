import { useEffect, useState } from "react"
import styled from "styled-components";
import Slider from "./Slider";
function HomePage(){
    
    const [data,setData] =  useState(null)
   
    useEffect (() => {
        fetch(`/movies/genres/all`)
        .then(res => res.json())
        .then(result => setData(result.data))
        .catch((err) => {console.log(err)})
    },[data])
    
    return(
    <Section>
        {!data
        ? <h1>Loading...</h1>
        :data?.map(genres=>{
            return(
            <div>
                <div className="slider">
                <h2>Top {genres} Movie</h2>
                            <Slider genres={genres}/>
                </div>    
            </div>    
            )
        })
        }
    
    </Section>)

}
export default HomePage
const Section = styled.div`
position: relative;
padding: 0% 0% 0% 0%;

  h2{
    color: white;
    opacity: 85%;
  }
`;
