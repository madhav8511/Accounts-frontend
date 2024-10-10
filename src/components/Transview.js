import React,{useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Transview(props) {

    const [showModal, setShowModal] = useState(false);
    const [amount,setAmount] = useState(props.amount);
    const [description, setDescription] = useState(props.description);
    const [type, setType] = useState(props.type);
    const [date,setDate] = useState(props.date.substring(0,10));
    const leftoverPart = props.date.substring(10);

    const deleteTransaction = async (id)=>{
        if (window.confirm('Are you sure you want to delete the transaction')){
            const response = axios.delete(`http://localhost:8080/trans/deletetrans/${id}`);
            console.log((await response).data);
            // Refresh the screen
            window.location.reload();
        }

    }

    const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
        const fullDate = date + leftoverPart;
        const response = await axios.put(`http://localhost:8080/trans/updatetransaction/${props.id}`, {
            amount,
            description,
            type,
            date: fullDate,
        });
        console.log(response.data);
        setShowModal(false); 
    } catch (error) {
        console.error('Error updating product:', error);
    }
    window.location.reload();
    };

    const handleRadioChange = (e) => {
        setType(e.target.value); // Update type based on the selected radio button
    };

    const setdata = (id)=>{
        localStorage.setItem("trans-token",id);
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
                            <p className="card-text">Type : {props.type} ~ {props.type === "credit" ? "नावे": "जमा"}</p>
                            <p className='card-text'>Date: {reversedDate}</p>
                            <button  className="btn btn-primary" onClick={()=>setShowModal(true)}>Update</button>
                            <button  className="btn btn-primary mx-2" onClick={()=>deleteTransaction(props.id)}>Delete</button>
                            <Link to="/image" className="btn btn-primary"  onClick={()=>setdata(props.id)}>View Bills</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {showModal && (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Transaction</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleUpdateSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Amount</label>
                    <input
                      type="number"
                      className="form-control"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="credit" name="type" value="credit" checked={type === "credit"} onChange={handleRadioChange}
                            />
                            <label className="form-check-label" htmlFor="credit">Credit ~ नावे</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="debit" name="type" value="debit" checked={type === "debit"} onChange={handleRadioChange}
                            />
                            <label className="form-check-label" htmlFor="debit">Debit ~ जमा</label>
                        </div>
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input
                      type="text"
                      className="form-control"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Save Changes</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
