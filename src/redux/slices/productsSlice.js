import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  list: [],
  isLoading: false,
  error: "",
};

export const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    creatorGetProducts: (state, action) => {
      return {
        ...state,
        list: action.payload,
      };
    },
    creatorAddProduct: (state, action) => {
      return {
        ...state,
        list: [action.payload, ...state.list],
      };
    },
    creatorEditProduct: (state, action) => {
      return {
        ...state,
        list: state.list.map((product) =>
          product._id === action.payload._id ? action.payload : product
        ),
      };
    },
    creatorRemoveProduct: (state, action) => {
      return {
        ...state,
        list: state.list.filter((product) => product._id !== action.payload),
      };
    },
  },
});

export const {
  creatorGetProducts,
  creatorAddProduct,
  creatorEditProduct,
  creatorRemoveProduct,
} = product.actions;

export const creatorAsyncGetProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL_PORT}/api/products/all`
      );

      if (response.status === 200) {
        const action = creatorGetProducts(response.data.data);
        dispatch(action);
      }
    } catch (error) {}
  };
};

export const creatorAsyncAddProduct = (product) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL_PORT}/api/products`,
        product
      );
      if (response.status === 201) {
        const action = creatorAddProduct(response.data.dato);
        dispatch(action);
        Swal.fire({
          title: "Succes!",
          text: `Product ${product.name} added!`,
          icon: "success",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Please fill all fields",
        icon: "error",
      });
    }
  };
};

export const creatorAsyncEditProduct = (product) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL_PORT}/api/products/${product.id}`,

        product
      );
      if (response.status === 200) {
        const action = creatorEditProduct(response.data);
        dispatch(action);
        Swal.fire({
          title: "Succes!",
          text: "Product modified!",
          icon: "success",
        });
      }
    } catch (error) {}
  };
};

export const creatorAsyncDeleteProduct = (productId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL_PORT}/api/products/${productId._id}`
      );
      if (response.status === 202) {
        const action = creatorRemoveProduct(productId._id);
        dispatch(action);
        Swal.fire({
          title: "Succes!",
          text: `${productId.name} product has been deleted!`,
          icon: "success",
        });
      }
    } catch (error) {}
  };
};

export default product.reducer;
