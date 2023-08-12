import HotelKamar from "../models/HotelKamarModel.js";
import model from "../models/index.js";

export const getHotelKamar = async(req, res) => {
    try {
        const response = await HotelKamar.findAll({
            include: {
                model: model.hotel
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getHotelKamarById = async(req, res) => {
    try {
        const response = await HotelKamar.findOne({
            where: {
                id: req.params.id
            },
            include: {
                model: model.hotel
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createHotelKamar = async(req, res) => {
    try {
        await HotelKamar.create(req.body);
        res.status(201).json({
            msg: 'Data Created!'
        });
    } catch (error) {
        console.log(error.message);
    }
}


export const updateHotelKamar = async(req, res) => {
    try {
        await HotelKamar.update(req.body, {
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

export const deleteHotelKamar = async(req, res) => {
    try {
        await HotelKamar.destroy({
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