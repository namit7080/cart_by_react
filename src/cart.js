import React from 'react';
import {CartItem} from './cartitem';

export const Cart =(props)=>{
    
     

   
         const arr=[1,2,3,];
         const {products}=props;
         return(
            <div className="cart">
                {/* {arr} */}
                {/* <CartItem/> */}
                {products.map((product)=>{
                    return   <CartItem
                              product={product} 
                              key={product.id}
                              onIncrease={props.onIncrease}
                              onDecrease={props.onDecrease}
                              onDelete= {props.onDelete}
                              />
                })}
                
            </div>
         );
     }





export default Cart;