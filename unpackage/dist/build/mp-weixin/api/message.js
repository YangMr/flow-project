"use strict";const e=require("./uni-fetch.js");exports.getMessage=(s,t=1,r=5)=>e.uniFetch.get("/driver/messages/page",{contentType:s,page:t,pageSize:r}),exports.getReadAll=s=>e.uniFetch.put(`/driver/messages/readAll/${s}`);
