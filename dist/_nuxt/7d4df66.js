(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{151:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return m})),n.d(e,"a",(function(){return d}));n(27);var r=n(3),o=new(n(153).a)({url:"https://edgardomedina.ghost.io",key:"59d20873593a3e57b1ede9a977",version:"v3"});function c(){return l.apply(this,arguments)}function l(){return(l=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.posts.browse({limit:"all",include:"tags,authors"}).catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return f.apply(this,arguments)}function f(){return(f=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.posts.read({slug:e}).catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.pages.read({slug:e}).catch((function(t){console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},155:function(t,e,n){var content=n(162);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("0ace817b",content,!0,{sourceMap:!1})},161:function(t,e,n){"use strict";var r=n(155);n.n(r).a},162:function(t,e,n){(e=n(59)(!1)).push([t.i,"main span{color:#fff;display:none!important}main h2{margin-top:1em!important}.hero{background-color:#80f;color:#fff;text-align:center;padding-top:2em}.container ul{list-style-type:none;padding:0}main li{background:#fff;border-radius:1em;padding:.8em;margin:1em 0;box-shadow:15px 21px 40px 0 rgba(0,0,0,.04)}main img{width:100%;border-radius:.5em}main .content{padding:.5em}main a{font-size:1.5em;text-decoration:none;color:#000;font-weight:700;display:block;margin:-.1em 0 .2em}main h2{margin-top:3em;font-size:.8em}main h2,main span{text-transform:uppercase}main span{color:#80f}@media only screen and (min-width:768px){main li{display:grid;grid-template-columns:180px auto;grid-column-gap:1em}}",""]),t.exports=e},166:function(t,e,n){"use strict";n.r(e);n(27);var r=n(3),o=n(151),c={asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.b)();case 2:return e=t.sent,t.abrupt("return",{posts:e});case 4:case"end":return t.stop()}}),t)})))()}},l=(n(161),n(19)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"container"},[n("main",[n("h2",[t._v("Latest Articles")]),t._v(" "),n("ul",t._l(t.posts,(function(e,r){return n("li",{key:r},[n("img",{attrs:{src:e.feature_image}}),t._v(" "),n("div",{staticClass:"content"},[n("span",[t._v(t._s(e.authors[0].name))]),t._v(" "),n("nuxt-link",{attrs:{to:{path:e.slug}}},[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.excerpt))])],1)])})),0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero"},[e("div",{staticClass:"container"},[e("img",{staticClass:"logo",attrs:{src:"/assets/Logo.png"}}),this._v(" "),e("br"),this._v(" "),e("br")])])}],!1,null,null,null);e.default=component.exports}}]);