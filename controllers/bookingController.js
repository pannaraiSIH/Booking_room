import Booking from "../models/BookingRoom.js";
import { BadRequestError } from "../errors/index.js";

const bookingRoom = async (req, res) => {
  const { title, room, time, creator } = req.body;

  if (!title || !time || !creator) {
    throw new BadRequestError("Please provide all values");
  }

  const hour = time.split(":")[0];
  let minute = time.split(":")[1];
  minute = "00";
  const setTime = [hour, minute].join(":");

  const isTimeExist = await Booking.findOne({ time });
  if (isTimeExist) {
    throw new BadRequestError("The time slot is already reserved");
  }

  const newBooking = await Booking.create({
    title,
    room,
    time: setTime,
    createdBy: creator,
  });

  res.status(201).json({ newBooking });
};

const getAllBooking = async (req, res) => {
  const booking = await Booking.find({});
  res.status(200).json({ booking });
};

export { bookingRoom, getAllBooking };
