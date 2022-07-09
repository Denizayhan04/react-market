import React, { useEffect, useState } from 'react'

export default function Product(props) {
  const price = props.value.price;
  const name = props.value.name;
  const [amount, setAmount] = useState(0)
  useEffect(() => {
    console.log(amount)
  }, [amount])
  return (
    <div className='product'>
      <div>
        <img src={props.value.url}></img>
        <div>
          <h3>{props.value.name}</h3>
          <span>price : {price}</span>
          <div>
            <form onSubmit={
              (e) => {
                console.log(document.querySelector("#input-price").value)
                 setAmount(Number(document.querySelector("#input-price").value))
                
                if (amount === 0) {
                  alert("please check your amount")
                }
                else {
                  
                  props.addBasket(document.querySelector("#input-price"), (price), (name));
                }
                
                e.preventDefault(); 
              }
            }>

              <input placeholder='amount(number only)' id='input-price' type="number" min="0" />
              <button type='submit'>BUY</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
