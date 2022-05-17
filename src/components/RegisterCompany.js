import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/login_Register_Info.scss';
import alertify from 'alertifyjs';

function info1() {
    alertify.alert('Firma Kayıt Hakkında', 'Not: Kayıt sonrası sizleri firma bilgilerinizi gireceğiniz bir sayfaya yönlendireceğiz. Bilgilerinizi eksiksiz doldurmanız önemlidir!');
}

function RegisterCompany() {

    return (
        <div className='loginAll'>
            <div className="segment">
                <div className='logTitle'>Firma KAYIT SAYFASI</div>
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
                        <input className='inputLogg' placeholder="Email Adresiniz" />
                    </label>
                    <label className='labelLogg'>
                        <input className='inputLogg' type="password" placeholder="Şifreniz" />
                    </label>
                    <button onClick={info1} className="red buttonLogg">Kayıt Ol</button>
                    <Link to="/login"><i className="fa-solid fa-house-user inputLogg iconReg"></i></Link>
                </div>
            </form>

        </div>
    )
}
export default RegisterCompany;