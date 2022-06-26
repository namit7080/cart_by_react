import React from 'react'

export const Navbar= (props)=>{

    
         return(
             <div style={style.nav}>
                 <div style={ style.cartIconContainer}>
                     <img style={style.cartIcon} src="https://cdn-icons-png.flaticon.com/512/891/891462.png"></img>
                     <span style={ style.cartCount}>{props.count}</span>
                 </div>
             </div>

         )
     }






const style={
    cartIcon:{
        height:32,
        marginRight:20
    },
    nav:{
        height:70,
        background:'#7774',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'end'
    },
    cartIconContainer:{
        position:'relative'
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:' 4px 8px',
        position:'absolute',
        right:0,
        top:-2
    }
}