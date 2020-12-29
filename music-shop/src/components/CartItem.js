import React,{useState} from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import { IconButton } from '@material-ui/core';

const CartItem =({price,author,title,image,quantity})=>{

    const [qunatityCount,setQuantityCount] = useState(quantity)

    const removeItem =()=>{
        console.log("removing item")
    }

    const increment =()=>{
        setQuantityCount(qunatityCount+1)
        
    }

    const decrement =()=>{
        if(qunatityCount === 1){
            removeItem();
        }else{
        setQuantityCount(qunatityCount-1)
        }
   

    }

    return(
        <div className="cart__item">
            <div className="cart__image"><img src={image} alt=""/></div>
            <div className="cart__category">
                <div className="cart__author">{author}</div>
                <div className="cart__title">{title}</div>
            </div>
            <div className="cart__counter">
                <div className="cart__plus"><IconButton onClick={increment}><AddCircleOutlineIcon style={{ fontSize: 20, color: "black"}}/></IconButton></div>
                <div className="cart__quantity">{qunatityCount}</div>
                <div className="cart__minus"><IconButton onClick={decrement}><RemoveCircleOutlineIcon style={{ fontSize: 20, color: "black" }}/></IconButton></div>
            </div>
            <div className="cart__price">{price} PLN</div>
            <div className="cart__remove"><IconButton><DeleteOutlineOutlinedIcon style={{ fontSize: 20, color: "black" }}/></IconButton></div>
        </div>

    );
}

export {CartItem}

