import React from 'react'

export default function Billview(props) {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="card my-2">
                        <div className="card-body">
                            <p className="card-text">Item-Name: {props.name}</p>
                            <p className="card-text">Qunatity : {props.quantity}</p>
                            <p className="card-text">Price : {props.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
