import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/scss/login.scss';

function onClickSignUp() {
  var logintab = document.querySelector('#loginTab');
  logintab.style.display = 'none';
  var registerTab = document.querySelector('#registerTab');
  registerTab.style.display = 'block';
}

function onClickLogin() {
  var logintab = document.querySelector('#loginTab');
  logintab.style.display = 'block';
  var registerTab = document.querySelector('#registerTab');
  registerTab.style.display = 'none';
}

function Login() {
  return (
    <div>
      <div className='log-link'><Link to='/'><i className="fa-solid fa-house"></i> Ana sayfa</Link></div>
      <div className='all-login'></div>
      <div className="wrapperr fadeInDown">
        <div id="loginTab" className="formContent">
          <h2 className="active h2-class"> Giriş Ekranı </h2>
          <h2 className="inactive underlineHover h2-class" onClick={onClickSignUp}> Kayıt Ekranı </h2>
          <div className="fadeIn first">
          </div>
          <form>
            <input type="text" id="login" className="fadeIn second login-input yapi" name="login" placeholder="E-posta" />
            <input type="text" id="password" className="fadeIn third login-input" name="login" placeholder="Şifre" />
            <input type="submit" className="fadeIn fourth login-input" value="Giriş" />
          </form>
        </div>
        <div id="registerTab" className="formContent d-none">
          <h2 className="active h2-class" onClick={onClickLogin}> Giriş Ekranı </h2>
          <h2 className="inactive underlineHover h2-class">Kayıt Ekranı </h2>
          <div className="fadeIn first">
          </div>
          <form>
            <select className='log-combox' placeholder='Üye tipinizi seçiniz'>
              <option className='log-combo-box' value="user">Kullanıcı</option>
              <option className='log-combo-box' value="company">Firma</option>
            </select>
            <input type="text" id="login" className="fadeIn second login-input" name="login" placeholder="Ad" />
            <input type="text" id="login" className="fadeIn second login-input" name="login" placeholder="Soyad" />
            <input type="text" id="login" className="fadeIn second login-input" name="login" placeholder="E-posta" />
            <input type="text" id="password" className="fadeIn third login-input" name="login" placeholder="Şifre" />
            <input type="submit" className="fadeIn fourth login-input" value="Kaydet" />
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login;