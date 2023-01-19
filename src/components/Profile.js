import React from 'react'
import LogOutButton from './LogOutButton'
import profilePhoto from './Scone.png'
import { Row } from 'react-bootstrap'
import EditProfileButton from './EditProfileButton'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default function Profile() {
  return (
    <div style={{ marginLeft: '40px'}}>
      <Card style={{ width: '20rem', marginLeft: "auto", marginRight: "auto"}}>
        <Card.Body>
        <h2>Hello,</h2>
        <h2>Andrew Ascone</h2>
        
        <img src={profilePhoto} alt="of Andrew" width='250px' height='250px' style={{borderRadius: '50%'}} />

        <h4 style={{color: "gray"}}>@Scone</h4>
            
              <Row>
                <Col>
                  <EditProfileButton/>
                </Col>
                <Col>
                  <LogOutButton/>
                </Col>
              </Row>

          </Card.Body>
        </Card>
    </div>
  )
}
