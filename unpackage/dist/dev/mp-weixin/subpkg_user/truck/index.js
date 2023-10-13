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
    const truckInfo = common_vendor.ref();
    common_vendor.onLoad(() => {
      getTruckInfo();
    });
    const getTruckInfo = async () => {
      try {
        const result = await api_user.getTruck();
        truckInfo.value = result.data;
        console.log("result", result);
      } catch (e) {
        console.log(e);
      }
    };
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return common_vendor.e({
        a: (_a = truckInfo.value) == null ? void 0 : _a.pictureList
      }, ((_b = truckInfo.value) == null ? void 0 : _b.pictureList) ? {
        b: common_vendor.f((_c = truckInfo.value) == null ? void 0 : _c.pictureList, (item, index, i0) => {
          return {
            a: item.url,
            b: index
          };
        }),
        c: common_vendor.p({
          border: false,
          title: "车辆编号",
          rightText: truckInfo.value.id
        }),
        d: common_vendor.p({
          border: false,
          title: "车辆号牌",
          rightText: truckInfo.value.licensePlate
        }),
        e: common_vendor.p({
          border: false,
          title: "车型",
          rightText: truckInfo.value.truckType
        }),
        f: common_vendor.p({
          border: false,
          title: "所属机构",
          rightText: truckInfo.value.currentOrganName
        }),
        g: common_vendor.p({
          border: false,
          title: "载重",
          rightText: truckInfo.value.allowableLoad
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/yangling/Desktop/1907/实训2210B/flow-project/subpkg_user/truck/index.vue"]]);
wx.createPage(MiniProgramPage);
