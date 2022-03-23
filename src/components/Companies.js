import React from 'react'

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import '../assets/scss/companies.scss';

function Companies() {


  return (
    <div>
      <Navbar />
      
      <div className='companies-all-content'>
        <div className='companies-text'>Firmalarımız</div>
        <hr />

        <div className='companies-all-table'>
          <div className='company-sttng'>
            <img className='company-logo' src='' alt='' />
            <div className='cmpny-text'>
              <div className='border'>
                <div className='company-name'>Firma Adı</div>
                <div className='company-name-contnt'>Asaş Pen</div>
              </div>
              <div className='border'>
                <div className='company-title'>Firma Yetkilisi</div>
                <div className='company-contnt'>Ahmet ASAŞ</div>
              </div>
              <div className='border'>
                <div className='company-title'>Telefon</div>
                <div className='company-contnt'>0500000000</div>
              </div>
              <div className='border'>
                <div className='company-title'>E-posta</div>
                <div className='company-contnt'>asas@deneme.com</div>
              </div>
              <div className='border'>
                <div className='company-title'>Adres</div>
                <div className='company-contnt'>İstanbul / Türkiye</div>
              </div>
              <div className='border'>
                <div className='company-title'>Verilen hizmetler</div>
                <div className='company-contnt'>katlanır cam, otomatik kepeng, dyuşakabin, alüminyum doğrama</div>
              </div>
            </div>
          </div>
        </div>
        <div className='companies-all-table'>
          <div className='company-sttng'>
            <img className='company-logo' src='' alt='' />
            <div className='cmpny-text'>
              <div className='border'>
                <div className='company-name'>Firma Adı</div>
                <div className='company-name-contnt'>Fırat Pen</div>
              </div>
              <div className='border'>
                <div className='company-title'>Firma Yetkilisi</div>
                <div className='company-contnt'>Ali FIRAT</div>
              </div>
              <div className='border'>
                <div className='company-title'>Telefon</div>
                <div className='company-contnt'>0555000000</div>
              </div>
              <div className='border'>
                <div className='company-title'>E-posta</div>
                <div className='company-contnt'>firat@deneme.com</div>
              </div>
              <div className='border'>
                <div className='company-title'>Adres</div>
                <div className='company-contnt'>İstanbul / Türkiye</div>
              </div>
              <div className='border'>
                <div className='company-title'>Verilen hizmetler</div>
                <div className='company-contnt'>katlanır cam, otomatik kepeng, dyuşakabin, alüminyum doğrama</div>
              </div>
            </div>
          </div>
        </div>
        <div className='companies-all-table'>
          <div className='company-sttng'>
            <img className='company-logo' src='' alt='' />
            <div className='cmpny-text'>
              <div className='border'>
                <div className='company-name'>Firma Adı</div>
                <div className='company-name-contnt'>Ege Pen</div>
              </div>
              <div className='border'>
                <div className='company-title'>Firma Yetkilisi</div>
                <div className='company-contnt'>Mehmet EGE</div>
              </div>
              <div className='border'>
                <div className='company-title'>Telefon</div>
                <div className='company-contnt'>0550050000</div>
              </div>
              <div className='border'>
                <div className='company-title'>E-posta</div>
                <div className='company-contnt'>ege@deneme.com</div>
              </div>
              <div className='border'>
                <div className='company-title'>Adres</div>
                <div className='company-contnt'>İstanbul / Türkiye</div>
              </div>
              <div className='border'>
                <div className='company-title'>Verilen hizmetler</div>
                <div className='company-contnt'>katlanır cam, otomatik kepeng, dyuşakabin, alüminyum doğrama</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
export default Companies;

