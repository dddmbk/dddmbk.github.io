(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-normal"],{"0bcf":function(t,e,a){"use strict";a.r(e);var o=a("3875"),s=a("d0bf");for(var i in s)"default"!==i&&function(t){a.d(e,t,(function(){return s[t]}))}(i);a("82ef");var n,r=a("f0c5"),u=Object(r["a"])(s["default"],o["b"],o["c"],!1,null,"6205e592",null,!1,o["a"],n);e["default"]=u.exports},"32fe":function(t,e,a){var o=a("c82c");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var s=a("4f06").default;s("200ba53f",o,!0,{sourceMap:!1,shadowMode:!1})},3875:function(t,e,a){"use strict";var o;a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return o}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"shop-page page-content"},[t.loadingStatus?a("b2Loading",{attrs:{status:t.loadingStatus}}):[a("v-uni-view",{staticClass:"shop-item",class:[{jparent:"list"==t.listType},"item-in"]},[a("v-uni-view",{staticClass:"b2mg"},[a("b2product",{attrs:{list:t.list}})],1)],1),a("b2bottom",{attrs:{loadmore:t.loadmore}})]],2)},i=[]},5782:function(t,e,a){"use strict";a("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{loadingStatus:!0,list:{data:[],opt:{shop_type:"grid"},term:[],hidden:!0},listType:"",paged:1,type:"",terms:[],loadmore:"waiting",loadLocked:!1}},onShareAppMessage:function(t){return{title:"商品列表",path:"/pages/shop/normal"}},onLoad:function(t){this.loadingStatus&&this.getData()},onReachBottom:function(){this.getData()},onPullDownRefresh:function(){this.paged=1,this.getData()},computed:{symbol:function(){return this.$store.state.opt.symbol},opt:function(){return this.$store.state.opt}},methods:{getData:function(){var t=this;this.loadLocked||(this.paged>1&&(this.loadmore=!0),uni.request({method:"post",url:this.$store.state.restUrl+"getShopList",header:this.$store.state.headerToken,data:{paged:this.paged,count:8,terms:[],type:"normal"},success:function(e){403!=e.statusCode&&(1==t.paged?(t.list["data"]=e.data.list,t.list["term"]=e.data.term):e.data.list.length>0?t.list["data"]=t.list["data"].concat(e.data.list):(t.loadmore=!1,t.loadLocked=!0),t.paged++),uni.stopPullDownRefresh(),t.loadingStatus=!1}}))}}};e.default=o},"82ef":function(t,e,a){"use strict";var o=a("32fe"),s=a.n(o);s.a},c82c:function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,".cover-img[data-v-6205e592]{position:absolute;width:100%;height:100%;left:0;top:0}.shop-term[data-v-6205e592]{position:relative;height:%?200?%;margin-bottom:%?24?%}.thumb-cover[data-v-6205e592]{position:absolute;width:100%;height:100%;top:0;left:0}",""]),t.exports=e},d0bf:function(t,e,a){"use strict";a.r(e);var o=a("5782"),s=a.n(o);for(var i in o)"default"!==i&&function(t){a.d(e,t,(function(){return o[t]}))}(i);e["default"]=s.a}}]);