import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { ProductsList } from "./ProductsList";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { creatorAsyncGetProducts } from "../../redux/slices/productsSlice";

export const Products = () => {
  const [showForm, setShowForm] = useState({ show: false, mode: "Add" });
  const [products, setproducts] = useState({});
  const [productToEdit, setProductToEdit] = useState(undefined);
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(creatorAsyncGetProducts());
  }, [dispatch]);

  const handleEditClick = (product) => {
    setProductToEdit(product);
    setShowForm({ show: !showForm.show, mode: "Edit" });
  };

  const handleAddProduct = (product) => {
    product.id = uuidv4();
    setproducts([...products, product]);
  };

  const handleDeleteProduct = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setproducts(newProducts);
  };

  const handleEditProduct = (product) => {
    const newProducts = products.map((x) =>
      x.id === product.id ? product : x
    );
    setproducts(newProducts);
  };

  return (
    <div style={{ marginLeft: "0.3rem" }}>
      <Header
        showProductForm={showForm}
        setShowProductForm={setShowForm}
        onAddProduct={handleAddProduct}
        onEditProduct={handleEditProduct}
        productToEdit={productToEdit}
      />
      <ProductsList
        productList={list}
        onDelete={handleDeleteProduct}
        onEdit={handleEditClick}
      />
    </div>
  );
};
