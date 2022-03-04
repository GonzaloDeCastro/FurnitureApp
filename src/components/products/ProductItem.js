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
				<td>
					{productToShow.name}
					<hr />
				</td>
				<td>
					{productToShow.description}
					<hr />
				</td>
				<td>
					{productToShow.price}
					<hr />
				</td>
				<td>
					{productToShow.brand}
					<hr />
				</td>
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
					<hr />
				</td>
			</tr>
		</tbody>
	);
};
