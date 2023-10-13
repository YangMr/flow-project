"use strict";const e=require("../common/vendor.js"),s=require("../stores/persist.js"),i=e.createPinia();exports.registerPinia=function(e){i.use(s.piniaPluginPersistedstate),e.use(i)};
