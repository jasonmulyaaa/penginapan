import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const Hotel = db.define('hotel', {
    nama: Sequelize.STRING,
    alamat: Sequelize.STRING,
    no_hp: Sequelize.INTEGER,
}, {
    freezeTableName: true,
    timestamps: false,
});

export default Hotel;

// (async()=>{
//     await db.sync();
// })();