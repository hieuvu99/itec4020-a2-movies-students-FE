import styled from "styled-components";
import ReactPaginate from 'react-paginate';
import { useNavigate } from "react-router-dom";
function PageNav({currentPage}) {
    
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
        pageCount={5041}
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
    padding: 2% 3% 2% 3%;
    margin: 1% 1% 1% 1%;
    border: 0.01mm solid grey;
    border-radius: 10mm;
}
.break{
    padding-left: 1%;
}
.pagination{
    margin-left: 20%;
    padding-bottom: 5%;
}
.active{
    font-weight: bolder;
    color: white;
    background-color: #00BFFF;
}
.page-item :hover{
    cursor: pointer;
}
`;