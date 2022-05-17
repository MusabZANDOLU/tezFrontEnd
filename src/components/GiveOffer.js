import React from "react";
import Navbar from "./Navbar";
import "../assets/scss/giveOffer.scss";

function GiveOffer() {
  return (
    <div>
      <Navbar />
      <div className="giveOfferAll">

        <div className="giveOfferAllCard">
          <div className="giveOfferCard">
            <div className="giveOfferCardIn">Ahmet Asaş</div>
            <div className="giveOfferCardIn">Katlanır Cam</div>
            <div className="giveOfferCardIn">19.01.2021</div>
            <div className="giveOfferCardIn">Teklif Verilmedi</div>

            <div className="modalContainer">
              <input id="modalToggle" type="checkbox" />
              <label className="modalBtn" htmlFor="modalToggle">Detay</label>
              <label className="modalBackdrop" htmlFor="modalToggle"></label>

              <div className="modalContent">
                <div className="giveOfferCardIn">
                  <div className="giveOfferCover">
                    <div className="ModalLeftRight">
                      <div>
                        <div>
                          <label className="labelModal">
                            <div className="textGivePrev">Seçilen Ürün:</div>
                            <div className="textModalCss"><i className="fa-solid fa-circle pointModalIcon"></i> Katlanır cam</div>
                          </label>
                        </div>
                        <div>
                          <label className="labelModal">
                            <div className="textGivePrev">Diğer Detaylar</div>
                            <div className="textModalCss"><i className="fa-solid fa-circle pointModalIcon"></i> 8 m</div>
                          </label>
                        </div>
                        <div>
                          <label className="labelModal">
                            <div className="textModalCss"><i className="fa-solid fa-circle pointModalIcon"></i> 2.50 m</div>
                          </label>
                        </div>
                        <div>
                          <label className="labelModal">
                            <div className="textModalCss"><i className="fa-solid fa-circle pointModalIcon"></i> L Balkon (2 Cephe)</div>
                          </label>
                        </div>
                        <div>
                          <label className="labelModal">
                            <div className="textModalCss"><i className="fa-solid fa-circle pointModalIcon"></i> Reflekte</div>
                          </label>
                        </div>
                      </div>
                      <div>
                        <div>
                          <label className="labelModal">
                            <div className="textGivePrev">Müşteri Açıklaması:</div>
                            <div className="textModalCss">
                              <i className="fa-solid fa-circle pointModalIcon"></i> Beyaz ve antrasit renkleri için de fiyatlandırma verebilirseniz sevinirim. Mermerim eski onu da değiştirmek istiyorum. Ayrıca duvarlar boyanmadı bu konuda sıkıntı çıkarsa yazar mısınız.
                            </div>
                          </label>
                        </div>
                        <div>
                          <label className="labelModal">
                            <div className="textGivePrev">Teklif Tarihi:</div>
                            <div className="textModalCssDate"><i className="fa-solid fa-circle pointModalIcon"></i> 19.08.2022</div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <label className="modalClose" htmlFor="modalToggle">&#x2715;</label>
                  </div>
                </div>
                <div className="modalSendKismi">
                  <div className="modalSendKismiSol">
                    <textarea className="modalTextareaLeft" placeholder="Müşteriye söylemek istediğiniz diğer detayları ve varsa farklı fiyatlandırmalarınız yazabşlirsiniz."></textarea>
                  </div>
                  <div className="modalSendKismiSag">
                    <div className="modalTextareaRightCover"A><textarea type={"text"} className="modalTextareaRight" placeholder="Fiyat aralığı..."></textarea></div>
                    <div className="modalSendButtonCover"><button className="modalSendButton">Fiyat Teklifini Gönder</button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
export default GiveOffer;
