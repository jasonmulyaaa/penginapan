import { Sequelize } from "sequelize";
import db from "../config/database.js";
import User from "./UserModel.js";
import HotelKamar from "./HotelKamarModel.js";

const Booking = db.define('booking', {
    user_id: Sequelize.INTEGER,
    kamar_id: Sequelize.INTEGER,
    harga_kamar: Sequelize.INTEGER,
    pendapatan_bersih: Sequelize.INTEGER,
    pendapatan_sales: Sequelize.INTEGER,
    sales_code: {
        type: Sequelize.INTEGER,
        unique: true
    },
    tanggal_check_in: Sequelize.DATE,
    tanggal_check_out: Sequelize.DATE,
}, {
    freezeTableName: true,
    timestamps: false
})

Booking.belongsTo(User, { foreignKey: 'user_id'});
Booking.belongsTo(HotelKamar, { foreignKey: 'kamar_id'});

export default Booking;