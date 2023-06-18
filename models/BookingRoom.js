import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  room: {
    type: String,
    default: "meeting room",
  },
  title: {
    type: String,
    required: [true, "Please provide title"],
  },
  time: {
    type: String,
    enum: [
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
    ],
    required: [true, "Please provide time"],
  },
  createdBy: {
    type: String,
    required: [true, "Please provide user"],
  },
});

export default mongoose.model("Booking", BookingSchema);
