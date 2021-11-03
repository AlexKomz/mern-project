const { Schema, model, SchemaTypes } = require('mongoose');

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  links: [{ type: SchemaTypes.ObjectId, ref: `Link` }]
});

module.exports = model(`User`, schema);
