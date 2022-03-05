import React from 'react';
import { FaTrash as DeleteIcon, FaPen as EditIcon } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteAsyncCreator } from '../../redux/actions/productsActions';

export const ProductItem = (props) => {
	const dispatch = useDispatch();
	const { productToShow, onEdit } = props;

	const handleDelete = (id) => {
		const action = deleteAsyncCreator(productToShow._id);
		dispatch(action);
	};

	return (
		<tbody>
			<tr>
				<td>{productToShow.name}</td>
				<td>{productToShow.description}</td>
				<td>{productToShow.price}</td>
				<td>{productToShow.brand}</td>
				<td>
					<div className="Edit_Delete">
						<div>
							<EditIcon
								onClick={() => onEdit(productToShow)}
								style={{ cursor: 'pointer', color: '#944ca8' }}
							/>
						</div>
						<div>
							<DeleteIcon
								onClick={handleDelete}
								style={{ cursor: 'pointer', color: '#7c3494' }}
							/>
						</div>
					</div>
				</td>
			</tr>
		</tbody>
	);
};
