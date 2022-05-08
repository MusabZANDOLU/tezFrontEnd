import { Link } from 'react-router-dom';
import React from 'react'
import Navbar from './Navbar'

import '../assets/scss/getOfferCategory.scss'

function GetOfferCategory() {

    return (
        <div className='categoryAllContent'>
            <Navbar/>
            
            <div className='categoryTitle'> Montaj yaptırmak istediğiniz yer için seçim yapınız.</div>
            <div className="cards-list">

                <div className='categoryCardOne'>
                    <Link className='linkText' to='/getOfferFoldingWindow'>
                        <div className="card 1">
                            <div className="card_image">
                                <img src={require('../assets/images/category/categoryKatlanir.jpg')} alt=''></img>
                            </div>
                        </div>
                    </Link>
                    <div className='cardText'>BALKON KAPAMA <br/>ÜRÜNLERİ</div>
                </div>

                <div className='categoryCardOne'>
                    <Link className='linkText' to='/getOfferPvc'>
                        <div className="card 2">
                            <div className="card_image">
                                <img src={require('../assets/images/category/categoryPvc.jpg')} alt=''></img>
                            </div>
                        </div>
                    </Link>
                    <div className='cardText'>PVC CAM & KAPI <br/>ÜRÜNLERİ</div>
                </div>

                <div className='categoryCardOne'>
                    <Link className='linkText' to='/getOfferShopping'>
                        <div className="card 4">
                            <div className="card_image">
                                <img src={require('../assets/images/category/categoryMagaza.jpg')} alt=''></img>
                            </div>
                        </div>
                    </Link>
                    <div className='cardText'>MAĞAZA CAM & KAPI <br/>ÜRÜNLERİ</div>
                </div>

                <div className='categoryCardOne'>
                    <Link className='linkText' to='/getOfferShowerBox'>
                        <div className="card 3">
                            <div className="card_image">
                                <img src={require('../assets/images/category/categoryDusakabin.jpg')} alt=''></img>
                            </div>
                        </div>
                    </Link>
                    <div className='cardText'>DUŞ KABİNİ ÜRÜNLERİ</div>
                </div>

                <div className='categoryCardOne'>
                    <Link className='linkText' to='/getOfferSwatter'>
                        <div className="card 4">
                            <div className="card_image">
                                <img src={require('../assets/images/category/categorySineklik.jpg')} alt=''></img>
                            </div>
                        </div>
                    </Link>
                    <div className='cardText'>SİNEKLİK ÜRÜNLERİ</div>
                </div>

                <div className='categoryCardOne'>
                    <Link className='linkText' to='/getOfferAluminumHandrail'>
                        <div className="card 4">
                            <div className="card_image">
                                <img src={require('../assets/images/category/categoryKorkuluk.jpg')} alt=''></img>
                            </div>
                        </div>
                    </Link>
                    <div className='cardText'>ALÜMİNYUM KORKULUK</div>
                </div>

            </div>
        </div>
    )
}
export default GetOfferCategory;