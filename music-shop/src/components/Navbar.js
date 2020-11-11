import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './styles/styles.css'
import { Badge, IconButton} from '@material-ui/core';


const Navbar = () =>{

    return(
      <div className="nav__container">
          <div className="nav__title">
              Music Store
          </div>
          <ul>
              <li>
                  <button>
                      All
                  </button>
              </li>
              <li>
                   <button>
                      Rock
                  </button>
              </li>
              <li>
                 <button>
                      Rap
                  </button>
              </li>
              <li>
                   <button>
                      Pop
                  </button>
              </li>
          </ul>
          <div className="nav__right">
            
              <div className="nav__cart">
                  <IconButton>
                  <Badge badgeContent={4} color="secondary">
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