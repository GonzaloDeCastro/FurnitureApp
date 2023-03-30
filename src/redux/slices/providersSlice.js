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
    creatorGetProviders: (state, action) => {
      return {
        ...state,
        list: action.payload,
      };
    },

    creatorAddProvider: (state, action) => {
      return {
        ...state,
        list: [action.payload, ...state.list],
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
    creatorRemoveProvider: (state, action) => {
      return {
        ...state,
        list: state.list.filter((product) => product._id !== action.payload),
      };
    },
  },
});

export const {
  creatorRemoveProvider,
  creatorEditProvider,
  creatorGetProviders,
  creatorAddProvider,
} = provider.actions;

export const creatorAsyncGetProviders = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL_PORT}/api/providers/all`
      );

      if (res.status === 200) {
        const action = creatorGetProviders(res.data.data);
        dispatch(action);
      }
    } catch (error) {}
  };
};

export const creatorAsyncAddProvider = (provider) => {
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
          text: `${provider.company} Provider added!`,
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

export const creatorAsyncEditProvider = (provider) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL_PORT}/api/providers/${provider.id}`,
        provider
      );

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

export const creatorAsyncDeleteProvider = (provider) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL_PORT}/api/providers/${provider._id}`
      );

      if (res.status === 202) {
        const action = creatorRemoveProvider(provider._id);
        dispatch(action);
        Swal.fire({
          title: "Succes!",
          text: `${provider.company} Provider has been removed!`,
          icon: "success",
        });
      }
    } catch (error) {}
  };
};

export default provider.reducer;
