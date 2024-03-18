import React from 'react'
import { Link } from 'react-router-dom'

export default function City() {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="card my-3">
                        <div className="card-body">
                            <h5 className="card-title">Pilibangan</h5>
                            <p className="card-text">Get all accounts of pilibangan in one click</p>
                            <Link to="/pilibangan" className="btn btn-primary">Account's</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="card my-3">
                        <div className="card-body">
                            <h5 className="card-title">Hanumangarh</h5>
                            <p className="card-text">Get all accounts of hanumangarh in one click</p>
                            <Link to="/hanumangarh" className="btn btn-primary">Account's</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="card my-3">
                        <div className="card-body">
                            <h5 className="card-title">Sri Ganganagar</h5>
                            <p className="card-text">Get all accounts of ganganagar in one click</p>
                            <Link to="/ganganagar" className="btn btn-primary">Account's</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
