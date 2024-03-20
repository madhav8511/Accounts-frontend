import React, { useEffect, useState } from 'react'
import  User  from './User';
export default function Account() {

    const [user,Setuser] = useState(null);
    const [searchName, setSearchName] = useState('');

    const getAlluser = async()=>{
        const response = await fetch("http://localhost:8080/user/",{
            method: 'GET'
        });
        const json = await response.json();
        Setuser(json);
    }

    const handleSearch = async () => {
        const response = await fetch(`http://localhost:8080/user/searchuser?name=${searchName}`, {
            method: 'GET'
        });
        const json = await response.json();
        Setuser(json);
    }

    useEffect(()=>{
        getAlluser();
    },[]);

  return (
    <div>
        <h2 className='text-center' style={{ color: '#333' }}>--- All Accounts in firm ---</h2>
        <div className="input-group mb-3 mx-auto my-3" style={{ maxWidth: '350px' }}>
                <input type="text" className="form-control" placeholder="Search by name" value={searchName} onChange={(e) => setSearchName(e.target.value)}/>
                <button className="btn btn-primary" type="button"  onClick={handleSearch}>Search</button>
        </div>
        <div className='user-list'>
            {Array.isArray(user) && user.map((person) => {
                return <User id={person._id} name={person.name} mobileno={person.mobileno} address={person.address}></User>
            })}
        </div>
    </div>
  )
}
