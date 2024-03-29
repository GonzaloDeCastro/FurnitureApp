import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import {
  creatorAsyncAddProvider,
  creatorAsyncEditProvider,
} from "../../redux/slices/providersSlice";
export const ProviderForm = ({
  type,
  provider,
  openModal,
  setShowProviderForm,
}) => {
  const dispatch = useDispatch();

  const [company, setCompany] = useState(provider ? provider.company : "");
  const [name, setName] = useState(provider ? provider.name : "");

  const [email, setEmail] = useState(provider ? provider.email : "");
  const [phone, setPhone] = useState(provider ? provider.phone : "");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const [send, setSend] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    if (type === "add") {
      setShowProviderForm({ show: false, mode: "add" });
    } else {
      setShowProviderForm({ show: false, mode: "edit" });
    }
  };
  const sendForm = () => {
    setSend(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (error === false) {
      if (type === "add") {
        const provider = { company, name, email, phone };
        const action = creatorAsyncAddProvider(provider);
        dispatch(action);
      }
      if (type === "edit") {
        const payloadProvider = {
          id: provider._id,
          company,
          name,
          email,
          phone,
        };
        const action = creatorAsyncEditProvider(payloadProvider);
        dispatch(action);
      }
      setCompany("");
      setName("");
      setEmail("");
      setPhone("");
      handleClose();
    }
  };

  useEffect(() => {
    setCompany(provider ? provider.company : "");
    setName(provider ? provider.name : "");

    setEmail(provider ? provider.email : "");
    setPhone(provider ? provider.phone : "");
  }, [provider]);

  useEffect(() => {
    if (openModal) {
      setShowModal(!showModal);
    }
  }, [openModal]);

  useEffect(() => {
    if (send) {
      if (company.length === 0) {
        setError("empty company");
      } else if (name.length === 0) {
        setError("empty name");
      } else if (email.length === 0) {
        setError("empty email");
      } else if (phone.length === 0) {
        setError("empty phone");
      } else {
        setError(false);
      }
    }
  }, [handleSubmit]);

  return (
    <>
      <Modal show={showModal} onHide={handleClose} className="modal__add__edit">
        <Modal.Header closeButton>
          <Modal.Title>
            {type === "add" ? "Add Provider" : "Edit Provider"}
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
            {error === "empty company" && (
              <p className="errors">Fill company field</p>
            )}
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control mb-3"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            {error === "empty name" && (
              <p className="errors">Fill Name field</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control mb-3"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {error === "empty email" && (
              <p className="errors">Fill email field</p>
            )}
            <input
              type="number"
              name="phone"
              placeholder="Phone"
              className="form-control mb-3"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            {error === "empty phone" && (
              <p className="errors">Fill phone field</p>
            )}
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
      </Modal>
    </>
  );
};
