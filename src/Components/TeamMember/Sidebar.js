import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Real Estate Website
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Team</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/create-teamMember" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Create Team Member</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/edit-teamMember" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Edit Team Member</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/teamMember-list" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Team Members List</CDBSidebarMenuItem>
            </NavLink>


            <NavLink exact to="/about-list" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">About</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/edit-about" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Edit About</CDBSidebarMenuItem>
            </NavLink>


            <NavLink exact to="/create-gallery" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Add Image in Gallery</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/edit-gallery" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Edit Gallery</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Office Map</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;