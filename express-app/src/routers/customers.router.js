const express = require('express')
const customerRouter = express.Router();
const { findAll } = require('../services/Customer.service')

//api
customerRouter.get('/list', async (req, res) => {
    try {
        const customers = await findAll();
        res.status(200).json(customers)
    }
    catch (err) {
        res.status(404).json(err)
    }
})

module.exports = customerRouter;