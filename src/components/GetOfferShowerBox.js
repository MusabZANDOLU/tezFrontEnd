import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import Navbar from './Navbar'

import alertify from 'alertifyjs';
import '../assets/scss/getOffer.scss';

function info1() {
  alertify.alert('Seçilecek Ürünler Hakkında', 'Ölçülerinizi balkonun eni ve yüksekliği olacak şekilde alınız. Verilen teklifler yalnızca yaklaşık sonuçları verebilir. Kesin bilgi içermemektedir!');
}


function GetOfferShowerBox() {

  const [divs, setDivs] = useState(1);

  return (
    <div>
      <Navbar />
      <div className='getOfferShowerBoxContent'>

        {divs === 1 ?

          <div id='step1Shower'>
            <div className='UserSettingAll'>
              <div className='getoffer-text'>(1.Adım)<br /><hr />Montaj yapılacak duş kabini türünü seçiniz</div>
              <div className="radiogroup">
                <div className="wrapper">
                  <input className="state" type="radio" name="showerCabin" id="a5" value="a5" />
                  <label className="label" htmlFor="a5">
                    <div className="indicator"></div>
                    <span className='textOfferCss'>Teknesiz Duş Kabini</span>
                  </label>
                </div>
                <div className="wrapper">
                  <input className="state" type="radio" name="showerCabin" id="b5" value="b5" />
                  <label className="label" htmlFor="b5">
                    <div className="indicator"></div>
                    <span className='textOfferCss'>Tekneli Duş Kabini</span>
                  </label>
                </div>
                <div className="wrapper">
                  <input className="state" type="radio" name="showerCabin" id="c5" value="c5" />
                  <label className="label" htmlFor="c5">
                    <div className="indicator"></div>
                    <span className='textOfferCss'>Duvardan Duvara</span>
                  </label>
                </div>
                <div className="wrapper">
                  <input className="state" type="radio" name="showerCabin" id="d5" value="d5" />
                  <label className="label" htmlFor="d5">
                    <div className="indicator"></div>
                    <span className='textOfferCss'>Oval</span>
                  </label>
                </div>
              </div>
              <div className="buttons">
                <button className="getOfferButton" onClick={() => { setDivs(2) }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                <hr />
                <button onClick={info1} className="getOfferButton"><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                <hr />
                <Link className="getOfferLinkButton" to='/getOfferCategory'><i className="fa-solid fa-house"></i> Kategorilere Dön</Link>
              </div>
            </div>
          </div> : divs === 2 ?

            <div id='step2Shower'>
              <div className='UserSettingAll'>
                <div className='getoffer-text'>(2.Adım)<br /><hr />Montaj yapılacak duş kabini için cam türünü seçiniz</div>
                <div className="radiogroup">
                  <div className="wrapper">
                    <input className="state" type="radio" name="showerCabinWindow" id="a6" value="a6" />
                    <label className="label" htmlFor="a6">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>Temperli</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="showerCabinWindow" id="b6" value="b6" />
                    <label className="label" htmlFor="b6">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>Mika</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="showerCabinWindow" id="c6" value="c6" />
                    <label className="label" htmlFor="c6">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>Buzlu</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="showerCabinWindow" id="d6" value="d6" />
                    <label className="label" htmlFor="d6">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>Desenli</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="showerCabinWindow" id="e6" value="e6" />
                    <label className="label" htmlFor="e6">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>Düz Cam</span>
                    </label>
                  </div>
                  <div className="wrapper">
                    <input className="state" type="radio" name="showerCabinWindow" id="f6" value="f6" />
                    <label className="label" htmlFor="f6">
                      <div className="indicator"></div>
                      <span className='textOfferCss'>Farketmez / Bilmiyorum</span>
                    </label>
                  </div>
                </div>
                <div className="buttons">
                  <button className="getOfferButton" onClick={() => { setDivs(3) }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                  <hr />
                  <button className="getOfferButton" onClick={() => { setDivs(1) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                  <hr />
                  <button onClick={info1} className="getOfferButton"><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                </div>
              </div>
            </div> : divs === 3 ?

              <div id='step3Shower'>
                <div className='UserSettingAll'>
                  <div className='getoffer-text'>(3.Adım)<br /><hr />Montaj yapılacak duş kabini için ölçünüzü seçiniz</div>
                  <div className="radiogroup">
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="a7" value="a7" />
                      <label className="label" htmlFor="a7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>80x80 cm'den daha küçük</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="b7" value="b7" />
                      <label className="label" htmlFor="b7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>90x90 cm</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="c7" value="c7" />
                      <label className="label" htmlFor="c7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>100x70 cm</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="d7" value="d7" />
                      <label className="label" htmlFor="d7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>100x80 cm</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="e7" value="e7" />
                      <label className="label" htmlFor="e7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>110x80 cm</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="f7" value="f7" />
                      <label className="label" htmlFor="f7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>120x80 cm</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="g7" value="g7" />
                      <label className="label" htmlFor="g7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>130x80 cm</span>
                      </label>
                    </div>
                  </div>
                  <div className="radiogroup">
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="h7" value="h7" />
                      <label className="label" htmlFor="h7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>150x80 cm</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="i7" value="i7" />
                      <label className="label" htmlFor="i7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>160x80 cm</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="j7" value="j7" />
                      <label className="label" htmlFor="j7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>170x70cm</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="k7" value="k7" />
                      <label className="label" htmlFor="k7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>170x80 cm</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="l7" value="l7" />
                      <label className="label" htmlFor="l7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>180x70 cm</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="m7" value="m7" />
                      <label className="label" htmlFor="m7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>170x80 cm</span>
                      </label>
                    </div>
                    <div className="wrapper">
                      <input className="state" type="radio" name="showerCabinSize" id="n7" value="n7" />
                      <label className="label" htmlFor="n7">
                        <div className="indicator"></div>
                        <span className='textOfferCss'>200x80 cm'den daha büyük</span>
                      </label>
                    </div>
                  </div>
                  <div className="buttons">
                    <button className="getOfferButton" onClick={() => { setDivs(4) }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                    <hr />
                    <button className="getOfferButton" onClick={() => { setDivs(2) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                    <hr />
                    <button onClick={info1} className="getOfferButton"><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                  </div>
                </div>
              </div> : divs === 4 ?

                <div id='step4Shower'>
                  <div className='UserSettingAll'>
                    <div className='getoffer-text'>(4.Adım)<br /><hr />Aklınıza gelen diğer detayları yazablirsiniz.</div>
                    <div className="radiogroup-ex">

                      <textarea className="getOffer-input" type="text" placeholder='Aklınıza gelenleri yazabilirsiniz. Örneğin; balkon ortasında sütun var, yanları ağaç/demir/beton, mermer yok vb.)' />
                    </div>
                    <div className="buttons">
                      <button className="getOfferButton"><i className="fa-solid fa-upload"></i> Teklif Yayınla</button>
                      <hr />
                      <button className="getOfferButton" onClick={() => { setDivs(5) }}><i className="fa-solid fa-eye"></i> Teklifimi Göster</button>
                      <hr />
                      <button className="getOfferButton" onClick={() => { setDivs(3) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                    </div>
                  </div>
                </div> : divs === 5 ?

                  <div id='step5Shower'>
                    <div className='UserSettingAll'>
                      <div className='getoffer-text'>Teklifinizi gözden geçiriniz.</div>
                      <div className="radiogroupPrev">

                        <div className="wrapper">
                          <label className="label">
                            <div className='textPrev'>Seçilen Ürün:</div>
                            <i className="fa-solid fa-check tik"></i>
                            <div className='textOfferCss'>Katlanır Cam</div>
                          </label>
                        </div>
                        <div className="wrapper">
                          <label className="label">
                            <div className='textPrev'>Balkon Genişlik:</div>
                            <i className="fa-solid fa-check tik"></i>
                            <div className='textOfferCss'>8 m</div>
                          </label>
                        </div>
                        <div className="wrapper">
                          <label className="label">
                            <div className='textPrev'>Balkon Yükseklik:</div>
                            <i className="fa-solid fa-check tik"></i>
                            <div className='textOfferCss'>2.50 m</div>
                          </label>
                        </div>
                        <div className="wrapper">
                          <label className="label">
                            <div className='textPrev'>Balkon Şekli:</div>
                            <i className="fa-solid fa-check tik"></i>
                            <div className='textOfferCss'>L Balkon (2 Cephe)</div>
                          </label>
                        </div>
                        <div className="wrapper">
                          <label className="label">
                            <div className='textPrev'>Cam Çeşidi:</div>
                            <i className="fa-solid fa-check tik"></i>
                            <div className='textOfferCss'>Reflekte</div>
                          </label>
                        </div>
                        <div className="wrapper">
                          <label className="label">
                            <div className='textPrev'>Açıklama:</div>
                            <i className="fa-solid fa-check tik"></i>
                            <div className='textOfferCss'>Aklınıza gelenleri yazabilirsiniz. Örneğin; balkon ortasında sütun var,</div>
                          </label>
                        </div>

                      </div>
                      <div className="buttons">
                        <button className="getOfferButton" onClick={() => { setDivs(4) }}>Kapat</button>
                      </div>
                    </div>
                  </div> : null}

      </div>
    </div>
  )
}
export default GetOfferShowerBox;