import React from "react";
import { ProviderForm } from "./ProviderForm";

export const EditProvider = ({ providerToEdit, show, setShowProviderForm }) => {
  return (
    <ProviderForm
      type="edit"
      provider={providerToEdit}
      openModal={show}
      setShowProviderForm={setShowProviderForm}
    />
  );
};
