import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import 'alertifyjs/build/css/alertify.min.css';

import DashSection from './components/DashSection';
import Contact from './components/Contact';
import GetOfferCategory from './components/GetOfferCategory';
import MyOffers from './components/MyOffers';
import Companies from './components/Companies';
import Products from './components/Products';
import Login from './components/Login';
import UserSetting from './components/UserSetting';
import GiveOffer from './components/GiveOffer';
import GetOfferFoldingWindow from './components/GetOfferFoldingWindow';
import GetOfferPvc from './components/GetOfferPvc';
import GetOfferShowerBox from './components/GetOfferShowerBox';
import GetOfferShopping from './components/GetOfferShopping';
import GetOfferSwatter from './components/GetOfferSwatter';
import GetOfferAluminumHandrail from './components/GetOfferAluminumHandrail';
import MyOfferModal from './components/MyOfferModal';
import RegisterUser from './components/RegisterUser';
import RegisterCompany from './components/RegisterCompany';
import CompanyInfoPage from './components/CompanyInfoPage';
import UserInfoPage from './components/UserInfoPage';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashSection />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/products' element={<Products />} />
        <Route path='/getOffer/category' element={<GetOfferCategory />} />
        <Route path='/giveOffer' element={<GiveOffer />} />
        <Route path='/myOffers' element={<MyOffers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/userSettings' element={<UserSetting />} />
        <Route path='/login' element={<Login />} />
        <Route path='/getOffer/foldingWindow' element={<GetOfferFoldingWindow />} />
        <Route path='/getOffer/pvc' element={<GetOfferPvc />} />
        <Route path='/getOffer/showerBox' element={<GetOfferShowerBox />} />
        <Route path='/getOffer/shopping' element={<GetOfferShopping />} />
        <Route path='/getOffer/swatter' element={<GetOfferSwatter />} />
        <Route path='/getOffer/aluminumHandrail' element={<GetOfferAluminumHandrail />} />
        <Route path='/myOfferModal' element={<MyOfferModal />} />
        <Route path='/register/user' element={<RegisterUser />} />
        <Route path='/user/informations' element={<UserInfoPage />} />
        <Route path='/register/company' element={<RegisterCompany />} />
        <Route path='/company/informations' element={<CompanyInfoPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}
export default App;