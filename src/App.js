import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar';
import Home from './pages/Home';
import CarsDetails from './components/CarsDetails'


function App() {
  return (
    <div className="App">
      <h1>Super Carlist</h1>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cars/:carsid' element={<CarsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
