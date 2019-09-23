import React from "react"
import {Link} from "react-router-dom"
export default function ShoppingCart(props)
{

  console.log(props.shoppingcart);
  return(

    <div>
    <button onClick={() => props.history.goBack()}>Back</button>
    <table>
    <tr>
    <td>Product</td>
    <td>Quantity</td>
    <td>Prices</td>
    </tr>
    </table>
    <p>Total</p>
    </div>
  )
}
