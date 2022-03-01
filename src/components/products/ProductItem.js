import React from 'react';
import { FaTrash as DeleteIcon, FaPen as EditIcon } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteAsyncCreator } from '../../actions/productsActions';

export const ProductItem = (props) => {
	const dispatch = useDispatch();
	const { productToShow, onEdit } = props;

	const handleDelete = (id) => {
		const action = deleteAsyncCreator(productToShow._id);
		dispatch(action);
	};

	return (
		<tr>
			<td>{productToShow.name}</td>
			<td>{productToShow.description}</td>
			<td>{productToShow.price}</td>
			<td>{productToShow.brand}</td>
			<td>
				<EditIcon
					onClick={() => onEdit(productToShow)}
					style={{ cursor: 'pointer', color: 'red' }}
				/>
				<DeleteIcon onClick={handleDelete} style={{ cursor: 'pointer' }} />
			</td>
		</tr>
	);
};
