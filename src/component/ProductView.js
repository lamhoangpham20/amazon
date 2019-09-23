import React from "react"
import {Link} from "react-router-dom"
 export default function ProductView(props)
 {
   const data = props.location.state;
   console.log(props);
   const productData = props.getProductInfo(parseInt(props.match.params.id));
   return(
     <div>
     <div>{productData.name}</div>
     <img src={productData.img}/>
     <div>{productData.price}</div>
     <div>{productData.company}</div>
     <button onClick={() => props.history.goBack()}>Back</button>
     <Link to={'/shoppingcart'}><button onClick={() => props.addCart(productData.id)}> Add to cart</button></Link>
     </div>
 )
 }
