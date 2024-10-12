// src/routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Rutas CRUD
router.get('/:id', itemController.getById);
router.get('/', itemController.getAll);
router.post('/', itemController.createItem);
router.put('/:id', itemController.updateById);
router.delete('/:id', itemController.deleteById);

module.exports = router;
