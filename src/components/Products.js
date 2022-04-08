import React from 'react'

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


import '../assets/scss/products.scss';


export default function Products() {
    return (
        <div>
            <Navbar />
            <div className='products-all-content'>
                <div className='products-text'>Tüm Ürünlerimiz</div>
                <hr />

                <div className='product-cover'>
                    <div className='products-all-table'>
                        <div className='product-sttng'>
                            <img className='product-logo' src={require('../assets/images/product/pvc.png')} alt='' />
                            <div className='prdct-text'>
                                <div className='borders'>
                                    <div className='product-name'>Ürün Adı</div>
                                    <div className='product-name-contnt'>PVC Cam & Kapı</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Ürün Kalınlığı</div>
                                    <div className='product-contnt'>70mm</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Kayıt Şekli</div>
                                    <div className='product-contnt'>Düz, Damlacık Kanat</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Ürün Renkleri</div>
                                    <div className='product-contnt'>Beyaz, Altın Meşe, Antrasit Gri, Budaklı Meşe, Fındık, Gri</div>
                                </div>
                            </div>
                            <div className='prod-url'>Ürünle ilgili teklif almak için <a href="/getOffer"><i className="fa-solid fa-link"></i></a> tıklayınız</div>
                        </div>
                    </div>

                    <div className='products-all-table'>
                        <div className='product-sttng'>
                            <img className='product-logo' src={require('../assets/images/product/surme-sistemleri.png')} alt='' />
                            <div className='prdct-text'>
                                <div className='borders'>
                                    <div className='product-name'>Ürün Adı</div>
                                    <div className='product-name-contnt'>Katlanır & Sürme Cam Modelleri</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Ürün Malzemesi</div>
                                    <div className='product-contnt'>Alüminyum</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Cam Rengi</div>
                                    <div className='product-contnt'>Şeffaf, Füme, Aynalı, Buzlu</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Ürün Renkleri</div>
                                    <div className='product-contnt'>Beyaz, Altın Meşe, Antrasit Gri, Bronz, Gri</div>
                                </div>
                            </div>
                            <div className='prod-url'>Ürünle ilgili teklif almak için <a href="/getOffer"><i className="fa-solid fa-link"></i></a> tıklayınız</div>
                        </div>
                    </div>

                    <div className='products-all-table'>
                        <div className='product-sttng'>
                            <img className='product-logo' src={require('../assets/images/product/volkswagen.jpg')} alt='' />
                            <div className='prdct-text'>
                                <div className='borders'>
                                    <div className='product-name'>Ürün Adı</div>
                                    <div className='product-name-contnt'>Volkswagen & Sürme Kapı Modelleri</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Ürün Kalınlığı</div>
                                    <div className='product-contnt'>70mm</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Kayıt Şekli</div>
                                    <div className='product-contnt'>Düz, Damlacık Kanat</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Ürün Renkleri</div>
                                    <div className='product-contnt'>Beyaz, Altın Meşe, Antrasit Gri, Budaklı Meşe, Fındık, Gri</div>
                                </div>
                            </div>
                            <div className='prod-url'>Ürünle ilgili teklif almak için <a href="/getOffer"><i className="fa-solid fa-link"></i></a> tıklayınız</div>
                        </div>
                    </div>

                    <div className='products-all-table'>
                        <div className='product-sttng'>
                            <img className='product-logo' src={require('../assets/images/product/celik-kapilar.jpg')} alt='' />
                            <div className='prdct-text'>
                                <div className='borders'>
                                    <div className='product-name'>Ürün Adı</div>
                                    <div className='product-name-contnt'>Çelik Kapı Modelleri</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Ürün Malzemesi</div>
                                    <div className='product-contnt'>Alüminyum, Kompozit Kaplama</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Kayıt Şekli</div>
                                    <div className='product-contnt'>Düz</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Ürün Renkleri</div>
                                    <div className='product-contnt'>Beyaz, Altın Meşe, Antrasit Gri, Budaklı Meşe, Fındık, Gri</div>
                                </div>
                            </div>
                            <div className='prod-url'>Ürünle ilgili teklif almak için <a href="/getOffer"><i className="fa-solid fa-link"></i></a> tıklayınız</div>
                        </div>
                    </div>

                    <div className='products-all-table'>
                        <div className='product-sttng'>
                            <img className='product-logo' src={require('../assets/images/product/panjur-kepeng.jpg')} alt='' />
                            <div className='prdct-text'>
                                <div className='borders'>
                                    <div className='product-name'>Ürün Adı</div>
                                    <div className='product-name-contnt'>Otomatik Panjur & Kepeng Modelleri</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Ürün Malzemesi</div>
                                    <div className='product-contnt'>Alüminyum ,Çelik</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Kayıt Şekli</div>
                                    <div className='product-contnt'>Sarmal</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Ürün Renkleri</div>
                                    <div className='product-contnt'>Beyaz, Gri</div>
                                </div>
                            </div>
                            <div className='prod-url'>Ürünle ilgili teklif almak için <a href="/getOffer"><i className="fa-solid fa-link"></i></a> tıklayınız</div>
                        </div>
                    </div>

                    <div className='products-all-table'>
                        <div className='product-sttng'>
                            <img className='product-logo' src={require('../assets/images/product/dusakabin.jpg')} alt='' />
                            <div className='prdct-text'>
                                <div className='borders'>
                                    <div className='product-name'>Ürün Adı</div>
                                    <div className='product-name-contnt'>Duşakabin Modelleri</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Ürün Kalınlığı</div>
                                    <div className='product-contnt'>Değişken</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Kayıt Şekli</div>
                                    <div className='product-contnt'>Değişken</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Ürün Renkleri</div>
                                    <div className='product-contnt'>Beyaz, Altın Meşe, Antrasit Gri, Budaklı Meşe, Fındık, Gri</div>
                                </div>
                            </div>
                            <div className='prod-url'>Ürünle ilgili teklif almak için <a href="/getOffer"><i className="fa-solid fa-link"></i></a> tıklayınız</div>
                        </div>
                    </div>

                    <div className='products-all-table'>
                        <div className='product-sttng'>
                            <img className='product-logo' src={require('../assets/images/product/otokapi.jpg')} alt='' />
                            <div className='prdct-text'>
                                <div className='borders'>
                                    <div className='product-name'>Ürün Adı</div>
                                    <div className='product-name-contnt'>Otomatik Kapı Modelleri</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Ürün Kalınlığı</div>
                                    <div className='product-contnt'>Değişken</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Kayıt Şekli</div>
                                    <div className='product-contnt'>Düz</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Ürün Renkleri</div>
                                    <div className='product-contnt'>Beyaz, Gri</div>
                                </div>
                            </div>
                            <div className='prod-url'>Ürünle ilgili teklif almak için <a href="/getOffer"><i className="fa-solid fa-link"></i></a> tıklayınız</div>
                        </div>
                    </div>

                    <div className='products-all-table'>
                        <div className='product-sttng'>
                            <img className='product-logo' src={require('../assets/images/product/urunler.jpg')} alt='' />
                            <div className='prdct-text'>
                                <div className='borders'>
                                    <div className='product-name'>Ürün Adı</div>
                                    <div className='product-name-contnt'>Cam Modelleri</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Ürün Kalınlığı</div>
                                    <div className='product-contnt'>12mm, 16mm</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Ürün Modelleri</div>
                                    <div className='product-contnt'>Standart, Isı Cam, Reflekte Cam, Füme Cam, Karolajlı Cam</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Ürün Renkleri</div>
                                    <div className='product-contnt'>Şeffaf, Filmli</div>
                                </div>
                            </div>
                            <div className='prod-url'>Ürünle ilgili teklif almak için <a href="/getOffer"><i className="fa-solid fa-link"></i></a> tıklayınız</div>
                        </div>
                    </div>

                    <div className='products-all-table'>
                        <div className='product-sttng'>
                            <img className='product-logo' src={require('../assets/images/product/sineklik.jpg')} alt='' />
                            <div className='prdct-text'>
                                <div className='borders'>
                                    <div className='product-name'>Ürün Adı</div>
                                    <div className='product-name-contnt'>Sineklik Modelleri</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Ürün Tipi</div>
                                    <div className='product-contnt'>Sabit, Plise, Sarhoş</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Ürün Kalınlığı</div>
                                    <div className='product-contnt'>Değişken</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Ürün Renkleri</div>
                                    <div className='product-contnt'>Beyaz, Altın Meşe, Antrasit Gri, Budaklı Meşe, Fındık, Gri</div>
                                </div>
                            </div>
                            <div className='comp-url'>Ürünle ilgili teklif almak için <a href="/getOffer"><i className="fa-solid fa-link"></i></a> tıklayınız</div>
                        </div>
                    </div>

                    <div className='products-all-table'>
                        <div className='product-sttng'>
                            <img className='product-logo' src={require('../assets/images/product/aksesuar.jpg')} alt='' />
                            <div className='prdct-text'>
                                <div className='borders'>
                                    <div className='product-name'>Aksesuar Ürünleri</div>
                                    <div className='product-name-contnt'>Pvc Pencere & Kapılar, Alüminyum Pencere & Kapılar, Sürme & Volkswagen Kapılar, Camlar</div>
                                </div>
                                <div className='borders'>
                                    <div className='product-title'>Aksesuarlar</div>
                                    <div className='product-contnt'>Pencere & Kapı Kolları, Duşakabin Kolları, Cam Karolajları</div>
                                </div>
                            </div>
                            <div className='prod-url'>Ürünle ilgili teklif almak için <a href="/getOffer"><i className="fa-solid fa-link"></i></a> tıklayınız</div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
