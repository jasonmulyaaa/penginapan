import Booking from './BookingModels.js';
import HotelKamar from './HotelKamarModel.js';
import Hotel from './HotelModel.js';
import User from './UserModel.js';

const model = {};

model.hotelkamar = HotelKamar;
model.hotel = Hotel;
model.user = User;
model.booking = Booking;

export default model;