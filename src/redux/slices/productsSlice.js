import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  isLoading: false,
  error: "",
};

export const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    creatorAddProduct: (state, action) => {
      return {
        ...state,
        list: [action.payload, ...state.list],
      };
    },
    creatorRemoveProduct: (state, action) => {
      return {
        ...state,
        list: state.list.filter((product) => product._id !== action.payload),
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
    getProducts: (state, action) => {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
});

export const deleteAsyncCreator = (productId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL_PORT}/api/products/${productId}`
      );
      console.log(response);
      if (response.status === 202) {
        const action = creatorRemoveProduct(productId);
        dispatch(action);
      }
    } catch (error) {}
  };
};
export const addAsyncCreator = (product) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL_PORT}/api/products`,
        product
      );
      console.log(response);
      if (response.status === 201) {
        const action = creatorAddProduct(response.data.dato);
        dispatch(action);
      }
    } catch (error) {}
  };
};

export const editAsyncCreator = (product) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL_PORT}/api/products/${product.id}`,

        product
      );
      console.log(response);
      if (response.status === 200) {
        const action = creatorEditProduct(response.data);
        dispatch(action);
      }
    } catch (error) {}
  };
};
export const getProductsAsyncCreator = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL_PORT}/api/products/all`
      );

      if (response.status === 200) {
        const action = getProducts(response.data.data);
        dispatch(action);
      }
    } catch (error) {}
  };
};

export const {
  creatorRemoveProduct,
  creatorEditProduct,
  getProducts,
  creatorAddProduct,
} = product.actions;
export default product.reducer;
