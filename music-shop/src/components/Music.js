import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './styles/styles.css'
import { IconButton } from '@material-ui/core';

const Music = () =>{

    return(
        <div className="music__container">
            <div className="music__img">
                <img src=".\img\amalbum.jpg" alt=""/>
            </div>
            <div className="music__description">
                    <div className="music__price">14.99 pln</div>
                    <div className="music__desdown">
                        <div className="music__titleauthor">
                            <div className="music__title">what went down</div>
                            <div className="music__author">foals</div>
                        </div>       
                        <div className="music__buyicon">
                        <IconButton  style={{background: "#b988b2", color: "white"}}>
                            <AddShoppingCartIcon style={{color: "white"}}/>
                        </IconButton>
                    </div>    
                </div>
                                        
            </div>
        </div>
    );
}

export {Music} 
