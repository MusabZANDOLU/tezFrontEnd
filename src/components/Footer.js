import React from 'react';
import '../assets/scss/footer.scss';

function footer() {

  return (
    <div>
      <div className="footer">
        <div className='footer-text'>
          Bu site 2022 yılında Musab ZANDOLU tarafından tasarlanmıştır. Tüm hakları saklıdır...
        </div>
        <a className='f-face' href='https://www.facebook.com/'><i className="fa-brands fa-facebook-f"></i></a>
        <a className='f-tw' href='https://twitter.com/'><i className="fa-brands fa-twitter"></i></a>
        <a className='f-ins' href='https://www.instagram.com/'><i className="fa-brands fa-instagram"></i></a>
        <a className='f-lnk' href='https://www.linkedin.com/'><i className="fa-brands fa-linkedin"></i></a>
      </div>
    </div>
  )
}
export default footer;