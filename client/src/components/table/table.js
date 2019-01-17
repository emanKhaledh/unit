import React, { Component } from 'react';
import './style.css';
import Button from './button.jsx';
import AddProduct from './addProduct.jsx'
import FontAwesome from 'react-fontawesome';




  
class Table extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:{
    name: 'React',
      company: 'facebook',
      country: 'Jordan ',
      objectID: 0,
      },
      Visibility:false

    }

    
  }

  toggleVisibility =()=> {
    this.setState({Visibility:true})
       }


  del =(index)=>{
  
      this.setState({
       data: this.state.data.filter((_, i) => i !== index)
      });
 
      
    }

  

update =(id)=>{
  console.log('hi update',id);
  
}
  render(){
    const {name,company,country,objectID} = this.state.data;
    return (
      <div className="App">

     
        <div className="divStyle">
         <h2>product store</h2>
         <Button onClick={this.toggleVisibility} className="btn">add product</Button>
        </div>

        <table>
           <tr>
             <th></th>
             <th>Product name</th>
             <th>company</th>
             <th>country</th>
             <th>operation</th>
            </tr>
            <tr>
             <td><span>d</span></td>
             <td>{name}</td>
             <td>{company}</td>
             <td>{country}</td>
             <td><span><Button onClick={() => this.del(objectID)} className="btn-del">del</Button></span><span><Button onClick={() => this.update(objectID)} className="btn-upd">update</Button></span></td>
            </tr>
 
        </table>
      
        {this.state.Visibility && <AddProduct /> }

      </div>
      );
  }
}


export default Table;