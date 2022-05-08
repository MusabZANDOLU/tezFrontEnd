import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import Navbar from './Navbar'

import alertify from 'alertifyjs';
import '../assets/scss/getOffer.scss';

function info1() {
    alertify.alert('Seçilecek Ürünler Hakkında', 'Ölçülerinizi balkonun eni ve yüksekliği olacak şekilde alınız. Verilen teklifler yalnızca yaklaşık sonuçları verebilir. Kesin bilgi içermemektedir!');
}

function info2() {
    alertify.alert('Balkon En Ölçüsü Hakkında', 'Balkonunuzun bir ucundan diğerine olacak şekilde metre yardımıyla ölçünüz. L ya da U şeklindeki balkonlar için tek balkon gibi düşünüp ölçünüzü alabilirsiniz.');
}

function info3() {
    alertify.alert('Balkon Yükseklik Ölçüsü Hakkında', 'Balkonunuzun zeminde mermerden tavana ölçüsünü alarak yazabilirsiniz. Daha doğru sonuçlar için balkonun enine baş orta ve sondan yükseklik ölçğsü alabilirsiniz.');
}

function info4() {
    alertify.alert('Balkon Türü Hakkında', 'Balkonunuzun şekil olarak yanları duvar ise gömme, tek tarafı duvar ise L, iki tarafıda dışa doğru ise U şeklinde olabilir.');
}

function info5() {
    alertify.alert('Ürün Cam Rengi Hakkında', 'Şeffaf: renksiz, Füme: Koyu Renkte: Reflekte: Aynalı yapıda, Buzlu: Buzlu, Bronze: Koyu Altın Sarısı...');
}



function GetOfferSwatter() {

    const[divs, setDivs]=useState(1);

    return (
        <div>
            <div className='getOfferPvcContent'>
                <Navbar />
                <div className='get-tt'>

                    {divs===1?

                    <div id='step1Swatter'>
                        <div className='UserSettingAll'>
                            <div className='getoffer-text'>(1.Adım)<br /><hr />Teklif vermek istediğiniz sineklik türünü seçiniz.</div>
                            <div className="radiogroup">
                                <div className="wrapper">
                                    <input className="state" type="radio" name="swatterName" id="a" value="a" />
                                    <label className="label" htmlFor="a">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>Sürgülü Sineklik</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="swatterName" id="b" value="b" />
                                    <label className="label" htmlFor="b">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>Akordiyon / Plise Sineklik</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="swatterName" id="e" value="e" />
                                    <label className="label" htmlFor="e">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>Menteşeli Sineklik</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="swatterName" id="f" value="f" />
                                    <label className="label" htmlFor="f">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>Sabit Sineklik</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="swatterName" id="g" value="g" />
                                    <label className="label" htmlFor="g">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>Sarhoş (Serbest) Sineklik</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="swatterName" id="m" value="m" />
                                    <label className="label" htmlFor="m">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>Mıknatıslı Sineklik</span>
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
                    </div>: divs===2?

                    <div id='step2Swatter'>
                        <div className='UserSettingAll'>
                            <div className='getoffer-text'>(2.Adım)<br /><hr />Pencere / Kapı en ölçüsünü seçiniz.</div>
                            <div className="radiogroup">
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeWidth" id="a1" value="a" />
                                    <label className="label" htmlFor="a1">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>40- cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeWidth" id="b1" value="b" />
                                    <label className="label" htmlFor="b1">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>45 cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeWidth" id="c1" value="c" />
                                    <label className="label" htmlFor="c1">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>50 cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeWidth" id="d1" value="d" />
                                    <label className="label" htmlFor="d1">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>55 cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeWidth" id="e1" value="e" />
                                    <label className="label" htmlFor="e1">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>60 cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeWidth" id="f1" value="f" />
                                    <label className="label" htmlFor="f1">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>70 cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeWidth" id="g1" value="g" />
                                    <label className="label" htmlFor="g1">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>80 cm</span>
                                    </label>
                                </div>
                            </div>

                            <div className="radiogroup">
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeWidth" id="h1" value="h" />
                                    <label className="label" htmlFor="h1">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>90 cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeWidth" id="i1" value="i" />
                                    <label className="label" htmlFor="i1">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>100 cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeWidth" id="j1" value="j" />
                                    <label className="label" htmlFor="j1">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>110 cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeWidth" id="k1" value="k" />
                                    <label className="label" htmlFor="k1">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>120 cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeWidth" id="l1" value="l" />
                                    <label className="label" htmlFor="l1">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>130 cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeWidth" id="m1" value="m" />
                                    <label className="label" htmlFor="m1">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>140 cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeWidth" id="n1" value="n" />
                                    <label className="label" htmlFor="n1">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>150+ cm</span>
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
                    </div>: divs===3?

                    <div id='step3Swatter'>
                        <div className='UserSettingAll'>
                            <div className='getoffer-text'>(3.Adım)<br /><hr />Pencere / Kapı boy ölçüsünü seçiniz.</div>
                            <div className="radiogroup">
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeHeight" id="a2" value="1" />
                                    <label className="label" htmlFor="a2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>50 cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeHeight" id="b2" value="2" />
                                    <label className="label" htmlFor="b2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>60 cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeHeight" id="c2" value="3" />
                                    <label className="label" htmlFor="c2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>70 cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeHeight" id="d2" value="d" />
                                    <label className="label" htmlFor="d2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>80 cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeHeight" id="e2" value="e" />
                                    <label className="label" htmlFor="e2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>90 cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeHeight" id="f2" value="f" />
                                    <label className="label" htmlFor="f2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>100 cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeHeight" id="g2" value="g" />
                                    <label className="label" htmlFor="g2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>110 cm</span>
                                    </label>
                                </div>
                            </div>

                            <div className="radiogroup">
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeHeight" id="h2" value="h" />
                                    <label className="label" htmlFor="h2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>120 cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeHeight" id="i2" value="i" />
                                    <label className="label" htmlFor="i2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>135 cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeHeight" id="j2" value="j" />
                                    <label className="label" htmlFor="j2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>150 cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeHeight" id="k2" value="k" />
                                    <label className="label" htmlFor="k2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>165 cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeHeight" id="l2" value="l" />
                                    <label className="label" htmlFor="l2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>190 cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeHeight" id="m2" value="m" />
                                    <label className="label" htmlFor="m2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>200 cm</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="sizeHeight" id="n2" value="n" />
                                    <label className="label" htmlFor="n2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>220+ cm</span>
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
                    </div>: divs===4?

                    <div id='step4Swatter'>
                        <div className='UserSettingAll'>
                            <div className='getoffer-text'>(4.Adım)<br /><hr />Bu ölçüde kaç adet sineklik istediğinizi seçiniz.</div>
                            <div className="radiogroup">
                                <div className="wrapper">
                                    <input className="state" type="radio" name="swatterPiece" id="h2" value="h" />
                                    <label className="label" htmlFor="h2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>1</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="swatterPiece" id="i2" value="i" />
                                    <label className="label" htmlFor="i2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>2</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="swatterPiece" id="j2" value="j" />
                                    <label className="label" htmlFor="j2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>3</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="swatterPiece" id="k2" value="k" />
                                    <label className="label" htmlFor="k2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>4</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="swatterPiece" id="l2" value="l" />
                                    <label className="label" htmlFor="l2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>5</span>
                                    </label>
                                </div>
                            </div>

                            <div className="radiogroup">
                                <div className="wrapper">
                                    <input className="state" type="radio" name="swatterPiece" id="h2" value="h" />
                                    <label className="label" htmlFor="h2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>6</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="swatterPiece" id="i2" value="i" />
                                    <label className="label" htmlFor="i2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>7</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="swatterPiece" id="j2" value="j" />
                                    <label className="label" htmlFor="j2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>8</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="swatterPiece" id="k2" value="k" />
                                    <label className="label" htmlFor="k2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>9</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="swatterPiece" id="l2" value="l" />
                                    <label className="label" htmlFor="l2">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>10</span>
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
                    </div>: divs===5?

                    <div id='step5Swatter'>
                        <div className='UserSettingAll'>
                            <div className='getoffer-text'>(5.Adım)<br /><hr />Sineklik kasa rengini seçiniz.</div>
                            <div className="radiogroup">
                                <div className="wrapper">
                                    <input className="state" type="radio" name="windowInfo" id="a4" value="1" />
                                    <label className="label" htmlFor="a4">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>Beyaz</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="windowInfo" id="b4" value="2" />
                                    <label className="label" htmlFor="b4">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>Bronze</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="windowInfo" id="c4" value="3" />
                                    <label className="label" htmlFor="c4">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>Antrasit Gri</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="windowInfo" id="d4" value="d" />
                                    <label className="label" htmlFor="d4">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>Altın Meşe (Açık Kahverengi)</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="windowInfo" id="e4" value="d" />
                                    <label className="label" htmlFor="e4">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>Budaklı Meşe (Kahverengi)</span>
                                    </label>
                                </div>
                                <div className="wrapper">
                                    <input className="state" type="radio" name="windowInfo" id="f4" value="d" />
                                    <label className="label" htmlFor="f4">
                                        <div className="indicator"></div>
                                        <span className='textOfferCss'>Brown (Koyu Kahverengi)</span>
                                    </label>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className="getOfferButton" onClick={()=>{setDivs(6)}}><i className="fa-solid fa-arrow-right-long"></i> Sonraki Adım</button>
                                <hr />
                                <button className="getOfferButton" onClick={()=>{setDivs(4)}}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                                <hr />
                                <button className="getOfferButton" onClick={info5}><i className="fa-solid fa-circle-question"></i> Bilgi Al</button>
                            </div>
                        </div>
                    </div>: divs===6?

                    <div id='step6Swatter'>
                        <div className='UserSettingAll'>
                            <div className='getoffer-text'>(6.Adım)<br /><hr />Aklınıza gelen diğer detayları yazabilirsiniz.</div>
                            <div className="radiogroup-ex">

                                <textarea className="getOffer-input" type="text" placeholder='Aklınıza gelenleri yazabilirsiniz. Örneğin; balkon ortasında sütun var, yanları ağaç/demir/beton, mermer yok vb.)' />
                            </div>
                            <div className="buttons">
                                <button className="getOfferButton"><i className="fa-solid fa-upload"></i> Teklif Yayınla</button>
                                <hr />
                                <button className="getOfferButton" onClick={()=>{setDivs(7)}}><i className="fa-solid fa-eye"></i> Teklifimi Göster</button>
                                <hr />
                                <button className="getOfferButton" onClick={()=>{setDivs(5)}}><i className="fa-solid fa-arrow-left-long"></i> Önceki Adım</button>
                            </div>
                        </div>
                    </div>: divs===7?

                    <div id='step7Swatter'>
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
                                <button className="getOfferButton" onClick={()=>{setDivs(6)}}>Kapat</button>
                            </div>
                        </div>
                    </div>:null}

                </div>
            </div>
        </div>
    )
}

export default GetOfferSwatter;