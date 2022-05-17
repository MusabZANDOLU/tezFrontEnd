import React from 'react'
import '../assets/scss/login_Register_Info.scss'
import { Link } from 'react-router-dom';

function RegisterUser() {

    return (
        <div className='loginAll'>
            <div className="segment">
                <div className='logTitle'>KAYIT SAYFASI</div>
            </div>
            <form className='formLogin'>
                <div className='coverLogin'>
                    <label className='labelLogg'>
                        <input className='inputLogg' placeholder="Adınız" />
                    </label>
                    <label className='labelLogg'>
                        <input className='inputLogg' placeholder="Soyadınız" />
                    </label>
                    <label className='labelLogg'>
                        <input className='inputLogg' type="email" placeholder="Email Adresiniz" />
                    </label>
                    <label className='labelLogg'>
                        <input className='inputLogg' type="password" placeholder="Şifreniz" />
                    </label>
                    <button className="red buttonLogg">Kayıt Ol</button>
                    <Link to="/login"><i className="fa-solid fa-house-user inputLogg iconReg"></i></Link>
                </div>
            </form>
        </div>
    )
}
export default RegisterUser;