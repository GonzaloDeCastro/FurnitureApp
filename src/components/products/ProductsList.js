import { useState } from "react";
import { ProductItem } from "./ProductItem";

export const ProductsList = ({ productList, onDelete, onEdit }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const filteredProducts = productList.filter((product) => {
    const productData =
      `${product.name} ${product.description} ${product.price} ${product.brand}`.toLowerCase();
    return productData.includes(searchText.toLowerCase());
  });

  return (
    <div>
      <input
        style={{ marginTop: "10px" }}
        type="text"
        onChange={handleSearch}
        value={searchText}
        placeholder="Search product"
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
            <div className="titleFieldProduct">Product</div>
            <div className="titleFieldProduct">Description</div>
            <div className="titleFieldProduct">Price</div>
            <div className="titleFieldProduct">Brand</div>
          </div>

          <div className="optionItem">Options</div>
        </div>
        {filteredProducts.length === 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "0.5rem",
            }}
          >
            {"There are no products matching the search criteria"}
          </div>
        ) : (
          <div className="bodyTable">
            {filteredProducts.map((product) => (
              <ProductItem
                key={product._id}
                productToShow={product}
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
