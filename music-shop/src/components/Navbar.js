import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './styles/styles.css'
import { Badge, IconButton} from '@material-ui/core';


const Navbar = ({backetcount,filterItems}) =>{

    const typeHandler =(e)=>{
        console.log(e.target)

    } 

    return(
      <div className="nav__container">
          <div className="nav__title">
              Music Store
          </div>
          <ul>
              <li>
                  <button onClick={()=>filterItems('all')}>
                      All
                  </button>
              </li>
              <li>
                   <button onClick={()=>filterItems('rock')}>
                      Rock
                  </button>
              </li>
              <li>
                 <button onClick={()=>filterItems('rap')}>
                      Rap
                  </button>
              </li>
              <li>
                   <button onClick={()=>filterItems('pop')}>
                      Pop
                  </button>
              </li>
          </ul>
          <div className="nav__right">
            
              <div className="nav__cart">
                  <IconButton>
                  <Badge badgeContent={backetcount} color="secondary">
                    <ShoppingCartIcon style={{color:"white"}}/>
                  </Badge>
                  </IconButton>
                  
              </div>
                <div className="nav__signin">
                  Sign in
              </div>
          </div>
      </div>

    );
}

export {Navbar}