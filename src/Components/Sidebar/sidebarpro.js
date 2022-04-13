import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { NavLink } from 'react-router-dom';
import CreateTeamMember from '../TeamMember/create-TeamMember';
import EditTeamMember from '../TeamMember/edit-TeamMember';
import TeamMembersList from '../TeamMember/TeamMembers-list';
import CreateGallery from '../Gallery/create-Gallery';
import EditGallery from '../Gallery/edit-Gallery';
import GallerysList from '../Gallery/Gallery-list';
import EditAbout from '../AboutUs/edit-About';



const Sidebarpro = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
<ProSidebar>
  <Menu iconShape="user">
    <MenuItem /*icon={<user />}*/ prefix={<i className="fa fa-bars fa-large"></i>}>
        <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Real Estate Website
        </a>
        
    </MenuItem>
   
    <SubMenu title="Team Member" icon={<table />}>
       <NavLink exact to="/create-teamMember" activeClassName="activeClicked">
           <MenuItem> Create Team Member</MenuItem>
        </NavLink>
        <NavLink exact to="/edit-teamMember" activeClassName="activeClicked">
           <MenuItem>Edit Team Member</MenuItem>
        </NavLink>
        <NavLink exact to="/teamMember-list" >
           <MenuItem>Team Member List</MenuItem>
        </NavLink>
    </SubMenu>
       
        
        
    <SubMenu title="About" icon={<table />}>
        <NavLink exact to="/edit-about" >
            <MenuItem>Edit About</MenuItem>
        </NavLink>
        <NavLink exact to="/about-list" >
            <MenuItem>About List</MenuItem>
        </NavLink>
      
    </SubMenu>
    <SubMenu title="Gallery" icon={<table />}>
        <NavLink exact to="/create-gallery" >
            <MenuItem>Add Image in Gallery</MenuItem>
        </NavLink>
        <NavLink exact to="/edit-gallery" >
            <MenuItem>Edit Gallery</MenuItem>
        </NavLink>
      
    </SubMenu>

  </Menu>
</ProSidebar>
</div>
    );
};

export default Sidebarpro;
