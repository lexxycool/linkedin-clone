import React from 'react';
import "./Sidebar.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import image from './background_image.jpg';

function Sidebar() {

    const recentItem = (topic) => {
        return (

            <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
        );
        
    }

  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src={image} alt=""/>
            <AccountCircleIcon className="sidebar__icon"/>
            <h2>Obinna Mokwe</h2>
            <h4>maxi@yahoo.com</h4>

        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,543</p>
            </div>
            <div className="sidebar__stat">
            <p>Views on post</p>
                <p className="sidebar__statNumber">2,448</p>
            </div>

        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem('programming')}
            {recentItem('software engineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>

  );
}

export default Sidebar;
