import React from "react";
import { useState } from "react"
import Navbar from "./Navbar";
import GiveOfferModal from "./GiveOfferModal";

import "../assets/scss/giveOffer.scss";

function GiveOffer() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Navbar />
      
      <div className="giveOfferAll">
        <div className="giveOfferModalLeftContent">Detayını görmek istediğiniz alana tıklayınız
          <div className="giveOfferModalLeft">
            <button onClick={() => { setOpenModal(true); }} className="giveBtnNull"><div className="giveIcerik">
              <div className="giveIcerikText">*** Bey/</div>
              <div className="giveIcerikText">Katlanır Cam/</div>
              <div className="giveIcerikText">Serdivan/</div>
              <div className="giveIcerikText">19.10.2022</div>
            </div></button>
          </div>
          <div className="giveOfferModalLeft">
            <button onClick={() => { setOpenModal(true); }} className="giveBtnNull"><div className="giveIcerik">
              <div className="giveIcerikText">*** Bey/</div>
              <div className="giveIcerikText">Katlanır Cam/</div>
              <div className="giveIcerikText">Serdivan/</div>
              <div className="giveIcerikText">19.10.2022</div>
            </div></button>
          </div>
          <div className="giveOfferModalLeft">
            <button onClick={() => { setOpenModal(true); }} className="giveBtnNull"><div className="giveIcerik">
              <div className="giveIcerikText">*** Bey/</div>
              <div className="giveIcerikText">Katlanır Cam/</div>
              <div className="giveIcerikText">Serdivan/</div>
              <div className="giveIcerikText">19.10.2022</div>
            </div></button>
          </div>

        </div>
        <div>
          {openModal && <GiveOfferModal closeModal={setOpenModal} />}
        </div>
      </div>
    </div>
  );
}
export default GiveOffer;
