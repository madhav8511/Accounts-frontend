import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Image() {
    const id = localStorage.getItem("trans-token");
    const [photo, setPhoto] = useState([]);

    const getImage = async () => {
        const response = await axios(`http://localhost:8080/trans/gettrans/${id}`);
        setPhoto(response.data.images);
    };

    useEffect(() => {
        getImage();
    }, [id]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {photo.length === 0 ? (
                        <div className="text-center mt-5">
                            <h3>No bills to show</h3>
                        </div>
                    ) : (
                        <div className="d-flex flex-wrap justify-content-center">
                            {photo.map((src, index) => (
                                <div key={index}>
                                <span style={{color:"black", fontWeight:"bold"}}>Page: {index+1}</span>
                                <img  key={index}  src={src}  alt={`Slide ${index + 1}`}  className="img-fluid p-2 mx-2 my-1" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
