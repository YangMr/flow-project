"use strict";
const common_vendor = require("../../common/vendor.js");
const api_task = require("../../api/task.js");
require("../../api/uni-fetch.js");
require("../../stores/user.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_datetime_picker2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_datetime_picker + _easycom_uni_list + VehicleViolation)();
}
const VehicleViolation = () => "./components/vehicle-violation.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const id = common_vendor.ref("");
    const startTime = common_vendor.ref("");
    common_vendor.onLoad((query) => {
      id.value = query.id;
      startTime.value = query.startTime;
    });
    const endTime = common_vendor.ref("");
    const onFormSubmit = async () => {
      try {
        const data = {
          id: id.value,
          startTime: startTime.value,
          endTime: endTime.value
        };
        const result = await api_task.truckRegistration(data);
        common_vendor.index.reLaunch({
          url: "/pages/task/index"
        });
      } catch (e) {
        console.log(e);
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "出车时间",
          ["right-text"]: startTime.value,
          ["show-arrow"]: true
        }),
        b: common_vendor.t(endTime.value || "请选择"),
        c: common_vendor.o(($event) => endTime.value = $event),
        d: common_vendor.p({
          modelValue: endTime.value
        }),
        e: common_vendor.p({
          title: "回车时间",
          ["show-arrow"]: true
        }),
        f: common_vendor.o(onFormSubmit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/yangling/Desktop/1907/实训2210B/flow-project/subpkg_task/record/index.vue"]]);
wx.createPage(MiniProgramPage);
