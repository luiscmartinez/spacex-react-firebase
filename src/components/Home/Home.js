import React from 'react'

import './Home.css'

// <video className='carousel__movie' playsinline muted loop>
// <source src={carouselMovie} type='video/mp4' />
// </video>

const Home = () => {
  return (
    <div className='Home'>
      <div className='carousel__wrapper'>
        <div className='carousel__overlay'>
          <div className='carousel__overlay-header'>
            <h2 className='carousel__title--active'>Falcon Heavy & Starman</h2>
            <button className='carousel__button--active'>Watch Video</button>
          </div>
          <div className='carousel__menu'>
            <div className='carousel__menu-item'>
              <div className='carousel__menu-num'>01</div>
              <div className='carousel__menu-title'>SES-12 MISSION</div>
            </div>
            <div className='carousel__menu-item'>
              <div className='carousel__menu-num'>02</div>
              <div className='carousel__menu-title'>FALCON HEAVY & STARMAN</div>
            </div>
            <div className='carousel__menu-item'>
              <div className='carousel__menu-num'>03</div>
              <div className='carousel__menu-title'>
                MAKING LIFE MULTIPLANETARY
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='content-main'>Content__Main</div>
      <div className='footer__main'>Footer__Main</div>
      <div className='footer__social'>Footer__Social</div>
    </div>
  )
}

export default Home
