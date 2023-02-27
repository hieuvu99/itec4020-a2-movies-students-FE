import styled from "styled-components";
import ReactPaginate from 'react-paginate';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function PageNav({currentPage}) {
    const [data,setData] =  useState(null)

    useEffect (() => {
        fetch(`https://back-end-api.herokuapp.com/movies`)
        .then(res => res.json())
        .then(result => setData(result.pagination.pageCount))
        .catch((err) => {console.log(err)})
    },[currentPage])
    
    const navigate = useNavigate();
    const handlePageClick = ({selected}) => {
        navigate(`/page/${selected+1}`)
    };

    return(
        <Style>
         <ReactPaginate
        nextLabel=">"
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={data}
        activePage={currentPage}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item break"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        onPageChange={handlePageClick}
         />
        </Style>

    )

    
}
export default PageNav;
const Style = styled.div`
.page-item{
    display: inline;
    padding: 1% 1% 1% 1%;
    margin: 1% 1% 1% 1%;
    border: 0.01mm solid grey;
    border-radius: 20%;
}
.break{
    padding-left: 1%;
}
.pagination{
    margin-left: 30%;
    padding-bottom: 5%;
}
.active{
    font-weight: bolder;
    color: white;
    background-color: #0d2721;
}
.page-item :hover{
    cursor: pointer;
}
`;