import React from 'react';

function GiveOfferModal({ closeModal }) {
  
  return (
    
    <div className="radiogroupGiveOffer">
          <div className="giveOfferCover">
            <div>
              <div>
                <label className="label">
                  <div className="textGivePrev">Seçilen Ürün:</div>
                  <i className="fa-solid fa-check tik"></i>
                  <div className="textGiveOfferCss">Katlanır Cam</div>
                </label>
              </div>
              <div>
                <label className="label">
                  <div className="textGivePrev">Balkon Genişlik:</div>
                  <i className="fa-solid fa-check tik"></i>
                  <div className="textGiveOfferCss">8 m</div>
                </label>
              </div>
              <div>
                <label className="label">
                  <div className="textGivePrev">Balkon Yükseklik:</div>
                  <i className="fa-solid fa-check tik"></i>
                  <div className="textGiveOfferCss">2.50 m</div>
                </label>
              </div>
              <div>
                <label className="label">
                  <div className="textGivePrev">Balkon Şekli:</div>
                  <i className="fa-solid fa-check tik"></i>
                  <div className="textGiveOfferCss">L Balkon (2 Cephe)</div>
                </label>
              </div>
              <div>
                <label className="label">
                  <div className="textGivePrev">Cam Çeşidi:</div>
                  <i className="fa-solid fa-check tik"></i>
                  <div className="textGiveOfferCss">Reflekte</div>
                </label>
              </div>
              <div>
                <label className="label">
                  <div className="textGivePrev">Müşteri Açıklaması:</div>
                  <i className="fa-solid fa-check tik"></i>
                  <div className="textGiveOfferCss">
                    Aklınıza gelenleri yazabilirsiniz. Örneğin; balkon
                    ortasında sütun var,
                  </div>
                </label>
              </div>
              <div>
                <label className="label">
                  <div className="textGivePrev">Teklif Tarihi:</div>
                  <i className="fa-solid fa-check tik"></i>
                  <div className="textGiveOfferCss">
                    19.08.2022
                  </div>
                </label>
              </div>
            </div>
            <div className="offersIput">
              <div className="radiogroup-ex">
                <textarea
                  className="giveOfferArea"
                  type="text"
                  placeholder="Müşteriye neler söylemek istersiniz?"
                />
                {/* <textarea
                    className="giveOfferInput"
                    type="text"
                    placeholder="Teklife vermek istdiğiniz fiyatı giriniz."
                  /> */}
              </div>
              <div className="giveButtonArea">
                <input className="giveOfferInput" type="text" placeholder="Teklife verdiğiniz fiyat?"/>
                <button className="giveOfferButton"><i className="fa-solid fa-money-bill-wave"></i> Fiyat Teklifi Ver</button>
                <button onClick={()=>closeModal(false)} className="giveOfferButton"><i className="fa-solid fa-money-bill-wave"></i> Kapat</button>
              </div>
            </div>
          </div>



        </div>
  )
}

export default GiveOfferModal;