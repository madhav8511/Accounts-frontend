import React, { useEffect, useState } from 'react'
import Transview from './Transview';
// import { Link } from 'react-router-dom';

export default function Transaction() {

    const [transaction,setTransaction] = useState(null);
    const name = localStorage.getItem("name");

    const getTransaction = async ()=>{
        const response = await fetch(`http://localhost:8080/trans/getbyUser`,{
            method:'GET',
            headers:{
                'Content-Type':"application/json",
                'auth-token': localStorage.getItem("token")
            }
        });

        const json = await response.json();
        setTransaction(json);
    }

    const addTransaction = async (amount,description,type)=>{
        const response = await fetch('http://localhost:8080/trans/createTransaction',{
            method:'POST',
            headers:{
                'Content-Type':"application/json",
                'auth-token': localStorage.getItem("token")
            },
            body: JSON.stringify({amount,description,type})
        });
        console.log(response.json());
    }

    useEffect(()=>{    
        getTransaction();
    },[name]);

    const [note,setNote] = useState({amount:0,description:"",type:""});

    const onChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value});
    }

  return (
    <div className='center'>
        <div className='container border rounded my-2'>
            <h1>Add a Transaction for {name}</h1>
            <form className='container my-3'>
                <div className="mb-3">
                <label htmlFor="amount">Amount</label>
                <input type="number"   className="form-control" id="amount" name='amount' placeholder="Enter amount" autocomplete="off" onChange={onChange}/>
                </div>
                <div className="mb-3">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" id="description" name='description' placeholder="Give description" autocomplete="off" onChange={onChange}/>
                </div>
                <div className="mb-3">
                <label htmlFor="type">Type</label>
                <input type="text" className="form-control" id="type" name='type'autocomplete="off" placeholder="credit / debit" onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={()=>addTransaction(note.amount,note.description,note.type)}>Add a Transaction</button>
            </form>
        </div>
        <h3 className='mx-3 my-2 d-flex justify-content-center align-items-center'>--- Transaction's for : {name} ---</h3>
        {transaction && (
                <>
                    <h3 className='mx-3 my-3 d-flex justify-content-center align-items-center border rounded' style={{color : transaction.balance > 0 ? 'green' : 'red'}}>@--- Balance: {transaction.balance} ---@</h3>
                    <h3 className='mx-3'>Credit: {transaction.credit}</h3>
                    <h3 className='mx-3'>Debit: {transaction.debit}</h3>
                    <div className='view'>
                        {Array.isArray(transaction.transactions) && transaction.transactions.map((trans) => (
                            <Transview
                                key={trans._id}
                                id={trans._id}
                                amount={trans.amount}
                                description={trans.description}
                                type={trans.type}
                                date={trans.date}
                            />
                        ))}
                    </div>
                </>
            )}
    </div>
  )
}
