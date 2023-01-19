import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const createPostURL = "http://localhost:8080/post/add"

const styles={
  textbox: {
    width: '100%',
    padding: '6px 10px',
    margin: '10px 0',
    border: '1px solid black',
    borderRadius: '8px',
    boxSizing: 'border-box',
    display: 'block'
  }
}

export default function MakePost() {
      const [message, setMessage] = useState('');
      const account_id = 1;

      const handleSubmit = e => {
        e.preventDefault();

        const dialogue = { message, account_id }
        
        fetch(createPostURL, {
          method: 'POST',
          headers: { "Content-Type" : "application/json" },
          body: JSON.stringify(dialogue)
        }).then(() => {
          console.log("New dialogue added");
        })
        setShow(false);

        setMessage('');
        //setHashtag('');

        console.log(dialogue);
        window.location.reload();
      }



      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      useEffect(() => {
        const keyDownHandler = e => {
    
          if(e.key === 'Enter'){
            e.preventDefault();
    
            handleSubmit(e);
          }
        };
    
        document.addEventListener('keydown', keyDownHandler);
    
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        }
      }, [handleSubmit]);
    
    return (
        <>
          <Button variant="btn btn-outline-light" onClick={handleShow}>+ Dialogue</Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Write a Dialogue!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Dialogue (255 character limit)</Form.Label>
                  {/* <Form.Control as="textarea" rows={3} /> */}
                </Form.Group>

                <textarea style={styles.textbox} value={message} required onChange={(e) => setMessage(e.target.value)}/>
              

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Add hashtags</Form.Label>
                  {/* <Form.Control as="textarea" rows={1} /> */}
                  <input type="text" style={styles.textbox} />
                </Form.Group>

              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Cancel</Button>
              <Button variant="primary" onClick={handleSubmit}>Submit</Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    
}
