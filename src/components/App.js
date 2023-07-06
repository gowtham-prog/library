import './App.css';
import Body from './body';
import Header from "./Header";



import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className='bg-slate-600 w-screen h-max'>
        <div>
          <Header /><br></br>
          <div className=" mt-16"> </div>
          <Body />
        </div>
        <Routes >
        <Route exact path='/addbook' element={< Body mode = "Add Book" />}></Route>
        <Route exact path='' element={< Body mode = "All Books" />}></Route>
        <Route exact path='/wishlist' element={< Body mode = "Wishlist" />}></Route>
        <Route exact path='/favourites' element={< Body mode = "Favourites" />}></Route>
      </Routes>
      </div>
      
    </Router>
  );
}
export default App;
