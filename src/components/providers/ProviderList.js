import React from 'react';
import { ProviderItem } from './ProviderItem';

export const ProvidersList = ({ providerList, onDelete, onEdit }) => {
	return (
		<div className="table-responsive">
			<table>
				<thead>
					<tr>
						<th>Company</th>
						<th>FirstName</th>
						<th>LastName</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Options</th>
					</tr>
				</thead>
				{providerList.map((provider) => (
					<ProviderItem
						key={provider._id}
						providerToShow={provider}
						onDelete={onDelete}
						onEdit={onEdit}
					/>
				))}
			</table>
		</div>
	);
};
