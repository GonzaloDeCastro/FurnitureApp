import React from "react";
import { ProviderForm } from "./ProviderForm";

export const AddProvider = ({ show, setShowProviderForm }) => {
  return (
    <ProviderForm
      type="add"
      openModal={show}
      setShowProviderForm={setShowProviderForm}
    />
  );
};
