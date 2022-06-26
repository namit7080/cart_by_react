
import React from 'react'
import {Cart} from './cart'
import {Navbar} from './navbar'


class App extends React.Component {

  constructor(){
    super();
    this.state={
        products:[
            {
                price:10000,
                qty:1,
                title:'Phone',
                img:'https://cdn-icons-png.flaticon.com/512/15/15874.png',
                id:1
            },
            {
               price:90000,
               qty:1,
               title:'Mac',
               img:'https://cdn-icons.flaticon.com/png/512/2420/premium/2420539.png?token=exp=1656153282~hmac=e9bffb2e0a218b315f2aee5e1acc13ef',
               id:2
            },
            {
                price:10000,
                qty:1,
                title:'I-phone',
                img:'https://cdn-icons-png.flaticon.com/512/15/15874.png',
                id:3
            }
        ]
    }



  }
  increasequantity=(product)=>{
      console.log("Increase in the qty "+product);

      const {products}= this.state;
      const index= products.indexOf(product);
      console.log(index);
      products[index].qty+=1;

      this.setState({
          products:products
      })
     
  }
  decquantity=(product)=>{

     const {products}= this.state;
     const index= products.indexOf(product);
     console.log(index);
     if(products[index].qty===0){
         return;
     }

     products[index].qty-=1;

     this.setState({
         products:products
     })
  }

  handleDelete=(id)=>{
       const {products}= this.state;
        
       const items=products.filter((item)=> item.id!==id);// return new arr
       console.log(items);
       this.setState({
           products:items
       })

  }
  totalItem=()=>{
      const {products}= this.state;
       let count=0;

        products.forEach((product)=>{
          count+=product.qty;
        })

       return count


  }
  getTotalPrice=()=>{
    const {products}= this.state;
    let count=0;

     products.forEach((product)=>{
       count+=product.price*product.qty;
     })

    return count
  }


  render(){
    const {products}= this.state
    return (
      <div className="App">
         <Navbar count={this.totalItem()} />
         <Cart 
             products={products}
            onIncrease={this.increasequantity}
            onDecrease={this.decquantity}
            onDelete= {this.handleDelete}

          />
          <div style={{padding:10, fontSize:20}}>Total Amount: {this.getTotalPrice()}</div>
      </div>
    );
  }
}


export default App;
