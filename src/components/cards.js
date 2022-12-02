import React from 'react'
import './cards.css'
import cardBG from '../Assets/card-background.jpg'
const cards = () => {
  return (
    <>
     <div className='card'>
                 <img src={cardBG} alt="cardImg"  />
                 <div className="card-body">
                <div className="title">TITLE</div>
                 </div>
            </div>
    </>
  )
}

export default cards
