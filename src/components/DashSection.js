import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';

import 'react-multi-carousel/lib/styles.css';
import '../assets/scss/dashSection.scss';
import '../assets/scss/search.scss';


function slider() {

  return (
    <div className='all-dash'>
      <Navbar />

      <section className="header">
        <div>
          <h3 className='search-text'>Teklif almak istediğiniz ürünü giriniz.</h3>
          <div className="container-search">
            <input className='search-input' type="text" placeholder=" Ara..." />
            <div className="search1"></div>
          </div>
        </div>
      </section>

      <div className='dash-prdct-text'>Hizmet Verdiğimiz Ürünler</div>
      <hr />

      <div className='sliderClass'>
        
        <Carousel/>

        {/* -------------------------------siteyle alakalı bilgiler (icerik)------------------------------- */}

        <div className='icerik-all'>

          <div className='iceriks'>
            <div>
              <div className='icerik-baslik-1'>Kaliteli Hizmet</div>
              <div className='icerik-1'>Tecrübeli firmalarımız sayesinde işinizi temiz ve en kolay şekilde yaptırabileceksiniz. Kalite ve hizmeti sizlere yan yana sunuyoruz.</div>
            </div>
            <div>
              <img className='icerik-resim-1' src={require('../assets/images/dashboard/isci-cizim.png')} alt=''></img>
            </div>
          </div>

          <div className='iceriks'>
            <div>
              <img className='icerik-resim-2' src={require('../assets/images/dashboard/zaman-kazanmak.png')} alt=''></img>
            </div>
            <div>
              <div className='icerik-baslik-2'>Zamandan Kazan</div>
              <div className='icerik-2'>Aradığın hizmet için dükkan dükkan dolaşmak ya da aracı aramakla uğraşmayın. Siz isteğinizi belirtin biz size seçdirelim.</div>
            </div>
          </div>

          <div className='iceriks'>
            <div>
              <div className='icerik-baslik-1'>İşini Garantiye Al</div>
              <div className='icerik-1'>Gönül rahatlığıyla hizmet almanız için işleriniz garantimiz altındadır. Güvenli ve kaliteli çalışma herkesin hakkı...</div>
            </div>
            <div>
              <img className='icerik-resim-1' src={require('../assets/images/dashboard/shaking-hands.png')} alt=''></img>
            </div>
          </div>

          <div className='iceriks'>
            <div>
              <img className='icerik-resim-2' src={require('../assets/images/dashboard/laptop.png')} alt=''></img>
            </div>
            <div>
              <div className='icerik-baslik-2'>Kolayca Kullan</div>
              <div className='icerik-2'>Hizmet almak istediğiniz ürünü seçin ve adımları kolayca izleyin, bekleyen işlerinizi hızlıca halledin.</div>
            </div>
          </div>

        </div>
        {/* -------------------------------teklif adımları kısmı------------------------------- */}

        <section className="steps">
          <h1>NASIL TEKLİF ALIRIM?</h1>
          <div className="row">
            <div className="categori-col">
              <h3>1. Adım</h3>
              <p>Öncelikle sitemize giriş yapmadıysanız lütfen giriş yapın...</p>
              <a href='login' className="log-bttn">Giriş Yap</a>

            </div>
            <div className="categori-col">
              <h3>2. Adım</h3>
              <p>Teklif Al sekmesine gidip istediğiniz ürünü seçiniz.İstenilen ürüne uygun adımları takip edip kolayca teklif verebilirsiniz.</p>
            </div>
            <div className="categori-col">
              <h3>3. Adım</h3>
              <p>Bizde işinin ehli insanları senle buluştururuz ve karşılaştırır ve seçersin.</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
export default slider;