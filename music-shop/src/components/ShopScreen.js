import React from 'react'
import {Navbar} from './Navbar'
import {MusicList} from './MusicList'

const ShopScreen = ({backetcount,filterItems,musics,setBacketcount})=>{

    return(
        <>
            <Navbar backetcount={backetcount} filterItems={filterItems}/>
            <MusicList musics={musics}  backetcount={backetcount} setBacketcount={setBacketcount}/>
        </>
    );
}

export {ShopScreen}