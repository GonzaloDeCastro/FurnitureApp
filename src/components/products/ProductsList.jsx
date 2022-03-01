import React from 'react';
import { ProductItem } from './ProductItem';

export const ProductsList = (props) => {
  const { productList, onDelete, onEdit } = props;
  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Options</th>
          </tr>
        </thead>
        {productList.map((product) => (
          <ProductItem
            key={product.id}
            productToShow={product}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </table>
    </div>
  );
};
