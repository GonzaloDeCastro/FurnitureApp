import React, { useState } from 'react';
import { AddProvider } from './AddProvider';
import { EditProvider } from './EditProvider';

export const Header = (props) => {
  const {
    showProviderForm,
    setShowProviderForm,
    onAddProvider,
    providerToEdit,
    onEditProvider
  } = props;

  return (
    <div>
      <h1>Providers</h1>
      <button
        className="btn btn-primary"
        onClick={() =>
          setShowProviderForm({ show: !showProviderForm.show, mode: 'Add' })
        }
      >
        {showProviderForm.show ? 'Cancel' : 'Add Provider'}
      </button>
      {showProviderForm.show ? (
        showProviderForm.mode === 'Add' ? (
          <AddProvider onAddProvider={onAddProvider} />
        ) : (
          <EditProvider
            onEditProvider={onEditProvider}
            providerToEdit={providerToEdit}
          />
        )
      ) : undefined}
    </div>
  );
};
