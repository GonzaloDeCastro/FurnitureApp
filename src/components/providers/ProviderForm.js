import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import {
  creatorAsyncAdd,
  creatorAsyncEdit,
} from "../../redux/slices/providersSlice";

export const ProviderForm = ({
  type,
  provider,
  openModal,
  setShowProviderForm,
}) => {
  const dispatch = useDispatch();

  const [company, setCompany] = useState(provider ? provider.company : "");
  const [firstName, setFirstName] = useState(
    provider ? provider.firstName : ""
  );
  const [lastName, setLastName] = useState(provider ? provider.lastName : "");
  const [email, setEmail] = useState(provider ? provider.email : "");
  const [phone, setPhone] = useState(provider ? provider.phone : "");
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    if (type === "add") {
      setShowProviderForm({ show: false, mode: "add" });
    } else {
      setShowProviderForm({ show: false, mode: "edit" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (type === "add") {
      const provider = { company, firstName, lastName, email, phone };
      const action = creatorAsyncAdd(provider);
      dispatch(action);
    }
    if (type === "edit") {
      const payloadProvider = {
        id: provider._id,
        company,
        firstName,
        lastName,
        email,
        phone,
      };
      const action = creatorAsyncEdit(payloadProvider);
      dispatch(action);
    }
    setCompany("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  };

  useEffect(() => {
    setCompany(provider ? provider.company : "");
    setFirstName(provider ? provider.firstName : "");
    setLastName(provider ? provider.lastName : "");
    setEmail(provider ? provider.email : "");
    setPhone(provider ? provider.phone : "");
  }, [provider]);

  useEffect(() => {
    if (openModal) {
      setShowModal(!showModal);
    }
  }, [openModal]);

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {type === "add" ? "Add Product" : "Edit Product"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="mt-3">
            <input
              type="text"
              name="company"
              placeholder="Company"
              className="form-control mb-3"
              onChange={(e) => setCompany(e.target.value)}
              value={company}
            />
            <input
              type="text"
              name="firstname"
              placeholder="Firstname"
              className="form-control mb-3"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Lastname"
              className="form-control mb-3"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control mb-3"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone"
              className="form-control mb-3"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <button className="btn-success" type="submit" onClick={handleClose}>
              Confirm
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-danger" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
