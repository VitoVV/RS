import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home';  
import { Products } from './components/pages/Products';
import { Services } from './components/pages/Services';
import { SignUp}  from './components/pages/SignUp';
import { Footer } from './components/pages/Footer';
import Alert from './components/pages/Alert';
import { AlertProvider } from './components/pages/alertContext';
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
    <ChakraProvider>
    <AlertProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/products'  Component={Products}/>
          <Route path='/services'  Component={Services}/>
          <Route path='/sign-up'  Component={SignUp}/>
        </Routes>
        <Footer /> 
      </Router>
      <Alert />
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
