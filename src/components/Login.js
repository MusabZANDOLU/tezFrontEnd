import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/scss/login.scss'

function onClickSignUp() {
  var logintab = document.querySelector('#loginTab')
  logintab.style.display = 'none'
  var registerTab = document.querySelector('#registerTab')
  registerTab.style.display = 'block'
  var h2_2 = document.querySelector('.h2-class:nth-child(2)')
  var h2 = document.querySelector('.h2-class:nth-child(1)')
  h2_2.classList.add('active')
  h2.classList.remove('active')
  h2.classList.add('inactive')
  h2_2.classList.remove('inactive')
}

function onClickLogin() {
  var logintab = document.querySelector('#loginTab')
  logintab.style.display = 'block'
  var registerTab = document.querySelector('#registerTab')
  registerTab.style.display = 'none'
  var h2_2 = document.querySelector('.h2-class:nth-child(2)')
  var h2 = document.querySelector('.h2-class:nth-child(1)')
  console.log(h2)
  h2_2.classList.add('inactive')
  h2.classList.remove('inactive')
  h2.classList.add('active')
  h2_2.classList.remove('active')
}

function Login() {
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
            <input type="text" id="login" className="fadeIn second login-input" name="login" placeholder="E-posta" />
            <input type="text" id="password" className="fadeIn third login-input" name="login" placeholder="Şifre" />
            <input type="submit" className="fadeIn fourth login-input" value="Giriş" />
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
            {/* <select className='log-combo' placeholder='Üye tipinizi seçiniz'>
              <option value="user">Kullanıcı</option>
              <option value="company">Firma</option>
            </select> */}
            
            <input type="text" id="login" className="fadeIn second login-input" name="login" placeholder="Ad" />
            <input type="text" id="login" className="fadeIn second login-input" name="login" placeholder="Soyad" />
            <input type="text" id="login" className="fadeIn second login-input" name="login" placeholder="E-posta" />
            <input type="text" id="password" className="fadeIn third login-input" name="login" placeholder="Şifre" />
            <input type="submit" className="fadeIn fourth login-input" value="Kaydet" />
          </form>
          <div id="formFooter">
          </div>
        </div>
      </div>

    </div>
  )
}
export default Login;