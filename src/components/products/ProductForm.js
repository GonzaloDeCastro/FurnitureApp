import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import {
  creatorAsyncAddProduct,
  creatorAsyncEditProduct,
} from "../../redux/slices/productsSlice";

export const ProductForm = ({
  type,
  product,
  openModal,
  setShowProductForm,
}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState(product ? product.name : "");
  const [description, setDescription] = useState(
    product ? product.description : ""
  );
  const [price, setPrice] = useState(product ? product.price : "");
  const [brand, setBrand] = useState(product ? product.brand : "");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const [send, setSend] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    if (type === "add") {
      setShowProductForm({ showModal: false, mode: "add" });
    } else {
      setShowProductForm({ showModal: false, mode: "edit" });
    }
  };

  const sendForm = () => {
    setSend(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (error === false) {
      if (type === "add") {
        const product = { name, description, price, brand };
        const action = creatorAsyncAddProduct(product);
        dispatch(action);
      }
      if (type === "edit") {
        const payloadProduct = {
          id: product._id,
          name,
          description,
          price,
          brand,
        };
        const action = creatorAsyncEditProduct(payloadProduct);
        dispatch(action);
      }
      setName("");
      setDescription("");
      setPrice("");
      setBrand("");
      handleClose();
    }
  };

  useEffect(() => {
    setName(product ? product.name : "");
    setDescription(product ? product.description : "");
    setPrice(product ? product.price : "");
    setBrand(product ? product.brand : "");
  }, [product]);

  useEffect(() => {
    if (openModal) {
      setShowModal(!showModal);
    }
  }, [openModal]);

  useEffect(() => {
    if (send) {
      if (name.length === 0) {
        setError("empty name");
      } else if (description.length === 0) {
        setError("empty description");
      } else if (price.length === 0) {
        setError("empty price");
      } else if (brand.length === 0) {
        setError("empty brand");
      } else {
        setError(false);
      }
    }
  }, [handleSubmit]);

  return (
    <>
      <Modal show={showModal} onHide={handleClose} className="modal__product">
        <div className="modal-content">
          <Modal.Header closeButton>
            <Modal.Title>
              {type === "add" ? "Add Product" : "Edit Product"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit} className="mt-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control mb-3"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              {error === "empty name" && <p>Fill name field</p>}
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="form-control mb-3"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
              {error === "empty description" && <p>Fill description field</p>}
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="form-control mb-3"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
              {error === "empty price" && <p>Fill price field</p>}
              <input
                type="text"
                name="brand"
                placeholder="Brand"
                className="form-control mb-3"
                onChange={(e) => setBrand(e.target.value)}
                value={brand}
              />
              {error === "empty brand" && <p>Fill brand field</p>}
              <button className="btn-success" type="submit" onClick={sendForm}>
                Confirm
              </button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-danger" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};
