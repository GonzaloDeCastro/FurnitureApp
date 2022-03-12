import React from 'react';
import { ProductItem } from './ProductItem';

export const ProductsList = ({ productList, onDelete, onEdit }) => {
	return (
		<div className="table-responsive">
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Description</th>
						<th>Price</th>
						<th>Brand</th>
						<th>Options</th>
					</tr>
				</thead>
				{productList.map((product) => (
					<ProductItem
						key={product._id}
						productToShow={product}
						onDelete={onDelete}
						onEdit={onEdit}
					/>
				))}
			</table>
		</div>
	);
};
