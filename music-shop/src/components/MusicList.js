import React,{useEffect,useState} from 'react'
import './Music'
import { Music } from './Music'
import {db} from './firebase'

const MusicList = () =>{

    const [music,setMusics] = useState([]);

    useEffect(()=>{
     db.collection("Music").onSnapshot(snapshot=>{
      setMusics(snapshot.docs.map(doc=>({
        id: doc.id,
        music: doc.data(),
        type: doc.data('id')
      })))

    })
  },[])

    return(
        <div className="musiclist__wrapper">
            <div className="musiclist">
            {
                
                music.map(({id,music,type})=>(
                    <Music type={type} key={id} author={music.author} image={music.image} price={music.price} title={music.title}/>
                ))
            }
          </div>
        </div>
       
         

    );
}

export {MusicList}