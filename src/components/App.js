import Movie_board from './Movie_board'
import MenuBar from './MenuBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../components/App';
import '../App.css'
import PageNav from './PageNav';
import Movie from './Movie';


function App() {
  return (
    <>
      <div >
        <BrowserRouter>
      <MenuBar/>
        <Routes >
          <Route path='/movies/:movieID' element={
            <div class="main">
            <Movie/>
          </div>
          }></Route>
          <Route path="/page/:page" element={
          <div class="main"> 
            <Movie_board/>
            <PageNav/>
          </div>
          }>
          </Route>
          
        </Routes>
      </BrowserRouter>
      </div>
  </>
      );
  
}

export default App;
