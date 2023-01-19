import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from './LogOutButton';
import MakePost from './MakePost'
import SearchButton from './SearchButton';

export default function Navbar() {  
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                {/* <LogOutButton/> */}
                <MakePost/>
          
                <a className="navbar-brand" href="http://localhost:3000">
                    DIALOGUE ALLEY 
                </a>

                
                <SearchButton/>  
              
            </div>
        </nav>
    </div>
  )
}