import React,{useEffect,useState} from 'react'
import './Music'
import { Music } from './Music'


const MusicList = ({backetcount,setBacketcount,musics,items,setItems}) =>{

    return(
        <div className="musiclist__wrapper">
            <div className="musiclist">
            {
                
                musics.map(({id,informations})=>(
                    <Music items={items} setItems={setItems} setBacketcount={setBacketcount} backetcount={backetcount} id={id} key={id} author={informations.author} image={informations.image} price={informations.price} title={informations.title} quantity={informations.quantity}/>
                ))
            }
          </div>
        </div>
       
         

    );
}

export {MusicList}