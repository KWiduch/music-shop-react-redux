import React,{useState,useEffect}from 'react'

import './App.css';
import {Navbar} from './components/Navbar'
import {MusicList} from './components/MusicList'
import {db} from './components/firebase'

//TO DO osobne funkcje na guziki zeby byly 2 rodzaje 
function App() {

  const [backetcount,setBacketcount]=useState(0);
  const [musics,setMusics] = useState([]);

      useEffect(()=>{
     db.collection("Music").onSnapshot(snapshot=>{
      setMusics(snapshot.docs.map(doc=>({
        id: doc.id,
        informations: doc.data(),
        gen: doc.data('id'),
        // type: doc.data.id,
      })))

    })
  },[])

      const filterItems =(category)=>{
        if(category==='all'){
          
        }
        const filtered = musics.filter((music)=>music.informations.id===category)
        setMusics(filtered)
        
        console.log(musics.gen)
    }

    

  return (
    <div className="App">{console.log(musics)}
      <Navbar backetcount={backetcount} filterItems={filterItems}/>
      <MusicList musics={musics}  backetcount={backetcount} setBacketcount={setBacketcount} />
    </div>
  );
}

export default App;
