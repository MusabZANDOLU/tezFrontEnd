import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

import alertify from 'alertifyjs';
import '../assets/scss/getOffer.scss';


function info1() {
  alertify.alert('Ürünler Hakkında', 'Montaj yaptırmak istediğiniz ürün türünü seçiniz. Ürünler alüminyumdur.');
}

function info2() {
  alertify.alert('Genişlik Ölçüsü Hakkında', 'Montaj yerinin yanlarından metre yardımıyla alabileceğiniz ölçümdür. En sağlıklı ölçümler için alt, orta ve üst olarak farklı yerlerden en ölçümü alıp ortalamasını seçerek daha yakın teklifler alabilirsiniz.');
}

function info3() {
  alertify.alert('Balkon Yükseklik Ölçüsü Hakkında', 'Montaj yerinin üstünden altına metre yardımıyla alabileceğiniz ölçümdür. En sağlıklı ölçümler için sol, orta ve sağ olarak farklı yerlerden boy ölçümü alıp ortalamasını seçerek daha yakın teklifler alabilirsiniz.');
}

function info4() {
  alertify.alert('Balkon Yükseklik Ölçüsü Hakkında', 'Montaj yerinin üstünden altına metre yardımıyla alabileceğiniz ölçümdür. En sağlıklı ölçümler için sol, orta ve sağ olarak farklı yerlerden boy ölçümü alıp ortalamasını seçerek daha yakın teklifler alabilirsiniz.');
}



// function step1button() {
//   var step1 = document.querySelector('#step1Shop');
//   step1.style.display = 'none';
//   var step2 = document.querySelector('#step2Shop');
//   step2.style.display = 'block';
// }

// function step2ButtonNext() {
//   var step2 = document.querySelector('#step2Shop');
//   step2.style.display = 'none';
//   var step3 = document.querySelector('#step3Shop');
//   step3.style.display = 'block';
// }

// function step2ButtonBack() {
//   var step1 = document.querySelector('#step1Shop');
//   step1.style.display = 'block';
//   var step2 = document.querySelector('#step2Shop');
//   step2.style.display = 'none';
// }

// function step3ButtonNext() {
//   var step3 = document.querySelector('#step3Shop');
//   step3.style.display = 'none';
//   var step4 = document.querySelector('#step4Shop');
//   step4.style.display = 'block';
// }

// function step3ButtonBack() {
//   var step2 = document.querySelector('#step2Shop');
//   step2.style.display = 'block';
//   var step3 = document.querySelector('#step3Shop');
//   step3.style.display = 'none';
// }

// function step4ButtonNext() {
//   var step3 = document.querySelector('#step4Shop');
//   step3.style.display = 'none';
//   var step4 = document.querySelector('#step5Shop');
//   step4.style.display = 'block';
// }

// function step4ButtonBack() {
//   var step5 = document.querySelector('#step3Shop');
//   step5.style.display = 'block';
//   var step6 = document.querySelector('#step4Shop');
//   step6.style.display = 'none';
// }

// function step5ButtonBack() {
//   var step6 = document.querySelector('#step4Shop');
//   step6.style.display = 'block';
//   var step7 = document.querySelector('#step5Shop');
//   step7.style.display = 'none';
// }

// function step6Button() {
//   var step7 = document.querySelector('#step6Shop');
//   step7.style.display = 'block';
//   var step6 = document.querySelector('#step5Shop');
//   step6.style.display = 'none';
// }

// function step6ButtonBack() {
//   var step5 = document.querySelector('#step5Shop');
//   step5.style.display = 'block';
//   var step6 = document.querySelector('#step6Shop');
//   step6.style.display = 'none';
// }

function GetOfferShopping() {

  const [divs, setDivs]= useState(1);

  // useEffect(function () {
  //   window.addEventListener('load', (event) => {
  //     var visibleComp = document.querySelector('#step1Shop');
  //     visibleComp.style.display = 'block';
  //     var unvisibleComp1 = document.querySelector('#step2Shop');
  //     unvisibleComp1.style.display = 'none';
  //     var unvisibleComp2 = document.querySelector('#step3Shop');
  //     unvisibleComp2.style.display = 'none';
  //     var unvisibleComp3 = document.querySelector('#step4Shop');
  //     unvisibleComp3.style.display = 'none';
  //     var unvisibleComp4 = document.querySelector('#step5Shop');
  //     unvisibleComp4.style.display = 'none';
  //     var unvisibleComp5 = document.querySelector('#step6Shop');
  //     unvisibleComp5.style.display = 'none';
  //   });
  // })

  return (
    <div className='getOfferShoppingAll'>
      <Navbar />

      <div className='get-tt'>

        {divs===1?

        <div id='step1Shop'>
          <div className='UserSettingAll'>
            <div className='getoffer-text'>(1.Adım)<br /><hr />Mağazanız için vermek istediğiniz ürünü seçiniz</div>
            <div className="radiogroup">
              <div className="wrapper">
                <input className="state" type="radio" name="productNameShop" id="a" value="a" />
                <label className="label" htmlFor="a">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>Otomatik Kapı</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="productNameShop" id="b" value="b" />
                <label className="label" htmlFor="b">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>Otomatik Kepenk</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="productNameShop" id="c" value="c" />
                <label className="label" htmlFor="c">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>Alüminyum Cam</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="productNameShop" id="d" value="d" />
                <label className="label" htmlFor="d">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>Alüminyum Kapı</span>
                </label>
              </div>
            </div>
            <div className="buttons">
              <button className="getOfferButton" onClick={()=>{setDivs(2)}}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
              <hr />
              <button onClick={info1} className="getOfferButton"><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
              <hr />
              <Link className="getOfferLinkButton" to='/getOfferCategory'><i className="fa-solid fa-house"></i> Kategorilere Dön</Link>
            </div>
          </div>
        </div>:divs===2?

        <div id='step2Shop'>
          <div className='UserSettingAll'>
            <div className='getoffer-text'>(2.Adım)<br /><hr />Montaj yapılacak yerin genişlik ölçüsünü metre cinsinden seçiniz.</div>
            <div className="radiogroup">
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidthShop" id="a1" value="a1" />
                <label className="label" htmlFor="a1">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>2 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidthShop" id="b1" value="b1" />
                <label className="label" htmlFor="b1">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>3 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidthShop" id="c1" value="c1" />
                <label className="label" htmlFor="c1">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>4 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidthShop" id="d1" value="d1" />
                <label className="label" htmlFor="d1">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>5 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidthShop" id="e1" value="e1" />
                <label className="label" htmlFor="e1">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>6 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidthShop" id="f1" value="f1" />
                <label className="label" htmlFor="f1">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>8 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidthShop" id="g1" value="g1" />
                <label className="label" htmlFor="g1">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>10 m</span>
                </label>
              </div>
            </div>

            <div className="radiogroup">
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidthShop" id="h1" value="h1" />
                <label className="label" htmlFor="h1">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>12 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidthShop" id="i1" value="i1" />
                <label className="label" htmlFor="i1">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>15 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidthShop" id="j1" value="j1" />
                <label className="label" htmlFor="j1">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>18 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidthShop" id="k1" value="k1" />
                <label className="label" htmlFor="k1">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>20 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidthShop" id="l1" value="l1" />
                <label className="label" htmlFor="l1">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>25 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidthShop" id="m1" value="m1" />
                <label className="label" htmlFor="m1">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>30 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidthShop" id="n1" value="n1" />
                <label className="label" htmlFor="n1">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>35+ m</span>
                </label>
              </div>
            </div>
            <div className="buttons">
              <button className="getOfferButton" onClick={()=>{setDivs(3)}}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
              <hr />
              <button className="getOfferButton" onClick={()=>{setDivs(1)}}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
              <hr />
              <button className="getOfferButton" onClick={info2}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
            </div>
          </div>
        </div>:divs===3?

        <div id='step3Shop'>
          <div className='UserSettingAll'>
            <div className='getoffer-text'>(3.Adım)<br /><hr />Montaj yapılacak yerin yükseklik ölçüsünü metre cinsinden seçiniz.</div>
            <div className="radiogroup">
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeightShop" id="a2" value="a2" />
                <label className="label" htmlFor="a2">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>1.00 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeightShop" id="b2" value="b" />
                <label className="label" htmlFor="b2">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>1.30 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeightShop" id="c2" value="c2" />
                <label className="label" htmlFor="c2">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>1.50 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeightShop" id="d2" value="d2" />
                <label className="label" htmlFor="d2">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>1.70 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeightShop" id="e2" value="e2" />
                <label className="label" htmlFor="e2">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>1.80 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeightShop" id="f2" value="f2" />
                <label className="label" htmlFor="f2">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>1.90 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeightShop" id="g2" value="g2" />
                <label className="label" htmlFor="g2">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>2.00 m</span>
                </label>
              </div>
            </div>

            <div className="radiogroup">
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeightShop" id="h2" value="h2" />
                <label className="label" htmlFor="h2">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>2.10 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeightShop" id="i2" value="i2" />
                <label className="label" htmlFor="i2">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>2.20 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeightShop" id="j2" value="j2" />
                <label className="label" htmlFor="j2">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>2.50 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeightShop" id="k2" value="k2" />
                <label className="label" htmlFor="k2">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>2.70 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeightShop" id="l2" value="l2" />
                <label className="label" htmlFor="l2">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>3.00 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeightShop" id="m2" value="m2" />
                <label className="label" htmlFor="m2">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>3.50 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeightShop" id="n2" value="n2" />
                <label className="label" htmlFor="n2">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>4.00 m</span>
                </label>
              </div>
            </div>
            <div className="buttons">
              <button className="getOfferButton" onClick={()=>{setDivs(4)}}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
              <hr />
              <button className="getOfferButton" onClick={()=>{setDivs(2)}}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
              <hr />
              <button className="getOfferButton" onClick={info3}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
            </div>
          </div>
        </div>:divs===4?

        <div id='step4Shop'>
          <div className='UserSettingAll'>
            <div className='getoffer-text'>(4.Adım)<br /><hr />İstediğiniz ürün için kasa rengini seçiniz</div>
            <div className="radiogroup">
              <div className="wrapper">
                <input className="state" type="radio" name="productNameShop" id="a3" value="a3" />
                <label className="label" htmlFor="a3">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>Gri</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="productNameShop" id="b3" value="b3" />
                <label className="label" htmlFor="b3">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>Antrasit Gri</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="productNameShop" id="c3" value="c3" />
                <label className="label" htmlFor="c3">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>Bronze</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="productNameShop" id="d3" value="d3" />
                <label className="label" htmlFor="d3">
                  <div className="indicator"></div>
                  <span className='textOfferCss'>Brown</span>
                </label>
              </div>
            </div>
            <div className="buttons">
              <button className="getOfferButton" onClick={()=>{setDivs(5)}}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
              <hr />
              <button className="getOfferButton" onClick={()=>{setDivs(3)}}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
              <hr />
              <button className="getOfferButton" onClick={info4}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
            </div>
          </div>
        </div>:divs===5?

        <div id='step5Shop'>
          <div className='UserSettingAll'>
            <div className='getoffer-text'>(5.Adım)<br /><hr />Aklınıza gelen diğer detayları yazabilirsiniz.</div>
            <div className="radiogroup-ex">

              <textarea className="getOffer-input" type="text" placeholder='Aklınıza gelenleri yazabilirsiniz. Örneğin; balkon ortasında sütun var, yanları ağaç/demir/beton, mermer yok vb.)' />
            </div>
            <div className="buttons">
              <button className="getOfferButton"><i className="fa-solid fa-upload"></i> Teklif Yayınla</button>
              <hr />
              <button className="getOfferButton" onClick={()=>{setDivs(6)}}><i className="fa-solid fa-eye"></i> Teklifimi Göster</button>
              <hr />
              <button className="getOfferButton" onClick={()=>{setDivs(4)}}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
            </div>
          </div>
        </div>:divs===6?

        <div id='step6Shop'>
          <div className='UserSettingAll'>
            <div className='getoffer-text'>Teklifinizi gözden geçiriniz. Değiştirmek istediğiniz detaylar için geri gidip seçim yapabilirsiniz.</div>
            <div className="radiogroupPrev">

              <div className="wrapper">
                <label className="label">
                  <div className='textPrev'>Seçilen Ürün:</div>
                  <i className="fa-solid fa-check tik"></i>
                  <div className='textOfferCss'>Otomatik Kapı</div>
                </label>
              </div>
              <div className="wrapper">
                <label className="label">
                  <div className='textPrev'>Montaj yeri genişliği:</div>
                  <i className="fa-solid fa-check tik"></i>
                  <div className='textOfferCss'>8 m</div>
                </label>
              </div>
              <div className="wrapper">
                <label className="label">
                  <div className='textPrev'>Montaj yeri yükseklik:</div>
                  <i className="fa-solid fa-check tik"></i>
                  <div className='textOfferCss'>2.50 m</div>
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
              <button className="getOfferButton" onClick={()=>{setDivs(5)}}>Kapat</button>
            </div>
          </div>
        </div>:null}

      </div>
    </div>
  )
}
export default GetOfferShopping;