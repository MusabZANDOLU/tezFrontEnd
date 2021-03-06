import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import "react-multi-carousel/lib/styles.css";
import "../../assets/scss/dashSection.scss";
import "../../assets/scss/search.scss";

function slider() {
  return (
    <div className="allDash">
      <Navbar />

      <section className="header">
        <div>
          <h3 className="searchText">
            Montek'e hoş geldiniz.
            <br />
            İstediğiniz ürün için kolayca teklif hazırlayıp fiyatları
            karşılaştırabilrsiniz.
            <br />
            <br />
            <br />
            KALİTE VE GÜVEN HERKESİN HAKKI
          </h3>
          {/* <h3 className='searchText'>Teklif almak istediğiniz ürünü giriniz.</h3>
          <div className="containerSearch">
            <input className='searchInput' type="text" placeholder=" Ara..." />
            <div className="search1"></div>
          </div> */}
        </div>
      </section>

      <div className="dashProductText">Hizmet Verdiğimiz Ürünler</div>
      <hr />

      <div className="sliderClass">
        <Carousel />

        {/* -------------------------------siteyle alakalı bilgiler (icerik)------------------------------- */}

        <div className="icerikAll">
          <div className="iceriks">
            <div>
              <div className="icerik-baslik-1">Kaliteli Hizmet</div>
              <div className="icerik-1">
                Tecrübeli firmalarımız sayesinde işinizi en kolay ve temiz
                şekilde yaptırabileceksiniz. Kalite ve hizmeti sizlere yan yana
                sunuyoruz.
              </div>
            </div>
            <div>
              <img
                className="icerik-resim-1"
                src={require("../../assets/images/dashboard/isci-cizim.png")}
                alt=""
              ></img>
            </div>
          </div>

          <div className="iceriks">
            <div>
              <img
                className="icerik-resim-2"
                src={require("../../assets/images/dashboard/zaman-kazanmak.png")}
                alt=""
              ></img>
            </div>
            <div>
              <div className="icerik-baslik-2">Zamandan Kazan</div>
              <div className="icerik-2">
                Aradığın hizmet için dükkan dükkan dolaşmak ya da aracı aramakla
                uğraşmayın. Siz isteğinizi belirtin biz size seçdirelim.
              </div>
            </div>
          </div>

          <div className="iceriks">
            <div>
              <div className="icerik-baslik-1">İşini Garantiye Al</div>
              <div className="icerik-1">
                Gönül rahatlığıyla hizmet almanız için işleriniz garantimiz
                altındadır. Güvenli ve kaliteli çalışma herkesin hakkıdır.
              </div>
            </div>
            <div>
              <img
                className="icerik-resim-1"
                src={require("../../assets/images/dashboard/shaking-hands.png")}
                alt=""
              ></img>
            </div>
          </div>

          <div className="iceriks">
            <div>
              <img
                className="icerik-resim-2"
                src={require("../../assets/images/dashboard/laptop.png")}
                alt=""
              ></img>
            </div>
            <div>
              <div className="icerik-baslik-2">Kolayca Kullan</div>
              <div className="icerik-2">
                Hizmet almak istediğiniz ürünü seçin ve adımları kolayca
                izleyin, bekleyen işlerinizi hızlıca halledin.
              </div>
            </div>
          </div>

          {/* -------------------------------teklif adımları kısmı------------------------------- */}

          <div className="steps">
            <h1>NASIL TEKLİF ALIRIM?</h1>
          </div>
          <hr />
          <div className="stepRow">
            <div className="categori-col">
              <h3>1. Adım</h3>
              <p>
                Teklif alabilmek için öncelikle sitemize giriş yapmadıysanız
                lütfen giriş yapınız...
              </p>
              <Link to="/login" className="log-bttn">
                Giriş Yap
              </Link>
            </div>
            <div className="categori-col">
              <h3>2. Adım</h3>
              <p>
                Teklif Al sekmesine gidip istediğiniz ürün için montaj yeri ya
                da ürünü seçebilir ve istenilen ürüne uygun adımları takip edip
                kolayca teklif verebilirsiniz.
              </p>
            </div>
            <div className="categori-col">
              <h3>3. Adım</h3>
              <p>
                Bizde işinin ehli insanları sizle buluşturuz. Sizde
                karşılaştırır ve seçersiniz.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default slider;
