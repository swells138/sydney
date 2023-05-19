//import logo from './logo.svg';
import './App.css';
import SiteNav from './SiteNav';
import TimeEntriesTable from './components/TechnicalAssessment/TimeEntriesTable';
// import TicTacToe from './components/TicTacToe'
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sydneys Website
        </p>
      </header> */}
     <SiteNav></SiteNav>
     <Routes>
      {/* <Route path='/games' element={<TicTacToe></TicTacToe>}></Route> */}
      <Route path='/test' element={<TimeEntriesTable></TimeEntriesTable>}></Route>
     </Routes>
    </div>
  );
}

export default App;
