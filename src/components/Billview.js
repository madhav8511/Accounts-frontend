import React,{useState} from 'react'
import axios from 'axios';

export default function Billview(props) {

  const [showModal, setShowModal] = useState(false);
  const [name,setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);
  const [quantity, setQuantity] = useState(props.quantity);

  const handleUpdateClick = () => {
    setShowModal(true); 
  };


  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/bill/updateproduct/${props.id}`, {
        name,
        price,
        quantity,
      });
      console.log(response.data);
      setShowModal(false); 
    } catch (error) {
      console.error('Error updating product:', error);
    }
    window.location.reload();
  };

  const deleteproduct = async (id)=>{
      try {
          if (window.confirm('Are you sure you want to remove the Product')){
            const response = await axios.delete(`http://localhost:8080/bill/deleteproduct/${id}`);
            console.log(response.data);
            window.location.reload();
          }
        //Please see to reload something.....
      } catch (error) {
        console.error('Error:', error.response.data); 
      }
  }

  return (
    <div>
       <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="card my-2">
              <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center w-100" style={{ gap: '20px' }}>
                  <div className="text-center" style={{ minWidth: '150px', flex: '1' }}>
                    <p className="fw-bold">Item-Name</p>
                    {props.name}
                  </div>
                  <div className="text-center" style={{ minWidth: '100px', flex: '1' }}>
                    <p className="fw-bold">Quantity</p>
                    {props.quantity}
                  </div>
                  <div className="text-center" style={{ minWidth: '100px', flex: '1' }}>
                    <p className="fw-bold">Price</p>
                    {props.price}
                  </div>
                </div>

                <div className="mt-3 mt-md-0 d-flex w-10 justify-content-md-end" style={{ gap: '10px' }}>
                  <button className="btn btn-primary flex-fill" onClick={handleUpdateClick}>Update</button>
                  <button className="btn btn-primary flex-fill" onClick={() => deleteproduct(props.id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Product</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleUpdateSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Item-Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                      type="number"
                      className="form-control"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input
                      type="number"
                      className="form-control"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Save Changes</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
