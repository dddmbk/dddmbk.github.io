(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-single-page"],{"09bf":function(t,a,e){"use strict";e.r(a);var i=e("f77c"),s=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=s.a},1025:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".post-style-1 .post-thumb[data-v-1c734f36]{display:none}uni-button[size=mini][data-v-1c734f36]{padding:%?8?% 1em;line-height:1.6}.content-title[data-v-1c734f36]{margin:%?32?% 0}.post-meta[data-v-1c734f36]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;padding:0 0 %?32?% 0}.post-meta-left[data-v-1c734f36]{display:-webkit-box;display:flex;font-size:%?26?%;-webkit-box-align:center;align-items:center}.post-meta-left .avatar[data-v-1c734f36]{-webkit-border-radius:%?6?%;border-radius:%?6?%;width:%?66?%;height:%?66?%;margin-right:%?16?%}.post-meta-meta[data-v-1c734f36]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;color:#999;font-size:%?24?%}.post-meta-meta-item[data-v-1c734f36]{margin-right:%?16?%}",""]),t.exports=a},"55cd":function(t,a,e){"use strict";e.r(a);var i=e("9216"),s=e("09bf");for(var n in s)"default"!==n&&function(t){e.d(a,t,(function(){return s[t]}))}(n);e("e913");var o,c=e("f0c5"),d=Object(c["a"])(s["default"],i["b"],i["c"],!1,null,"1c734f36",null,!1,i["a"],o);a["default"]=d.exports},"8bca":function(t,a,e){var i=e("1025");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=e("4f06").default;s("bd0880b4",i,!0,{sourceMap:!1,shadowMode:!1})},9216:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return s})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}));var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"post-single bgw"},[e("b2Loading",{attrs:{status:t.loadingStatus}}),t.loadingStatus?t._e():[e("v-uni-view",{class:"post-content "+t.data.type},[e("v-uni-view",{staticClass:"box"},[e("v-uni-view",[e("v-uni-view",{staticClass:"content-title"},[t._v(t._s(t.data.title))]),e("v-uni-view",{staticClass:"post-meta"},[e("v-uni-view",{staticClass:"post-meta-left"},[e("v-uni-image",{staticClass:"avatar",attrs:{src:t.data.meta.user_avatar,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"post-meta-user"},[e("v-uni-view",{domProps:{textContent:t._s(t.data.meta.user_name)}}),e("v-uni-view",{staticClass:"post-meta-meta"},[e("v-uni-view",{staticClass:"post-meta-meta-item"},[t._v(t._s(t.data.meta.like)+"个喜欢")]),e("v-uni-view",{staticClass:"post-meta-meta-item"},[t._v(t._s(t.data.meta.comment)+"个评论")]),e("v-uni-view",{staticClass:"post-meta-meta-item"},[t._v(t._s(t.data.meta.date_normal))])],1)],1)],1),e("v-uni-view",{staticClass:"post-meta-right"},[t._v(t._s(t.data.meta.views)+"浏览")])],1)],1),e("b2content",{attrs:{content:t.data.content,data:t.data.role}})],1)],1),e("commentlist",{ref:"comment",attrs:{postid:t.postid,count:t.commentCount,posttitle:t.data.title,desc:t.data.excerpt,img:t.data.thumb,url:t.data.link,type:"page"}})]],2)},n=[]},e913:function(t,a,e){"use strict";var i=e("8bca"),s=e.n(i);s.a},f77c:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{loadingStatus:!0,data:"",postid:0,commentCount:0}},computed:{pageLocked:function(){return this.$store.state.pageLocked}},onShareAppMessage:function(t){return{title:this.data.title,path:"/pages/single/page?id="+this.postid}},onPullDownRefresh:function(){this.loadPostData()},onReachBottom:function(){this.$refs.comment.getComment()},onLoad:function(t){t.id&&(this.postid=t.id,this.loadPostData())},methods:{loadPostData:function(){var t=this;uni.request({method:"post",url:this.$store.state.restUrl+"getPost",data:{postId:this.postid},success:function(a){403!=a.statusCode&&(t.data=a.data,uni.setNavigationBarTitle({title:t.data.title}),t.loadingStatus=!1,t.commentCount=t.data.meta.comment,uni.stopPullDownRefresh())}})}}};a.default=i}}]);