import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>BEATS SOLO</p>
        <h3> Mid Text</h3>
        <img src="" alt="" className='hero-banner-image' />
        <div>
          <Link href="/product/ID">
          <button type='button'>Button Text</button>

          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>Description</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner