import React from 'react';
import { FaTrash as DeleteIcon, FaPen as EditIcon } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { creatorAsyncRemove } from '../../redux/actions/providersActions';

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
					<div className="Edit_Delete">
						<div>
							<EditIcon
								onClick={() => onEdit(providerToShow)}
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
		</>
	);
};
