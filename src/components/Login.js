import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/scss/login.scss'

function Login() {
  return (
    <div>
      <Link to="/">Anasayfa</Link>
      <div className='login-cover'>
        <div className='login-title'>Login ekranı</div>
        <div className='login-content'>
          <div className='inputs'><input type="text" /></div>
          <div className='inputs'><input type="text" /></div>
        </div>
        <div className='login-footer'>
          <button>Giriş Yap</button>
        </div>
      </div>
      
    </div>
  )
}
export default Login;