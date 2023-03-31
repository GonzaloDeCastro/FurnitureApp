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
      text: `Are you sure you want to delete ${providerToShow.company} Provider?`,
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
    <div className="rowTable">
      <div
        style={{
          width: "90%",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <div className="fieldProvider">{providerToShow.company}</div>
        <div className="fieldProvider">{providerToShow.name}</div>
        <div className="fieldProvider">{providerToShow.phone}</div>
        <div className="fieldProvider">{providerToShow.email}</div>
      </div>
      <div className="optionContainer">
        <EditIcon onClick={() => onEdit(providerToShow)} className="editIcon" />

        <DeleteIcon onClick={handleDelete} className="deleteIcon" />
      </div>
    </div>
  );
};
