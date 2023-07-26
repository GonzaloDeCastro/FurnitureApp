import React from "react";
import { AddProvider } from "./AddProvider";
import { EditProvider } from "./EditProvider";

export const Header = (props) => {
  const {
    showProviderForm,
    setShowProviderForm,
    onAddProvider,
    providerToEdit,
    onEditProvider,
  } = props;

  return (
    <div>
      <div className="headerSection">Providers</div>
      <button
        className="btn btn-primary"
        onClick={() =>
          setShowProviderForm({ show: !showProviderForm.show, mode: "add" })
        }
      >
        {"Add Provider"}
      </button>
      {showProviderForm.mode === "add" ? (
        <AddProvider
          onAddProvider={onAddProvider}
          show={showProviderForm.show}
          setShowProviderForm={setShowProviderForm}
        />
      ) : (
        <EditProvider
          onEditProvider={onEditProvider}
          providerToEdit={providerToEdit}
          show={showProviderForm.show}
          setShowProviderForm={setShowProviderForm}
        />
      )}
    </div>
  );
};
