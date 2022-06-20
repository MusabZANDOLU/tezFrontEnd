import React, { useState } from "react";
import "../../assets/scss/login_Register_Info.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

function RegisterUser() {
  const [name, setName] = useState();
  const [surName, setSurname] = useState();
  const [eMail, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const saveUser = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        surName,
        type: "user",
        eMail,
        password,
      });
      navigate("/login");
      alert(
        "Kayıt işleminiz başarılı. Lütfen kayıt esnasında kullandığınız email adresiniz ve şifrenizle giriş yapınız. Sizi giriş sayfasına yönlendiriyoruz."
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginAll">
      <div className="segment">
        <div className="logTitle">KAYIT SAYFASI</div>
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
              type="email"
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
          <button className="red buttonLogg">Kayıt Ol</button>
          <Link to="/login">
            <i className="fa-solid fa-house-user inputLogg iconReg"></i>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default RegisterUser;
