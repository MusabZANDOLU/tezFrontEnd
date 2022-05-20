import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import "../assets/scss/myOffers.scss";

function MyOffers() {

  return (
    <div className="myOfferBody">
      <Navbar />
      <div className="myOfferTopText">Tüm teklifleriniz</div>
      <div className="myOfferAll">

        <div className="radiogroupMyOffer">
          <div className="myOfferCover">
            <div>
              <div className="myOfferAllCol">
                <div className="myOfferLeftCol">
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">Ürün: Katlanır Cam</div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">Detayar: 8 m</div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">2.50 m</div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">L Balkon (2 Cephe)</div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">Reflekte</div>
                    </label>
                  </div>
                </div>
                <div className="myOfferRightCol">
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">
                        Açıklamam: Aynı ürünün şeffaf camlı olan fiyatını da yazabilirseniz sevinirim. Kolay gelsin. İyi çalışmalar.
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">
                        Teklif Tarihim: 19.08.2022
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="myOfferDetailBtn">
                <Link to="/myOfferModal"><button className="myOfferBtn">Teklifiniz adına verilen fiyatlara ulaşmak için tıklayınız.</button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="radiogroupMyOffer">
          <div className="myOfferCover">
            <div>
              <div className="myOfferAllCol">
                <div className="myOfferLeftCol">
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">Ürün: Sürme Cam</div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">Detayar: 10 m</div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">2.20 m</div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">U Balkon (3 Cephe)</div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">Reflekte</div>
                    </label>
                  </div>
                </div>
                <div className="myOfferRightCol">
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">
                        Açıklamam: Aynı üründen iki tane almak istesem ne kadar iskonto yapabilirsiniz.
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">
                        Teklif Tarihim: 09.02.2021
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="myOfferDetailBtn">
              <Link to="/myOfferModal"><button className="myOfferBtn">Teklifiniz adına verilen fiyatlara ulaşmak için tıklayınız.</button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="radiogroupMyOffer">
          <div className="myOfferCover">
            <div>
              <div className="myOfferAllCol">
                <div className="myOfferLeftCol">
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">Ürün: Katlanır Cam</div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">Detayar: 8 m</div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">2.50 m</div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">L Balkon (2 Cephe)</div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">Reflekte</div>
                    </label>
                  </div>
                </div>
                <div className="myOfferRightCol">
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">
                        Açıklamam: Yanlarda duvar değil ağaç kirişler var. Mermer yok.
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">
                        Teklif Tarihim: 10.10.2020
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="myOfferDetailBtn">
                <button className="myOfferBtn">Teklifiniz adına verilen fiyatlara ulaşmak için tıklayınız.</button>
              </div>
            </div>
          </div>
        </div>
        <div className="radiogroupMyOffer">
          <div className="myOfferCover">
            <div>
              <div className="myOfferAllCol">
                <div className="myOfferLeftCol">
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">Ürün: Pvc Kapı</div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">Detayar:  80cm </div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">2.20 m</div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">2 adet</div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">Kararsızım/ Farketmez</div>
                    </label>
                  </div>
                </div>
                <div className="myOfferRightCol">
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">
                        Açıklamam: Şeffaf camlı fiyatınıda ek olarak yazar mısınız. İyi günler.
                      </div>
                    </label>
                  </div>
                  <div>
                    <label className="label">
                      <i className="fa-solid fa-circle-check tiks"></i>
                      <div className="textGiveOfferCss">
                        Teklif Tarihim: 01.07.2021
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="myOfferDetailBtn">
                <button className="myOfferBtn">Teklifiniz adına verilen fiyatlara ulaşmak için tıklayınız.</button>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}
export default MyOffers;
