import { useState } from 'react';
import { Alert, Input } from '../components';
import { useAppContext } from '../context/appContext';

const initialState = {
  title: '',
  room: 'meeting room',
  time: '',
  creator: '',
};

const Form = () => {
  const [values, setValues] = useState(initialState);

  const {
    isLoading,
    showAlert,
    alertText,
    alertType,
    displayAlert,
    newBooking,
  } = useAppContext();

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { title, room, time, creator } = values;

    if (!title || !room || !time || !creator) {
      displayAlert();
      return;
    }

    const bookingInfo = {
      title,
      room,
      time,
      creator,
    };
    newBooking(bookingInfo);
  };

  return (
    <div className=" p-8 md:flex">
      <form onSubmit={handleSubmit}>
        <h3 className="text-2xl font-bold text-blue-500 mb-6">New Booking</h3>

        {showAlert && <Alert alertText={alertText} alertType={alertType} />}

        {/* title input */}
        <Input
          type="text"
          id="title"
          name="title"
          value={values.title}
          classNameInput="bg-blue-200 border-b-2 border-blue-300 outline-none mt-2 capitalize"
          classNameLabel="capitalize font-semibold text-xl "
          handleChange={handleChange}
        />

        {/* room input */}
        <div className="flex flex-col mb-6">
          <label htmlFor="room" className="text-xl font-semibold capitalize ">
            Room
          </label>
          <input
            type="text"
            id="room"
            name="room"
            value={values.room}
            readOnly
            className="bg-blue-200 border-b-2 border-blue-300 mt-4 capitalize"
          />
        </div>

        {/* time inputs */}
        <div className="flex flex-col mb-6">
          <label htmlFor="time" className="text-xl font-semibold capitalize ">
            time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            min="09:00"
            max="18:00"
            value={values.time}
            onChange={handleChange}
            className="bg-blue-200 border-b-2 border-blue-300 mt-4"
          />
        </div>

        {/* creator input */}
        <div className="flex flex-col">
          <label htmlFor="creator" className="text-xl font-semibold capitalize">
            Creator
          </label>
          <input
            type="text"
            id="creator"
            name="creator"
            value={values.creator}
            onChange={handleChange}
            className="bg-blue-200 border-b-2 border-blue-300 mt-4 capitalize"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-400 w-full p-3 rounded-lg text-center text-white font-bold mt-8"
        >
          Confirm booking
        </button>
      </form>
    </div>
  );
};

export default Form;
