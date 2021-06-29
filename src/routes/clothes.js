const express = require('express');
const Clothes = require('../models/clothes');
const validator = require('../middlewares/validator');

const router = express.Router();
const clothes = new Clothes();


router.get('/', getclothes);
router.get('/:id', getclothes);
router.put('/:id',validator, updateclothes);
router.post('/',validator, createclothes);
router.delete('/:id', deleteclothes);


function getclothes(req, res) {
    const resObj = clothes.read(req.params.id);
    res.json(resObj);
}

function createclothes(req, res) {
    const resObj = clothes.create(req.body);
    res.json(resObj);
}

function updateclothes(req, res) {
    const resObj = clothes.update(req.params.id, req.body);
    res.json(resObj);
    
}

function deleteclothes(req, res) {
    const resObj = clothes.delete(req.params.id);
    res.json(resObj);
    
}


module.exports = router;
