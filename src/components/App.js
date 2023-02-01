import Movie_board from './Movie_board'
import MenuBar from './MenuBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../components/App';
import '../App.css'
import PageNav from './PageNav';


function App() {
  return (
    <>
      <MenuBar/>
      <div class="main">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={
          <>
            
            <Movie_board/>
            <PageNav/>
          </>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
  </>
      );
  
}

export default App;
