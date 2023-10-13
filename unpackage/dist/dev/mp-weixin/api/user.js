"use strict";
const api_uniFetch = require("./uni-fetch.js");
const login = (data) => {
  if (!data.account || !data.password)
    return;
  return api_uniFetch.uniFetch.post("/driver/login/account", data);
};
const getProfile = () => {
  return api_uniFetch.uniFetch.get("/driver/users");
};
const getTask = (data) => {
  if (!data.month || !data.year)
    return;
  return api_uniFetch.uniFetch.get("/driver/users/taskReport", data);
};
const getTruck = () => {
  return api_uniFetch.uniFetch.get("/driver/users/truck");
};
exports.getProfile = getProfile;
exports.getTask = getTask;
exports.getTruck = getTruck;
exports.login = login;
