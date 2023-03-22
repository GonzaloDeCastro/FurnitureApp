import React from "react";
import { AddProduct } from "./AddProduct";
import { EditProduct } from "./EditProduct";

export const Header = ({
  showProductForm,
  setShowProductForm,
  productToEdit,
  onEditProduct,
}) => {
  return (
    <div>
      <h4>Products</h4>
      <button
        className="btn btn-primary"
        onClick={() =>
          setShowProductForm({ show: !showProductForm.show, mode: "add" })
        }
      >
        {"Add Product"}
      </button>
      {console.log("showProductForm.mode ", showProductForm.mode)}
      {showProductForm.mode === "add" ? (
        <AddProduct show={showProductForm.show} />
      ) : (
        <EditProduct
          onEditProduct={onEditProduct}
          productToEdit={productToEdit}
          show={showProductForm.show}
        />
      )}
    </div>
  );
};
