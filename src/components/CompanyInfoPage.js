import React from 'react';
import Navbar from './Navbar';
import '../assets/scss/login_Register_Info.scss';

function CompanyInfoPage() {

    return (
        <div className='loginAll'>
            <Navbar/>
            <div className="segment">
                <div className='InfoUserCompTitle'>Firma Bilgileriniz</div>
            </div>
            <form className='formInfoUserComp'>
                <div className='coverLogin'>
                    <label className='labelLogg textAndInput'>
                        <div className='infoCompanyText'>Firma Adı</div>
                        <input className='inputInfoUserComp' placeholder="Firmanızın adı"/>
                    </label>
                    <label className='labelLogg textAndInput'>
                        <div className='infoCompanyText'>Firma Yetkilisi</div>
                        <input className='inputInfoUserComp' type="text" placeholder="Firma yetkilinizin adı" />
                    </label>
                    <label className='labelLogg textAndInput'>
                        <div className='infoCompanyText'>Firma Telefon</div>
                        <input className='inputInfoUserComp' type="text" placeholder="Firma telefon numaranız" />
                    </label>
                    <label className='labelLogg textAndInput'>
                        <div className='infoCompanyText'>Firma Eposta</div>
                        <input className='inputInfoUserComp' type="email" placeholder="Firma mail adresiniz" />
                    </label>
                    <label className='labelLogg textAndInput'>
                        <div className='infoCompanyText'>Verilen Hizmetler</div>
                        <input className='inputInfoUserComp' type="text" placeholder="Örn. Katlanır Cam, Çelik Kapı, Duşakabin..." />
                    </label>
                    <button className="red buttonLogg">Bilgilerimi Güncelle</button>
                </div>
            </form>

        </div>
    )
}
export default CompanyInfoPage;