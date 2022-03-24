import React from 'react'
import { Link } from 'react-router-dom'

import $ from 'jquery'; 

import '../assets/scss/login.scss'

function onClickSignUp() {
  $('#loginTab').hide();
  $('#registerTab').show();
}

function onClickLogin() {
  $('#loginTab').show();
  $('#registerTab').hide();
}

function Login() {
  $('#registerTab').hide();
  return (
    <div>
      <div className='log-link'><Link to='/'><i class="fa-solid fa-house"></i> Ana sayfa</Link></div>
      <div className='all-login'></div>
      <div className="wrapperr fadeInDown">
        <div id="loginTab" className="formContent">
          <h2 className="active h2-class"> Giriş Ekranı </h2>
          <h2 className="inactive underlineHover h2-class" onClick={onClickSignUp}>Kayıt Ekranı </h2>
          <div className="fadeIn first">
          </div>
          <form>
            <input type="text" id="login" className="fadeIn second login-input" name="login" placeholder="login" />
            <input type="text" id="password" className="fadeIn third login-input" name="login" placeholder="password" />
            <input type="submit" className="fadeIn fourth login-input" value="Log In" />
          </form>
          <div id="formFooter">
          </div>
        </div>
        <div id="registerTab" className="formContent d-none">
          <h2 className="active h2-class" onClick={onClickLogin}> Giriş Ekranı </h2>
          <h2 className="inactive underlineHover h2-class">Kayıt Ekranı </h2>
          <div className="fadeIn first">
          </div>
          <form>
            <select className='log-combo' placeholder='Üye tipinizi seçiniz'>
              <option value="user">Kullanıcı</option>
              <option value="company">Firma</option>
            </select>
            <input type="text" id="login" className="fadeIn second login-input" name="login" placeholder="Ad" />
            <input type="text" id="login" className="fadeIn second login-input" name="login" placeholder="Soyad" />
            <input type="text" id="login" className="fadeIn second login-input" name="login" placeholder="Eposta" />
            <input type="text" id="password" className="fadeIn third login-input" name="login" placeholder="Şifre" />
            <input type="submit" className="fadeIn fourth login-input" value="Log In" />
          </form>
          <div id="formFooter">
          </div>
        </div>
      </div>

    </div>
  )
}
export default Login;