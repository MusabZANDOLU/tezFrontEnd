import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom'

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import '../assets/scss/dashSection.scss';
import '../assets/scss/search.scss';


function slider() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 3,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 2,
      slidesToSlide: 1
    }
  };

  return (

    <div>
      <Navbar />

      <section className="header">
        <div>
          <h3 className='search-text'>Teklif almak istediğiniz ürünü giriniz.</h3>
          <div className="container">
            <input type="text" placeholder="Ara..." />
            <div className="search"></div>
          </div>
        </div>
      </section>

      <div className='dash-prdct-text'>Hizmet Verdiğimiz Ürünler</div>
      <hr />

      <div className='sliderClass'>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all 4"
          // transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-5-px">

          <div className='slider-edit'>
            <div className="product-col">
              <img src={require('../assets/images/slider/pvc.jpg')} alt='' />
              <div className="layers">
                <h3>PVC Cam & Kapı Modelleri</h3>
                {/* <a className='urun-detay-buton' href="/">Ürün Detayı</a> */}
              </div>
            </div>
          </div>
          <div className='slider-edit'>
            <div className="product-col">
              <img src={require('../assets/images/slider/cambalkonanasayfa.jpg')} alt='' />
              <div className="layers">
                <h3>Katlanır & Sürme Cam Modelleri</h3>
                {/* <a className='urun-detay-buton' href="/">Ürün Detayı</a> */}
              </div>
            </div>
          </div>
          <div className='slider-edit'>
            <div className="product-col">
              <img src={require('../assets/images/slider/kepeng.jpg')} alt='' />
              <div className="layers">
                <h3>Otomatik Kepeng Modelleri</h3>
                {/* <a className='urun-detay-buton' href="/">Ürün Detayı</a> */}
              </div>
            </div>
          </div>
          <div className='slider-edit'>
            <div className="product-col">
              <img src={require('../assets/images/slider/dusakabin.jpg')} alt='' />
              <div className="layers">
                <h3>Duşakabin Modelleri</h3>
                {/* <a className='urun-detay-buton' href="/">Ürün Detayı</a> */}
              </div>
            </div>
          </div>
          <div className='slider-edit'>
            <div className="product-col">
              <img src={require('../assets/images/slider/celikkapi.jpg')} alt='' />
              <div className="layers">
                <h3>Çelik Kapı Modelleri</h3>
                {/* <a className='urun-detay-buton' href="/">Ürün Detayı</a> */}
              </div>
            </div>
          </div>
          <div className='slider-edit'>
            <div className="product-col">
              <img src={require('../assets/images/slider/otomatik-kapi.jpg')} alt='' />
              <div className="layers">
                <h3>Otomatik Kapı Modelleri</h3>
                {/* <a className='urun-detay-buton' href="/">Ürün Detayı</a> */}
              </div>
            </div>
          </div>
          <div className='slider-edit'>
            <div className="product-col">
              <img src={require('../assets/images/slider/otomatik-panjur.jpg')} alt='' />
              <div className="layers">
                <h3>Otomatik Panjur Modelleri</h3>
                {/* <a className='urun-detay-buton' href="/">Ürün Detayı</a> */}
              </div>
            </div>
          </div>
        </Carousel>
        <div className='more-prodct'> Ayrıntılar ve daha fazlası için <Link className='dash-prdct' to='products'>ürünler</Link> sekmemize göz atabilirsiniz.</div>

        {/* -------------------------------siteyle alakalı bilgiler (icerik)------------------------------- */}

        <div className='icerik-all'>

          <div className='iceriks'>
            <div>
              <div className='icerik-baslik-1'>Kaliteli Hizmet</div>
              <div className='icerik-1'>Tecrübeli firmalarımız sayesinde işinizi en kolay ve temiz şekilde yaptırabileceksiniz. Kalite ve hizmeti sizlere yan yana sunuyoruz.</div>
            </div>
            <div>
              <img className='icerik-resim-1' src={require('../assets/images/dashboard/isci-cizim.jpg')} alt=''></img>
            </div>
          </div>

          <div className='iceriks'>
            <div>
              <img className='icerik-resim-2' src={require('../assets/images/dashboard/zaman-kazanmak.jpg')} alt=''></img>
            </div>
            <div>
              <div className='icerik-baslik-2'>Zamandan Kazan</div>
              <div className='icerik-2'>Aradığın hizmet için dükkan dükkan dolaşmak ya da aracı aramakla uğraşma. Siz isteğinizi belirtin biz size seçdirelim.</div>
            </div>
          </div>

          <div className='iceriks'>
            <div>
              <div className='icerik-baslik-1'>İşini Garantiye Al</div>
              <div className='icerik-1'>Gönül rahatlığıyla hizmet almanız için işleriniz garantimiz altındadır. Güvenli ve kaliteli çalışma herkesin hakkı...</div>
            </div>
            <div>
              <img className='icerik-resim-1' src={require('../assets/images/dashboard/shaking-hands.jpg')} alt=''></img>
            </div>
          </div>

          <div className='iceriks'>
            <div>
              <img className='icerik-resim-2' src={require('../assets/images/dashboard/deneme1.jpg')} alt=''></img>
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
              <a href='login' class="log-bttn">Giriş Yap</a>

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