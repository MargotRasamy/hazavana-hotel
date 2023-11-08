import './styles/main.scss';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Header from './components/Header';
import LandingPage from './components/pages/landing-page/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="app-content">
          <Routes>
              <Route exact path="/" element={<LandingPage/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
