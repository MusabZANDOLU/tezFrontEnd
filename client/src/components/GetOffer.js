import { BrowserRouter as Routes, Router, Route, Link } from 'react-router-dom'
import GetOfferSteps from './GetOfferSteps'

import '../assets/scss/getOffer.scss';

import React from 'react'

export default function GetOffer() {
  return (
    <div>
      <Router>
        <Routes>
          <div className='getOfferAll'>
            <div className='getOfferTable'>
              <Link to='/getOfferStep1'>adım1</Link>
            </div>
            <Route exact path='/getOfferStep1' element={<GetOfferSteps />} />
          </div>
        </Routes>
      </Router>
    </div>
  )
}

