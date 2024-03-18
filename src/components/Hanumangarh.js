import React,{ useState, useEffect } from 'react'
// import noteContext from '../context/NoteContext';
import  User  from './User';
import axios from 'axios';
export default function Hanumangarh() {
    // const context = useContext(noteContext);
    // const {addUser} = context;
    const [user,setUser] = useState({name:"",mobileno:"",address:"Hanumangarh"});
    const [newuser,setNewuser] = useState({name:"",mobileno:"",address:"Hanumangarh"});

    const addUser = async (name, mobileno, address) => {
    try {
        const response = await axios.post(`http://localhost:8080/user/createUser`, {
        name,
        mobileno,
        address
        });
        console.log(response.data); // Assuming response data is JSON
    } catch (error) {
        console.error('Error:', error.response.data); // Log error response
    }
    };

    const handleClick = (e)=>{
        e.preventDefault();
        addUser(newuser.name,newuser.mobileno,newuser.address);
        setUser(user.concat(newuser));
        setNewuser({name:"",mobileno:"",address:"Hanumangarh"})
    }

    const onChange = (e)=>{
        setNewuser({...newuser,[e.target.name]:e.target.value});
    }

    const getUser = async () => {
        try {
            const response = await fetch(`http://localhost:8080/user/getbycity?address=Hanumangarh`, {
                method: 'GET'
            });

            const json = await response.json();
            setUser(json);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }    

    useEffect(()=>{
        getUser();
    },[]);

  return (
    <div>
        <div className='container border rounded my-2'>
            <h1>Add a User in Hanumangarh Account</h1>
            <form className='container my-3'>
                <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text"   className="form-control" id="name" name='name' placeholder="Enter name" autoComplete="off" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="mobileno">Mobile-No</label>
                    <input type="number" className="form-control" id="mobileno" name='mobileno' placeholder="Give mobileno" autoComplete="off" onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add User</button>
            </form>
        </div>
        <div className='user-list'>
        {Array.isArray(user) && user.map((person) => {
            return <User id={person._id} name={person.name} mobileno={person.mobileno} address={person.address}></User>
        })}
        </div>
    </div>
  )
}
