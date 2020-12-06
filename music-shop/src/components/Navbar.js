import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './styles/styles.css'
import { Badge, IconButton} from '@material-ui/core';
import {Link} from 'react-router-dom' 
import { Home } from '@material-ui/icons';
import { Cart } from './Cart';

const Navbar = ({backetcount,filterItems}) =>{


    return(
      <div className="nav__container">
          <Link  style={{ textDecoration: 'none'}}  to="/" >
          <div className="nav__title">
              Music Store
          </div>
          </Link>
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
                  <Link to= '/cart'>
                    <IconButton>
                    <Badge badgeContent={backetcount} color="secondary" >
                        <ShoppingCartIcon style={{color:"white"}}/>
                    </Badge>
                    </IconButton>
                  </Link>
              </div>
              <Link  style={{ textDecoration: 'none'}}  to="/login" >
                <div className="nav__signin">Sign in </div>
                </Link>
          </div>
      </div>

    );
}

export {Navbar}