import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";

import Perfil from './components/Perfil'
import Mimascota from './components/Mimascota'
import Nosotros from './components/Nosotros'
import InfoList from './components/InfoList'
import Login from "./components/Login";
import CreateUser from "./components/CreateUser";


export default class General extends Component {
    render() {
        return (
            <Router>
              <Navigation/>
                
              
              <div id="div-mostrar"  >
              <title>Spc</title>
                <div  >
                  
                  <Routes>
                  <Route path="/" exact element={<InfoList />} />
                  <Route path="/Mimascota" element={<Mimascota />} />
                  <Route path="/Perfil" element={<Perfil />} />
                  <Route path="/Nosotros" element={<Nosotros/>} />
                  <Route path="/Login" element={<Login/>} />
                  <Route path="/Register" element={<CreateUser/>} />
                  </Routes>
                </div>
              </div>
              
            </Router>
          );
    }
}
