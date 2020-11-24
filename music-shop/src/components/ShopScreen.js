import React from 'react'
import {Navbar} from './Navbar'
import {MusicList} from './MusicList'

const ShopScreen = ({backetcount,filterItems,musics,setBacketcount,items,setItems})=>{

    return(
        <>
            <Navbar items={items} backetcount={backetcount} filterItems={filterItems}/>
            <MusicList items={items} setItems={setItems} musics={musics}  backetcount={backetcount} setBacketcount={setBacketcount}/>
        </>
    );
}

export {ShopScreen}