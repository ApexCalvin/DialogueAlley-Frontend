import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SearchHandle from './components/SearchHandle';
import SearchHashtag from './components/SearchHashtag';
import MakePost from './components/MakePost'
import ViewPost from './components/ViewPost';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from 'react';
import LogOutButton from './components/LogOutButton';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">

          <Navbar />

          <container>
            <Row>

              <Col className='colgreen'>
                <Profile/>
              </Col>
                
              <Col Col className='colgreen'>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/searchHandle" element={<SearchHandle />}/>
                <Route path="/searchHashtag" element={<SearchHashtag />}/>
              </Routes>
              </Col>

              <Col Col className='colgreen'/>

            </Row>
          </container>
    </div>
  );
}

export default App;
 