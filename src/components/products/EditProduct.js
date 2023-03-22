import React from "react";
import { ProductForm } from "./ProductForm";

export const EditProduct = ({ productToEdit, show }) => {
  return <ProductForm type="edit" product={productToEdit} openModal={show} />;
};
