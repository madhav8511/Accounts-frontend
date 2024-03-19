import React from 'react'
import axios from 'axios'

export default function Transview(props) {

    const deleteTransaction = async (id)=>{
        if (window.confirm('Are you sure you want to delete the transaction')){
            const response = axios.delete(`http://localhost:8080/trans/deletetrans/${id}`);
            console.log((await response).data);
            // Refresh the screen
            window.location.reload();
        }

    }

    const formattedDate = props.date.substring(0, 10);

    // Split the date into day, month, and year
    const [year, month, day] = formattedDate.split("-");

    // Reverse the order and join them back
    const reversedDate = `${day}-${month}-${year}`;

  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="card my-2">
                        <div className="card-body">
                            <h5 className="card-title">Amount: {props.amount}</h5>
                            <p className="card-text">Description : {props.description}</p>
                            <p className="card-text">Type : {props.type}</p>
                            <p className='card-text'>Date: {reversedDate}</p>
                            <button  className="btn btn-primary" onClick={()=>deleteTransaction(props.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
