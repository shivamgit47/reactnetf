import React from 'react'

export default function Images(props) {
  return (
    <div>
      <img src={props.imgsrc} alt="" className='card__img'/>
    </div>
  )
}
