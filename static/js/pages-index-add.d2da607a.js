(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-add"],{2690:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".back[data-v-5c19fa2d]{margin-top:%?100?%;text-align:center}.add-page[data-v-5c19fa2d]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;height:100%}.add-button[data-v-5c19fa2d]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.po-item[data-v-5c19fa2d],.add-back[data-v-5c19fa2d]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.po-item .b2font[data-v-5c19fa2d]{display:block;width:%?70?%;height:%?70?%;line-height:%?70?%;text-align:center}.add-footer[data-v-5c19fa2d]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;-webkit-box-pack:end;justify-content:flex-end;-webkit-box-align:center;align-items:center;height:100%;margin-bottom:%?100?%}.add-back[data-v-5c19fa2d]{margin-top:%?120?%}.po-item .b2font[data-v-5c19fa2d]{color:#fff;-webkit-border-radius:100%;border-radius:100%;padding:%?8?%;margin-bottom:%?10?%}.po-item + .po-item[data-v-5c19fa2d]{margin-left:%?64?%}.po-item.post .b2font[data-v-5c19fa2d]{background-color:rgb(53 189 199)}.po-item.newsflashes .b2font[data-v-5c19fa2d]{background-color:rgb(252 166 30)}.po-item.newsflashes .b2font[data-v-5c19fa2d]{background-color:rgb(252 166 30)}.po-item.circle .b2font[data-v-5c19fa2d]{background-color:rgb(230 90 79)}.po-item.topic .b2font[data-v-5c19fa2d]{background-color:rgb(161 193 92)}",""]),t.exports=e},"635f":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"add-page"},[a("v-uni-view",{staticClass:"back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goback.apply(void 0,arguments)}}},[a("b2font",{attrs:{type:"b2close-fill",size:"60"}})],1),a("v-uni-view",{staticClass:"add-footer"},[a("v-uni-view",{staticClass:"add-button fs14"},[a("v-uni-view",{staticClass:"po-item post"},[a("b2font",{attrs:{type:"b2quill-pen-line",size:"50"}}),a("v-uni-text",[t._v("撰写文章")])],1),a("v-uni-view",{staticClass:"po-item newsflashes"},[a("b2font",{attrs:{type:"b2flashlight-line",size:"50"}}),a("v-uni-text",[t._v("发布"+t._s(t.opt.mNames.newsflashes_name))])],1),a("v-uni-view",{staticClass:"po-item circle"},[a("b2font",{attrs:{type:"b2donut-chart-fill",size:"50"}}),a("v-uni-text",[t._v("创建"+t._s(t.opt.mNames.circle_name))])],1),a("v-uni-view",{staticClass:"po-item topic"},[a("b2font",{attrs:{type:"b2chat-smile-2-line",size:"50"}}),a("v-uni-text",[t._v("发布话题")])],1)],1),a("v-uni-view",{staticClass:"add-back fs14"},[a("b2font",{attrs:{type:"b2clipboard-line",size:"50"}}),a("v-uni-text",[t._v("提交工单")])],1)],1)],1)},o=[]},7959:function(t,e,a){var i=a("2690");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("6eb0d0f8",i,!0,{sourceMap:!1,shadowMode:!1})},"90bb":function(t,e,a){"use strict";a.r(e);var i=a("dbdc"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},9248:function(t,e,a){"use strict";var i=a("7959"),n=a.n(i);n.a},dbdc:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},computed:{opt:function(){return this.$store.state.opt}},onShareAppMessage:function(t){return{title:this.opt.name,path:"/pages/index/add"}},methods:{}};e.default=i},e1e8:function(t,e,a){"use strict";a.r(e);var i=a("635f"),n=a("90bb");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("9248");var c,d=a("f0c5"),r=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"5c19fa2d",null,!1,i["a"],c);e["default"]=r.exports}}]);