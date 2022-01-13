const Job = require('../models/Job')
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");


const getAllJobs = async (req, res) => {
	res.send("get all jobs");
};
const getJob = async (req, res) => {
	res.send("get jobs");
};
const createJob = async (req, res) => {
	res.json(req.body)
};
const updateJob = async (req, res) => {
	res.send("update jobs");
};
const deleteJob = async (req, res) => {
	res.send("delete jobs");
};


module.exports = {
	getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,

};
