import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

const User = (props)=> {

    const deleteUser = async (id) => {
      try {
        const response = await axios.delete(`http://localhost:8080/user/deleteUser/${id}`);
        console.log(response.data);
        //Please see to reload something.....
      } catch (error) {
        console.error('Error:', error.response.data); 
      }
    };

    const setData = async (name,mobileno)=>{
        const response = await axios.get(`http://localhost:8080/user/verifyUser?mobileno=${mobileno}`);
        localStorage.setItem("token",response.data);
        localStorage.setItem("name",name);
    }
    

  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <div className="card my-2">
                    <div className="card-body">
                        <h5 className="card-title">Name: {props.name}</h5>
                        <p className="card-text">Phone No : {props.mobileno}</p>
                        <p className="card-text">City : {props.address}</p>
                        <Link to="/transaction" className="btn btn-primary" onClick={()=>setData(props.name,props.mobileno)}>Transaction's</Link>
                        <button  className="btn btn-primary mx-2" onClick={()=>deleteUser(props.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default User;