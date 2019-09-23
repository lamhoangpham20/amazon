import React from "react"
import styles from './Items.module.css'
import image1 from "./image1.jpg"
import {Link} from "react-router-dom"
const Items = props=>{
  return  <li>
  <Link to={ `/product/${props.id}` }>
          <div className={styles.box}>
          <img src={props.img}/>
          </div>
          <div>{props.name}</div>
          <div className={styles.company}>by {props.company}</div>
          <div>${props.price}</div>
          <div>{props.stars}</div>
          </Link>
          </li>

}
export default Items;
