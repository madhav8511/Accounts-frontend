import React from 'react'
import {Link} from 'react-router-dom';
import '../design/navbar.css';

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <img src="https://cdn1.vectorstock.com/i/1000x1000/62/80/calculator-accounting-logo-flat-style-vector-22606280.jpg" alt="Logo" className="rounded-circle img-thumbnail" style={{width: 50, height: 50}}/>

                <a className="navbar-brand" href="/">VyparSakha</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link mx-1" to="/city">City</Link>
                        <Link className="nav-link mx-1" to="/accounts">Account's</Link>
                        <Link className="nav-link mx-1" to="/bills">Generate Invoices</Link>
                        <Link className="nav-link mx-1" to="/about">About-Us</Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
