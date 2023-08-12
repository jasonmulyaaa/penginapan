import db from "../config/database.js";
import { Sequelize } from 'sequelize';
import Hotel from "./HotelModel.js";

const HotelKamar = db.define('hotel_kamar', {
    hotel_id: Sequelize.INTEGER,
    nama_kamar: Sequelize.STRING,
    nomor_kamar: Sequelize.INTEGER,
    harga: Sequelize.INTEGER,
    deskripsi: Sequelize.STRING,
}, {
    freezeTableName: true,
    timestamps: false
});

// HotelKamar.hasOne(Hotel, { foreignKey: 'id'});
HotelKamar.belongsTo(Hotel, { foreignKey: 'hotel_id'});

export default HotelKamar;