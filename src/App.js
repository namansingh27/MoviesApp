import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import Favourites from "./components/Favourites";

import './App.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
     <NavBar/>

     <Routes>
       <Route path="/" element={
         <><Banner/><MovieList/></>
       }>

       </Route>

       <Route path="/favourites" element={<Favourites/>}/>
     </Routes>

    </BrowserRouter>
  
   
    
    

  );
}

export default App;