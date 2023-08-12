import Booking from "../models/BookingModels.js";
import HotelKamar from "../models/HotelKamarModel.js";
import User from "../models/UserModel.js";
import Sales from "../models/SalesModel.js";
import model from "../models/index.js";

export const getBooking = async(req, res) => {
    try {
        const response = await Booking.findAll({
            include: [
            {
                model: model.hotelkamar,
                include: model.hotel
            },
            {
                model: model.user
            }
        ]
    });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getBookingById = async(req, res) => {
    try {
        const response = await Booking.findOne({
            include: [
                {
                    model: model.hotelkamar,
                    include: model.hotel
                },
                {
                    model: model.user
                }
            ],
            where: {
                id: req.params.id
            }
        });

        
    // const result = await Booking.findOne({
    //     attributes: [
    //         [Booking.fn('DATEDIFF', sequelize.col('tanggal_check_out'), sequelize.col('tanggal_check_in')), 'total-days']
    //     ]
    // })

        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createBooking = async(req, res) => {
    try {
        const kamar_id = req.body.kamar_id;
        const hotelKamarData = await HotelKamar.findOne({
            where: {
                id: kamar_id
            }
        });

        if(!hotelKamarData){
            res.status(404).json({
                error: 'Data Tidak ditemukan!'
            });
        }

        const user_id = req.body.user_id;
        const UserData = await User.findOne({
            where: {
                id: user_id
            }
        })

        if (!UserData) {
            res.status(404).json({
                error: 'User tidak ditemukan!'
            });
        }

        if (UserData.saldo >= hotelKamarData.harga) {

            const SalesData = await Sales.findOne({
                where: {
                    sales_code: UserData.sales_code
                }
            });

                const booking = {
                    id: req.body.id,
                    user_id: req.body.user_id,
                    kamar_id: req.body.kamar_id,
                    harga_kamar: hotelKamarData.harga,
                    pendapatan_bersih: 0,
                    pendapatan_sales: 0,
                    sales_code: UserData.sales_code,
                    tanggal_check_in: req.body.tanggal_check_in,
                    tanggal_check_out: req.body.tanggal_check_out,
                };

                if (SalesData) {
                    booking.pendapatan_sales = hotelKamarData.harga * 0.2;
                    booking.pendapatan_bersih = hotelKamarData.harga - booking.pendapatan_sales;
                }
                else{
                    booking.pendapatan_sales = 0;
                    booking.pendapatan_bersih = hotelKamarData.harga;
                }

                await Booking.create(booking);

                // const commissionOwner = booking.pendapatan_bersih;
                // await owner.increment('saldo', {
                //     by: commissionOwner
                // });

            await User.update({
                id: UserData.id,
                nama: UserData.nama,
                no_hp: UserData.no_hp,
                alamat: UserData.alamat,
                sales_code: UserData.sales_code,
                saldo: UserData.saldo - booking.harga_kamar,
            },
            {
                where: {
                    id: user_id
                }
            });

        if(SalesData){
            try {
                const commission = booking.harga_kamar * 0.2;
                await Sales.increment('saldo', {
                    by: commission,
                    where: {
                        sales_code: booking.sales_code
                    }
                });
            } catch (error) {
                console.log(error.message);
            }

        }
        }
        else{
            res.status(405).json({
                msg: 'Saldo anda tidak cukup!'
            });
        }

 

        res.status(201).json({
            msg: 'Data created!'
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateBooking = async(req, res) => {
    try {
        await Booking.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            msg: 'Data Update!'
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteBooking = async(req, res) => {
    try {
        await Booking.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            msg: 'Data Delete'
        });
    } catch (error) {
        console.log(error.message);
    }
}