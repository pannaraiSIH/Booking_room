import express from "express";
const router = express.Router();

import {
  bookingRoom,
  getAllBooking,
} from "../controllers/bookingController.js";
// import authentication from "../middlewares/authentication.js";

router.route("/").post(bookingRoom).get(getAllBooking);

export default router;
