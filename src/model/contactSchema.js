const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");

const contactSchema = mongoose.Schema({
    FirstName: {type: String},
    LastName: {type: String},
    PhoneNumber: {type: String},
    Email: {type: String},
    Subject: {type: String},
    Message: {type: String}
});

contactSchema.plugin(timestamps);
module.exports = mongoose.model("Contact", contactSchema);
