(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-index"],{"0235":function(t,e,a){"use strict";a.r(e);var i=a("eaf6"),n=a("79df");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("84b0");var r,o=a("f0c5"),l=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"12aa7922",null,!1,i["a"],r);e["default"]=l.exports},3070:function(t,e,a){var i=a("fc98");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("96f1cc08",i,!0,{sourceMap:!1,shadowMode:!1})},"79df":function(t,e,a){"use strict";a.r(e);var i=a("b52e"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"84b0":function(t,e,a){"use strict";var i=a("3070"),n=a.n(i);n.a},b52e:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{loadingStatus:!0,slider:{data:[]},terms:[],list:[],listType:"grid"}},onShareAppMessage:function(t){return{title:this.opt.mNames.shop_name,path:"/pages/shop/index"}},onLoad:function(){var t=this;this.loadingStatus&&uni.request({method:"post",url:this.$store.state.restUrl+"getShopIndex",header:this.$store.state.headerToken,success:function(e){if(403!=e.statusCode){t.slider.data=e.data.slider,t.terms=e.data.terms,t.list=e.data.list,t.listType=e.data.list_type;for(var a=0;a<t.list.length;a++)t.$set(t.list[a],"hidden",!0),t.$set(t.list[a],"opt",{shop_type:e.data.list_type});t.$nextTick((function(){t.loadingStatus=!1}))}}})},onReady:function(){uni.setNavigationBarTitle({title:this.opt.mNames.shop_name})},computed:{symbol:function(){return this.$store.state.opt.symbol},opt:function(){return this.$store.state.opt}},methods:{gopage:function(t){uni.navigateTo({url:t})}}};e.default=i},eaf6:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"shop-page page-content"},[t.loadingStatus?a("b2Loading",{attrs:{status:t.loadingStatus}}):[t.slider.data.length>0?a("v-uni-view",{staticClass:"slider b2radius b2mg"},[a("b2swiper",{attrs:{list:t.slider}})],1):t._e(),t.terms.length>0?a("v-uni-view",{staticClass:"terms"},[a("v-uni-scroll-view",{staticClass:"scroll-view_H b2mg b2radius",attrs:{"scroll-x":"true","scroll-left":"0"}},t._l(t.terms,(function(e,i){return a("v-uni-view",{key:i,staticClass:"item-box b2radius",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.go("/pages/shop/category?id="+e.term_id)}}},[a("v-uni-image",{staticClass:"item-image",attrs:{src:e.cover,"lazy-load":!0,mode:"aspectFill"}}),a("v-uni-text",{staticClass:"item-name",domProps:{textContent:t._s(e.name)}})],1)})),1)],1):t._e(),a("v-uni-view",{staticClass:"shop-item"},t._l(t.list,(function(e,i){return a("v-uni-view",{key:i,class:[{jparent:"list"==t.listType},"item-in"]},[a("v-uni-view",{staticClass:"s-t flex-center b2mg"},[a("v-uni-view",{staticClass:"s-n"},[a("v-uni-view",{staticClass:"s-n-b"}),"normal"==e.type?a("v-uni-view",{staticClass:"flex-center"},[t._v("商品购买")]):t._e(),"exchange"==e.type?a("v-uni-view",{staticClass:"flex-center"},[t._v("积分兑换")]):t._e(),"lottery"==e.type?a("v-uni-view",{staticClass:"flex-center"},[t._v("积分抽奖")]):t._e()],1),a("v-uni-view",{staticClass:"s-m",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.go("/pages/shop/"+e.type)}}},[t._v("更多"),a("b2font",{attrs:{type:"b2arrow-right-s-line",size:"30"}})],1)],1),a("v-uni-view",{staticClass:"b2mg"},[a("b2product",{attrs:{list:e}})],1)],1)})),1)]],2)},s=[]},fc98:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.item-in[data-v-12aa7922]{margin-top:%?32?%}.terms[data-v-12aa7922]{margin:%?24?% 0;height:%?100?%;overflow:hidden}.terms .b2radius[data-v-12aa7922]{-webkit-box-shadow:none;box-shadow:none}.scroll-view_H[data-v-12aa7922]{white-space:nowrap;height:%?100?%;width:auto}.item-box[data-v-12aa7922]{height:%?100?%;width:%?180?%;display:inline-block;position:relative}.item-box + .item-box[data-v-12aa7922]{margin-left:%?16?%}.item-image[data-v-12aa7922]{position:absolute;top:0;left:0;width:100%;height:100%}.item-name[data-v-12aa7922]{position:absolute;bottom:0;right:0;left:0;padding:%?20?%;font-size:%?24?%;font-weight:700;color:#fff;z-index:3;background:-webkit-linear-gradient(90deg,rgba(51,51,51,.68),transparent);background:linear-gradient(1turn,rgba(51,51,51,.68),transparent);height:66%;display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end;white-space:normal}.s-t[data-v-12aa7922]{-webkit-box-pack:justify;justify-content:space-between;margin-bottom:%?32?%}.s-m[data-v-12aa7922]{background-color:#f5f6f7;height:%?40?%;line-height:%?40?%;padding:0 %?4?% 0 %?20?%;-webkit-border-radius:%?100?%;border-radius:%?100?%;font-size:%?26?%}.s-t .s-n[data-v-12aa7922]{font-weight:700;font-size:%?32?%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.s-n-b[data-v-12aa7922]{width:%?6?%;height:%?36?%;background-color:#1985ff;margin-right:%?10?%}.s-t .s-n .b2font[data-v-12aa7922]{font-weight:400;margin-right:%?4?%}',""]),t.exports=e}}]);