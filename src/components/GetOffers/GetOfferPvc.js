import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Navbar from '../Dashboard/Navbar';
import alertify from 'alertifyjs';
import axios from 'axios';
import '../../assets/scss/getOffer.scss';
import 'alertifyjs/build/css/alertify.min.css';

function info1() {
    alertify.alert('Seçilecek Ürünler Hakkında', 'Ölçülerinizi montaj yerinin eni ve yüksekliği olacak şekilde alınız. Verilen teklifler yalnızca yaklaşık sonuçları verebilir. Kesin bilgi içermemektedir!');
}

function info2() {
    alertify.alert('En Ölçüsü Hakkında', 'Ölçüm yerinin duvarlarının bir ucundan diğerine olacak şekilde metre yardımıyla ölçünüz. Daha doğru ölçüler için alt, orta ve üst taraflardan olacak çekilde farklı yerlerden alıp ortalama yaklaşık sonucu seçebilirsiniz.');
}

function info3() {
    alertify.alert('Yükseklik Ölçüsü Hakkında', 'Ölçüm yerinin üst duvarların bir ucundan aşağı mermere olacak şekilde metre yardımıyla ölçünüz. Daha doğru ölçüler için sol, orta ve sağ taraflardan olacak çekilde farklı yerlerden alıp ortalama yaklaşık sonucu seçebilirsiniz.');
}

function info4() {
    alertify.alert('Adet Hakkında', 'Yaptırmak istediğiniz üründen kaç adet istediğinizi seçiniz.');
}

function info5() {
    alertify.alert('Ürün Cam Rengi Hakkında', 'Şeffaf: renksiz, Füme: Koyu Renkte: Reflekte: Aynalı yapıda, Buzlu: Buzlu, Bronze: Koyu Altın Sarısı...');
}

function info6() {
    alertify.alert('Teklif Kontrol', 'Teklifinizi aşağıdaki kutudan kontrol ediniz. Eğer istemediğiniz ya da yanlış olan seçim varsa o adıma geri gidip düzenleyebilirsiniz.');
}

function GetOfferPvc() {

    const [divs, setDivs] = useState(1);
    const [inputCheck, setInputCheck] = useState();
    const [inputCheck1, setInputCheck1] = useState();
    const [inputCheck2, setInputCheck2] = useState();
    const [inputCheck3, setInputCheck3] = useState();
    const [inputCheck4, setInputCheck4] = useState();
    const [textArea, setTextArea] = useState();
    const navigate = useNavigate();


    const saveOffer = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/Offers', {
                productName: inputCheck,
                productWidth: inputCheck1,
                productHeight: inputCheck2,
                productPlace: inputCheck3,
                productWindow: inputCheck4,
                userComment: textArea,
            })
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='getOfferPvcContent'>
            <Navbar />
            <div className='get-tt'>

                {divs === 1 ?
                    <div id='step1Pvc'>
                        c<div className='UserSettingAll'>
                            <div className='getoffer-text'>(1.Adım)<br /><hr />Teklif vermek istediğiniz ürünü seçiniz</div>
                            <div className="radiogroup">
                                <div className="wrapper">
                                    <input className="state" type="radio" name="productNamePvc" id="a" value="PVC Cam" onChange={e => setInputCheck(e.target.value)} />
                                    <label className="label" htmlFor="a">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>PVC Cam</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="productNamePvc" id="b" value="PVC Kapı" onChange={e => setInputCheck(e.target.value)} />
                                    <label className="label" htmlFor="b">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>PVC Kapı</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="productNamePvc" id="c" value="Volkswagen Kapı" onChange={e => setInputCheck(e.target.value)} />
                                    <label className="label" htmlFor="c">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>Volkswagen Kapı</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="productNamePvc" id="d" value="Sürme Kapı" onChange={e => setInputCheck(e.target.value)} />
                                    <label className="label" htmlFor="d">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>Sürme Kapı</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="productNamePvc" id="e" value="Çelik Kapı" onChange={e => setInputCheck(e.target.value)} />
                                    <label className="label" htmlFor="e">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>Çelik Kapı</span>
                                    </label>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className="getOfferButton" onClick={() => { setDivs(2) }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                                <hr />
                                <button onClick={info1} className="getOfferButton"><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                                <hr />
                                <Link className="getOfferButton" to='/getOffer/category'><i className="fa-solid fa-house"></i> Kategorilere Dön</Link>
                            </div>
                        </div>
                    </div> : divs === 2 ?

                        <div id='step2Pvc'>
                            <div className='UserSettingAll'>
                                <div className='getoffer-text'>(2.Adım)<br /><hr />Ürün montaj yerinin genişliğini seçiniz.</div>
                                <div className="radiogroup">
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="sizeWidthPvc" id="a1" value="50 cm" onChange={e => setInputCheck1(e.target.value)} />
                                        <label className="label" htmlFor="a1">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>50 cm</span>
                                        </label>
                                    </div>
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="sizeWidthPvc" id="b1" value="60 cm" onChange={e => setInputCheck1(e.target.value)} />
                                        <label className="label" htmlFor="b1">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>60 cm</span>
                                        </label>
                                    </div>
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="sizeWidthPvc" id="c1" value="70 cm" onChange={e => setInputCheck1(e.target.value)} />
                                        <label className="label" htmlFor="c1">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>70 cm</span>
                                        </label>
                                    </div>
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="sizeWidthPvc" id="d1" value="80 cm" onChange={e => setInputCheck1(e.target.value)} />
                                        <label className="label" htmlFor="d1">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>80 cm</span>
                                        </label>
                                    </div>
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="sizeWidthPvc" id="e1" value="85 cm" onChange={e => setInputCheck1(e.target.value)} />
                                        <label className="label" htmlFor="e1">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>85 cm</span>
                                        </label>
                                    </div>
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="sizeWidthPvc" id="f1" value="90 cm" onChange={e => setInputCheck1(e.target.value)} />
                                        <label className="label" htmlFor="f1">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>90 cm</span>
                                        </label>
                                    </div>
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="sizeWidthPvc" id="g1" value="95 cm" onChange={e => setInputCheck1(e.target.value)} />
                                        <label className="label" htmlFor="g1">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>95 cm</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="radiogroup">
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="sizeWidthPvc" id="h1" value="100 cm" onChange={e => setInputCheck1(e.target.value)} />
                                        <label className="label" htmlFor="h1">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>100 cm</span>
                                        </label>
                                    </div>
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="sizeWidthPvc" id="i1" value="110 cm" onChange={e => setInputCheck1(e.target.value)} />
                                        <label className="label" htmlFor="i1">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>110 cm</span>
                                        </label>
                                    </div>
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="sizeWidthPvc" id="j1" value="120 cm" onChange={e => setInputCheck1(e.target.value)} />
                                        <label className="label" htmlFor="j1">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>120 cm</span>
                                        </label>
                                    </div>
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="sizeWidthPvc" id="k1" value="150 cm" onChange={e => setInputCheck1(e.target.value)} />
                                        <label className="label" htmlFor="k1">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>150 cm</span>
                                        </label>
                                    </div>
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="sizeWidthPvc" id="l1" value="180 cm" onChange={e => setInputCheck1(e.target.value)} />
                                        <label className="label" htmlFor="l1">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>180 cm</span>
                                        </label>
                                    </div>
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="sizeWidthPvc" id="m1" value="200 cm" onChange={e => setInputCheck1(e.target.value)} />
                                        <label className="label" htmlFor="m1">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>200 cm</span>
                                        </label>
                                    </div>
                                    <div className="wrapper">
                                        <input className="state" type="radio" name="sizeWidthPvc" id="n1" value="220 cm +" onChange={e => setInputCheck1(e.target.value)} />
                                        <label className="label" htmlFor="n1">
                                            <div className="indicator"></div>
                                            <span className='textOfferCss'>220 cm +</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <button className="getOfferButton" onClick={() => { setDivs(3) }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                                    <hr />
                                    <button className="getOfferButton" onClick={() => { setDivs(1) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                                    <hr />
                                    <button className="getOfferButton" onClick={info2}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                                </div>
                            </div>
                        </div> : divs === 3 ?

                            <div id='step3Pvc'>
                                <div className='UserSettingAll'>
                                    <div className='getoffer-text'>(3.Adım)<br /><hr />Ürün montaj yerin yüksekliğini seçiniz</div>
                                    <div className="radiogroup">
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeHeightPvc" id="a2" value="1.00 m" onChange={e => setInputCheck2(e.target.value)} />
                                            <label className="label" htmlFor="a2">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>1.00 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeHeightPvc" id="b2" value="1.30 m" onChange={e => setInputCheck2(e.target.value)} />
                                            <label className="label" htmlFor="b2">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>1.30 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeHeightPvc" id="c2" value="1.50 m" onChange={e => setInputCheck2(e.target.value)} />
                                            <label className="label" htmlFor="c2">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>1.50 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeHeightPvc" id="d2" value="1.70 m" onChange={e => setInputCheck2(e.target.value)} />
                                            <label className="label" htmlFor="d2">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>1.70 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeHeightPvc" id="e2" value="1.80 m" onChange={e => setInputCheck2(e.target.value)} />
                                            <label className="label" htmlFor="e2">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>1.80 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeHeightPvc" id="f2" value="1.90 m" onChange={e => setInputCheck2(e.target.value)} />
                                            <label className="label" htmlFor="f2">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>1.90 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeHeightPvc" id="g2" value="2.00 m" onChange={e => setInputCheck2(e.target.value)} />
                                            <label className="label" htmlFor="g2">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>2.00 m</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="radiogroup">
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeHeightPvc" id="h2" value="2.10 m" onChange={e => setInputCheck2(e.target.value)} />
                                            <label className="label" htmlFor="h2">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>2.10 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeHeightPvc" id="i2" value="2.20 m" onChange={e => setInputCheck2(e.target.value)} />
                                            <label className="label" htmlFor="i2">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>2.20 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeHeightPvc" id="j2" value="2.30 m" onChange={e => setInputCheck2(e.target.value)} />
                                            <label className="label" htmlFor="j2">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>2.30 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeHeightPvc" id="k2" value="2.50 m" onChange={e => setInputCheck2(e.target.value)} />
                                            <label className="label" htmlFor="k2">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>2.50 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeHeightPvc" id="l2" value="3.00 m" onChange={e => setInputCheck2(e.target.value)} />
                                            <label className="label" htmlFor="l2">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>3.00 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeHeightPvc" id="m2" value="3.50 m" onChange={e => setInputCheck2(e.target.value)} />
                                            <label className="label" htmlFor="m2">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>3.50 m</span>
                                            </label>
                                        </div>
                                        <div className="wrapper">
                                            <input className="state" type="radio" name="sizeHeightPvc" id="n2" value="4.00 m" onChange={e => setInputCheck2(e.target.value)} />
                                            <label className="label" htmlFor="n2">
                                                <div className="indicator"></div>
                                                <span className='textOfferCss'>4.00 m</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="buttons">
                                        <button className="getOfferButton" onClick={() => { setDivs(4) }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                                        <hr />
                                        <button className="getOfferButton" onClick={() => { setDivs(2) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                                        <hr />
                                        <button className="getOfferButton" onClick={info3}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                                    </div>
                                </div>
                            </div> : divs === 4 ?

                                <div id='step4Pvc'>
                                    <div className='UserSettingAll'>
                                        <div className='getoffer-text'>(4.Adım)<br /><hr />Tercih edilen üründen kaç adet istiyorsunuz?</div>
                                        <div className="radiogroup">
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="balconyInfoPvc" id="a3" value="1 adet" onChange={e => setInputCheck3(e.target.value)} />
                                                <label className="label" htmlFor="a3">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>1</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="balconyInfoPvc" id="b3" value="2 adet" onChange={e => setInputCheck3(e.target.value)} />
                                                <label className="label" htmlFor="b3">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>2</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="balconyInfoPvc" id="c3" value="3 adet" onChange={e => setInputCheck3(e.target.value)} />
                                                <label className="label" htmlFor="c3">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>3</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="balconyInfoPvc" id="e3" value="4 adet" onChange={e => setInputCheck3(e.target.value)} />
                                                <label className="label" htmlFor="e3">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>4</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="balconyInfoPvc" id="f3" value="5 adet" onChange={e => setInputCheck3(e.target.value)} />
                                                <label className="label" htmlFor="f3">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>5</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="balconyInfoPvc" id="g3" value="6 adet" onChange={e => setInputCheck3(e.target.value)} />
                                                <label className="label" htmlFor="g3">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>6</span>
                                                </label>
                                            </div>
                                            <div className="wrapper">
                                                <input className="state" type="radio" name="balconyInfoPvc" id="h3" value="7+ adet" onChange={e => setInputCheck3(e.target.value)} />
                                                <label className="label" htmlFor="h3">
                                                    <div className="indicator"></div>
                                                    <span className='textOfferCss'>7+</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="buttons">
                                            <button className="getOfferButton" onClick={() => { setDivs(5) }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                                            <hr />
                                            <button className="getOfferButton" onClick={() => { setDivs(3) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                                            <hr />
                                            <button className="getOfferButton" onClick={info4}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                                        </div>
                                    </div>
                                </div> : divs === 5 ?

                                    <div id='step5Pvc'>
                                        <div className='UserSettingAll'>
                                            <div className='getoffer-text'>(5.Adım)<br /><hr />Montaj yapılacak ürün için cam rengini seçiniz</div>
                                            <div className="radiogroup">
                                                <div className="wrapper">
                                                    <input className="state" type="radio" name="windowInfo" id="a4" value="Şeffaf Cam" onChange={e => setInputCheck4(e.target.value)} />
                                                    <label className="label" htmlFor="a4">
                                                        <div className="indicator"></div>
                                                        <span className='textOfferCss'>Şeffaf Cam</span>
                                                    </label>
                                                </div>
                                                <div className="wrapper">
                                                    <input className="state" type="radio" name="windowInfo" id="b4" value="Füme Cam" onChange={e => setInputCheck4(e.target.value)} />
                                                    <label className="label" htmlFor="b4">
                                                        <div className="indicator"></div>
                                                        <span className='textOfferCss'>Füme Cam</span>
                                                    </label>
                                                </div>
                                                <div className="wrapper">
                                                    <input className="state" type="radio" name="windowInfo" id="c4" value="Reflekte Cam" onChange={e => setInputCheck4(e.target.value)} />
                                                    <label className="label" htmlFor="c4">
                                                        <div className="indicator"></div>
                                                        <span className='textOfferCss'>Reflekte Cam</span>
                                                    </label>
                                                </div>
                                                <div className="wrapper">
                                                    <input className="state" type="radio" name="windowInfo" id="d4" value="Buzlu Cam" onChange={e => setInputCheck4(e.target.value)} />
                                                    <label className="label" htmlFor="d4">
                                                        <div className="indicator"></div>
                                                        <span className='textOfferCss'>Buzlu Cam</span>
                                                    </label>
                                                </div>
                                                <div className="wrapper">
                                                    <input className="state" type="radio" name="windowInfo" id="e4" value="Bronze Cam" onChange={e => setInputCheck4(e.target.value)} />
                                                    <label className="label" htmlFor="e4">
                                                        <div className="indicator"></div>
                                                        <span className='textOfferCss'>Bronze Cam</span>
                                                    </label>
                                                </div>
                                                <div className="wrapper">
                                                    <input className="state" type="radio" name="windowInfo" id="f4" value="Karar vermedim / farketmez" onChange={e => setInputCheck4(e.target.value)} />
                                                    <label className="label" htmlFor="f4">
                                                        <div className="indicator"></div>
                                                        <span className='textOfferCss'>Karar vermedim / farketmez</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="buttons">
                                                <button className="getOfferButton" onClick={() => { setDivs(6) }}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                                                <hr />
                                                <button className="getOfferButton" onClick={() => { setDivs(4) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                                                <hr />
                                                <button className="getOfferButton" onClick={info5}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                                            </div>
                                        </div>
                                    </div> : divs === 6 ?

                                        <div id='step6Pvc'>
                                            <div className='UserSettingAll'>
                                                <div className='getoffer-text'>(6.Adım)<br /><hr />Aklınıza gelen diğer detayları yazablirsiniz.</div>
                                                <div className="radiogroup-ex">

                                                    <textarea className="getOffer-input" onChange={e => setTextArea(e.target.value)} type="text" placeholder='Aklınıza gelenleri yazabilirsiniz. Örneğin; yanlar ağaç, sıva yok, mermer yok vb.)' />
                                                </div>
                                                <div className="buttons">
                                                    <button className="getOfferButton" onClick={() => { setDivs(7) }}><i className="fa-solid fa-eye"></i> Teklifimi Göster</button>
                                                    <hr />
                                                    <button className="getOfferButton" onClick={() => { setDivs(5) }}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                                                </div>
                                            </div>
                                        </div> : divs === 7 ?

                                            <div id='step7Pvc'>
                                                <div className='UserSettingAll'>
                                                    <div className='getoffer-text'>Teklifinizi gözden geçiriniz.</div>
                                                    <div className="radiogroupPrev">

                                                        <div className="wrapper">
                                                            <label className="label">
                                                                <div className='textPrev'>Seçilen Ürün:</div>
                                                                <i className="fa-solid fa-check tik"></i>
                                                                <div className='textOfferCssOut'>{inputCheck}</div>
                                                            </label>
                                                        </div>
                                                        <hr />
                                                        <div className="wrapper">
                                                            <label className="label">
                                                                <div className='textPrev'>Ürün Genişliği:</div>
                                                                <i className="fa-solid fa-check tik"></i>
                                                                <div className='textOfferCssOut'>{inputCheck1}</div>
                                                            </label>
                                                        </div>
                                                        <hr />
                                                        <div className="wrapper">
                                                            <label className="label">
                                                                <div className='textPrev'>Ürün Yükseklik:</div>
                                                                <i className="fa-solid fa-check tik"></i>
                                                                <div className='textOfferCssOut'>{inputCheck2}</div>
                                                            </label>
                                                        </div>
                                                        <hr />
                                                        <div className="wrapper">
                                                            <label className="label">
                                                                <div className='textPrev'>Ürün Adedi:</div>
                                                                <i className="fa-solid fa-check tik"></i>
                                                                <div className='textOfferCssOut'>{inputCheck3}</div>
                                                            </label>
                                                        </div>
                                                        <hr />
                                                        <div className="wrapper">
                                                            <label className="label">
                                                                <div className='textPrev'>Cam Çeşidi:</div>
                                                                <i className="fa-solid fa-check tik"></i>
                                                                <div className='textOfferCssOut'>{inputCheck4}</div>
                                                            </label>
                                                        </div>
                                                        <hr />
                                                        <div className="wrapper">
                                                            <label className="label">
                                                                <div className='textPrev'>Açıklama:</div>
                                                                <i className="fa-solid fa-check tik"></i>
                                                                <div className='textOfferCssOut'>{textArea}</div>
                                                            </label>
                                                        </div>

                                                    </div>
                                                    <div className="buttons">
                                                        <button onClick={(e) => saveOffer(e)} className="getOfferButton"><i className="fa-solid fa-upload"></i> Teklif Yayınla</button>
                                                        <hr />
                                                        <button onClick={info6} className="getOfferButton"><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                                                        <hr />
                                                        <button className="getOfferButton" onClick={() => { setDivs(6) }}><i className="fa-solid fa-circle-xmark"></i> Kapat</button>
                                                    </div>
                                                </div>
                                            </div> : null}
            </div>
        </div>
    )
}
export default GetOfferPvc;