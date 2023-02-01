import styled from "styled-components";
import ReactPaginate from 'react-paginate';
function PageNav() {
    return(
        <>
         <ReactPaginate itemsPerPage={9} 
         pageCount={5041}
         />
        </>

    )

    
}
export default PageNav;