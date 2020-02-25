import React from 'react'
import CardImgTop from './Card/CardImgTop'
import CardBody from './Card/CardBody'

function Card(props) {
  return (
    <div className='card mb-4 shadow-sm'>
      <CardImgTop
        imgThumb={props.imgThumb}
      />
      <CardBody
        cardText={props.cardText}
        readingTime={props.readingTime}>
        {props.children}
      </CardBody>
    </div>
  )
}

export default Card