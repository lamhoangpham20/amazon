import React from "react"
import {Link} from "react-router-dom"
export default function ShoppingCart(props)
{

  return(

    <div>
    <button onClick={() => props.history.goBack()}>Back</button>
    <table>
    <tr>
    <td>Product</td>
    <td>Quantity</td>
    <td>Prices</td>
    <td>Delete</td>
    </tr>
    {props.shoppingcart.map(function(i)
      {
        const data = props.getCartInfo(i.id)
      return (<tr key={data.id}><td>{data.name}</td>
      <td><input type="number" name={i.number} value={i.quantity} onChange={props.changeCart} /></td>
    <td>{data.price * i.quantity}</td>
    <td><button onClick={()=>props.deleteCart(i.id)}>Delete</button></td></tr>)
    }
  )
}
    </table>

    {props.shoppingcart.map(function(i)
      {
          const data = props.getCartInfo(i.id)
          let total = props.total + data.price * i.quantity ;
          return(<div>{props.total}</div>)
      })}
    </div>
  )
}
