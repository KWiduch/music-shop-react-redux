import React,{useEffect,useState} from 'react'
import './Music'
import { Music } from './Music'


const MusicList = ({backetcount,setBacketcount,musics}) =>{

    return(
        <div className="musiclist__wrapper">
            <div className="musiclist">
            {
                
                musics.map(({id,informations})=>(
                    <Music setBacketcount={setBacketcount} backetcount={backetcount}  key={id} author={informations.author} image={informations.image} price={informations.price} title={informations.title}/>
                ))
            }
          </div>
        </div>
       
         

    );
}

export {MusicList}