import PageNav from './PageNav';
import { useEffect, useState } from "react"
import React from 'react';   
import styled from "styled-components";
import Image from "./Image"
import ProgressBar from 'react-animated-progress-bar';
import { Link, useParams } from "react-router-dom";
function SearchPage(){
    var {text} = useParams()
    const [pageNo,setPage] =  useState(null)
    
    const [data,setData] =  useState(null)

    useEffect (() => {
        fetch(`https://back-end-api.herokuapp.com/search?text=${text}&pageNumber=1`)
        .then(res => res.json())
        .then(result => setData(result.data))
        .catch((err) => {console.log(err)})
    },[data])
    
  
    
    return(<Movie_boardcss>
    {
        !data
        ?<h1>Loading</h1>
        :data.map(({ title, original_id, poster_path, release_date}) => {
            return (
                <Moviecss>
                    <Image movieID =  {original_id} src = {poster_path} />
                 <div>
                  <h3>
                    {title}
                    </h3>
                    <p>{release_date.slice(0,4)}</p>
                </div>  
                </Moviecss>
            )
        })
    }
    </Movie_boardcss>)

}
export default React.memo(SearchPage)
const Moviecss = styled.div`
    display: grid;
    margin: 3% 3% 3% 3%;
    width: 100%;
    grid-template-columns: 20% 80%;
    
   
   
    .hover:hover{
        color: darkblue;
    }

    h3{    
        position: relative;
        margin-top: 5%;
        width: 100%;
        font-size: larger;
        text-shadow: 3cm;
    }
    
    img{
        width: 80%;
    }
    
  
`;
const Movie_boardcss = styled.div`
        display: grid;
        margin: 3% 3% 3% 3%;
        width: 100%;
        grid-template-columns: 50% 50%;
    `
