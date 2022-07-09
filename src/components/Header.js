import React from 'react'

export default function Header(props) {

  return (
    <div className='header'>
      <h2>CURRENT MONEY : ${props.money}</h2>
      <div className='categories'>
        <ul>
          <a href='#' onClick={(e)=>{props.setCurrentCategory("all")}}><li>ALL</li></a>
          <a href='#' value="food" onClick={(e)=>{props.setCurrentCategory("food")}} ><li>FOOD</li></a>
          <a href='#' value="phone" onClick={(e)=>{props.setCurrentCategory("phone")}}><li>PHONES</li></a>
          <a href='#' value="car" onClick={(e)=>{props.setCurrentCategory("car")}}><li>CARS</li></a>
          </ul>
        </div>
      </div>
  )
}
