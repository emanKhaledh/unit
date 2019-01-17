
import React, { Component } from 'react';
import './style.css';
import Button from './button'
class AddProduct extends Component {
constructor(props){
  super(props);
  this.state ={
    namee:'',
    company:'',
    country:''

  }
}

insertData = (e)=>{
  this.setState({
    [e.target.name]: e.target.value
  }) 
}
sendData =()=>{
const {name,company,country} = this.state;
console.log("fetch",this.state);

fetch('/insert', {
  method: 'POST', 
  body: JSON.stringify({name,company,country}), 
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));
}

  render(){
   
    
    return(
  <div className="product">
      <label>name</label>
      <input type="text" name="namee" value={this.state.namee} onChange={this.insertData}/>

      <label>company</label>
      <input type="text" name ="company" value={this.state.company} onChange={this.insertData}/>

      <label>country</label>
      <input type="text" name="country" value={this.state.country} onChange={this.insertData}/>
  <Button onClick={this.sendData} className="btn-inser">add product</Button>
 </div>
    )
  }
}

export default AddProduct;