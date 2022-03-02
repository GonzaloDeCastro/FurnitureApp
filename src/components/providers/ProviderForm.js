import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { creatorAsyncAdd, creatorAsyncEdit } from '../../actions/providersActions';

export const ProviderForm = (props) => {
	const dispatch = useDispatch();
	const { type, provider } = props;
	const [company, setCompany] = useState(provider ? provider.company : '');
	const [firstName, setFirstName] = useState(provider ? provider.firstName : '');
	const [lastName, setLastName] = useState(provider ? provider.lastName : '');
	const [email, setEmail] = useState(provider ? provider.email : '');
	const [phone, setPhone] = useState(provider ? provider.phone : '');
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (type === 'add') {
			const provider = { company, firstName, lastName, email, phone };
			const action = creatorAsyncAdd(provider);
			dispatch(action);
		}
		if (type === 'edit') {
			const payloadProvider = {
				id: provider.id,
				company,
				firstName,
				lastName,
				email,
				phone,
			};
			const action = creatorAsyncEdit(payloadProvider);
			dispatch(action);
		}
		setCompany('');
		setFirstName('');
		setLastName('');
		setEmail('');
		setPhone('');
	};
	useEffect(() => {
		setCompany(provider ? provider.company : '');
		setFirstName(provider ? provider.firstName : '');
		setLastName(provider ? provider.lastName : '');
		setEmail(provider ? provider.email : '');
		setPhone(provider ? provider.phone : '');
	}, [provider]);
	return (
		<>
			<Button variant="primary" onClick={handleShow} className="btn btn-info ms-2">
				Launch modal
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Provider modal</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={handleSubmit} className="mt-3">
						<input
							type="text"
							name="company"
							placeholder="Company"
							className="form-control mb-3"
							required
							onChange={(e) => setCompany(e.target.value)}
							value={company}
						/>
						<input
							type="text"
							name="firstname"
							placeholder="Firstname"
							className="form-control mb-3"
							required
							onChange={(e) => setFirstName(e.target.value)}
							value={firstName}
						/>
						<input
							type="text"
							name="lastname"
							placeholder="Lastname"
							className="form-control mb-3"
							required
							onChange={(e) => setLastName(e.target.value)}
							value={lastName}
						/>
						<input
							type="email"
							name="email"
							placeholder="Email"
							className="form-control mb-3"
							required
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
						<input
							type="number"
							name="phone"
							placeholder="Phone"
							className="form-control mb-3"
							required
							onChange={(e) => setPhone(e.target.value)}
							value={phone}
						/>
						<button className="btn-success" type="submit">
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
