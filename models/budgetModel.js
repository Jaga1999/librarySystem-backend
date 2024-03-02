// budgetModel.js
const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  year: { type: Number, required: true },
  amount: { type: Number, required: true },
});

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
