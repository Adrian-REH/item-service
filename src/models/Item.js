let items = [
	{
	  _id: '635b0a0d4f1a4c001c8b4567',
	  name: 'Item 1',
	  description: 'This is the first item',
	  price: 50.0,
	  inStock: true,
	  createdAt: new Date(),
	  updatedAt: new Date(),
	},
	{
	  _id: '635b0a0d4f1a4c001c8b4568',
	  name: 'Item 2',
	  description: 'This is the second item',
	  price: 75.0,
	  inStock: false,
	  createdAt: new Date(),
	  updatedAt: new Date(),
	},
  ];
  
  class ItemModel {
	static findAll() {
		return Promise.resolve(items);
	}
	static findById(id) {
	  const item = items.find((item) => item._id === id);
	  return item ? Promise.resolve(item) : Promise.resolve(null);
	}
  
	constructor(itemData) {
	  this._id = `${Date.now()}`; // Generar un ID ficticio
	  this.name = itemData.name;
	  this.description = itemData.description;
	  this.price = itemData.price;
	  this.inStock = itemData.inStock;
	  this.createdAt = new Date();
	  this.updatedAt = new Date();
	}
  
	save() {
	  items.push(this);
	  return Promise.resolve(this);
	}
  
	static findByIdAndUpdate(id, updateData, options) {
	  const itemIndex = items.findIndex((item) => item._id === id);
	  if (itemIndex === -1) return Promise.resolve(null);
  
	  const updatedItem = { ...items[itemIndex], ...updateData, updatedAt: new Date() };
	  items[itemIndex] = updatedItem;
	  return Promise.resolve(updatedItem);
	}
  
	static findByIdAndDelete(id) {
	  const itemIndex = items.findIndex((item) => item._id === id);
	  if (itemIndex === -1) return Promise.resolve(null);
  
	  const deletedItem = items.splice(itemIndex, 1)[0]; // Elimina el item del array
	  return Promise.resolve(deletedItem);
	}
  }
  
  module.exports = ItemModel;