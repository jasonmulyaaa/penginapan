import express from "express";
import {getUsers, getUsersById, createUsers, updateUsers, deleteUsers} from '../controller/UserController.js';
import {getHotel, createHotel, getHotelById, updateHotel, deleteHotel} from '../controller/HotelController.js';
import {getHotelKamar, createHotelKamar, getHotelKamarById, updateHotelKamar, deleteHotelKamar} from '../controller/HotelKamarController.js';
import {getBooking, createBooking, getBookingById, updateBooking, deleteBooking} from '../controller/BookingController.js';
import {getSales, getSalesById, createSales, updateSales, deleteSales} from '../controller/SalesController.js';
import owner from "./Owner.js";

const router = express.Router();

// route booking
router.get('/booking', getBooking);
router.get('/booking/:id', getBookingById);
router.post('/booking', createBooking);
router.put('/booking/:id', updateBooking);
router.delete('/booking/:id', deleteBooking);

// route hotel
router.get('/hotel', getHotel);
router.get('/hotel/:id', getHotelById);
router.post('/hotel', createHotel);
router.put('/hotel/:id', updateHotel);
router.delete('/hotel/:id', deleteHotel);

// route hotelkamar
router.get('/hotelkamar', getHotelKamar);
router.get('/hotelkamar/:id', getHotelKamarById);
router.post('/hotelkamar', createHotelKamar);
router.put('/hotelkamar/:id', updateHotelKamar);
router.delete('/hotelkamar/:id', deleteHotelKamar);

// route users
router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUsers);
router.put('/users/:id', updateUsers);
router.delete('/users/:id', deleteUsers);

// route users
router.get('/sales', getSales);
router.get('/sales/:id', getSalesById);
router.post('/sales', createSales);
router.put('/sales/:id', updateSales);
router.delete('/sales/:id', deleteSales);

router.get('/owner', (req, res) => {
    res.json(owner);
})

export default router;