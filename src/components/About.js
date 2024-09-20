import React from 'react'
import '../design/about.css'

export default function About() {
  return (
    <div>
        <section className="services">
            <h3>Our Services</h3>
            <div className="content">
                <div className="main-content">
                    <img className="content-image" src="https://happay.com/blog/wp-content/uploads/sites/12/2022/08/best-billing-software.webp" alt='hi'/>
                    <h2>Our innovative software enables you to create professional invoices effortlessly and help you to save time, reduce errors.</h2>
                </div>
                <div className="main-content">
                    <img className="content-image" src="https://wperp-com.s3.amazonaws.com/uploads/2018/07/Significant-Accounting-Statistics-You-Need-to-Know-in-2020-1536x614-1-1024x409.png" alt='hi'/>
                    <h2>Seamlessly handle all your debit and credit transactions with precision and ease.Efficiently manage and track bills associated with your transactions.</h2>
                </div>
                <div className="main-content">
                    <img className="content-image" src="https://www.accoxi.com/media/1743/purchase-by-items-summary-report.jpg?anchor=center&mode=crop&width=700&height=477&rnd=132427631770000000" alt='hi'/>
                    <h2>Stay informed with comprehensive balance reports tailored to your needs, providing clear insights into your financial health.</h2>
                </div>
            </div>
        </section>
    </div>
  )
}
