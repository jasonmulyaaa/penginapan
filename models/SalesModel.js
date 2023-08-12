import db from "../config/database.js";
import { Sequelize } from "sequelize";

const Sales = db.define('sales', {
    nama: Sequelize.STRING,
    no_hp: Sequelize.INTEGER,
    alamat: Sequelize.STRING,
    sales_code: Sequelize.INTEGER,
    saldo: Sequelize.INTEGER,
}, {
    freezeTableName: true,
    timestamps: false
});

export default Sales;