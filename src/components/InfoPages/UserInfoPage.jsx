import React, { useState, useEffect } from "react";
import Navbar from "../Dashboard/Navbar";
import axios from "axios";
import { useNavigate } from "react-router";
import "../../assets/scss/login_Register_Info.scss";

function UserInfoPage() {
  const [name, setName] = useState();
  const [surName, setSurname] = useState();
  const [eMail, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getUsersById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getUsersById() {
    const response = await axios.get(`http://localhost:5000/users`, {
    });
    setName(response.data.name);
    setSurname(response.data.surName);
    setEmail(response.data.eMail);
    setPassword(response.data.password);
  }

  const updateUser = async e => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://localhost:5000/users`,
        {
          name,
          surName,
          eMail,
          password,
        },
      );

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginAll">
      <Navbar />
      <div className="segment">
        <div className="InfoUserCompTitle">Kullanıcı Bilgileriniz</div>
      </div>
      <form className="formInfoUserComp" onSubmit={updateUser}>
        <div className="coverSettingInfo">
          <label className="labelLoggInfo textAndInput">
            <div className="infoCompanyText">Ad</div>
            <input
              className="inputInfoUserComp"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Adınız"
            />
          </label>
          <label className="labelLoggInfo textAndInput">
            <div className="infoCompanyText">Soyad</div>
            <input
              className="inputInfoUserComp"
              value={surName}
              onChange={e => setSurname(e.target.value)}
              placeholder="Soyadınız"
            />
          </label>
          <label className="labelLoggInfo textAndInput">
            <div className="infoCompanyText">E-posta</div>
            <input
              className="inputInfoUserComp"
              value={eMail}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email Adresiniz"
            />
          </label>
          <button className="red buttonLogin">Bilgilerimi Güncelle</button>
        </div>
      </form>
    </div>
  );
}
export default UserInfoPage;
