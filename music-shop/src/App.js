import React,{useState,useEffect}from 'react'

import './App.css';
import {ShopScreen} from "./components/ShopScreen"
import {Cart} from './components/Cart'
import {db} from './components/firebase'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'


function App() {

  const [backetcount,setBacketcount]=useState(0);
  const [musics,setMusics] = useState([]);
  const [items,setItems] = useState([]);

      useEffect(()=>{
     db.collection("Music").onSnapshot(snapshot=>{
      setMusics(snapshot.docs.map(doc=>({
        id: doc.id,
        informations: doc.data(),
        gen: doc.data('id'),
        // type: doc.data.id,
      })))

    })
  },[musics.informations])

      const filterItems =(category)=>{
        if(category==='all'){
          // setMusics(musics)??
          
        }
        const filtered = musics.filter((music)=>music.informations.id===category)
        setMusics(filtered)
        
    }

    

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact >
            <ShopScreen items={items} setItems={setItems} backetcount={backetcount} filterItems={filterItems} musics={musics}  backetcount={backetcount} setBacketcount={setBacketcount}/>
          </Route>
          <Route path='/cart'>
            <Cart items={items}/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
