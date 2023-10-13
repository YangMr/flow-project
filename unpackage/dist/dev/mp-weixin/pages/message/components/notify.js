"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_message = require("../../../api/message.js");
require("../../../api/uni-fetch.js");
require("../../../stores/user.js");
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
const _sfc_main = {
  __name: "notify",
  setup(__props) {
    const isEmpty = common_vendor.ref(false);
    const contentType = common_vendor.ref("201");
    const nextPage = common_vendor.ref(0);
    const pageSize = common_vendor.ref(5);
    const taskList = common_vendor.ref([]);
    const hasMore = common_vendor.ref(false);
    const isTriggered = common_vendor.ref(false);
    const getTaskNotifyList = async () => {
      console.log("123");
      try {
        nextPage.value += 1;
        const result = await api_message.getMessage(contentType.value, nextPage.value, pageSize.value);
        if (nextPage.value === 1)
          taskList.value = [];
        taskList.value = [...taskList.value, ...result.data.items || []];
        console.log("result", result);
        hasMore.value = nextPage.value == result.data.pages;
        isEmpty.value = taskList.value.length === 0;
      } catch (e) {
        console.log(e);
      }
    };
    common_vendor.onLoad(() => {
      getTaskNotifyList();
    });
    const onScrollToLower = () => {
      if (hasMore.value)
        return;
      getTaskNotifyList();
    };
    const onRefresh = async () => {
      isTriggered.value = true;
      nextPage.value = 0;
      await getTaskNotifyList();
      isTriggered.value = false;
    };
    const handleAllRead = async () => {
      try {
        const result = await api_message.getReadAll(contentType.value);
        nextPage.value = 0;
        getTaskNotifyList();
      } catch (e) {
        console.log(e);
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(handleAllRead),
        b: common_vendor.f(taskList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.content),
            b: common_vendor.t(item.created),
            c: common_vendor.t(item.title),
            d: item.isRead === 0 ? 1 : "",
            e: index,
            f: "8137be3c-0-" + i0
          };
        }),
        c: common_vendor.p({
          ["is-shadow"]: false
        }),
        d: hasMore.value
      }, hasMore.value ? {} : {}, {
        e: isEmpty.value
      }, isEmpty.value ? {} : {}, {
        f: isTriggered.value,
        g: common_vendor.o(onRefresh),
        h: common_vendor.o(onScrollToLower)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/yangling/Desktop/1907/实训2210B/flow-project/pages/message/components/notify.vue"]]);
wx.createComponent(Component);
