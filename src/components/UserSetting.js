import React from "react";

import Navbar from "../components/Navbar";
// import Footer from '../components/Footer';

import "../assets/scss/userSettings.scss";

function UserSetting() {
  return (
    <div className="setting-all-div">
      <Navbar />
      <div className="setting-all-comp">
          <div className="settings-input">
            <div className="set-title">Ad</div><input className="settings-input-in" type="text" />
          </div>
          <div className="settings-input">
            <div className="set-title">Soyad</div><input className="settings-input-in" type="text" />
          </div>
          <div className="settings-input">
            <div className="set-title">Adres</div><input className="settings-input-in" type="text" />
          </div>
          <div className="settings-input">
            <div className="set-title">eposta</div><input className="settings-input-in" type="text" />
          </div>
          <div className="settings-input">
            <div className="set-title">şifre</div><input className="settings-input-in" type="text" />
          </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}
export default UserSetting;
