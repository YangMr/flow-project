"use strict";
const common_vendor = require("../../common/vendor.js");
const api_user = require("../../api/user.js");
require("../../api/uni-fetch.js");
require("../../stores/user.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const userProfile = common_vendor.ref({});
    const taskData = common_vendor.ref({});
    const getUserProfile = async () => {
      try {
        const result = await api_user.getProfile();
        userProfile.value = result.data;
      } catch (e) {
        console.log(e);
      }
    };
    const getTaskData = async () => {
      try {
        const result = await api_user.getTask(common_vendor.index.utils.getYearAndMonth());
        console.log("result", result);
        taskData.value = result.data;
      } catch (e) {
        console.log(e);
      }
    };
    common_vendor.onLoad(() => {
      getUserProfile();
      getTaskData();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: userProfile.value
      }, userProfile.value ? {
        b: userProfile.value.avatar,
        c: common_vendor.t(userProfile.value.name),
        d: common_vendor.t(userProfile.value.number),
        e: common_vendor.t(userProfile.value.phone)
      } : {}, {
        f: common_vendor.t(taskData.value.taskAmounts),
        g: common_vendor.t(taskData.value.completedAmounts),
        h: common_vendor.t(taskData.value.transportMileage),
        i: common_vendor.p({
          to: "/subpkg_user/truck/index",
          title: "车辆信息",
          showArrow: true
        }),
        j: common_vendor.p({
          to: "/subpkg_user/task/index",
          title: "任务数据",
          showArrow: true
        }),
        k: common_vendor.p({
          to: "/subpkg_user/settings/index",
          title: "系统设置",
          showArrow: true
        }),
        l: common_vendor.p({
          border: false
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/yangling/Desktop/1907/实训2210B/flow-project/pages/my/index.vue"]]);
wx.createPage(MiniProgramPage);
