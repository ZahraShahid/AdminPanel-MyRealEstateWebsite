import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

import CreateTeamMember from "./Components/TeamMember/create-TeamMember";
import EditTeammember from "./Components/TeamMember/edit-TeamMember";
import TeamMemberList from "./Components/TeamMember/TeamMembers-list";
//import Prosidebar from "./Components/Sidebar/prosidebar";
//import Sidebarpro from "./Components/Sidebar/sidebarpro";
import minimalSidebar from "./Components/Sidebar/minimalSidebar";
import Sidebar from "./Components/TeamMember/Sidebar";
import CreateGallery from "./Components/Gallery/create-Gallery";
import EditGallery from "./Components/Gallery/edit-Gallery";
import GallerysList from "./Components/Gallery/Gallery-list";
import AboutList from "./Components/AboutUs/About-list";
import EditAbout from "./Components/AboutUs/edit-About";

function App() {
  return (
    <Router>
      <div className="App">
      
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"} 
                  className="nav-link">
                  Dashboard
                </Link>
              </Navbar.Brand>
  
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-teamMember"} 
                    className="nav-link">
                    Create Team Member
                  </Link>
                </Nav>
  
                <Nav>
                  <Link to={"/teamMember-list"} 
                    className="nav-link">
                    Team Members List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
        
  
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" 
                    element={<Sidebar/>} />
                  <Route path="/create-teamMember" 
                    element={<CreateTeamMember/>} />
                  <Route path="/edit-teamMember/:id"
                    element={<EditTeammember/>} />
                  <Route path="/teamMember-list" 
                    element={<TeamMemberList/>} />


                     <Route path="/edit-gallery/:id"
                    element={<EditGallery/>} />
                  <Route path="/gallery-list" 
                    element={<GallerysList/>} />
                     <Route path="/create-gallery" 
                    element={<CreateGallery/>} />

                    <Route path="/edit-about/:id"
                    element={<EditAbout/>} />
                  <Route path="/about-list" 
                    element={<AboutList/>} />
                    


                     
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
       
       
      </div>
    </Router>
  );
}

export default App;
