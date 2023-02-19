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
        nextLabel="next >"
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        pageCount={5041}
        activePage={currentPage}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
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
}
.pagination{

}
.active{
    font-weight: bolder;
}
`;