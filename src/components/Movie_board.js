import { useEffect, useState } from "react"
import styled from "styled-components";
import Image from "./Image"
import ProgressBar from 'react-animated-progress-bar';
function Movie_board(props){
    const [data,setData] =  useState(null)
    useEffect (() => {
        fetch('/movies')
        .then(res => res.json())
        .then(result => setData(result))
        .catch((err) => {console.log(err)})
    },[data])
    
    
    return(<Movie_boardcss>
    {
        !data
        ?<h1>Loading</h1>
        :data.data.map(movie => {
            return (
                <Movie>
                    <Image src= {`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    movieID = {movie.original_id}
                    /> 
                    <div className="inline-block">
                        <h3> {movie.title}</h3>
                       <div className="margin-left">
                            <ProgressBar
                                width="100"
                                height="10px"
                                fontColor="white"
                                trackWidth="25"
                                percentage={movie.vote_average*10}
                                trackPathColor="grey"
                                trackBorderColor="black"
                                hollowBackgroundColor="#333333"
                                defColor={{
                                    fair: 'orangered',
                                    good: 'yellow',
                                    excellent: 'green',
                                    poor: 'red',
                                }}
                                />  
                        </div>
                    </div>
                </Movie>
            )
        })
    }
    </Movie_boardcss>)

}
export default Movie_board
const Movie = styled.div`
    width: 90%;
    padding-left: 30%;
    margin-bottom: 10%;
    margin-left: 0%;
    .margin-left{
        margin-left: 40%;
        position: relative;
    }
    .inline-block {
        display: grid;
        max-height: 100px;
        width: 100%;
        grid-template-rows: 60% 0%;
        max-height: 100px;
    }
    h3{
        position: relative;
        text-align: center;
        max-width: 80%;
        max-height: 48.27px;
        margin-top: 5%;
        margin-bottom: 7%;
        width: 100%;
        font-size: larger;
        text-shadow: 3cm;
        margin-left:10%;
        margin-bottom: -8%;
    }
    p{
        margin: -7% 0% 5% 0%;
    }
  
`;
const Movie_boardcss = styled.div`
        display: grid;
        margin: 3% 3% 3% 3%;
        width: 100%;
        grid-template-columns: 30% 30% 30%;
    `