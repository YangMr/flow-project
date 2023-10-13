"use strict";
const common_vendor = require("../../common/vendor.js");
const api_task = require("../../api/task.js");
require("../../api/uni-fetch.js");
require("../../stores/user.js");
if (!Array) {
  const _component_tempate = common_vendor.resolveComponent("tempate");
  _component_tempate();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const detailInfo = common_vendor.ref({});
    common_vendor.ref("");
    const getDetailInfo = async (id) => {
      try {
        if (!id)
          return;
        const result = await api_task.taskDetail(id);
        console.log("result", result);
        detailInfo.value = result.data;
      } catch (e) {
        console.log(e);
      }
    };
    common_vendor.onLoad((e) => {
      getDetailInfo(e.id);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(detailInfo.value.startAddress),
        b: common_vendor.t(detailInfo.value.endAddress),
        c: common_vendor.t(detailInfo.value.transportTaskId),
        d: detailInfo.value.status >= 1
      }, detailInfo.value.status >= 1 ? {
        e: common_vendor.t(detailInfo.value.startHandoverName),
        f: common_vendor.t(detailInfo.value.startHandoverPhone),
        g: common_vendor.t(detailInfo.value.planDepartureTime),
        h: common_vendor.t(detailInfo.value.actualDepartureTime)
      } : {}, {
        i: detailInfo.value.status >= 2
      }, detailInfo.value.status >= 2 ? {
        j: common_vendor.t(detailInfo.value.finishHandoverName),
        k: common_vendor.t(detailInfo.value.finishHandoverPhone),
        l: common_vendor.t(detailInfo.value.planArrivalTime),
        m: common_vendor.t(detailInfo.value.actualArrivalTime)
      } : {}, {
        n: detailInfo.value.status === 1
      }, detailInfo.value.status === 1 ? {
        o: `/subpkg_task/delay/index?id=${detailInfo.value.id}&planDepartureTime=${detailInfo.value.planDepartureTime}`,
        p: `/subpkg_task/pickup/index?id=${detailInfo.value.id}`
      } : {}, {
        q: detailInfo.value.status === 2
      }, detailInfo.value.status === 2 ? {
        r: `/subpkg_task/except/index?transportTaskId=${detailInfo.value.transportTaskId}`,
        s: `/subpkg_task/delivery/index?id=${detailInfo.value.id}`
      } : {}, {
        t: detailInfo.value.status === 4
      }, detailInfo.value.status === 4 ? {
        v: `/subpkg_task/record/index?id=${detailInfo.value.id}&startTime=${detailInfo.value.actualDepartureTime}`
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/yangling/Desktop/1907/实训2210B/flow-project/subpkg_task/detail/index.vue"]]);
wx.createPage(MiniProgramPage);
