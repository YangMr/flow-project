"use strict";const e=require("../../common/vendor.js"),a=require("../../api/task.js");if(require("../../api/uni-fetch.js"),require("../../stores/user.js"),!Array){e.resolveComponent("tempate")()}const t={__name:"index",setup(t){const s=e.ref({});e.ref("");return e.onLoad((e=>{(async t=>{try{if(!t)return;const e=await a.taskDetail(t);console.log("result",e),s.value=e.data}catch(e){console.log(e)}})(e.id)})),(a,t)=>e.e({a:e.t(s.value.startAddress),b:e.t(s.value.endAddress),c:e.t(s.value.transportTaskId),d:s.value.status>=1},s.value.status>=1?{e:e.t(s.value.startHandoverName),f:e.t(s.value.startHandoverPhone),g:e.t(s.value.planDepartureTime),h:e.t(s.value.actualDepartureTime)}:{},{i:s.value.status>=2},s.value.status>=2?{j:e.t(s.value.finishHandoverName),k:e.t(s.value.finishHandoverPhone),l:e.t(s.value.planArrivalTime),m:e.t(s.value.actualArrivalTime)}:{},{n:1===s.value.status},1===s.value.status?{o:`/subpkg_task/delay/index?id=${s.value.id}&planDepartureTime=${s.value.planDepartureTime}`,p:`/subpkg_task/pickup/index?id=${s.value.id}`}:{},{q:2===s.value.status},2===s.value.status?{r:`/subpkg_task/except/index?transportTaskId=${s.value.transportTaskId}`,s:`/subpkg_task/delivery/index?id=${s.value.id}`}:{},{t:4===s.value.status},4===s.value.status?{v:"/subpkg_task/record/index"}:{})}};wx.createPage(t);
