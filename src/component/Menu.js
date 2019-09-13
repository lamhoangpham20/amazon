import React from "react"
import Items from "./Items"
import styles from './Menu.module.css'
import Search from './Search'
const Menu = props => {
return(
  <ul>
  {props.items.filter(i => i.name.toUpperCase().includes(props.textInput.toUpperCase())).map(i =>
    <div className={ styles.Menu }><Items {...i} key={ i.id }/></div>)}
</ul>
)
}


export default Menu
