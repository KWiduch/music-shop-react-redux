import React from 'react'
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import {Link} from 'react-router-dom'
import {CartItem} from './CartItem'


const Cart=({items})=>{

    return(
        <>  
           <div className="cart__container">
               <div className="cart__head">
                   <div className="cart__name">Shopping Cart</div>
                   <div className="cart__itemsCount">3 Items</div>
               </div>
               <div className="cart__content">{
                   
                   items.map(({image,author,title,price})=>(
                    <CartItem author={author} image={image} title={title} price={price}/>
                ))}
                

            
                   <div className="cart__footer">
                       <div className="cart__sum">
                           <div className="cart__total">Total price:</div>
                           <div className="cart__price">5000 pln</div>
                       </div>
                       <div className="cart__checkout"><button>CHECKOUT</button></div>
                   </div>
                   <Link  style={{ textDecoration: 'none'}}  to="/" >
                        <div className="cart__returnContainer">
                                <div className="cart__return"><ArrowBackIosOutlinedIcon style={{ fontSize: 15, color: "black" }}/></div>
                                <div className="cart__returnText">Back to shop</div>
                        </div>
                    </Link>    
               </div>
            
           </div>
        </>
    );
}

export {Cart}