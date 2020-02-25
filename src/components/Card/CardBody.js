
import React from 'react'

function CardBody(props) {
  return (
    <div className='card-body'>
      <p className='card-text'>{props.cardText}</p>
      <div className='d-flex justify-content-between align-items-center'>
        {props.children}
        <small className='text-muted'>{props.readingTime} mins</small>
      </div>
    </div>
  )
}

export default CardBody