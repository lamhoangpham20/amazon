import React from "react"
import Items from "./Items"
import styles from './Menu.module.css'
import Search from './Search'
import {Link} from 'react-router-dom'

const Menu = props => {
return(
  <div>
  <input type='text' onChange={props.newInput}/>
  <button onClick={props.listChange}>List Mode</button>

  <Link to={'/register'}><button>Register</button></Link>
  <Link to={'/userinfo'}><button>Profile</button></Link>
  <ul>
  {props.items.filter(i => i.name.toUpperCase().includes(props.textInput.toUpperCase())).map(i =>

    <div className={ styles.Menu1 }style={props.listStyle} key={ i.id }><Items {...i} key={ i.id }/></div>)}

</ul>
</div>
)
}


export default Menu
