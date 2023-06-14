
import './App.css';
import SiteNav from './SiteNav';
import LogIn from './components/NavBar/LogIn';
import TimeEntriesTable from './components/TechnicalAssessment/TimeEntriesTable';
 import TicTacToe from './components/TicTacToe'
import {Routes, Route} from "react-router-dom"
import ZeldaHome from './components/Zelda/ZeldaHome'

function App() {
  return (
    <div className="App">
     <SiteNav></SiteNav>
     <Routes>
      <Route path='/games' element={<TicTacToe></TicTacToe>}></Route>
      <Route path='/test' element={<TimeEntriesTable></TimeEntriesTable>}></Route>
      <Route path='/login' element={<LogIn></LogIn>}></Route>
      <Route path='/zelda' element={<ZeldaHome></ZeldaHome>}></Route>
     </Routes>
    </div>
  );
}

export default App;
