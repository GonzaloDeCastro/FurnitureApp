import React from "react";
import { ProductForm } from "./ProductForm";

export const AddProduct = ({ show, setShowProductForm }) => {
  return (
    <ProductForm
      type="add"
      openModal={show}
      setShowProductForm={setShowProductForm}
    />
  );
};
