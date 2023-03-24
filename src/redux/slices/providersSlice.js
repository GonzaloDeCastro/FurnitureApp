import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  list: [],
  selectedProvider: null,
  error: "",
};

export const provider = createSlice({
  name: "provider",
  initialState,
  reducers: {
    creatorAddProvider: (state, action) => {
      return {
        ...state,
        list: [action.payload, ...state.list],
      };
    },
    creatorRemoveProvider: (state, action) => {
      return {
        ...state,
        list: state.list.filter((product) => product._id !== action.payload),
      };
    },
    creatorEditProvider: (state, action) => {
      return {
        ...state,
        list: state.list.map((product) =>
          product._id === action.payload._id ? action.payload : product
        ),
      };
    },
    creatorGetAllProviders: (state, action) => {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
});

export const creatorAsyncAdd = (provider) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL_PORT}/api/providers/`,
        provider
      );

      if (res.status === 201) {
        const action = creatorAddProvider(res.data.dato);
        dispatch(action);
        Swal.fire({
          title: "Succes!",
          text: "Provider added!",
          icon: "success",
        });
      }
    } catch (error) {}
  };
};

export const creatorAsyncRemove = (providerId) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL_PORT}/api/providers/${providerId}`
      );
      console.log(res.data.data._id);
      if (res.status === 202) {
        const action = creatorRemoveProvider(providerId);
        dispatch(action);
        Swal.fire({
          title: "Succes!",
          text: "Provider deleted!",
          icon: "success",
        });
      }
    } catch (error) {}
  };
};

export const creatorAsyncEdit = (provider) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL_PORT}/api/providers/${provider.id}`,
        provider,
        console.log(provider)
      );
      console.log(res);
      if (res.status === 202 || res.status === 200 || res.status === 201) {
        Swal.fire({
          title: "Succes!",
          text: "Provider modified!",
          icon: "success",
        });
        return dispatch(creatorEditProvider(res.data));
      }
    } catch (error) {
      console.log("entro en error", error);
    }
  };
};
export const creatorAsyncGet = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL_PORT}/api/providers/all`
      );
      console.log(res.data.data);
      if (res.status === 200) {
        const action = creatorGetAllProviders(res.data.data);
        dispatch(action);
      }
    } catch (error) {}
  };
};

export const {
  creatorRemoveProvider,
  creatorEditProvider,
  creatorGetAllProviders,
  creatorAddProvider,
} = provider.actions;
export default provider.reducer;
