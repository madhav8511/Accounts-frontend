import React from 'react'

export default function Home() {
  return (
    <div>
       <img src='https://cdn.corporatefinanceinstitute.com/assets/drawaing-account.jpeg' alt='home-pic' className='img-fluid' style={{width: 1535, height:628}} />
        <div className='footer'>
            <footer class="footer bg-dark text-light">
                <div class="container">
                    <div class="row">
                    <div class="col-md-4 my-2">
                        <h5>About Us</h5>
                        <p>We are providing a basic account holding web app to make your life easy and handle account in a easier way.</p>
                    </div>
                    <div class="col-md-4 my-2">
                        <h5>Quick Links</h5>
                        <ul class="list-unstyled">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">Contact</a></li>
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
