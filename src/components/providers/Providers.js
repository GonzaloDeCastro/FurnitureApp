import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { ProvidersList } from "./ProviderList";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { creatorAsyncGetProviders } from "../../redux/slices/providersSlice";

export const Providers = () => {
  const [showForm, setShowForm] = useState({ show: false, mode: "Add" });
  const [providers, setproviders] = useState({});
  const [providerToEdit, setProviderToEdit] = useState(undefined);
  const { providerSelected, list } = useSelector((state) => state.providers);

  const dispatch = useDispatch();
  useEffect(() => {
    if (providerSelected) {
      setShowForm({ show: true, mode: "Edit" });
    }
  }, [providerSelected]);

  useEffect(() => {
    dispatch(creatorAsyncGetProviders());
    return () => {};
  }, [dispatch]);

  const handleEditClick = (provider) => {
    setProviderToEdit(provider);
    setShowForm({ show: true, mode: "Edit" });
  };

  const handleAddProvider = (provider) => {
    provider.id = uuidv4();
    setproviders([...providers, provider]);
  };

  const handleDeleteProvider = (id) => {
    const newProviders = providers.filter((provider) => provider.id !== id);
    setproviders(newProviders);
  };

  const handleEditProvider = (provider) => {
    const newProviders = providers.map((x) =>
      x.id === provider.id ? provider : x
    );
    setproviders(newProviders);
  };

  return (
    <div style={{ marginLeft: "0.3rem" }}>
      <Header
        showProviderForm={showForm}
        setShowProviderForm={setShowForm}
        onAddProvider={handleAddProvider}
        onEditProvider={handleEditProvider}
        providerToEdit={providerToEdit}
      />
      <ProvidersList
        providerList={list}
        onDelete={handleDeleteProvider}
        onEdit={handleEditClick}
      />
    </div>
  );
};
