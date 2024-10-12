// src/repositories/itemRepository.js
const ItemModel = require('../models/Item');

exports.findAll = (id) => {
  return ItemModel.findAll(id);
};

exports.findById = (id) => {
  return ItemModel.findById(id);
};

exports.create = (itemData) => {
  return new ItemModel(itemData).save();
};

exports.updateById = (id, updateData) => {
  return ItemModel.findByIdAndUpdate(id, updateData, { new: true });
};

exports.deleteById = (id) => {
  return ItemModel.findByIdAndDelete(id);
};
