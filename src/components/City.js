import React, { useEffect, useState } from 'react'
import Cityview from './Cityview';
import axios from 'axios';

export default function City() {

    const [city,setCity] = useState(null);

    const getcity = async ()=>{
        const response = await fetch("http://localhost:8080/city",{
            method: 'GET'
        });
        const json = await response.json();
        setCity(json);
    }

    
    const [searchName, setSearchName] = useState('');


    const addCity = async (name)=>{
        try {
            const response = await axios.post(`http://localhost:8080/city/addcity`, {
                name
            });
            console.log(response.data); // Assuming response data is JSON
        } catch (error) {
            console.error('Error:', error.response.data); // Log error response
        }
    }

    useEffect(()=>{
        getcity();
    },[])

  return (
    <div>
        <div className='center'>
            <div className='container border rounded my-2'>
                <h1 style={{fontFamily:'Recursive'}}>Add a City</h1>
                <form className='container my-3'>
                    <div className="mb-3">
                    <label htmlFor="city">City</label>
                    <input type="text"   className="form-control" id="city" name='city' placeholder="Enter city" autoComplete="off"  value={searchName} onChange={(e) => setSearchName(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={()=>addCity(searchName)}>Add a City</button>
                </form>
            </div>
        </div>
        <div className='city-list'>            
        <h3 className='mx-3 my-2 d-flex justify-content-center align-items-center'>--- Cities ---</h3>
            {Array.isArray(city) && city.map((city,index) => {
                return <Cityview key={index} id={city._id} name={city.name}></Cityview>
            })}
        </div>
    </div>
  )
}
