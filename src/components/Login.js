import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/login_Register_Info.scss';

export default function Deneme() {
    return (
        <div className='loginAll'>
            <div className="segment">
                <div className='logTitle'>Giriş Yap</div>
            </div>
            <form className='formLogin'>
                <div className='coverLogin'>
                    <label className='labelLogg'>
                        <input className='inputLogg' type="email" placeholder="Email Address" />
                    </label>
                    <label className='labelLogg'>
                        <input className='inputLogg' type="password" placeholder="Password" />
                    </label>
                    <button className="red buttonLogg" type="button"><i className="icon ion-md-lock"></i> Log in</button>
                </div>
            </form>
            <div className='regsDiv'>
                <Link to='/register/user'><button className='buttonLogg regBtn' >Yeni Kullanıcı Kayıt</button></Link>
                <Link to='/register/company'><button className='buttonLogg regBtn' >Yeni Firma Kayıt</button></Link>
            </div>
            <div className='bottonTextLog'>
            <Link className='bottonTextLog' to="/">Kayıt olmadan devam et</Link>
            </div>
        </div>
    )
}
