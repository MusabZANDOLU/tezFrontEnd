import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../assets/scss/getOffer.scss';


export default function GetOffer() {
  return (
    <div >
      <Navbar />
      <div className='get-tt'>
        <div className='UserSettingAll'>
          <div className="radiogroup">
            <div className="wrapper">
              <input className="state" type="radio" name="app" id="a" value="a" />
              <label className="label" htmlFor="a">
                <div className="indicator"></div>
                <span className="text">PVC Cam & Kapı</span>
              </label>
            </div>
            <div className="wrapper">
              <input className="state" type="radio" name="app" id="b" value="b" />
              <label className="label" htmlFor="b">
                <div className="indicator"></div>
                <span className="text">Katlanır Cam</span>
              </label>
            </div>
            <div className="wrapper">
              <input className="state" type="radio" name="app" id="c" value="c" />
              <label className="label" htmlFor="c">
                <div className="indicator"></div>
                <span className="text">Sürme Cam</span>
              </label>
            </div>
            <div className="wrapper">
              <input className="state" type="radio" name="app" id="d" value="d" />
              <label className="label" htmlFor="d">
                <div className="indicator"></div>
                <span className="text">Otomatik Kapı</span>
              </label>
            </div>
            <div className="wrapper">
              <input className="state" type="radio" name="app" id="e" value="e" />
              <label className="label" htmlFor="e">
                <div className="indicator"></div>
                <span className="text">Otomatik Kapı</span>
              </label>
            </div>
          </div>

          <div className="radiogroup">
            <div className="wrapper">
              <input className="state" type="radio" name="app" id="f" value="f" />
              <label className="label" htmlFor="f">
                <div className="indicator"></div>
                <span className="text">PVC Cam & Kapı</span>
              </label>
            </div>
            <div className="wrapper">
              <input className="state" type="radio" name="app" id="g" value="g" />
              <label className="label" htmlFor="g">
                <div className="indicator"></div>
                <span className="text">Katlanır Cam</span>
              </label>
            </div>
            <div className="wrapper">
              <input className="state" type="radio" name="app" id="h" value="h" />
              <label className="label" htmlFor="h">
                <div className="indicator"></div>
                <span className="text">Sürme Cam</span>
              </label>
            </div>
            <div className="wrapper">
              <input className="state" type="radio" name="app" id="i" value="i" />
              <label className="label" htmlFor="i">
                <div className="indicator"></div>
                <span className="text">Otomatik Kapı</span>
              </label>
            </div>
            <div className="wrapper">
              <input className="state" type="radio" name="app" id="j" value="j" />
              <label className="label" htmlFor="j">
                <div className="indicator"></div>
                <span className="text">Otomatik Kapı</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

