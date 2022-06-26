import React  from 'react';


export const CartItem =(props)=>{
    //  constructor(){
    //      super()
    //      this.state={
    //          title:'Phone',
    //          price:'14000',
    //          qty:2,
    //          img:'https://cdn-icons-png.flaticon.com/512/15/15874.png'
    //      }

    //      // to wrap this
    //     // this.increase= this.increase.bind(this);
    //  }
    //  increase(){
         
    //      this.setState((prevstate)=>{
    //          return{
    //           qty:prevstate.qty+1
    //          }
    //      })
    //  }
    //  decrease(){
         
    //     const qty=this.state.qty;
    //     console.log(qty);
    //     if(qty===0){
    //         return;
    //     }
    //     this.setState((prev)=>{
    //         return{
    //             qty:prev.qty-1
    //         }
    //     })

        
        
    //  }


   

        const {title ,price , qty,img}= props.product;
        {console.log(props)}
       return (
           
         <div className="cart-item">

            <div className="left-block">
                 <img style={Styles.img} src={img}/> 
            </div>

            <div className="right-block">
                 <div style={Styles.size}>{title}</div>
                 <div style={Styles.size}>Quantity {qty}</div>
                 <div style={Styles.size}>Prices {price}</div>

                 <div className="cart-item-action">
                     {/*  button */}
                     <img alt="inc" onClick={()=> props.onIncrease(props.product)} className="action-icon" src="https://cdn-icons-png.flaticon.com/512/1828/1828574.png" />
                     <img alt="dec" onClick={()=> props.onDecrease(props.product)} className="action-icon" src="https://cdn-icons.flaticon.com/png/512/2569/premium/2569198.png?token=exp=1655968745~hmac=d300baeba75fbf67f1e1480fe0508610"/>
                     <img alt="delete" onClick={()=> props.onDelete(props.product.id)} className="action-icon" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"/>
                 </div>
            </div>


         </div>
             

       );

    }



const Styles={
   img:{
       height:110,
       width:100,
       borderRadius:4,
       background:'#cccc'
   },
   size:{
       fontSize:25,
       color:'#1B427'
   }
}