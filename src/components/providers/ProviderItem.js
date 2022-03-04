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
		<tbody>
			<tr>
				<td>
					{providerToShow.company}
					<hr />
				</td>
				<td>
					{providerToShow.firstName}
					<hr />
				</td>
				<td>
					{providerToShow.lastName}
					<hr />
				</td>
				<td>
					{providerToShow.email}
					<hr />
				</td>
				<td>
					{providerToShow.phone}
					<hr />
				</td>
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
					<hr />
				</td>
			</tr>
		</tbody>
	);
};
