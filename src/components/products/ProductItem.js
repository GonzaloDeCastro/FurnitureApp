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
        const action = creatorAsyncDeleteProduct(productToShow._id);
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
        <div className="field">{productToShow.name}</div>
        <div className="field">{productToShow.description}</div>
        <div className="field">{productToShow.price}</div>
        <div className="field">{productToShow.brand}</div>
      </div>
      <div
        style={{
          width: "10%",
          display: "flex",
        }}
      >
        <EditIcon
          onClick={() => onEdit(productToShow)}
          style={{ cursor: "pointer", color: "#944ca8", marginRight: "1rem" }}
        />

        <DeleteIcon
          onClick={handleDelete}
          style={{ cursor: "pointer", color: "#7c3494" }}
        />
      </div>
    </div>
  );
};
