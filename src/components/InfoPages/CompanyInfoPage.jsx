import React, { useState } from "react";
import Navbar from "../Dashboard/Navbar";
import "../../assets/scss/login_Register_Info.scss";

function CompanyInfoPage() {
  const [firmName, setFirmName] = useState();
  const [firmOfficial, setFirmOfficial] = useState();
  const [firmPhone, setFirmPhone] = useState();
  const [firmAdress, setFirmAdress] = useState();
  const [firmMail, setFirmMail] = useState();
  const [firmUrl, setFirmUrl] = useState();
  const [firmServices, setFirmServices] = useState();

  return (
    <div className="loginAll">
      <Navbar />
      <div className="segment">
        <div className="InfoUserCompTitle">Firma Bilgileriniz</div>
      </div>
      <form className="formInfoUserComp">
        <div className="coverLogin">
          <label className="labelLoggInfo textAndInput">
            <div className="infoCompanyText">Firma Adı</div>
            <input
              className="inputInfoUserComp"
              value={firmName}
              onChange={e => setFirmName(e.target.value)}
              placeholder="Firma adı"
            />
          </label>
          <label className="labelLoggInfo textAndInput">
            <div className="infoCompanyText">Firma Yetkilisi</div>
            <input
              className="inputInfoUserComp"
              value={firmOfficial}
              onChange={e => setFirmOfficial(e.target.value)}
              placeholder="Firma yetkili adı"
            />
          </label>
          <label className="labelLoggInfo textAndInput">
            <div className="infoCompanyText">Firma Telefon</div>
            <input
              className="inputInfoUserComp"
              value={firmPhone}
              onChange={e => setFirmPhone(e.target.value)}
              placeholder="Firma telefon numarası"
            />
          </label>
          <label className="labelLoggInfo textAndInput">
            <div className="infoCompanyText">Firma Adresi</div>
            <input
              className="inputInfoUserComp"
              value={firmAdress}
              onChange={e => setFirmAdress(e.target.value)}
              placeholder="Firma adres"
            />
          </label>
          <label className="labelLoggInfo textAndInput">
            <div className="infoCompanyText">Firma Site Url</div>
            <input
              className="inputInfoUserComp"
              value={firmUrl}
              onChange={e => setFirmUrl(e.target.value)}
              placeholder="Firma mail adresiniz"
            />
          </label>
          <label className="labelLoggInfo textAndInput">
            <div className="infoCompanyText">Firma Eposta Adresi</div>
            <input
              className="inputInfoUserComp"
              value={firmMail}
              onChange={e => setFirmMail(e.target.value)}
              placeholder="Firma mail adresiniz"
            />
          </label>
          <label className="labelLoggInfo textAndInput">
            <div className="infoCompanyText">Verilen Hizmetler</div>
            <input
              className="inputInfoUserComp"
              value={firmServices}
              onChange={e => setFirmServices(e.target.value)}
              placeholder="Örn. Katlanır Cam, Çelik Kapı, Duşakabin..."
            />
          </label>
        </div>
        <button className="red buttonLogin">Bilgilerimi Güncelle</button>
      </form>
    </div>
  );
}
export default CompanyInfoPage;
