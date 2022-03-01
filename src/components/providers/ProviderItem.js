import React from 'react';
import { FaTrash as DeleteIcon, FaPen as EditIcon } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { creatorAsyncRemove } from '../../actions/providersActions';

export const ProviderItem = (props) => {
	const dispatch = useDispatch();
	const { providerToShow, onEdit } = props;
	const handleDelete = (id) => {
		const action = creatorAsyncRemove(providerToShow._id);
		dispatch(action);
	};

	return (
		<>
			<tr>
				<td>{providerToShow.company}</td>
				<td>{providerToShow.firstName}</td>
				<td>{providerToShow.lastName}</td>
				<td>{providerToShow.email}</td>
				<td>{providerToShow.phone}</td>
				<td>
					<EditIcon
						onClick={() => onEdit(providerToShow)}
						style={{ cursor: 'pointer', color: 'red' }}
					/>
					<DeleteIcon onClick={handleDelete} style={{ cursor: 'pointer' }} />
				</td>
			</tr>
		</>
	);
};
