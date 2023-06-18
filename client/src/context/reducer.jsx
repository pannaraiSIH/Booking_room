import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  NEW_BOOKING_BEGIN,
  NEW_BOOKING_SUCCESS,
  NEW_BOOKING_FAIL,
  GET_BOOKING_SUCCESS,
} from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertText: 'Please provide all values',
        alertType: 'red',
      };
      break;

    case CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertText: '',
        alertType: '',
      };
      break;

    case NEW_BOOKING_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
      break;

    case NEW_BOOKING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        booking: [...state.booking, action.payload.newBooking],
        showAlert: true,
        alertText: 'Booking Successful!',
        alertType: 'green',
      };
      break;

    case NEW_BOOKING_FAIL:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertText: action.payload.msg,
        alertType: 'red',
      };
      break;

    case GET_BOOKING_SUCCESS:
      return {
        ...state,
        booking: action.payload.booking,
      };
      break;

    default:
      return state;
  }
};

export default reducer;
