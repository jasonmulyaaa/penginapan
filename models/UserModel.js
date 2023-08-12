import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const User = db.define('user', {
    nama: Sequelize.STRING,
    no_hp: Sequelize.INTEGER,
    alamat: Sequelize.STRING,
    sales_code: Sequelize.INTEGER,
    saldo: Sequelize.INTEGER,
}, {
    freezeTableName: true,
    timestamps: false
});

export default User;

// (async()=>{
//     await db.sync();
// })();