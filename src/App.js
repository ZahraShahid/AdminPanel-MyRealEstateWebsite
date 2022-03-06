import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

import CreateTeamMember from "./Components/TeamMember/create-TeamMember";
import EditTeammember from "./Components/TeamMember/edit-TeamMember";
import TeamMemberList from "./Components/TeamMember/TeamMembers-list";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-teamMember"} 
                  className="nav-link">
                  Team
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
                    element={<CreateTeamMember/>} />
                  <Route path="/create-teamMember" 
                    element={<CreateTeamMember/>} />
                  <Route path="/edit-teamMember/:id"
                    element={<EditTeammember/>} />
                  <Route path="/teamMember-list" 
                    element={<TeamMemberList/>} />
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
