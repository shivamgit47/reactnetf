import React from 'react'
import Images from './Images';
import Title from './Title';

function Cards(props)
{
  return (
  <>
    <div className="cards">
      <div className="card">
        {/* <img src={props.imgsrc} alt="" className='card__img'/> */}
        <Images  imgsrc={props.imgsrc}></Images>
        <div className="card__info">
          <span className="card__cardcategory">{props.title}</span>
          {/* <h3 className="card__title">{props.sname}</h3> */}
          <Title sname={props.sname}></Title>
          <a href={props.links} target="_blank" rel="noopener noreferrer">
            <button className="card__btn">Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  </>
  )
}
export default Cards ;