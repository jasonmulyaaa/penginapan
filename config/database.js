import { Sequelize } from 'sequelize';

const db = new Sequelize('wedeals', 'postgres', 'postgres',{
    host: 'localhost',
    dialect: 'postgres'
})

export default db;