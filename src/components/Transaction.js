import React, { useEffect, useState } from 'react';
import Transview from './Transview';
import axios from 'axios';

export default function Transaction() {
    const [transaction, setTransaction] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const name = localStorage.getItem('name');

    const getTransaction = async () => {
        const response = await fetch('http://localhost:8080/trans/getbyUser', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });

        const json = await response.json();
        setTransaction(json);
    }

    const addTransaction = async (amount, description, type) => {
        try {

            let json = []

            if(selectedFiles.length > 0){
                const formData = new FormData();
                for (let i = 0; i < selectedFiles.length; i++) {
                    formData.append('billimage', selectedFiles[i]);
                }

                const res = await axios.post('http://localhost:8080/uploads/images', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'auth-token': localStorage.getItem('token')
                    }
                });

                json = res.data;
            }

            const response = await fetch('http://localhost:8080/trans/createTransaction', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({ amount, description, type, img: json })
            });

            const responseData = await response.json();
            console.log(responseData);

        } catch (error) {
            console.error('Error in adding transaction:', error);
        }

        window.location.reload();
    }

    useEffect(() => {
        getTransaction();
    }, [name]);

    const [note, setNote] = useState({ amount: 0, description: '', type: '' });

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    const onFileChange = (e) => {
        setSelectedFiles(e.target.files);
    };

    return (
        <div className='center'>
            <div className='container border rounded my-2'>
                <h1 style={{ fontFamily: 'Recursive' }}>Add a Transaction for {name}</h1>
                <form className='container my-3' onSubmit={(e) => {
                    e.preventDefault();
                    addTransaction(note.amount, note.description, note.type);
                }}>
                    <div className="mb-3">
                        <label htmlFor="amount">Amount</label>
                        <input type="number" className="form-control" id="amount" name='amount' placeholder="Enter amount" autoComplete="off" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control" id="description" name='description' placeholder="Give description" autoComplete="off" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label>Type</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="credit" name="type" value="credit" onChange={onChange} />
                                <label className="form-check-label" htmlFor="credit">Credit~नावे </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="debit" name="type" value="debit" onChange={onChange} />
                                <label className="form-check-label" htmlFor="debit">Debit~जमा</label>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-start">
                        <input 
                            type="file" 
                            name="billimage" 
                            multiple 
                            onChange={onFileChange} 
                            className="mb-2" // Added margin-bottom to create space between the input and the button
                        />
                        <button 
                            type="submit" 
                            className="btn btn-primary my-2"
                        >
                            Add a Transaction
                        </button>
                    </div>
                </form>
            </div>
            <h3 className='mx-3 my-2 d-flex justify-content-center align-items-center'>--- Transaction's for : {name} ---</h3>
            {transaction && (
                <>
                    <h3 className='mx-3 my-3 d-flex justify-content-center align-items-center border rounded' style={{ color: transaction.balance > 0 ? 'green' : 'red' }}>@--- Balance: {transaction.balance} ---@</h3>
                    <div className='container d-flex justify-content-between align-items-center'>
                        <h3 className='mx-3'>Credit ~ नावे : {transaction.credit}</h3>
                        <h3 className='mx-3'>Debit ~ जमा : {transaction.debit}</h3>
                    </div>

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
