import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    let activeStyle = {
        textDecoration: "underline"
        
      };
    
      let activeClassName = "underline"
    return (
        <div>
            <nav className='p-4 flex justify-center text-xl font-sans nav-bar text-white'>
            
            <ul className='md:flex'>
            <li className='mr-2'>
            <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            HOME
          </NavLink>
            </li>
            <li className='mr-2'>
            <NavLink
            to="/reviews"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            REVIEWS
          </NavLink>
            </li>
            <li className='mr-2'>
            <NavLink
            to="/blogs"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            BLOGS
          </NavLink>
            </li>
          <li className='mr-2'>
          <NavLink
            to="dashboard"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            DASHBOARD
          </NavLink>
          </li>
            </ul>
            </nav>
        </div>
    );
};

export default Header;