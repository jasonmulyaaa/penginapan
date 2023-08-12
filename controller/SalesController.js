import Sales from '../models/SalesModel.js';

// function get table Sales
export const getSales = async(req, res) => {
    try {
        const response = await Sales.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getSalesById = async(req, res) => {
    try {
        const response = await Sales.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createSales = async(req, res) => {
    try {
        await Sales.create(req.body);
        res.status(201).json({
            msg: 'Data Created!'
        });
    } catch (error) {
        console.log(error.message);
    }
}


export const updateSales = async(req, res) => {
    try {
        await Sales.update(req.body, {
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

export const deleteSales = async(req, res) => {
    try {
        await Sales.destroy({
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