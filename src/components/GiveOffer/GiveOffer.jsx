import React, { useState, useEffect } from "react";
import Navbar from "../Dashboard/Navbar";
import "../../assets/scss/giveOffer.scss";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router";

function GiveOffer() {
  const [comment, setComment] = useState();
  const [price, setPrice] = useState();
  const navigate = useNavigate();
  const [currentOffer, setCurrentOffer] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [offers, setOffers] = useState([]);

  let myDate = GiveOffer.createdAt;
  myDate = moment().format("L");

  useEffect(() => {
    getOffers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getOffers = async () => {
    const response = await axios.get("http://localhost:5000/offers", {

    });
    setOffers(response.data);
  };

  const saveGiveOffer = async e => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/giveOffers",
        {
          comment,
          price,
        },

      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const showOfferModal = offer => {
    setCurrentOffer(offer);
    setShowModal(true);
  };

  useEffect(() => {
    console.log(currentOffer);
  });

  return (
    <div>
      <Navbar />
      <div className="giveOfferAll">
        <div className="giveOfferAllCard">
          {offers.map(offers => (
            <div
              className="giveOfferCard"
              key={offers._id}
              onClick={() => {
                showOfferModal(offers);
              }}
            >
              <div className="giveOfferCardIn">{offers.productName}</div>
              <div className="giveOfferCardIn">{offers.productName}</div>
              <div className="giveOfferCardIn">{myDate}</div>
              <div className="giveOfferCardIn">Teklif Verilmedi</div>
            </div>
          ))}
        </div>
      </div>
      {showModal ? (
        <div className="modalContainer">
          <div className="modalContent">
            <div className="giveOfferCardIn">
              <div className="giveOfferCover">
                <div className="ModalLeftRight">
                  <div>
                    <div>
                      <label className="labelModal">
                        <div className="textGivePrev">Se??ilen ??r??n:</div>
                        <div className="textModalCss">
                          <i className="fa-solid fa-circle pointModalIcon"></i>{" "}
                          {currentOffer.productName}
                        </div>
                      </label>
                    </div>
                    <div>
                      <label className="labelModal">
                        <div className="textGivePrev">Di??er Detaylar</div>
                        <div className="textModalCss">
                          <i className="fa-solid fa-circle pointModalIcon"></i>{" "}
                          {currentOffer.productWidth}
                        </div>
                      </label>
                    </div>
                    <div>
                      <label className="labelModal">
                        <div className="textModalCss">
                          <i className="fa-solid fa-circle pointModalIcon"></i>{" "}
                          {currentOffer.productHeight}
                        </div>
                      </label>
                    </div>
                    <div>
                      <label className="labelModal">
                        <div className="textModalCss">
                          <i className="fa-solid fa-circle pointModalIcon"></i>{" "}
                          {currentOffer.productPlace}
                        </div>
                      </label>
                    </div>
                    <div>
                      <label className="labelModal">
                        <div className="textModalCss">
                          <i className="fa-solid fa-circle pointModalIcon"></i>{" "}
                          {currentOffer.productWindow}
                        </div>
                      </label>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label className="labelModal">
                        <div className="textGivePrev">M????teri A????klamas??:</div>
                        <div className="textModalCss">
                          <i className="fa-solid fa-circle pointModalIcon"></i>{" "}
                          {currentOffer.userComment}
                        </div>
                      </label>
                    </div>
                    <div>
                      <label className="labelModal">
                        <div className="textGivePrev">Teklif Tarihi:</div>
                        <div className="textModalCssDate">
                          <i className="fa-solid fa-circle pointModalIcon"></i>{" "}
                          {myDate}
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <label
                  className="modalClose"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  &#x2715;
                </label>
              </div>
            </div>
            <form onSubmit={saveGiveOffer}>
              <div className="modalSendKismi">
                <div className="modalSendKismiSol">
                  <textarea
                    className="modalTextareaLeft"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    placeholder="M????teriye s??ylemek istedi??iniz di??er detaylar?? ve varsa farkl?? fiyatland??rmalar??n??z yazab??lirsiniz."
                  ></textarea>
                </div>
                <div className="modalSendKismiSag">
                  <div className="modalTextareaRightCover" A>
                    <textarea
                      type={"text"}
                      value={price}
                      onChange={e => setPrice(e.target.value)}
                      className="modalTextareaRight"
                      placeholder="Fiyat aral??????..."
                    ></textarea>
                  </div>
                  <div className="modalSendButtonCover">
                    <button className="modalSendButton">
                      Fiyat Teklifini G??nder
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default GiveOffer;
