"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 标识当前是第几张图片，按数组下标而定
      current: 0,
      // 图片数组
      img: ["../../static/index-1.png", "../../static/index-2.png", "../../static/index-3.png"],
      // 图片描述数组
      content: ["第一张", "第二张", "第三张"],
      // 攻略
      recommand: [{
        img: "../../static/info-1.png",
        title: "用14天探索坦桑尼亚，给世界一个完整的东非风情",
        content: "当许多人想起非洲的时候，他们事实上想起的是坦桑尼亚！提起坦桑尼亚，你脑海里首先想到的是一望无际的草原和动物大迁徙，还有非洲屋脊乞力马扎罗。广袤无垠的陆地和草原上，每年数百万只野生动物在自由迁徙。塞伦盖蒂、恩戈罗恩戈罗、塔兰吉雷、马尼亚..."
      }, {
        img: "../../static/info-2.jpeg",
        title: "新西兰｜人生终要有一场触及灵魂的旅行",
        content: "◾️触及灵魂的旅行毕淑敏女士曾经写过一本书，名叫《人生终要有一场触及灵魂的旅行》，是我唯一一本只看书名就毫不犹豫买回家的书。书中讲述了她在与世界温柔相拥的旅行中，与心灵和解、与灵魂会合的治愈故事。我印象深刻的是书中一段段对周围环境和感官..."
      }, {
        img: "../../static/info-3.jpeg",
        title: "秘境甘南8日环线游",
        content: "前言 甘肃 以南， 四川 以北的 甘南 地区对我来说是个有些陌生的地方，我的旅游计划清单中也并没有它。 青海 旅行回来后，看到 青海 游领队分享的 甘南 行程后，觉得 甘南 地区既有自然风光、民族特色，又可以了解藏传佛教，有别于以往的旅游目的地，问了好姐妹L，没想到两人一拍即合，于是决定开启这段秘境 甘南 之旅。 行程安排 整个行程历时8天 ，从 兰州 出发走个环线，最终回到 兰州 ，行程中平均海拔3000多，最高海拔是4554米的莲宝叶则， 📌行前准备Tips 1、交通工具 如果选择从 兰州 进入 甘南 ，前往 兰州 的交通方式很多，飞机"
      }, {
        img: "../../static/info-4.jpeg",
        title: "埃及 | 尼罗河两岸，追寻信仰和生活",
        content: "开篇 我对 埃及 最初的印象，并不是巍峨的金字塔，亦非旷远神秘的庙宇，而是一副朦胧的金色画面：三角帆船翩翩泛舟在碧蓝的尼罗河，两岸挺拔着婆娑椰枣，金黄沙丘对峙着大河。尼罗河从 非洲 大陆奔跑而来，穿越茂林，横跨高原，流经世界最干燥之地—— 撒哈拉沙漠 ，最终汇入汪洋。在其长达六千多公里的漫长旅途中，它在沙漠中细长又蜿蜒，然后在 埃及 北部猛烈地冲刷出广袤的三角洲。从高空看去，它像极了一片银杏树叶。 现代的 埃及 生活与文明大多聚焦在这片银杏树叶的顶端： 开罗 、 亚历山大 港，而它细长的叶柄往往被人忽略。它太"
      }, {
        img: "../../static/info-5.jpeg",
        title: "东南亚小众目的地，这个常被遗忘得小城真得值得来",
        content: "东南亚小众目的地，这个常被遗忘得小城真得值得来从清晨的布施到热闹的早市，或者踩着脚踏车从街头到巷尾，那些法式建筑还有开满鲜花的街头处处洋溢着浪漫。纵使没有海洋，琅勃拉邦依旧是魅力的古都。"
      }, {
        img: "../../static/info-6.jpeg",
        title: "相约山与海，遇见夏日营口",
        content: "营口 是人类文明的发祥地之一，距今约28万年前的金牛山古人类遗址见证了辽河流域最早的文明。 营口 是 中国 大陆唯一可观夕阳坠海的城市，同时也是 中国 四大乐器生产基地之一。 营口 ，给我的感觉像是一位古朴优雅，风向万千的典雅仕女，带着对她的好奇，开启了我五天四夜的 营口 之行… 第一天 初遇营口，感受历史和文化 路线：西炮台—牛耳广场—辽河文化产业带—辽河入 海口 1.西炮台（1882年） 西炮台建于清光绪八年（1882年），竣工于光绪十四年（1888年）。它是清政府兴办北洋水师在 东北 沿海建筑的重要 海防 要塞。为 东北 地区"
      }]
    };
  },
  methods: {
    // 上一个按钮 函数
    prev() {
      if (this.current === 0) {
        this.current = 2;
      } else {
        this.current--;
      }
    },
    // 下一个按钮 函数
    next() {
      if (this.current === 2) {
        this.current = 0;
      } else {
        this.current++;
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.img[$data.current],
    b: common_vendor.o(($event) => $options.prev()),
    c: common_vendor.t($data.content[$data.current]),
    d: common_vendor.o(($event) => $options.next()),
    e: common_vendor.f($data.recommand, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: item.img,
        c: common_vendor.t(item.content),
        d: "/pages/details/details?details=" + JSON.stringify(item),
        e: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/小狸/Desktop/uniappDemo/pages/info/info.vue"]]);
wx.createPage(MiniProgramPage);
