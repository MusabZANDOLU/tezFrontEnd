import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../assets/scss/userSettings.scss'

function UserSetting() {
  return (
    <div className='UserSettingAll'>
      <Navbar />
        <div>
        <div class="select-list">
        <input type="checkbox" name="select" id="select1" hidden/>
        Öğe 1
    </div>
    <div class="select-list">
        <input type="checkbox" name="select" id="select2" hidden/>
        Öğe 2
    </div>
    <div class="select-list">
        <input type="checkbox" name="select" id="select3" hidden/>
        Öğe 3
    </div>
    <div class="select-list">
        <input type="checkbox" name="select" id="select4" hidden/>
        Öğe 4
    </div>
    <div class="select-list">
        <input type="checkbox" name="select" id="select5" hidden/>
        Öğe 5
    </div>
    <div class="select-list">
        <input type="checkbox" name="select" id="select6" hidden/>
        Öğe 6
    </div>
        </div>
      {/* <Footer /> */}
    </div>
  )
}
export default UserSetting;