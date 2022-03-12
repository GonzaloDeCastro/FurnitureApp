import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { addAsyncCreator, editAsyncCreator } from '../../redux/actions/productsActions';

export const ProductForm = ({ type, product }) => {
	const dispatch = useDispatch();

	const [name, setName] = useState(product ? product.name : '');
	const [description, setDescription] = useState(product ? product.description : '');
	const [price, setPrice] = useState(product ? product.price : '');
	const [brand, setBrand] = useState(product ? product.brand : '');

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (type === 'add') {
			const product = { name, description, price, brand };
			const action = addAsyncCreator(product);
			dispatch(action);
		}
		if (type === 'edit') {
			const payloadProduct = {
				id: product._id,
				name,
				description,
				price,
				brand,
			};
			const action = editAsyncCreator(payloadProduct);
			dispatch(action);
		}
		setName('');
		setDescription('');
		setPrice('');
		setBrand('');
	};

	useEffect(() => {
		setName(product ? product.name : '');
		setDescription(product ? product.description : '');
		setPrice(product ? product.price : '');
		setBrand(product ? product.brand : '');
	}, [product]);

	return (
		<>
			<Button variant="primary" onClick={handleShow} className="btn btn-info ms-2">
				Launch modal
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Product modal</Modal.Title>
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
						<input
							type="text"
							name="description"
							placeholder="Description"
							className="form-control mb-3"
							onChange={(e) => setDescription(e.target.value)}
							value={description}
						/>
						<input
							type="number"
							name="price"
							placeholder="Price"
							className="form-control mb-3"
							onChange={(e) => setPrice(e.target.value)}
							value={price}
						/>
						<input
							type="text"
							name="brand"
							placeholder="Brand"
							className="form-control mb-3"
							onChange={(e) => setBrand(e.target.value)}
							value={brand}
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
