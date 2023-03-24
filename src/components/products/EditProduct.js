import React from "react";
import { ProductForm } from "./ProductForm";

export const EditProduct = ({ productToEdit, show, setShowProductForm }) => {
  return (
    <ProductForm
      type="edit"
      product={productToEdit}
      openModal={show}
      setShowProductForm={setShowProductForm}
    />
  );
};
