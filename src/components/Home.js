import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    localStorage.clear();
  return (
    <div>
       <img src='https://cdn.corporatefinanceinstitute.com/assets/drawaing-account.jpeg' alt='home-pic' className='img-fluid' style={{width: 1535, height:628}} />
        <div className='footer'>
            <footer class="footer bg-dark text-light">
                <div class="container">
                    <div class="row">
                    <div class="col-md-4 my-2">
                        <h5>About Us</h5>
                        <p>We are providing a basic account handling web app to make your life easy and handle account in a easier way.</p>
                    </div>
                    <div class="col-md-4 my-2">
                        <h5>Quick Links</h5>
                        <ul class="list-unstyled">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/accounts">Account</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        </ul>
                    </div>
                    <div class="col-md-4 my-2">
                        <h5>Contact Us</h5>
                        <p>Ward no.7 near public park</p>
                        <p>Email: mgirdhar027@gmail.com</p>
                        <p>Phone: 8955223080</p>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col text-center">
                        <hr class="border-light"/>
                        <p>&copy; 2024 Your Company. All rights reserved.</p>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
  )
}
