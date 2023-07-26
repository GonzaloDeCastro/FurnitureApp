import { useState } from "react";
import { ProviderItem } from "./ProviderItem";

export const ProvidersList = ({ providerList, onDelete, onEdit }) => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };
  const filteredProviders = providerList.filter((provider) => {
    const productData =
      `${provider.company} ${provider.name} ${provider.email} ${provider.phone}`.toLowerCase();
    return productData.includes(searchText.toLowerCase());
  });

  return (
    <div>
      <input
        className="input-search"
        style={{ marginTop: "10px" }}
        type="text"
        onChange={handleSearch}
        value={searchText}
        placeholder="Search provider"
      />
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
            <div className="titleFieldProvider">Company</div>
            <div className="titleFieldProvider">Name</div>
            <div className="titleFieldProvider">Phone</div>
            <div className="titleFieldProvider">Email</div>
          </div>

          <div className="optionItem">Options</div>
        </div>

        {filteredProviders.length === 0 ? (
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
          <div className="bodyTable">
            {filteredProviders.map((provider) => (
              <ProviderItem
                key={provider._id}
                providerToShow={provider}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
