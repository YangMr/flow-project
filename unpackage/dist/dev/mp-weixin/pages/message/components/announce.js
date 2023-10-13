"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_message = require("../../../api/message.js");
require("../../../api/uni-fetch.js");
require("../../../stores/user.js");
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
  __name: "announce",
  setup(__props) {
    const isEmpty = common_vendor.ref(false);
    const hasMore = common_vendor.ref(false);
    const taskNotifyInfo = common_vendor.ref({});
    const notifyList = common_vendor.ref([]);
    const nextPage = common_vendor.ref(0);
    const pageSize = common_vendor.ref(5);
    const isTriggered = common_vendor.ref(false);
    const contentType = common_vendor.ref("200");
    const getkNotifyList = async () => {
      try {
        nextPage.value += 1;
        const result = await api_message.getMessage(contentType.value, nextPage.value, pageSize.value);
        if (nextPage.value === 1)
          notifyList.value = [];
        taskNotifyInfo.value = result.data;
        notifyList.value = [...notifyList.value, ...result.data.items || []];
        hasMore.value = nextPage.value == taskNotifyInfo.value.pages;
        isEmpty.value = notifyList.value.length === 0;
      } catch (e) {
        console.log(e);
      }
    };
    common_vendor.onLoad(() => {
      getkNotifyList();
    });
    const onScrollToLower = () => {
      if (hasMore.value)
        return;
      getkNotifyList();
    };
    const onRefresh = async () => {
      isTriggered.value = true;
      nextPage.value = 0;
      await getkNotifyList();
      isTriggered.value = false;
    };
    const handleAllRead = async () => {
      try {
        const result = await api_message.getReadAll(contentType.value);
        nextPage.value = 0;
        getkNotifyList();
      } catch (e) {
        console.log(e);
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: notifyList.value.length > 0
      }, notifyList.value.length > 0 ? {
        b: common_vendor.o(handleAllRead),
        c: common_vendor.f(notifyList.value, (item, index, i0) => {
          return common_vendor.e({
            a: item.isRead === 0
          }, item.isRead === 0 ? {} : {}, {
            b: item.id,
            c: "6785b1c2-1-" + i0 + ",6785b1c2-0",
            d: common_vendor.p({
              title: item.title,
              ["right-text"]: item.created,
              ellipsis: "1",
              to: `/subpkg_message/content/index?id=${item.id}`
            })
          });
        })
      } : {}, {
        d: isEmpty.value
      }, isEmpty.value ? {} : {}, {
        e: isTriggered.value,
        f: common_vendor.o(onRefresh),
        g: common_vendor.o(onScrollToLower)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/yangling/Desktop/1907/实训2210B/flow-project/pages/message/components/announce.vue"]]);
wx.createComponent(Component);
