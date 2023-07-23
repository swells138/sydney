
import './App.css';
import SiteNav from './SiteNav';
import LogIn from './components/navbar/LogIn';
import TimeEntriesTable from './components/TechnicalAssessment/TimeEntriesTable';
 import TicTacToe from './components/TicTacToe'
import {Routes, Route} from "react-router-dom"
import ZeldaHome from './components/zelda/ZeldaHome'
import SydneyPage from './components/sydney/SydneyPage';
import Cat from './components/cats/Cat';
import Register from './components/navbar/Register';


function App() {
  return (
    <div className="App">
     <SiteNav></SiteNav>
     <Routes>
     <Route path='/cats' element={<Cat></Cat>}></Route>

     <Route path='/sydney' element={<SydneyPage></SydneyPage>}></Route>
      <Route path='/games' element={<TicTacToe></TicTacToe>}></Route>
      <Route path='/test' element={<TimeEntriesTable></TimeEntriesTable>}></Route>
      <Route path='/login' element={<LogIn></LogIn>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/zelda' element={<ZeldaHome></ZeldaHome>}></Route>
     </Routes>
    </div>
  );
}

export default App;
