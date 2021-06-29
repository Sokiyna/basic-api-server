const express = require('express');
const validator = require('../middlewares/validator');

const Food = require('../models/food');
const router = express.Router();
const food = new Food();


router.get('/', getFood);
router.get('/:id', getFood);
router.put('/:id',validator, updateFood);
router.post('/',validator, createFood);
router.delete('/:id', deleteFood);


function getFood(req, res) {
    const resObj = food.read(req.params.id);
    res.json(resObj);
}

function createFood(req, res) {
    const resObj = food.create(req.body);
    res.json(resObj);
}

function updateFood(req, res) {
    const resObj = food.update(req.params.id, req.body);
    res.json(resObj);
    
}

function deleteFood(req, res) {
    const resObj = food.delete(req.params.id);
    res.json(resObj);
    
}


module.exports = router;
