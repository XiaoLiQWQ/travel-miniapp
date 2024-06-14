"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      details: {}
    };
  },
  onLoad(options) {
    this.details = JSON.parse(options.details);
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.details.title),
    b: $data.details.img,
    c: common_vendor.t($data.details.content)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/小狸/Desktop/uniappDemo/pages/details/details.vue"]]);
wx.createPage(MiniProgramPage);
