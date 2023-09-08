import React from 'react'
import Styles from "./Card.module.css"
import {ImNotification} from "react-icons/im"
import {TbHexagon3D} from "react-icons/tb"
import {BsCurrencyDollar} from "react-icons/bs"

const Card = ({obj}) => {
  console.log(obj)
  return (
    <div className={Styles.cardholder}>
    <div className={Styles.card}>
        <h5>Basic Info</h5>
        <div>
          <p>Pair created at</p><p>{obj.pairCreatedAt||"Etherium"}</p>
        </div>
        <div>
          <p>Symbol</p><p>{obj.chainId}</p>
        </div>
        <div>
          <p>Dex Id</p><p>{obj.dexId}</p>
        </div>
        <div>
          <p>Pair Address</p><p>{obj.fdv}</p>
        </div>

<ImNotification className={Styles.posibuton}/>

    </div>
    <div className={Styles.card}>
        <h5>Base Token</h5>
        <div>
          <p>Name</p><p>{obj.baseToken.name}</p>
        </div>
        <div>
          <p>Symbol</p><p>{obj.baseToken.symbol}</p>
        </div>
        <div>
          <p>Address</p><p>{obj.baseToken.address.slice(0, 5)}</p>
        </div>
        <TbHexagon3D className={Styles.posibuton}/>
    </div>
    <div className={Styles.card}>
        <h5>Quote Token</h5>
        <div>
          <p>Name</p><p>{obj.quoteToken.name}</p>
        </div>
        <div>
          <p>Symbol</p><p>{obj.quoteToken.symbol}</p>
        </div>
        <div>
          <p>Address</p><p>{obj.quoteToken.address.slice(0, 5)}</p>
        </div>
       <TbHexagon3D className={Styles.posibuton}/>
    </div>
    <div className={Styles.card}>
        <h5>Price</h5>
        <div>
          <p>Price Native </p><p>{obj.priceNative}</p>
        </div>
        <div>
          <p>Price USD</p><p>{obj.priceUsd}</p>
        </div>
        <BsCurrencyDollar className={Styles.posibuton}/>
        
    </div>
    </div>
    
  )
}

export default Card