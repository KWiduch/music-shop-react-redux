import React from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import { IconButton } from '@material-ui/core';
import {Link} from 'react-router-dom'


const Cart=({musics})=>{

    return(
        <>  
           <div className="cart__container">
               <div className="cart__head">
                   <div className="cart__name">Shopping Cart</div>
                   <div className="cart__itemsCount">3 Items</div>
               </div>
               <div className="cart__content">
                   <div className="cart__item">
                       <div className="cart__image"><img src=".\logo192.png" alt=""/></div>
                       <div className="cart__category">
                           <div className="cart__author">Foals</div>
                           <div className="cart__title">what went down</div>
                       </div>
                       <div className="cart__counter">
                           <div className="cart__plus"><IconButton><AddCircleOutlineIcon style={{ fontSize: 20, color: "black"}}/></IconButton></div>
                           <div className="cart__quantity">3</div>
                           <div className="cart__minus"><IconButton><RemoveCircleOutlineIcon style={{ fontSize: 20, color: "black" }}/></IconButton></div>
                       </div>
                       <div className="cart__price">420 PLN</div>
                       <div className="cart__remove"><IconButton><DeleteOutlineOutlinedIcon style={{ fontSize: 20, color: "black" }}/></IconButton></div>
                   </div>
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