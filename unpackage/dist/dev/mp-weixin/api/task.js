"use strict";
const api_uniFetch = require("./uni-fetch.js");
const getTasks = (data) => {
  return api_uniFetch.uniFetch.get("/driver/tasks/list", data);
};
const takeDelivery = (data) => {
  return api_uniFetch.uniFetch.post("/driver/tasks/takeDelivery", data);
};
const deliver = (data) => {
  return api_uniFetch.uniFetch.post("/driver/tasks/deliver", data);
};
const taskDetail = (jobId) => {
  return api_uniFetch.uniFetch.get(`/driver/tasks/details/${jobId}`);
};
const delay = (data) => {
  return api_uniFetch.uniFetch.put("/driver/tasks/delay", data);
};
const reportException = (data) => {
  return api_uniFetch.uniFetch.post("/driver/tasks/reportException", data);
};
const truckRegistration = (data) => {
  return api_uniFetch.uniFetch.post("/driver/tasks/truckRegistration", data);
};
exports.delay = delay;
exports.deliver = deliver;
exports.getTasks = getTasks;
exports.reportException = reportException;
exports.takeDelivery = takeDelivery;
exports.taskDetail = taskDetail;
exports.truckRegistration = truckRegistration;
