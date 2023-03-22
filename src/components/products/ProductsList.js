import React from "react";
import { ProductItem } from "./ProductItem";

export const ProductsList = ({ productList, onDelete, onEdit }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="headerTable">
        <div
          style={{
            display: "flex",
            width: "90%",
          }}
        >
          <div className="titleField">Product</div>
          <div className="titleField">Description</div>
          <div className="titleField">Price</div>
          <div className="titleField">Brand</div>
        </div>

        <div>Options</div>
      </div>
      {productList.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "0.5rem",
          }}
        >
          {"There are not products"}
        </div>
      ) : (
        productList.map((product) => (
          <ProductItem
            key={product._id}
            productToShow={product}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
};
