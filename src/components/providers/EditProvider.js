import React from 'react';
import { ProviderForm } from './ProviderForm';

export const EditProvider = (prop) => {
  const { onEditProvider, providerToEdit } = prop;
  return <ProviderForm type='edit' provider={providerToEdit} />;
};
