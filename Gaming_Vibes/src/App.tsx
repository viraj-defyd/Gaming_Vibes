import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { ReactSession } from "react-client-session";
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/Home/HomePage';
import GenrePage from './Pages/Genre/GenrePage';
import Description from './Components/Description/Description';
import { useState } from 'react';
import GameCards from './Components/Cards/CardsSources';
function App() {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const selectedGameCard = GameCards.find(gc=> gc.id === selectedCardId);
  const handleCardClick = (id:number)=>{
    setSelectedCardId(id);
  };
  return (
    <>
    <Router>
      <div className="mainContainer">
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage onCardClick={handleCardClick}/>}/>
          <Route path='/genre' element={<GenrePage/>}/>
        </Routes>
        <Description selectedCard={selectedGameCard}/>
      </div>
    </Router>
    </>
  );
}

export default App
