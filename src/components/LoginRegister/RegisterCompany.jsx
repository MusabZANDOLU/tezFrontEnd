import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/scss/login_Register_Info.scss";
import axios from "axios";
import { useNavigate } from "react-router";
import alertify from "alertifyjs";

function info1() {
  alertify.alert(
    "Firma Kayıt Hakkında",
    "Not: Kayıt sonrası sizleri firma bilgilerinizi gireceğiniz bir sayfaya yönlendireceğiz. Bilgilerinizi eksiksiz doldurmanız önemlidir!"
  );
}

function RegisterCompany() {
  const [name, setName] = useState("");
  const [surName, setSurname] = useState("");
  const [eMail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const saveUser = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        surName,
        type: "company",
        eMail,
        password,
      });
      navigate("/company/informations");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginAll">
      <div className="segment">
        <div className="logTitle">Firma KAYIT SAYFASI</div>
      </div>
      <form className="formLogin" onSubmit={saveUser}>
        <div className="coverLogin">
          <label className="labelLogg">
            <input
              required
              className="inputLogg"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Adınız"
            />
          </label>
          <label className="labelLogg">
            <input
              required
              className="inputLogg"
              value={surName}
              onChange={e => setSurname(e.target.value)}
              placeholder="Soyadınız"
            />
          </label>
          <label className="labelLogg">
            <input
              required
              className="inputLogg"
              value={eMail}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email Adresiniz"
            />
          </label>
          <label className="labelLogg">
            <input
              required
              className="inputLogg"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder="Şifreniz"
            />
          </label>
          <button onClick={info1} className="red buttonLogg">
            Kayıt Ol
          </button>
          <Link to="/login">
            <i className="fa-solid fa-house-user inputLogg iconReg"></i>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default RegisterCompany;
