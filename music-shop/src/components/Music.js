import React,{useState} from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './styles/styles.css'
import { IconButton } from '@material-ui/core';

const Music = ({title,author,price,image,backetcount,setBacketcount}) =>{

    
    const backetHandler =(e)=>{
        console.log(e.target)
        setBacketcount(backetcount+1);

    }

    return(
        <div className="music__container">
            <div className="music__img">
                <img src={image} alt=""/>
            </div>
            <div className="music__description">
                    <div className="music__price">{price} pln</div>
                    <div className="music__desdown">
                        <div className="music__titleauthor">
                            <div className="music__title">{title}</div>
                            <div className="music__author">{author}</div>
                        </div>       
                        <div className="music__buyicon">
                        <IconButton onClick={backetHandler} style={{background: "#b988b2", color: "white"}}>
                            <AddShoppingCartIcon style={{color: "white"}}/>
                        </IconButton>
                    </div>    
                </div>
                                        
            </div>
        </div>
    );
}

export {Music} 
