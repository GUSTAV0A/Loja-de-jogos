import React from 'react';
import Home from './Home';
import Login from './Login';
import Cadastro from './Cadastro';
import GerirJogos from './GerirJogos';
import { BrowserRouter as Router,
        Routes,
        Route,
        Navigate
        } from "react-router-dom";





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />}/>{/* qualquer url inexistente será tranferida para home*/}
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path='/GerirJogos' element={<GerirJogos/>} />

        {/* <Route path="/another" element={<AnotherPage />} /> */}
      </Routes>
    </Router>
  );
   
}

export default App;
