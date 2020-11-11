import React from 'react'
import './Music'
import { Music } from './Music'

const MusicList = () =>{

    return(
        <div className="musiclist__wrapper">
            <div className="musiclist">
            <Music/>
            <Music/>
            <Music/>
            <Music/>
            <Music/>
          </div>
        </div>
       
         

    );
}

export {MusicList}