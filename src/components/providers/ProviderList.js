import React from "react";
import { ProviderItem } from "./ProviderItem";

export const ProvidersList = ({ providerList, onDelete, onEdit }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="headerTable">
        <div
          style={{
            display: "flex",
            width: "90%",
          }}
        >
          <div className="titleField">Company</div>
          <div className="titleField">FirstName</div>
          <div className="titleField">LastName</div>
          <div className="titleField">Phone</div>
          <div className="titleField">Email</div>
        </div>

        <div>Options</div>
      </div>

      {providerList.map((provider) => (
        <ProviderItem
          key={provider._id}
          providerToShow={provider}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};
