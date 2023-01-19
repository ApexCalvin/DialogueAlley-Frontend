import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment';

export default function ViewPost() {

    const [comments, setComments] = useState()

    useEffect( ()=>{
        loadComments();
    }, []);

    const loadComments = async () => {
        const result = await axios.get("http://localhost:8080/comment/allComments/1")
        setComments(result.data)
    };

  return (
    <div className="container">
        <div className="row">

            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Here are the latest and greatest, Andrew!</h2>
            </div>

            <table className="table border">
                <thead className="bg-success text-white">
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Alleyname</th>
                    <th scope="col">Message</th>
                    <th scope="col">TimeStamp</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map((dialogue, index)=>(
                            <tr>
                                <td>{dialogue.first_name}</td>
                                <td>@{dialogue.handle}</td>
                                <td>{dialogue.message}</td>
                                <td>{moment(dialogue.date_time).format('MMMM Do YYYY, h:mm:ss a')}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
    
  )
}
