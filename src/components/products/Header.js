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
      <div className="headerSection">Products</div>
      <button
        className="btn btn-primary"
        onClick={() =>
          setShowProductForm({ show: !showProductForm.show, mode: "add" })
        }
      >
        {"Add Product"}
      </button>

      {showProductForm.mode === "add" ? (
        <AddProduct
          show={showProductForm.show}
          setShowProductForm={setShowProductForm}
        />
      ) : (
        <EditProduct
          onEditProduct={onEditProduct}
          productToEdit={productToEdit}
          show={showProductForm.show}
          setShowProductForm={setShowProductForm}
        />
      )}
    </div>
  );
};
