import Hotel from '../models/HotelModel.js';

export const getHotel = async(req, res) => {
    try {
        const response = await Hotel.findAll();
        res.status(200).json(response);
    } catch (error) {
     console.log(error.message);   
    }
}

export const getHotelById = async(req, res) => {
    try {
        const response = await Hotel.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createHotel = async(req, res) => {
    try {
        await Hotel.create(req.body);
        res.status(201).json({
            msg: 'Data created!'
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateHotel = async(req, res) => {
    try {
        await Hotel.update(req.body, {
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

export const deleteHotel = async(req, res) => {
    try {
        await Hotel.destroy({
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
