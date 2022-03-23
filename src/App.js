import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
//import axios from 'axios';

import Section from './components/DashSection';
import Contact from './components/Contact';
import GetOffer from './components/GetOffer';
import Offers from './components/Offers';
import Companies from './components/Companies';
import Products from './components/Products';
import Login from './components/Login';
import GetOfferSteps from './components/GetOfferSteps';

export default function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Section />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/products' element={<Products />} />
        <Route path='/getOffer' element={<GetOffer />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route exact path='/getOffer/:getOfferSteps' component={GetOfferSteps}/>
      </Routes>
    </Router>
  )
}
