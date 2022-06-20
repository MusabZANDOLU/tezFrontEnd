import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./LoginRegister/Login";
import Contact from "./AboutUs/Contact";
import MyOffers from "./MyOffers/MyOffers";
import ErrorPage from "./ErrorPage/ErrorPage";
import DashSection from "./Dashboard/DashSection";
import Products from "./Products/Products";
import GetOfferCategory from "./GetOffers/GetOfferCategory";
import Companies from "./Companies/Companies";
import GiveOffer from "./GiveOffer/GiveOffer";
import GetOfferFoldingWindow from "./GetOffers/GetOfferFoldingWindow";
import GetOfferPvc from "./GetOffers/GetOfferPvc";
import GetOfferShowerBox from "./GetOffers/GetOfferShowerBox";
import GetOfferShopping from "./GetOffers/GetOfferShopping";
import GetOfferSwatter from "./GetOffers/GetOfferSwatter";
import GetOfferAluminumHandrail from "./GetOffers/GetOfferAluminumHandrail";
import MyOfferModal from "./MyOffers/MyOfferModal";
import RegisterUser from "./LoginRegister/RegisterUser";
import RegisterCompany from "./LoginRegister/RegisterCompany";
import CompanyInfoPage from "./InfoPages/CompanyInfoPage";
import UserInfoPage from "./InfoPages/UserInfoPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* public route */}
        <Route path="/" element={<DashSection />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/user" element={<RegisterUser />} />
        <Route path="/register/company" element={<RegisterCompany />} />

        {/* private route */}

          <Route
            path="getOffer/category"
            element={<GetOfferCategory />}
          ></Route>
          <Route path="myOffers" element={<MyOffers />}></Route>
          <Route path="/giveOffer" element={<GiveOffer />} />
          <Route
            path="/getOffer/foldingWindow"
            element={<GetOfferFoldingWindow />}
          />
          <Route path="/getOffer/pvc" element={<GetOfferPvc />} />
          <Route path="/getOffer/showerBox" element={<GetOfferShowerBox />} />
          <Route path="/getOffer/shopping" element={<GetOfferShopping />} />
          <Route path="/getOffer/swatter" element={<GetOfferSwatter />} />
          <Route
            path="/getOffer/aluminumHandrail"
            element={<GetOfferAluminumHandrail />}
          />
          <Route path="/myOfferModal" element={<MyOfferModal />} />
          <Route path="/user/informations" element={<UserInfoPage />} />
          <Route
            path="/company/informations"
            element={<CompanyInfoPage />}
          />


        {/* missing route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
export default App;
