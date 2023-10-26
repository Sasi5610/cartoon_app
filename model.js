const mongoose = require("mongoose");

const cartoonSchema = new mongoose.Schema({
  id: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  foods: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Cartoon = mongoose.model("Cartoon", cartoonSchema);

module.exports = Cartoon;
