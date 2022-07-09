import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Leftbar(props) {
    const [basket, setBasket] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/basket")
        .then(a=>setBasket(a.data))
        .catch(e=>console.log(e))

    },[basket])
    return (
        <div >
            
            {
                props.leftBarStatus
                    ?
                    <div className='leftbar' >

                        <h2>BASKET  </h2>
                        <div className='leftbar-container'>
                            <div>

                                <ul className='basket-ul'>
                                    {basket.map((data)=>(
                                        <li key={data.id} className='basket-li'><span>{data.amount}x{data.name}</span> <span>${data.price}</span></li>

                                    ))}

                                </ul>
                            </div>
                        </div>
                        <svg onClick={()=>props.setLeftBarStatus(e=>!e)}   className='svg' viewBox="0 0 100 80" width="40" height="40">
                            <rect width="100" height="20"></rect>
                            <rect y="30" width="100" height="20"></rect>
                            <rect y="60" width="100" height="20"></rect>
                        </svg>
                    </div>
                    :
                    <svg onClick={()=>props.setLeftBarStatus(e=>!e)} className='svg' id='openbar' viewBox="0 0 100 80" width="40" height="40">
                        <rect width="100" height="20"></rect>
                        <rect y="30" width="100" height="20"></rect>
                        <rect y="60" width="100" height="20"></rect>
                    </svg>

            }
        </div>
    )
}
