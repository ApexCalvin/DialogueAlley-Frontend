import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import SearchHandle from './SearchHandle';

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

export default function SearchButton({setSearchString}) {
      const [userInput, setUserInput] = useState('');

      const handleHashtag = e => {
        console.log("User searched hashtag: " + userInput)
        setSearchString(userInput);
      }
      

      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
    return (
        <>
          <Button variant="btn btn-outline-light" onClick={handleShow}>Search</Button>
    
          <Modal show={show} onHide={handleClose}>

            <Modal.Header>
              <Modal.Title>
                Search by Alleyname or Hashtag
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form>

                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"> */}
                  {/* <Form.Control as="textarea" rows={1} /> */}
                {/* </Form.Group> */}

                {/* <textarea value={userInput} required onChange={(e) => setUserInput(e.target.value)}/> */}

                <form onSubmit={handleClose}>
                  <input type="text" style={styles.textbox} value={userInput} onChange={(e) => setUserInput(e.target.value)} />
                </form>

              </Form>
            </Modal.Body>

            <Modal.Footer>
              {/* <SearchHandle/> */}
              <Link className="btn btn-outline-primary" to="/searchHandle" onClick={handleClose}>Alleyname</Link>
              <Link className="btn btn-outline-primary" to="/searchHashtag" onClick={handleClose}>Hashtag</Link>
              {/* <Button variant="primary" onClick={handleHashtag}>Hashtag</Button> */}
              <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    
}
