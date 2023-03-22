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
          <div className="titleField">Firstname</div>
          <div className="titleField">Lastname</div>
          <div className="titleField">Phone</div>
          <div className="titleField">Email</div>
        </div>

        <div
          style={{
            display: "flex",
            width: "10%",
          }}
        >
          Options
        </div>
      </div>

      {providerList.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "0.5rem",
          }}
        >
          {"There are not providers"}
        </div>
      ) : (
        providerList.map((provider) => (
          <ProviderItem
            key={provider._id}
            providerToShow={provider}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
};
