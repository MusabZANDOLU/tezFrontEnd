import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "../../assets/scss/login_Register_Info.scss";

function Login() {
  const [eMail, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const loginPost = async e => {
    e.preventDefault();

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  useEffect(() => {
    console.log(eMail);
    console.log(password);
  }, [eMail, password]);

  return (
    <div className="loginAll">
      <div className="segment">
        <div className="logTitle">Giriş Yap</div>
      </div>
      <form className="formLogin" onSubmit={loginPost}>
        <div className="coverLogin">
          <label className="labelLogg">
            <input
              className="inputLogg"
              type="text"
              onChange={e => setEmail(e.target.value)}
              placeholder="Email Address"
            />
          </label>
          <label className="labelLogg">
            <input
              className="inputLogg"
              type="password"
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
            />
          </label>
          <button className="red buttonLogg">
            <i className="icon ion-md-lock"></i> Giriş
          </button>
        </div>
      </form>
      <div className="regsDiv">
        <Link to="/register/user">
          <button className="buttonLogg regBtn">Yeni Kullanıcı Kayıt</button>
        </Link>
        <Link to="/register/company">
          <button className="buttonLogg regBtn">Yeni Firma Kayıt</button>
        </Link>
      </div>
      <div className="bottonTextLog">
        <a className="bottonTextLog" href="/">
          Kayıt olmadan devam et
        </a>
      </div>
    </div>
  );
}
export default Login;
