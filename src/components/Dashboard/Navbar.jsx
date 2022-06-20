import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div>
      <nav>
        <div className="nav-links" id="navLink">
          <ul>
            <li>
              <Link to="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link to="/companies">Firmalar</Link>
            </li>
            <li>
              <Link to="/products">Ürünler</Link>
            </li>
            <li>
              <Link to="/getOffer/category">Teklif Al</Link>
            </li>
            <li>
              <Link to="/contact">Hakkımızda</Link>
            </li>
          </ul>
          
          <ul>
            <li>
              <Link to="/myOffers">Tekliflerim</Link>
            </li>
            <li>
              <Link to="/giveOffer">Teklif Ver</Link>
            </li>
            <li>
              <Link to={`/company/informations`}>Firma Ayarlarım</Link>
            </li>
            <li>
              <Link to={`/user/informations`}>Kullanıcı Ayarlarım</Link>
            </li>
            <li>
              
                <Link to="/login">Giriş Yap</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
