import './styles/main.scss';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import LandingPage from './components/pages/landing-page/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
            <Route exact path="/" element={<LandingPage/>} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
