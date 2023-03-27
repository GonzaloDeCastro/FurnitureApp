import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { creatorAsyncDeleteProduct } from "../../redux/slices/productsSlice";

export const ProductItem = ({ productToShow, onEdit }) => {
  const dispatch = useDispatch();
  const Swal = require("sweetalert2");

  const handleDelete = () => {
    Swal.fire({
      title: "Wait!",
      text: "Are you sure you want to delete this Product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        const action = creatorAsyncDeleteProduct(productToShow);
        dispatch(action);
      }
    });
  };

  return (
    <div className="bodyTable">
      <div
        style={{
          width: "90%",
          display: "flex",
        }}
      >
        <div className="fieldProduct">{productToShow.name}</div>
        <div className="fieldProduct">{productToShow.description}</div>
        <div className="fieldProduct">{productToShow.price}</div>
        <div className="fieldProduct">{productToShow.brand}</div>
      </div>
      <div
        style={{
          width: "10%",
          display: "flex",
        }}
      >
        <EditIcon
          onClick={() => onEdit(productToShow)}
          style={{ cursor: "pointer", color: "#944ca8" }}
        />

        <DeleteIcon
          onClick={handleDelete}
          style={{ cursor: "pointer", color: "#7c3494" }}
        />
      </div>
    </div>
  );
};
