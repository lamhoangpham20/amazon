import React from "react"
import Menu from "./Menu"
import {BrowserRouter as Router, Route} from 'react-router-dom';
import image1 from "./image1.jpg"
import image2 from "./image2.jpg"
import image3 from "./image3.jpg"
import image4 from "./image4.jpg"
import image5 from "./image5.jpg"
import image6 from "./image6.jpg"
import Search from "./Search"
import Register from "./Register"
import UserInfo from "./UserInfo"
import ProductView from "./ProductView"
import ShoppingCart from "./ShoppingCart"
import {Link} from 'react-router-dom'
class App extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      items:[
        { id: 1, img: image1, name:"Roku Express | Easy High Definition (HD) Streaming Media Player", company:"Roku", price:26.00, star:5},
        { id: 2, img: image2, name:"HP 63 | 2 Ink Cartridges | Black, Tri-color | F6U61AN, F6U62AN", company:"HP", price:45.89, star:4.5},
        { id: 3, img: image3, name:"Samsung 128GB 100MB/s (U3) MicroSDXC Evo Select Memory Card with Adapter (MB-ME128GA/AM)", company:"Samsung", price:18.89, star:4},
        { id: 4, img: image4, name:"HP OfficeJet 3830 All-in-One Wireless Printer, HP Instant Ink & Amazon Dash Replenishment ready (K7V40A)", company:"Samsung", price:18.89, star:4},
        { id: 5, img: image5, name:"Acer Aspire 5 Slim Laptop, 15.6 Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L", company:"Acer", price:18.89, star:4},
        { id: 6, img: image6, name:"Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Power and Volume", company:"Roku", price:26.00, star:5},
  ], textInput: "",
    listSylte:{},
    list:true,
    firstname:"",
    lastname:"",
    email:"",
    phoneNumber:"",
   shoppingcart:[]}

  }
  getProductInfo = (productId) => {
      return this.state.items.find(item => item.id === productId);
    }
  newInput = (event)=>{
   this.setState({textInput: event.target.value });
   console.log(event.target.value);
 }
 listChange= ()=>{
   if(this.state.list === true)
   {
   let a={float:'none'};
   this.setState({list: false});
   this.setState({listStyle: a});
   console.log(this.state.user);
}
else {
  let b:{float:'flex'};
  this.setState({list: true});
  this.setState({listStyle: b});
  }
}
handleChange = (e) => {
    e.preventDefault();
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name] : value
    });
  }
handleSubmit = (e) =>
{
  this.setState({register:false})
  console.log(this.state);
}
addCart = (value) =>
{
  let shoppingcartCopy = [...this.state.shoppingcart];
  if(shoppingcartCopy.indexOf(value) < 0)
  {
  shoppingcartCopy.push(value);
  this.setState({shoppingcart:shoppingcartCopy});
}
}
  render()
  {
    return(
    <Router>
    <Route path="/" exact render={ routeProps => <Menu listChange={this.listChange}
    newInput={this.newInput}
    items= {this.state.items}
    textInput={this.state.textInput}
    listStyle={this.state.listStyle} {...routeProps}
    /> }/>
     <Route path="/userinfo" exact render={ routeProps => <UserInfo firstname={this.state.firstname}
     lastname={this.state.lastname}
     email={this.state.email}
     phoneNumber={this.state.phoneNumber} {...routeProps} /> }/>


<Route path="/register" exact render={ routeProps => <Register handleSubmit={this.handleSubmit}
handleChange={this.handleChange} {...routeProps} /> }/>
<Route path="/product/:id" exact render={routeProps => <ProductView getProductInfo={this.getProductInfo} addCart={this.addCart}{...routeProps} /> }/>
<Route path="/shoppingcart" exact render={routeProps => <ShoppingCart shoppingcart={this.state.shoppingcart} items={this.state.items}{...routeProps} /> }/>
</Router>
)
  }

}
export default App
