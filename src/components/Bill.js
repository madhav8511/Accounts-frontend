import React, { useState } from "react";
import { jsPDF } from "jspdf";
import Billview from "./Billview";

// Function to generate the PDF
function save_pdf(customer, products) {
  const doc = new jsPDF();
  const pageHeight = doc.internal.pageSize.height;
  let yPosition = 77;
  
  // Header
  doc.setFontSize(18);
  doc.setTextColor(40, 40, 99);
  doc.text("Ganpati General Store", 10, 10);
  doc.setFontSize(12);
  doc.setTextColor(99, 99, 99);
  doc.text("Ware House Raod", 10, 20);
  doc.text("xxx, Rajasthan, 335xxx", 10, 25);
  doc.text("Phone: (+91) 9414536xxx, 9414501xxx", 10, 30);
  doc.text("GST IN: ", 10, 35);

  // Customer Info
  doc.setTextColor(0, 0, 250);
  doc.setFontSize(12);
  doc.text(`To: ${customer.name},`, 115, 20);
  doc.text(`${customer.address},`,122,27)
  doc.text(`${customer.mobile}`, 122, 34);

  // Table Headers
  doc.setFillColor(204, 204, 255);
  doc.rect(10, 60, 190, 10, "F"); // Fill with background color
  doc.setDrawColor(0, 0, 0);
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(12);
  doc.text("Sr No", 15, 67);
  doc.text("Name", 35, 67);
  doc.text("Quantity", 85, 67);
  doc.text("Price", 135, 67);
  doc.text("Net Amount", 165, 67);

  let netTotal = 0;
  products.forEach((p, index) => {
    if (yPosition > pageHeight - 20) { // Check if new page is needed
      doc.addPage();
      yPosition = 10;

      // Table Headers on New Page
      doc.setFillColor(204, 204, 255);
      doc.rect(10, yPosition, 190, 10, "F"); // Fill with background color
      doc.setDrawColor(0, 0, 0);
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(12);
      doc.text("Sr No", 15, yPosition + 7);
      doc.text("Name", 35, yPosition + 7);
      doc.text("Quantity", 85, yPosition + 7);
      doc.text("Price", 135, yPosition + 7);
      doc.text("Net Amount", 165, yPosition + 7);
      yPosition += 10;
    }

    const netAmount = p.quantity * p.price;
    netTotal += netAmount;
    doc.text(`${index + 1}`, 15, yPosition+7);
    doc.text(p.name, 35, yPosition+7);
    doc.text(p.quantity.toString(), 85, yPosition+7);
    doc.text(p.price.toString(), 135, yPosition+7);
    doc.text(netAmount.toString(), 165, yPosition+7);
    yPosition += 10;
  });

  // Total
  if (yPosition > pageHeight - 20) { // Check if new page is needed for total
    doc.addPage();
    yPosition = 20;
  }

  doc.setFillColor(204, 204, 255); // Red background color
  doc.rect(10, yPosition + 8, 190, 10, "F"); // Draw the rectangle
  doc.setFontSize(14);
  doc.setTextColor(0 , 0, 0); // White text color for better contrast
  doc.text(`Grand Total: ${netTotal}`, 75, yPosition + 15);

  doc.save("Bill.pdf");
}

export default function Bill() {
  const [customer, setCustomer] = useState({ name: "", mobile: "",address: ""});
  const [item, setItem] = useState({ name: "", quantity: 0, price: 0 });
  const [products, setProducts] = useState([]); // Initialize as an array

  const onChangeCustomer = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const onChangeItem = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setProducts([...products, item]); // Use array spread instead of concat
    setItem({ name: "", quantity: 0, price: 0 });
  };

  return (
    <div>
      <form className="container my-3">
        <div className="mb-3">
          <label htmlFor="customerName">Customer Name</label>
          <input
            type="text"
            className="form-control"
            id="customerName"
            name="name"
            placeholder="Enter Customer Name"
            autoComplete="off"
            value={customer.name}
            onChange={onChangeCustomer}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            name="mobile"
            placeholder="Enter Mobile Number"
            autoComplete="off"
            value={customer.mobile}
            onChange={onChangeCustomer}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="customerAddress">Customer Address</label>
          <input
            type="text"
            className="form-control"
            id="customerName"
            name="address"
            placeholder="Enter Customer Address"
            autoComplete="off"
            value={customer.address}
            onChange={onChangeCustomer}
          />
        </div>
        <hr />
        <div className="mb-3">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            name="name"
            placeholder="Enter Name"
            autoComplete="on"
            value={item.name}
            onChange={onChangeItem}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            name="quantity"
            placeholder="Give Quantity"
            autoComplete="off"
            value={item.quantity}
            onChange={onChangeItem}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            placeholder="Give Price"
            autoComplete="off"
            value={item.price}
            onChange={onChangeItem}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Add a Product
        </button>
        <button
          type="button"
          className="mx-3 btn btn-success"
          onClick={() => save_pdf(customer, products)}
        >
          Save-Pdf
        </button>
      </form>
      <div className="user-list">
        {Array.isArray(products) &&
          products.map((p, index) => (
            <Billview
              key={index}
              name={p.name}
              quantity={p.quantity}
              price={p.price}
            />
          ))}
      </div>
    </div>
  );
}
