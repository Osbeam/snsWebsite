const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");

const eligibilitySchema = mongoose.Schema({
    MobileNo: {type: String},
    LoanType: {type: String},
    LoanAmount: {type: String},
    IncomeType: {type: String},
    Income: {type: Number},
    CibilScore: {type: String},
    Source: {type: String},
    Date: {type: Date}
});

eligibilitySchema.plugin(timestamps);
module.exports = mongoose.model("EligibilityForm", eligibilitySchema);

