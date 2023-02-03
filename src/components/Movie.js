import { useEffect, useState } from "react"
import styled from "styled-components";
import Image from "./Image"
import ProgressBar from 'react-animated-progress-bar';
import { useParams } from "react-router-dom";
import moment from 'moment';
import { TbUserCircle } from 'react-icons/tb';
function Movie(props){
    let {movieID} = useParams()
    const [movie,setData] =  useState(null)
    const [comment, setComment] = useState(null)
    useEffect (() => {
        fetch(`/movies/${movieID}`)
        .then(res => res.json())
        .then(result => setData(result[0]))
        .catch((err) => {console.log(err)})
    },[movieID])
    useEffect (() => {
        fetch(`/movies/${movieID}/comments`)
        .then(res => res.json())
        .then(result => setComment(result))
        .catch((err) => {console.log(err)})
    },[movieID])
    return(
        <> 
        {!(movie)
        ?<h1>Loading...</h1>
        :
        <Moviecss>
            <div className="image inline-block">
                <Image className="image" src= {`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                movieID = {movie.original_id}
                /> 
            </div>
            <div className="movieinfo inline-block">
                <h2> {movie.title}</h2>
                <h4>Genres:</h4>
                {
                    movie.genres.map(Element=>{
                        return <p className="inline-block">{Element}</p>
                })}
                <h4>Production_companies</h4>
                {
                    movie.production_companies.map(Element=>{
                        return<p className="inline-block">{Element}</p>
                    })
                }
                <h4>Overview:</h4>
                <p className="inline-block"> {movie.overview} </p>

                <h4>Release Date</h4>
                <p>{moment(movie.release_date.slice(0,10),"YYYY MM DD" ).format("MMM YYYY"
                    )}</p>
                
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
        </Moviecss>
        }
    <h1>Comment</h1>
    {
        !comment
        ?<h1>Loading</h1>
        : !(comment.data.length>0)
            ? <h3> No Comment Available</h3>
            : comment.data.map(comment =>{
            var curr = new Date(comment.createdAt)
            var cu = new Date(Date())
            var dateDiff = cu.getTime()- curr.getTime()
             
            return (
                <Comment>
                    <div>
                        <TbUserCircle className="inline-block avatar"/>
                        <p className="inline-block fit" >Anonymous</p>
                        <p className="time">{
                        
                        !(cu.getFullYear()- curr.getFullYear()<1)
                        ? `${cu.getFullYear()- curr.getFullYear()} Year ago`
                        : !((cu.getMonth()- curr.getMonth())<1)
                        ?`${cu.getMonth()- curr.getMonth()} Months ago`
                        : !((cu.getDate()- curr.getDate())<1)
                        ?`${cu.getDay()- curr.getDay()} Days ago`
                        :   !((cu.getHours()- curr.getHours())<1)
                                    ?`${cu.getHours()- curr.getHours()} Hours ago`
                                    : !((cu.getMinutes()- curr.getMinutes())<1)
                                        ? `${cu.getMinutes()- curr.getMinutes()} minutes ago`
                                        :!((cu.getSeconds()- curr.getSeconds()<1))
                                                ? `${cu.getSeconds()- curr.getSeconds()} seconds ago`
                                                : `${dateDiff} milli-seconds ago`   
                                            }</p>
                        </div>
{/* {                    <p>Time: {moment(comment.createdAt.slice(0,21),"YYYY MM DD hh mm ss").format("MM/DD/YYYY") }</p>} */}
                  
                  <p className="inline-block content" >{comment.text} </p>
                </Comment>
            )
        })
    }
    <Comment>
        <input/>
    </Comment>
    </>
    )
}
export default Movie;
const Moviecss = styled.div`

:hover{
    height: 110%;
}
.movieinfo{
    width: 40%;
    height: max-content;
}
.inline-block{
    position: relative;
    display: inline-block;
}
.image{
    width: 40%;
    margin: 2% 7% 2% 7%;
}
`;
const Comment = styled.div`
width: 50%;
margin: 0% 1% 1% 21%;
box-shadow:  5px 5px 5px 5px darkgray;
border-radius: 3%;
input{
    width: inherit;
    margin-bottom:10%;
}
.avatar{
    height: 1%;
    margin: 1% 1% -0.3% 1%;
}
.inline-block{
    position: relative;
    display: inline-block;
}
p{
    text-shadow: 0.25px 0.15px 0.25px ;
}
.time{
    padding: 0% 0% 0% 5%;
    font-size: x-small;
    color: grey;
    margin-top: 0%;
}
.content{
    text-align: center;
    padding: 0% 0% 4% 20%;
    margin-top: 0%;
    font-weight:lighter ;
    font-size: smaller;
}
.fit{
    margin-bottom:0%;
}
`;