import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { creatorAsyncDeleteProvider } from "../../redux/slices/providersSlice";

export const ProviderItem = ({ providerToShow, onEdit }) => {
  const dispatch = useDispatch();

  const Swal = require("sweetalert2");
  const handleDelete = () => {
    Swal.fire({
      title: "Wait!",
      text: "Are you sure you want to delete this Provider?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        const action = creatorAsyncDeleteProvider(providerToShow);
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
        <div className="fieldProvider">{providerToShow.company}</div>
        <div className="fieldProvider">{providerToShow.firstName}</div>
        <div className="fieldProvider">{providerToShow.lastName}</div>
        <div className="fieldProvider">{providerToShow.phone}</div>
        <div className="fieldProvider">{providerToShow.email}</div>
      </div>
      <div
        style={{
          width: "10%",
          display: "flex",
        }}
      >
        <EditIcon
          onClick={() => onEdit(providerToShow)}
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
