import React from "react";
import { ProductForm } from "./ProductForm";

export const AddProduct = ({ show, setShowProductForm }) => {
  console.log("llega aca? add", show);
  return (
    <ProductForm
      type="add"
      openModal={show}
      setShowProductForm={setShowProductForm}
    />
  );
};
