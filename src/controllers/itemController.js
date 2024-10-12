// src/controllers/itemController.js
const itemService = require('../services/itemService');

exports.getAll = async (req, res) => {
	try {
	  const items = await itemService.getAll();
	  res.status(200).json(items);
	} catch (error ) {
		if (error instanceof Error) {
	 	 res.status(500).json({ message: 'Error fetching item', error });
		}
		if (error instanceof ErrorService) {
	 	 res.status(ErrorService.status).json({ message: ErrorService.msg, error });
		}
	}
  };

exports.getById = async (req, res) => {
  const id = req.params.id;
  try {
    const item = await itemService.getById(id);
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching item', error });
  }
};

exports.createItem = async (req, res) => {
  const itemData = req.body;
  try {
    const newItem = await itemService.createItem(itemData);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: 'Error creating item', error });
  }
};

exports.updateById = async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  try {
    const updatedItem = await itemService.updateById(id, updateData);
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: 'Error updating item', error });
  }
};

exports.deleteById = async (req, res) => {
  const id = req.params.id;
  try {
    await itemService.deleteById(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item', error });
  }
};
