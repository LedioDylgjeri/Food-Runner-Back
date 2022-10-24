import { Inventory } from "../models/inventory";

function create(req, res) {
  Inventory.create(req.body)
  .then(inventory => {
    res.json(inventory)
  })
  .catch(err => {
    console.log(err);
    res.json(err)
  })
}

function deleteInventory(req, res) {
  Inventory.findByIdAndDelete(req.params.id)
  .then(inventoryPuppy => {
    res.json(inventoryPuppy)
  })
  .catch(err => {
    console.log(err);
    res.json(err)
  })
}

function updateInventory(req, res) {
  Inventory.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(updatedInventory => {
    res.json(updatedInventory)
  })
  .catch(err => {
    console.log(err);
    res.json(err)
  })
}

export {
  create,
  deleteInventory as delete,
  updateInventory as update
}