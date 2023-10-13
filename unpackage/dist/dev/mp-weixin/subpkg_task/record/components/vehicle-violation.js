"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
const _sfc_main = {
  __name: "vehicle-violation",
  setup(__props) {
    const show = common_vendor.ref(false);
    const onRadioChange = (e) => {
      console.log("e", e);
      show.value = e.detail.value == 1 ? true : false;
      console.log("qqq");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onRadioChange),
        b: common_vendor.p({
          title: "交通违章"
        }),
        c: show.value
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/yangling/Desktop/1907/实训2210B/flow-project/subpkg_task/record/components/vehicle-violation.vue"]]);
wx.createComponent(Component);
