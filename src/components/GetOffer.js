import React from 'react';
import Navbar from '../components/Navbar';

import '../assets/scss/getOffer.scss';
import alertify from 'alertifyjs';


function info1(){
  alertify.alert('Seçilecek Ürünler Hakkında', 'Ölçülerinizi balkonun eni ve yüksekliği olacak şekilde alınız. Verilen teklifler yalnızca yaklaşık sonuçları verebilir. Kesin bilgi içermemektedir!');
}

function info2(){
  alertify.alert('Balkon En Ölçüsü Hakkında', 'Balkonunuzun bir ucundan diğerine olacak şekilde metre yardımıyla ölçünüz. L ya da U şeklindeki balkonlar için tek balkon gibi düşünüp ölçünüzü alabilirsiniz.');
}

function info3(){
  alertify.alert('Balkon Yükseklik Ölçüsü Hakkında', 'Balkonunuzun zeminde mermerden tavana ölçüsünü alarak yazabilirsiniz. Daha doğru sonuçlar için balkonun enine baş orta ve sondan yükseklik ölçğsü alabilirsiniz.');
}

function info4(){
  alertify.alert('Balkon Türü Hakkında', 'Balkonunuzun şekil olarak yanları duvar ise gömme, tek tarafı duvar ise L, iki tarafıda dışa doğru ise U şeklinde olabilir.');
}

function info5(){
  alertify.alert('Ürün Cam Rengi Hakkında', 'Şeffaf: renksiz, Füme: Koyu Renkte: Reflekte: Aynalı yapıda, Buzlu: Buzlu, Bronze: Koyu Altın Sarısı...');
}

window.addEventListener('load', (event) => {
  var visibleComp = document.querySelector('#step1');
  visibleComp.style.display = 'block';
  var unvisibleComp1 = document.querySelector('#step2');
  unvisibleComp1.style.display = 'none';
  var unvisibleComp2 = document.querySelector('#step3');
  unvisibleComp2.style.display = 'none';
  var unvisibleComp3 = document.querySelector('#step4');
  unvisibleComp3.style.display = 'none';
  var unvisibleComp4 = document.querySelector('#step5');
  unvisibleComp4.style.display = 'none';
  var unvisibleComp5 = document.querySelector('#step6');
  unvisibleComp5.style.display = 'none';
  var unvisibleComp6 = document.querySelector('#step7');
  unvisibleComp6.style.display = 'none';
});

function step1button() {
  var step1 = document.querySelector('#step1');
  step1.style.display = 'none';
  var step2 = document.querySelector('#step2');
  step2.style.display = 'block';
}

function step2ButtonNext() {
  var step2 = document.querySelector('#step2');
  step2.style.display = 'none';
  var step3 = document.querySelector('#step3');
  step3.style.display = 'block';
}

function step2ButtonBack() {
  var step1 = document.querySelector('#step1');
  step1.style.display = 'block';
  var step2 = document.querySelector('#step2');
  step2.style.display = 'none';
}

function step3ButtonNext() {
  var step3 = document.querySelector('#step3');
  step3.style.display = 'none';
  var step4 = document.querySelector('#step4');
  step4.style.display = 'block';
}

function step3ButtonBack() {
  var step2 = document.querySelector('#step2');
  step2.style.display = 'block';
  var step3 = document.querySelector('#step3');
  step3.style.display = 'none';
}

function step4ButtonNext() {
  var step4 = document.querySelector('#step4');
  step4.style.display = 'none';
  var step5 = document.querySelector('#step5');
  step5.style.display = 'block';
}

function step4ButtonBack() {
  var step3 = document.querySelector('#step3');
  step3.style.display = 'block';
  var step4 = document.querySelector('#step4');
  step4.style.display = 'none';
}

function step5ButtonNext() {
  var step5 = document.querySelector('#step5');
  step5.style.display = 'none';
  var step6 = document.querySelector('#step6');
  step6.style.display = 'block';
}

function step5ButtonBack() {
  var step4 = document.querySelector('#step4');
  step4.style.display = 'block';
  var step5 = document.querySelector('#step5');
  step5.style.display = 'none';
}

function step6ButtonBack() {
  var step5 = document.querySelector('#step5');
  step5.style.display = 'block';
  var step6 = document.querySelector('#step6');
  step6.style.display = 'none';
}

function step7Button() {
  var step7 = document.querySelector('#step7');
  step7.style.display = 'block';
  var step6 = document.querySelector('#step6');
  step6.style.display = 'none';
}

function step7ButtonBack() {
  var step6 = document.querySelector('#step6');
  step6.style.display = 'block';
  var step7 = document.querySelector('#step7');
  step7.style.display = 'none';
}


function GetOffer(){


  return (
    <div className='getOfferBody'>
      <Navbar />
      <div className='get-tt'>
        <div className='getOffer-step1' id='step1'>
          <div className='UserSettingAll'>
            <div className='getoffer-text'>Teklif <br /> vermek<br /> istediğiniz<br /> ürünü <br />seçiniz</div>
            <div className="radiogroup">
              <div className="wrapper">
                <input className="state" type="radio" name="productName" id="a" value="a" />
                <label className="label" htmlFor="a">
                  <div className="indicator"></div>
                  <span className="text">PVC Cam</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="productName" id="b" value="b" />
                <label className="label" htmlFor="b">
                  <div className="indicator"></div>
                  <span className="text">PVC Kapı</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="productName" id="c" value="c" />
                <label className="label" htmlFor="c">
                  <div className="indicator"></div>
                  <span className="text">Katlanır Cam</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="productName" id="d" value="d" />
                <label className="label" htmlFor="d">
                  <div className="indicator"></div>
                  <span className="text">Sürme Cam</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="productName" id="e" value="e" />
                <label className="label" htmlFor="e">
                  <div className="indicator"></div>
                  <span className="text">Volkswagen Kapı</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="productName" id="f" value="f" />
                <label className="label" htmlFor="f">
                  <div className="indicator"></div>
                  <span className="text">Sürme Kapı</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="productName" id="g" value="g" />
                <label className="label" htmlFor="g">
                  <div className="indicator"></div>
                  <span className="text">Çelik Kapı</span>
                </label>
              </div>
            </div>

            <div className="radiogroup">
              <div className="wrapper">
                <input className="state" type="radio" name="productName" id="h" value="h" />
                <label className="label" htmlFor="h">
                  <div className="indicator"></div>
                  <span className="text">Otomatik Kapı</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="productName" id="i" value="i" />
                <label className="label" htmlFor="i">
                  <div className="indicator"></div>
                  <span className="text">Otomatik Panjur</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="productName" id="j" value="j" />
                <label className="label" htmlFor="j">
                  <div className="indicator"></div>
                  <span className="text">Otomatik Kepenk</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="productName" id="k" value="k" />
                <label className="label" htmlFor="k">
                  <div className="indicator"></div>
                  <span className="text">Duş Kabinleri</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="productName" id="l" value="l" />
                <label className="label" htmlFor="l">
                  <div className="indicator"></div>
                  <span className="text">Cam Modelleri</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="productName" id="m" value="m" />
                <label className="label" htmlFor="m">
                  <div className="indicator"></div>
                  <span className="text">Sineklik</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="productName" id="n" value="n" />
                <label className="label" htmlFor="n">
                  <div className="indicator"></div>
                  <span className="text">Aksesuar</span>
                </label>
              </div>
            </div>
            <div className="buttons">
              <button className="getOfferButton" onClick={step1button}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
              <hr/>
              <button onClick={info1} className="getOfferButton"><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
            </div>
          </div>
        </div>

        <div className='getOffer-step2' id='step2'>
          <div className='UserSettingAll'>
            <div className='getoffer-text'>Ürün <br />montaj<br /> yerinin<br /> genişliğini <br />seçiniz.</div>
            <div className="radiogroup">
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidth" id="a1" value="a" />
                <label className="label" htmlFor="a1">
                  <div className="indicator"></div>
                  <span className="text">2 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidth" id="b1" value="b" />
                <label className="label" htmlFor="b1">
                  <div className="indicator"></div>
                  <span className="text">3 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidth" id="c1" value="c" />
                <label className="label" htmlFor="c1">
                  <div className="indicator"></div>
                  <span className="text">4 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidth" id="d1" value="d" />
                <label className="label" htmlFor="d1">
                  <div className="indicator"></div>
                  <span className="text">5 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidth" id="e1" value="e" />
                <label className="label" htmlFor="e1">
                  <div className="indicator"></div>
                  <span className="text">6 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidth" id="f1" value="f" />
                <label className="label" htmlFor="f1">
                  <div className="indicator"></div>
                  <span className="text">8 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidth" id="g1" value="g" />
                <label className="label" htmlFor="g1">
                  <div className="indicator"></div>
                  <span className="text">10 m</span>
                </label>
              </div>
            </div>

            <div className="radiogroup">
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidth" id="h1" value="h" />
                <label className="label" htmlFor="h1">
                  <div className="indicator"></div>
                  <span className="text">12 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidth" id="i1" value="i" />
                <label className="label" htmlFor="i1">
                  <div className="indicator"></div>
                  <span className="text">15 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidth" id="j1" value="j" />
                <label className="label" htmlFor="j1">
                  <div className="indicator"></div>
                  <span className="text">18 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidth" id="k1" value="k" />
                <label className="label" htmlFor="k1">
                  <div className="indicator"></div>
                  <span className="text">20 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidth" id="l1" value="l" />
                <label className="label" htmlFor="l1">
                  <div className="indicator"></div>
                  <span className="text">25 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidth" id="m1" value="m" />
                <label className="label" htmlFor="m1">
                  <div className="indicator"></div>
                  <span className="text">30 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeWidth" id="n1" value="n" />
                <label className="label" htmlFor="n1">
                  <div className="indicator"></div>
                  <span className="text">35+ m</span>
                </label>
              </div>
            </div>
            <div className="buttons">
              <button className="getOfferButton" onClick={step2ButtonNext}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
              <hr/>
              <button className="getOfferButton" onClick={step2ButtonBack}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
              <hr/>
              <button className="getOfferButton" onClick={info2}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
            </div>
          </div>
        </div>

        <div className='getOffer-step3' id='step3'>
          <div className='UserSettingAll'>
            <div className='getoffer-text'>Ürün <br />montaj<br /> yerin<br /> yüksekliğini <br />seçiniz</div>
            <div className="radiogroup">
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeight" id="a2" value="1" />
                <label className="label" htmlFor="a2">
                  <div className="indicator"></div>
                  <span className="text">1.00 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeight" id="b2" value="2" />
                <label className="label" htmlFor="b2">
                  <div className="indicator"></div>
                  <span className="text">1.30 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeight" id="c2" value="3" />
                <label className="label" htmlFor="c2">
                  <div className="indicator"></div>
                  <span className="text">1.50 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeight" id="d2" value="d" />
                <label className="label" htmlFor="d2">
                  <div className="indicator"></div>
                  <span className="text">1.70 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeight" id="e2" value="e" />
                <label className="label" htmlFor="e2">
                  <div className="indicator"></div>
                  <span className="text">1.80 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeight" id="f2" value="f" />
                <label className="label" htmlFor="f2">
                  <div className="indicator"></div>
                  <span className="text">1.90 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeight" id="g2" value="g" />
                <label className="label" htmlFor="g2">
                  <div className="indicator"></div>
                  <span className="text">2.00 m</span>
                </label>
              </div>
            </div>

            <div className="radiogroup">
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeight" id="h2" value="h" />
                <label className="label" htmlFor="h2">
                  <div className="indicator"></div>
                  <span className="text">2.10 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeight" id="i2" value="i" />
                <label className="label" htmlFor="i2">
                  <div className="indicator"></div>
                  <span className="text">2.20 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeight" id="j2" value="j" />
                <label className="label" htmlFor="j2">
                  <div className="indicator"></div>
                  <span className="text">2.50 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeight" id="k2" value="k" />
                <label className="label" htmlFor="k2">
                  <div className="indicator"></div>
                  <span className="text">2.70 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeight" id="l2" value="l" />
                <label className="label" htmlFor="l2">
                  <div className="indicator"></div>
                  <span className="text">3.00 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeight" id="m2" value="m" />
                <label className="label" htmlFor="m2">
                  <div className="indicator"></div>
                  <span className="text">3.50 m</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="sizeHeight" id="n2" value="n" />
                <label className="label" htmlFor="n2">
                  <div className="indicator"></div>
                  <span className="text">4.00 m</span>
                </label>
              </div>
            </div>
            <div className="buttons">
              <button className="getOfferButton" onClick={step3ButtonNext}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
              <hr/>
              <button className="getOfferButton" onClick={step3ButtonBack}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
              <hr/>
              <button className="getOfferButton" onClick={info3}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
            </div>
          </div>
        </div>

        <div className='getOffer-step4' id='step4'>
          <div className='UserSettingAll'>
            <div className='getoffer-text'>Montaj <br />yapılacak<br /> balkon<br /> türünü <br />seçiniz</div>
            <div className="radiogroup">
              <div className="wrapper">
                <input className="state" type="radio" name="balconyInfo" id="a3" value="1" />
                <label className="label" htmlFor="a3">
                  <div className="indicator"></div>
                  <span className="text">L Balkon (2 Cephe)</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="balconyInfo" id="b3" value="2" />
                <label className="label" htmlFor="b3">
                  <div className="indicator"></div>
                  <span className="text">Gömme Balkon (1 Cephe)</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="balconyInfo" id="c3" value="3" />
                <label className="label" htmlFor="c3">
                  <div className="indicator"></div>
                  <span className="text">U Balkon(3 Cephe)</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="balconyInfo" id="d3" value="d" />
                <label className="label" htmlFor="d3">
                  <div className="indicator"></div>
                  <span className="text">Yay Balkon (Yuvarlak)</span>
                </label>
              </div>
            </div>
            <div className="buttons">
              <button className="getOfferButton" onClick={step4ButtonNext}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
              <hr/>
              <button className="getOfferButton" onClick={step4ButtonBack}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
              <hr/>
              <button className="getOfferButton" onClick={info4}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
            </div>
          </div>
        </div>

        <div className='getOffer-step5' id='step5'>
          <div className='UserSettingAll'>
            <div className='getoffer-text'>Montaj <br />yapılacak<br /> cam<br /> rengini <br />seçiniz</div>
            <div className="radiogroup">
              <div className="wrapper">
                <input className="state" type="radio" name="windowInfo" id="a4" value="1" />
                <label className="label" htmlFor="a4">
                  <div className="indicator"></div>
                  <span className="text">Şeffaf</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="windowInfo" id="b4" value="2" />
                <label className="label" htmlFor="b4">
                  <div className="indicator"></div>
                  <span className="text">Füme</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="windowInfo" id="c4" value="3" />
                <label className="label" htmlFor="c4">
                  <div className="indicator"></div>
                  <span className="text">Reflekte</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="windowInfo" id="d4" value="d" />
                <label className="label" htmlFor="d4">
                  <div className="indicator"></div>
                  <span className="text">Buzlu</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="windowInfo" id="e4" value="d" />
                <label className="label" htmlFor="e4">
                  <div className="indicator"></div>
                  <span className="text">Bronze</span>
                </label>
              </div>
              <div className="wrapper">
                <input className="state" type="radio" name="windowInfo" id="f4" value="d" />
                <label className="label" htmlFor="f4">
                  <div className="indicator"></div>
                  <span className="text">Karar vermedim / farketmez</span>
                </label>
              </div>
            </div>
            <div className="buttons">
              <button className="getOfferButton" onClick={step5ButtonNext}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
              <hr/>
              <button className="getOfferButton" onClick={step5ButtonBack}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
              <hr/>
              <button className="getOfferButton" onClick={info5}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
            </div>
          </div>
        </div>

        <div className='getOffer-step6' id='step6'>
          <div className='UserSettingAll'>
            <div className='getoffer-text'>Aklınıza <br />gelen<br /> diğer<br /> detayları <br />yazablirsiniz.</div>
            <div className="radiogroup-ex">
              
            <textarea className="getOffer-input" type="text" placeholder='Aklınıza gelenleri yazabilirsiniz. Örneğin; balkon ortasında sütun var, yanları ağaç/demir/beton, mermer yok vb.)'/>
            </div>
            <div className="buttons">
              <button className="getOfferButton"><i className="fa-solid fa-upload"></i> Teklif Yayınla</button>
              <hr/>
              <button className="getOfferButton" onClick={step7Button}><i className="fa-solid fa-eye"></i> Teklifimi Göster</button>
              <hr/>
              <button className="getOfferButton" onClick={step6ButtonBack}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
            </div>
          </div>
        </div>

        <div className='getOffer-step4' id='step7'>
          <div className='UserSettingAll'>
            <div className='getoffer-text'>Teklifinizi <br />gözden<br /> geçiriniz.</div>
            <div className="radiogroup">

              <div className="wrapper">
                <label className="label">
                <i className="fa-solid fa-check tik"></i>
                  <div className="text">Katlanır Cam</div>
                </label>
              </div>
              <div className="wrapper">
                <label className="label">
                <i className="fa-solid fa-check tik"></i>
                  <div className="text">8 m</div>
                </label>
              </div>
              <div className="wrapper">
                <label className="label">
                <i className="fa-solid fa-check tik"></i>
                  <div className="text">2.50 m</div>
                </label>
              </div>
              <div className="wrapper">
                <label className="label">
                <i className="fa-solid fa-check tik"></i>
                  <div className="text">L Balkon (2 Cephe)</div>
                </label>
              </div>
              <div className="wrapper">
                <label className="label">
                <i className="fa-solid fa-check tik"></i>
                  <div className="text">Reflekte</div>
                </label>
              </div>
              
            </div>
            <div className="buttons">
              <button className="getOfferButton" onClick={step7ButtonBack}>Kapat</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )}
export default GetOffer;