import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Scone from './Scone.png'

export default function SearchHashtag() {
  
   const [dialogues, setDialogues] = useState([])
   const [profile, setProfile] = useState("");

  useEffect( ()=>{
      loadSearch();
  }, []);

  const loadSearch = async () => {
      const result = await axios.get(`http://localhost:8080/post/searchHashtag/Media`)
      setDialogues(result.data)
  };

return (
    <div className='container' style={{ width: "680px"}}>
    <Card style={{ width: '40rem', marginLeft: "auto", marginRight: "auto"}}>
        <Card.Body>
            <Card.Title> Results of Hashtag search: "Media"</Card.Title>
        </Card.Body>
    </Card>        
{dialogues.map((dialogue, index)=>(
    <Card style={{ width: '40rem', marginLeft: "auto", marginRight: "auto"}}>
        <Card.Body>
            {/* <Row>
                <Col>
                    <img src={Scone} alt="profile pic img" width='100px' height='100px' style={{borderRadius: '70%'}} />
                </Col>

                <Col> */}
                    <Card.Subtitle className="mb-2 text-muted">@{dialogue.handle}</Card.Subtitle>
                    <Card.Text></Card.Text>
                    <Card.Title>{dialogue.message} </Card.Title>
                    <Card.Text></Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">{dialogue.first_name}, {moment(dialogue.date_time).format('MMMM Do YYYY, h:mm:ss a')}</Card.Subtitle>
                {/* </Col>
            </Row> */}
        </Card.Body>
    </Card>
    ))
}
</div>
//   <div className='container'>
//       <div className='py-4'>
//           <table className="table border">
//               <thead className="bg-warning text-white">
//                   <tr>
//                   <th scope="col">Name</th>
//                   <th scope="col">Alleyname</th>
//                   <th scope="col">Message</th>
//                   <th scope="col">Timestamp</th>
//                   </tr>
//               </thead>
//               <tbody>
//                   {dialogues.map((dialogue, index)=>(
//                           <tr>
//                               <td>{dialogue.first_name}</td>
//                               <td>@{dialogue.handle}</td>
//                               <td>{dialogue.message}</td>
//                               <td>{moment(dialogue.date_time).format('MMMM Do YYYY, h:mm:ss a')}</td>
//                           </tr>
//                       ))
//                   }
//               </tbody>
//           </table>
//       </div>
//   </div>

)
}