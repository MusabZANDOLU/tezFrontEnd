import React from 'react'

import Navbar from '../components/Navbar';

import '../assets/scss/contact.scss';

function Contact() {
  return (
    <div>
      <Navbar/>
      <div className='backg'>
        <div className='dash'>
          <div className='about'>İLETİŞİM</div>
          <div className='slogan'>Tel: 0500 000 0000</div>
          <div className='about-icerik'>
            Sitemiz, daha kolay, daha kısa zamanda ve daha uygun maliyette işlerinizi yaptırabilmeniz için siz değerli kullanıcılarımıza **.**.2022 tarihinde hizmete geçmiştir. Sizlerle yardımcı olmaktan mutluluk duyuyor, bizi tercih ettiğiniz için çok teşekkür ediyoruz.
          </div>
          <div className="icons-container">
            <div className='contact-icons'>
              <div class="social-icons spinned">
                <a className="item facebook" target={"_blank"} href="https://www.facebook.com/"><em class="fa fa-facebook"></em></a>
                <a className="item twitter" target={"_blank"} href="https://twitter.com/"><em className="fa fa-twitter"></em></a>
                <a className="item linkedin" target={"_blank"} href="https://www.linkedin.com/"><em className="fa fa-linkedin"></em></a>
                <a className="item instagram" target={"_blank"} href="https://www.instagram.com/"><em className="fa fa-instagram"></em></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact;