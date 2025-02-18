const { Schema, model } = require("mongoose");
const { handleSaveErrors } = require("../helpers");

const contactsSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});
const Contact = model("contact", contactsSchema);
contactsSchema.post("save", handleSaveErrors);

module.exports = Contact;
