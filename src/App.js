import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
//import axios from 'axios';

import Section from './components/DashSection';
import Contact from './components/Contact';
import GetOfferCategory from './components/GetOfferCategory';
import MyOffers from './components/MyOffers';
import Companies from './components/Companies';
import Products from './components/Products';
import Login from './components/Login';
import UserSetting from './components/UserSetting';
import GiveOffer from './components/GiveOffer';
import ErrorPage from './components/ErrorPage';
import GetOfferFoldingWindow from './components/GetOfferFoldingWindow';
import GetOfferPvc from './components/GetOfferPvc';
import GetOfferShowerBox from './components/GetOfferShowerBox';
import GetOfferShopping from './components/GetOfferShopping';
import GetOfferSwatter from './components/GetOfferSwatter';
import GetOfferAluminumHandrail from './components/GetOfferAluminumHandrail';
import MyOfferModal from './components/MyOfferModal';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Section />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/products' element={<Products />} />
        <Route path='/getOfferCategory' element={<GetOfferCategory />} />
        <Route path='/giveOffer' element={<GiveOffer />} />
        <Route path='/myOffers' element={<MyOffers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/userSettings' element={<UserSetting />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/getOfferFoldingWindow' element={<GetOfferFoldingWindow />} />
        <Route path='/getOfferPvc' element={<GetOfferPvc />} />
        <Route path='/getOfferShowerBox' element={<GetOfferShowerBox />} />
        <Route path='/getOfferShopping' element={<GetOfferShopping />} />
        <Route path='/getOfferSwatter' element={<GetOfferSwatter />} />
        <Route path='/getOfferAluminumHandrail' element={<GetOfferAluminumHandrail />} />
        <Route path='/myOfferModal' element={<MyOfferModal />} />
      </Routes>
    </Router>
  )
}
