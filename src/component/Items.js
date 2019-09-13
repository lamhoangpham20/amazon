import React from "react"
import styles from './Items.module.css'
import image1 from "./image1.jpg"
const Items = props=>{
  return  <li>
          <div className={styles.box}>
          <img src={props.img}/>
          </div>
          <div>{props.name}</div>
          <div className={styles.company}>by {props.company}</div>
          <div>${props.price}</div>
          <div>{props.stars}</div>
          </li>
}
export default Items;
