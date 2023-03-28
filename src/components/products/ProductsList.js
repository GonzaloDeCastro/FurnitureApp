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
          <div className="titleFieldProduct">Product</div>
          <div className="titleFieldProduct">Description</div>
          <div className="titleFieldProduct">Price</div>
          <div className="titleFieldProduct">Brand</div>
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
        <div className="bodyTable">
          {productList.map((product) => (
            <ProductItem
              key={product._id}
              productToShow={product}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      )}
    </div>
  );
};
