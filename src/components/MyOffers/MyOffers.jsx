import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Dashboard/Navbar";
import "../../assets/scss/myOffers.scss";
import axios from "axios";
import moment from "moment";

function MyOffers() {
  const [myOffers, setMyOffer] = useState([]);

  let myDate = myOffers.createdAt;
  myDate = moment().format("LL");
  useEffect(() => {
    getMyOffer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMyOffer = async () => {
    await axios
      .get("http://localhost:5000/Offers", {

      })
      .then(res => {
        console.log(res);
        setMyOffer(res.data);
      });
    // console.log(response)
    // setMyOffer(response.data.data);
  };

  console.log(myOffers);

  return (
    <div className="myOfferBody">
      <Navbar />
      <div className="myOfferTopText">Tüm teklifleriniz</div>
      <div className="myOfferAll">
        {myOffers.map(getOffers => (
          <div className="radiogroupMyOffer" key={getOffers._id}>
            <div className="myOfferCover">
              <div>
                <div className="myOfferAllCol">
                  <div className="myOfferLeftCol">
                    <div>
                      <label className="label">
                        {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                        <div className="textGiveOfferCss">
                          Ürün:
                          <br />
                          <hr />
                          {getOffers.productName}
                        </div>
                      </label>
                    </div>
                    <br />
                    <div>
                      <label className="label">
                        {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                        <div className="textGiveOfferCss">
                          Detayar:
                          <br />
                          <hr />
                          {getOffers.productWidth}
                        </div>
                      </label>
                    </div>
                    <div>
                      <label className="label">
                        {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                        <div className="textGiveOfferCss">
                          {getOffers.productHeight}
                        </div>
                      </label>
                    </div>
                    <div>
                      <label className="label">
                        {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                        <div className="textGiveOfferCss">
                          {getOffers.productPlace}
                        </div>
                      </label>
                    </div>
                    <div>
                      <label className="label">
                        {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                        <div className="textGiveOfferCss">
                          {getOffers.productWindow}
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="myOfferRightCol">
                    <div>
                      <label className="label">
                        {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                        <div className="textGiveOfferCss">
                          Açıklamam:
                          <br />
                          <hr />
                          {getOffers.userComment}
                        </div>
                      </label>
                    </div>
                    <br />
                    <div>
                      <label className="label">
                        {/* <i className="fa-solid fa-circle-check tiks"></i> */}
                        <div className="textGiveOfferCss">
                          Teklif Tarihim:
                          <br />
                          <hr />
                          {myDate}
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="myOfferDetailBtn">
                  <Link to="/myOfferModal">
                    <button className="myOfferBtn">
                      Teklifiniz adına verilen fiyatlara ulaşmak için
                      tıklayınız.
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MyOffers;
