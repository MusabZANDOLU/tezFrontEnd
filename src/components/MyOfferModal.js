import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function MyOfferModal() {
    return (
        <div className="myOfferBody">
            <Navbar />

            <div className='myOfferTopText'> *** tarihinde teklifinde bulunduğunuz *** ürünü için verilen fiyatları inceliyorsunuz. <i className="fa-solid fa-bell"></i></div>
            
            <div className="myOfferAllModal">
                <div className="radiogroupMyOffer">
                    <div className="giveOfferCover">
                        <div>
                            <div className='myOfferTitle'>
                                <div className="labelMyOfferLeft">Firma Adı:</div>
                                <div className="labelMyOfferRight">Ahmet ASAŞ</div>
                            </div>
                            <hr/>
                            <div className='myOfferTitle'>
                                <div className="labelMyOfferLeft">Firma Açıklaması:</div>
                                <div className="labelMyOfferRight">Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. </div>
                            </div>
                            <hr/>
                            <div className='myOfferTitle'>
                                <div className="labelMyOfferLeft">Verilen Fiyat:</div>
                                <div className="labelMyOfferRight">25.250 - 28.000 TL</div>
                            </div>
                            <div className='myOfferBtnContent'>
                                <button className="myOfferBtn"><i className="fa-solid fa-comment-dots"></i> Firma İletişimi</button>
                                <button className="myOfferBtnDel"><i className="fa-solid fa-trash"></i> Teklifi Sil</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="radiogroupMyOffer">
                    <div className="giveOfferCover">
                        <div>
                            <div className='myOfferTitle'>
                                <div className="labelMyOfferLeft">Firma Adı:</div>
                                <div className="labelMyOfferRight">Ali KASAP</div>
                            </div>
                            <hr/>
                            <div className='myOfferTitle'>
                                <div className="labelMyOfferLeft">Firma Açıklaması:</div>
                                <div className="labelMyOfferRight">1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur. </div>
                            </div>
                            <hr/>
                            <div className='myOfferTitle'>
                                <div className="labelMyOfferLeft">Verilen Fiyat:</div>
                                <div className="labelMyOfferRight">13.000 - 15.000 TL</div>
                            </div>
                            <div className='myOfferBtnContent'>
                                <button className="myOfferBtn"><i className="fa-solid fa-comment-dots"></i> Firma İletişimi</button>
                                <button className="myOfferBtnDel"><i className="fa-solid fa-trash"></i> Teklifi Sil</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="radiogroupMyOffer">
                    <div className="giveOfferCover">
                        <div>
                            <div className='myOfferTitle'>
                                <div className="labelMyOfferLeft">Firma Adı:</div>
                                <div className="labelMyOfferRight">Mehmet EGE</div>
                            </div>
                            <hr/>
                            <div className='myOfferTitle'>
                                <div className="labelMyOfferLeft">Firma Açıklaması:</div>
                                <div className="labelMyOfferRight">Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan 'consectetur' sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır.</div>
                            </div>
                            <hr/>
                            <div className='myOfferTitle'>
                                <div className="labelMyOfferLeft">Verilen Fiyat:</div>
                                <div className="labelMyOfferRight">56.200 - 60.000 TL</div>
                            </div>
                            <div className='myOfferBtnContent'>
                                <button className="myOfferBtn"><i className="fa-solid fa-comment-dots"></i> Firma İletişimi</button>
                                <button className="myOfferBtnDel"><i className="fa-solid fa-trash"></i> Teklifi Sil</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="radiogroupMyOffer">
                    <div className="giveOfferCover">
                        <div>
                            <div className='myOfferTitle'>
                                <div className="labelMyOfferLeft">Firma Adı:</div>
                                <div className="labelMyOfferRight">Metin FIRAT</div>
                            </div>
                            <hr/>
                            <div className='myOfferTitle'>
                                <div className="labelMyOfferLeft">Firma Açıklaması:</div>
                                <div className="labelMyOfferRight">Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. </div>
                            </div>
                            <hr/>
                            <div className='myOfferTitle'>
                                <div className="labelMyOfferLeft">Verilen Fiyat:</div>
                                <div className="labelMyOfferRight">5.500 - 6.000 TL</div>
                            </div>
                            <div className='myOfferBtnContent'>
                                <button className="myOfferBtn"><i className="fa-solid fa-comment-dots"></i> Firma İletişimi</button>
                                <button className="myOfferBtnDel"><i className="fa-solid fa-trash"></i> Teklifi Sil</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                



            </div>
        </div>
    )
}

export default MyOfferModal;