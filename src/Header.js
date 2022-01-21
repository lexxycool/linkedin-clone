import React from 'react';
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Header() {
  return (
    <div className="header">
     
        <div className="header__left">
            {/* <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/> */}
            <LinkedInIcon className="header__image"/>

            <div className="header__search">
                <SearchIcon />
                <input type="text"/>

            </div>
            
        </div>

        <div className="header__right">

        </div>
        
        
    </div>
  );
  
}

export default Header;
