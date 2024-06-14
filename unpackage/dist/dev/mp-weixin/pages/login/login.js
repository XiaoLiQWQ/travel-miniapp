"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      account: "",
      // 账号
      password: ""
      // 密码
    };
  },
  methods: {
    login() {
      if (this.account && this.password) {
        common_vendor.index.setStorageSync("isLogin", "true");
        common_vendor.index.showToast({
          icon: "success",
          title: "登陆成功！"
        });
        common_vendor.index.switchTab({
          url: "/pages/mine/mine"
        });
      } else {
        common_vendor.index.showToast({
          icon: "error",
          title: "账号或密码为空！"
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.account,
    b: common_vendor.o(($event) => $data.account = $event.detail.value),
    c: $data.password,
    d: common_vendor.o(($event) => $data.password = $event.detail.value),
    e: common_vendor.o(($event) => $options.login())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/小狸/Desktop/uniappDemo/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
