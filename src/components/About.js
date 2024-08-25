import React from 'react'
import '../design/about.css'

export default function About() {
  return (
    <div>
        <div className="content">
            <div className="main-container">
                <div className="image">
                    <img src="https://happay.com/blog/wp-content/uploads/sites/12/2022/08/best-billing-software.webp" alt="img" className="image-1"/>
                </div>
                <div className="text">
                    <h2>Our innovative software enables you to create professional invoices effortlessly and help you to save time, reduce errors.</h2>
                </div>
            </div>
            <div className="main-container">
                <div className="image">
                    <img src="https://wperp-com.s3.amazonaws.com/uploads/2018/07/Significant-Accounting-Statistics-You-Need-to-Know-in-2020-1536x614-1-1024x409.png" alt="img" className="image-1"/>
                </div>
                <div className="text">
                    <h2>Seamlessly handle all your debit and credit transactions with precision and ease.Efficiently manage and track bills associated with your transactions.</h2>
                </div>
            </div>
            <div className="main-container">
                <div className="image">
                    <img src="https://happay.com/blog/wp-content/uploads/sites/12/2022/08/best-billing-software.webp" alt="img" className="image-1"/>
                </div>
                <div className="text">
                    <h2>Stay informed with comprehensive balance reports tailored to your needs, providing clear insights into your financial health.</h2>
                </div>
            </div>
        </div>
    </div>
  )
}
