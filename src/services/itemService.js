/**
 * 	El servicio es responsable de la lógica de negocio.
 */
const ItemRepository = require('../repositories/itemRepository');

exports.getAll = (id) => {

	const Personaje = Personaje().getPersonaje;
	updatePower(Personaje);
	return ItemRepository.findAll(id);
};


exports.getById = (id) => {
  return ItemRepository.findById(id);
};

exports.createItem = (itemData) => {
  return ItemRepository.create(itemData);
};

exports.updateById = (id, updateData) => {
  return ItemRepository.updateById(id, updateData);
};

exports.deleteById = (id) => {
  return ItemRepository.deleteById(id);
};
