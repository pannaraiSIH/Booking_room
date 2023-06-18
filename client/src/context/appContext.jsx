import React, { useContext, useReducer } from 'react';
import reducer from './reducer';
import axios from 'axios';

import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  NEW_BOOKING_BEGIN,
  NEW_BOOKING_SUCCESS,
  NEW_BOOKING_FAIL,
  GET_BOOKING_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  booking: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const newBooking = async bookingInfo => {
    dispatch({ type: NEW_BOOKING_BEGIN });
    try {
      const response = await axios.post('/api/v1/bookingRoom', bookingInfo);
      const { newBooking } = response.data;
      dispatch({ type: NEW_BOOKING_SUCCESS, payload: { newBooking } });
    } catch (error) {
      dispatch({
        type: NEW_BOOKING_FAIL,
        payload: { msg: error.response.data.msg },
      });
    }

    clearAlert();
  };

  const getAllBooking = async () => {
    try {
      const response = await axios.get('/api/v1/bookingRoom');
      const { booking } = response.data;
      dispatch({ type: GET_BOOKING_SUCCESS, payload: { booking } });
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <AppContext.Provider
      value={{ ...state, displayAlert, newBooking, getAllBooking }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
