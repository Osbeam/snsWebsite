const express = require("express");
const formController = express.Router();
const formServices = require("../services/formServices");
const { sendResponse } = require("../utils/common");
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });




formController.post('/contactForm', async (req, res) => {
    try {
        const userData = { ...req.body }; // Add employee ID to user data
        const formCreated = await formServices.createForm(userData);

        sendResponse(res, 200, "Success", {
            success: true,
            message: "Eligibility form create successfully!",
            userData: formCreated
        });

    } catch (error) {
        console.log(error);
        sendResponse(res, 500, "Failed", {
            message: error.message || "Internal server error",
        });
    }
});




formController.post('/eligibilityForm', async (req, res) => {
    try {
        const { Income } = req.body;

        // Check if SalaryIncome is not provided or is not a number
        if (!Income || isNaN(parseFloat(Income))) {
            return sendResponse(res, 400, "Failed", {
                success: false,
                message: "Income must be provided and must be a number"
            });
        }

        if (parseFloat(Income) < 100000) {
            return sendResponse(res, 400, "Failed", {
                success: false,
                message: "Income must be above 1 lakh to create the form"
            });
        }

        const userData = { ...req.body }; 
        const formCreated = await formServices.createIncomeForm(userData);

        sendResponse(res, 200, "Success", {
            success: true,
            message: "Eligibility form created successfully!",
            userData: formCreated
        });

    } catch (error) {
        console.error(error);
        sendResponse(res, 500, "Failed", {
            message: error.message || "Internal server error",
        });
    }
});



module.exports = formController;