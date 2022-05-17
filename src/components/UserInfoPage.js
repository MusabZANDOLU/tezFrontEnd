import React from 'react';
import Navbar from './Navbar'
import '../assets/scss/login_Register_Info.scss';

function UserInfoPage() {

    return (
        <div className='loginAll'>
            <Navbar />
            <div className="segment">
                <div className='InfoUserCompTitle'>Kullanıcı Bilgileriniz</div>
            </div>
            <form className='formInfoUserComp'>
                <div className='coverLogin'>
                    <label className='labelLogg textAndInput'>
                        <div className='infoCompanyText'>Ad</div>
                        <input className='inputInfoUserComp'  placeholder="Adınız" />
                    </label>
                    <label className='labelLogg textAndInput'>
                        <div className='infoCompanyText'>Soyad</div>
                        <input className='inputInfoUserComp'  placeholder="Soyadınız" />
                    </label>
                    <label className='labelLogg textAndInput'>
                        <div className='infoCompanyText'>Adres</div>
                        <input className='inputInfoUserComp'  placeholder="Email Adresiniz" />
                    </label>
                    <label className='labelLogg textAndInput'>
                        <div className='infoCompanyText'>Eposta</div>
                        <input className='inputInfoUserComp' type="mail" placeholder="Giriş yaparken bu adresi kullanacaksınız!" />
                    </label>
                    <button className="red buttonLogg">Bilgilerimi Güncelle</button>
                </div>
            </form>

        </div>
    )
}
export default UserInfoPage;