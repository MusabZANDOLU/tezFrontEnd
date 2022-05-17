import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-links" id="navLink">
          <ul>
            <li><Link to="/">ANA SAYFA</Link></li>
            <li><Link to="/companies">FİRMALAR</Link></li>
            <li><Link to="/products">ÜRÜNLER</Link></li>
            <li><Link to="/getOffer/category">TEKLİF AL</Link></li>
            <li><Link to="/contact">İLETİŞİM</Link></li>
          </ul>
          <ul>
            <li><Link to="/myOffers">TEKLİFLERİM</Link></li>
            <li><Link to="/giveOffer">TEKLİF VER</Link></li>
            <li><Link to="/company/informations">FİRMA AYARLARIM</Link></li>
            <li><Link to="/user/informations">KULLANICI AYARLARIM</Link></li>
            <li><Link to="/login">GİRİŞ YAP</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;