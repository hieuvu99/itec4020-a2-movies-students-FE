import styled from "styled-components";
import ReactPaginate from 'react-paginate';
function PageNav() {
    return(
        <Style>
         <ReactPaginate
        nextLabel="next >"
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={5041}
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
`;