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
      text: `Are you sure you want to delete item ${productToShow.name}?`,
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
    <div className="rowTable">
      <div
        style={{
          width: "90%",
          display: "flex",
        }}
      >
        <div className="fieldProduct">{productToShow.name}</div>
        <div className="fieldProduct">{productToShow.description}</div>
        <div className="fieldProduct">${productToShow.price}</div>
        <div className="fieldProduct">{productToShow.brand}</div>
      </div>
      <div className="optionContainer">
        <EditIcon onClick={() => onEdit(productToShow)} className="editIcon" />
        <DeleteIcon onClick={handleDelete} className="deleteIcon" />
      </div>
    </div>
  );
};
