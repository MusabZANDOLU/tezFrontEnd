import React from "react";

import Navbar from "../components/Navbar";
// import Footer from '../components/Footer'

import "../assets/scss/userSettings.scss";

function UserSetting() {
  return (
    <div className="setting-all-div">
      <Navbar />
      <div className="set-flex">
        <div>
          <div className="setting-text">Ayarlar</div>
          <div>Kullanıcı adı</div>
          <div>Eposta</div>
          <div>Şifre</div>
          <div>Adres</div>
        </div>
        <div>
          <div className="settings-input">
            <input className="settings-input-in" type="text" />
          </div>
          <div className="settings-input">
            <input className="settings-input-in" type="text" />
          </div>
          <div className="settings-input">
            <input className="settings-input-in" type="text" />
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}
export default UserSetting;
