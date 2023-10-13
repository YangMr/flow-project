"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_user = require("../../../api/user.js");
const stores_user = require("../../../stores/user.js");
require("../../../api/uni-fetch.js");
if (!Array) {
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_forms_item + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "account",
  setup(__props) {
    const store = stores_user.useUserStore();
    const accountForm = common_vendor.ref();
    const redirectURL = common_vendor.ref("");
    const routeType = common_vendor.ref("");
    const formData = common_vendor.ref({
      account: "",
      password: ""
    });
    common_vendor.onLoad((e) => {
      redirectURL.value = e.redirectUrl;
      routeType.value = e.routeType;
    });
    const accountRules = common_vendor.ref({
      account: {
        rules: [
          {
            required: true,
            errorMessage: "请输入登录账号"
          },
          {
            pattern: /^[a-zA-Z0-9]{6,8}$/,
            errorMessage: "登录账号格式不正确"
          }
        ]
      },
      password: {
        rules: [
          {
            required: true,
            errorMessage: "请输入登录密码"
          },
          {
            pattern: /^\d{6}$/,
            errorMessage: "登录密码格式不正确"
          }
        ]
      }
    });
    const onFormSubmit = async () => {
      try {
        const formData2 = await accountForm.value.validate();
        const res = await api_user.login(formData2);
        if (res.data)
          store.token = res.data;
        if (routeType.value === "switchTab") {
          common_vendor.index.switchTab({
            url: redirectURL.value
          });
        } else {
          common_vendor.index.redirectTo({
            url: redirectURL.value
          });
        }
      } catch (e) {
        console.log("e", e);
      }
    };
    return (_ctx, _cache) => {
      return {
        a: formData.value.account,
        b: common_vendor.o(($event) => formData.value.account = $event.detail.value),
        c: common_vendor.p({
          name: "account"
        }),
        d: formData.value.password,
        e: common_vendor.o(($event) => formData.value.password = $event.detail.value),
        f: common_vendor.p({
          name: "password"
        }),
        g: common_vendor.sr(accountForm, "1c0cdd7c-0", {
          "k": "accountForm"
        }),
        h: common_vendor.p({
          rules: accountRules.value,
          modelValue: formData.value
        }),
        i: common_vendor.o(onFormSubmit)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/yangling/Desktop/1907/实训2210B/flow-project/pages/login/components/account.vue"]]);
wx.createComponent(Component);
