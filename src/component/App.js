import React from "react"
import Menu from "./Menu"
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Register from "./Register"
import UserInfo from "./UserInfo"
import ProductView from "./ProductView"
import ShoppingCart from "./ShoppingCart"
import axios from 'axios';
class App extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      items:[],
   textInput: "",
    listSylte:{},
    list:true,
    firstname:"",
    lastname:"",
    email:"",
    phoneNumber:"",
   shoppingcart:[],
   total:0,
 networkError: false}
}

componentDidMount = () =>
  {
    axios.get('http://localhost:4000/items').then(result => {
      this.setState({ items: result.data.items });
    })
    .catch(error => {
      console.error(error);
      this.setState({ networkError: true })
    })
  }

  count = (value) =>
  {
    let money = value;
    this.setState({total:value});
  }
  getProductInfo = (productId) => {
      return this.state.items.find(item => item.id === productId);
    }
  getCartInfo = (productId) => {
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
  if(shoppingcartCopy.length === 0)
  {
  let number = shoppingcartCopy.length;
  let quantity = 1;
  let id = value;
  let cart = {number,id,quantity};
  shoppingcartCopy.push(cart);
  this.setState({shoppingcart:shoppingcartCopy});
  console.log(this.state.shoppingcart);
  }
  else if(shoppingcartCopy.every(i=>i.id != value) && shoppingcartCopy.length != 0)
  {
    console.log('ngu');
  let number = shoppingcartCopy.length;
  let quantity = 1;
  let id = value;
  let cart = {number,id,quantity};
  shoppingcartCopy.push(cart);
  this.setState({shoppingcart:shoppingcartCopy});
  console.log(this.state.shoppingcart);
  }
  else if(shoppingcartCopy.some(i=>i.id === value) && shoppingcartCopy.length != 0)
  {
    console.log('qua');
    let cartCopy = shoppingcartCopy.find(i=>i.id === value);
    let filterCartCopy = shoppingcartCopy.filter(i=>i.id != value);
    let quantity = cartCopy.quantity + 1;
    let number = cartCopy.number;
    let id = cartCopy.id;
    let duplicateItem= {number,id,quantity};
    console.log(duplicateItem);
    console.log(filterCartCopy);
    let stt = shoppingcartCopy.indexOf(cartCopy);
    filterCartCopy.splice(stt,0,duplicateItem);
    console.log(stt);
    console.log(filterCartCopy)
    this.setState({shoppingcart:filterCartCopy});
  }
  }

deleteCart = (value) =>
{
  let shoppingcartCopy = [...this.state.shoppingcart];
  let deleteCart = shoppingcartCopy.filter(i=>i.id != value)
  this.setState({shoppingcart:deleteCart});
  console.log(this.state.shoppingcart);

}

changeCart = (event) =>
{
   let number= parseInt(event.target.name);
   let shoppingcartCopy = [...this.state.shoppingcart];
   let quantity =  parseInt(event.target.value);
   let id = shoppingcartCopy[number].id;
   let cart = {number,id,quantity};
   console.log(shoppingcartCopy)
   let cartCopy = shoppingcartCopy.filter(i=>(i.number != number));
   console.log(number);
   cartCopy.splice(number,0,cart);
   this.setState({shoppingcart:cartCopy});
  console.log(this.state.shoppingcart);
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
<Route path="/product/:id" exact render={routeProps => <ProductView shoppingcart={this.state.shoppingcart} getProductInfo={this.getProductInfo} addCart={this.addCart}{...routeProps} /> }/>
<Route path="/shoppingcart" exact render={routeProps => <ShoppingCart total={this.state.total} shoppingcart={this.state.shoppingcart}
count={this.count} item={this.state.items} getCartInfo={this.getCartInfo}
changeCart={this.changeCart} deleteCart={this.deleteCart}{...routeProps}  /> }/>
</Router>
)
  }

}
export default App
