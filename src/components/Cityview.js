import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'

export default function Cityview(props) {

    const Storename = (name)=>{
        localStorage.setItem("city-name",name);
    }

    const deleteCity = async (id)=>{
        try {
            if (window.confirm('Are you sure you want to delete the city')){
              const response = await axios.delete(`http://localhost:8080/city/deletecity/${id}`);
              console.log(response.data);
              window.location.reload();
            }
          //Please see to reload something.....
        } catch (error) {
          console.error('Error:', error.response.data); 
        }
    }

  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="card my-3">
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">Get all accounts of {props.name} in one click</p>
                            <Link to="/city-view" className="btn btn-primary" onClick={()=>Storename(props.name)}>Account's</Link>
                            <button  className="btn btn-primary mx-2" onClick={()=>deleteCity(props.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
