import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './pages/Products';
import About from './pages/About';
import ViewProduct from './pages/EditProduct';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <React.StrictMode>
          <Router>
            <Header/>
            <Container>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Home" element={<Home/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/EditProduct/:id" element={<ViewProduct/>} />
                <Route path="/AddNewProduct/:id" element={<ViewProduct/>} />
              </Routes>
            </Container>
          </Router>
        </React.StrictMode>
      </header>
    </div>
  );
}

export default App;
