const mongoose = require("mongoose");
const Eligibility = require("../model/eligibilitySchema");
const Contact = require("../model/contactSchema");
const { body } = require("express-validator");



exports.createForm = async (body) => {
    return await Contact.create(body);
};



exports.createIncomeForm = async (body) => {
    return await Eligibility.create(body);
};
