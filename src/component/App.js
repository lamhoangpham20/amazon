import React from "react"
import Menu from "./Menu"
import image1 from "./image1.jpg"
import image2 from "./image2.jpg"
import image3 from "./image3.jpg"
import image4 from "./image4.jpg"
import image5 from "./image5.jpg"
import image6 from "./image6.jpg"
import Search from "./Search"
import Button from "./Button"
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
  ], textInput: ""}
  }
  filterItems = (arr, query) => {
  return arr.name.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })
  }
 newInput = (event)=>{
   this.setState({textInput: event.target.value });
   console.log(event.target.value);
 }
  render()
  {
    return(
    <div>
    <Button/>
    <Search value={this.state.textInput} onChange={this.newInput}></Search>
    <p>{this.state.textInput}</p>
    <Menu items= {this.state.items} textInput={this.state.textInput}/>

    </div>
    )
  }
}
export default App
