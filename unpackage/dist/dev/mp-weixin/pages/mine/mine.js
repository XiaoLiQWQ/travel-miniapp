"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 是否登陆状态
      isLogin: false
    };
  },
  onShow() {
    if (common_vendor.index.getStorageSync("isLogin")) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
  methods: {
    // 去登陆页面
    toLogin() {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.isLogin ? "临时用户" : "还未登陆"),
    b: !$data.isLogin,
    c: common_vendor.o(($event) => $options.toLogin())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/小狸/Desktop/uniappDemo/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
