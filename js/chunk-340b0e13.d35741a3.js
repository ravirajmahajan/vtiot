(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-340b0e13"],{"013d":function(t,e,a){"use strict";var n=a("53f0"),r=a.n(n);r.a},"0fd9":function(t,e,a){"use strict";a("99af"),a("4160"),a("caad"),a("13d5"),a("4ec9"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("159b"),a("ddb0");var n=a("ade3"),r=a("5530"),i=(a("4b85"),a("2b0e")),s=a("d9f7"),o=a("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function d(t,e){return c.reduce((function(a,n){return a[t+Object(o["t"])(n)]=e(),a}),{})}var u=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},f=d("align",(function(){return{type:String,default:null,validator:u}})),g=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},h=d("justify",(function(){return{type:String,default:null,validator:g}})),v=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},p=d("alignContent",(function(){return{type:String,default:null,validator:v}})),b={align:Object.keys(f),justify:Object.keys(h),alignContent:Object.keys(p)},m={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,a){var n=m[t];if(null!=a){if(e){var r=e.replace(t,"");n+="-".concat(r)}return n+="-".concat(a),n.toLowerCase()}}var C=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},f,{justify:{type:String,default:null,validator:g}},h,{alignContent:{type:String,default:null,validator:v}},p),render:function(t,e){var a=e.props,r=e.data,i=e.children,o="";for(var c in a)o+=String(a[c]);var l=C.get(o);return l||function(){var t,e;for(e in l=[],b)b[e].forEach((function(t){var n=a[t],r=y(e,t,n);r&&l.push(r)}));l.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(n["a"])(t,"align-".concat(a.align),a.align),Object(n["a"])(t,"justify-".concat(a.justify),a.justify),Object(n["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),C.set(o,l)}(),t(a.tag,Object(s["a"])(r,{staticClass:"row",class:l}),i)}})},"1f4f":function(t,e,a){"use strict";a("a9e3");var n=a("5530"),r=(a("8b37"),a("80d2")),i=a("7560"),s=a("58df");e["a"]=Object(s["a"])(i["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(n["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(r["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"20f6":function(t,e,a){},"3cac":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"upgrade",fluid:"",tag:"section"}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"8"}},[a("base-material-card",{attrs:{color:"primary"},scopedSlots:t._u([{key:"heading",fn:function(){return[a("div",{staticClass:"display-2 font-weight-light"},[t._v(" Vuetify Material Dashboard ")]),a("div",{staticClass:"subtitle-1 font-weight-light"},[t._v(" Are you looking for more components? Please check our Premium Version of Vuetify Material Dashboard ")])]},proxy:!0}])},[a("v-simple-table",[a("thead",[a("tr",[a("th"),a("th",{staticClass:"subheading font-weight-light text-center"},[t._v(" Free ")]),a("th",{staticClass:"subheading font-weight-light text-center"},[t._v(" PRO ")])])]),a("tbody",{staticClass:"text-center"},[a("tr",[a("th",{staticClass:"text-left font-weight-light subtitle-1"},[t._v(" Components ")]),a("td",[t._v("60")]),a("td",[t._v("200")])]),a("tr",[a("th",{staticClass:"text-left font-weight-light subtitle-1"},[t._v(" Plugins ")]),a("td",[t._v("2")]),a("td",[t._v("4")])]),a("tr",[a("th",{staticClass:"text-left font-weight-light subtitle-1"},[t._v(" Example Pages ")]),a("td",[t._v("3")]),a("td",[t._v("8")])]),a("tr",[a("th",{staticClass:"text-left font-weight-light subtitle-1"},[t._v(" Login, Register, Pricing, Lock Pages ")]),a("td",[a("v-icon",{attrs:{color:"error"}},[t._v(" mdi-close ")])],1),a("td",[a("v-icon",{attrs:{color:"success"}},[t._v(" mdi-check ")])],1)]),a("tr",[a("th",{staticClass:"text-left font-weight-light subtitle-1"},[t._v(" Premium Support ")]),a("td",[a("v-icon",{attrs:{color:"error"}},[t._v(" mdi-close ")])],1),a("td",[a("v-icon",{attrs:{color:"success"}},[t._v(" mdi-check ")])],1)]),a("tr",[a("th"),a("td",[t._v("Free")]),a("td",[t._v("Just for "),a("b",{staticClass:"subheading"},[t._v("$79")])])]),a("tr",[a("th"),a("td",[a("v-btn",{attrs:{color:"grey",disabled:""}},[t._v(" Current Version ")])],1),a("td",[a("v-btn",{attrs:{color:"success",target:"_blank",href:"https://www.creative-tim.com/product/vuetify-material-dashboard-pro?ref=vtymd-upgrade-page"}},[t._v(" Upgrade to Pro ")])],1)])])])],1)],1)],1)],1)},r=[],i={name:"DashboardDashboard"},s=i,o=(a("013d"),a("2877")),c=a("6544"),l=a.n(c),d=a("8336"),u=a("62ad"),f=a("a523"),g=a("132d"),h=a("0fd9"),v=a("1f4f"),p=Object(o["a"])(s,n,r,!1,null,null,null);e["default"]=p.exports;l()(p,{VBtn:d["a"],VCol:u["a"],VContainer:f["a"],VIcon:g["a"],VRow:h["a"],VSimpleTable:v["a"]})},"53f0":function(t,e,a){},"8b37":function(t,e,a){},a523:function(t,e,a){"use strict";a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("20f6"),a("4b85"),a("a15b"),a("498a");var n=a("2b0e");function r(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var n=a.props,r=a.data,i=a.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var s=r.attrs;if(s){r.attrs={};var o=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(r.staticClass+=" ".concat(o.join(" ")))}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),e(n.tag,r,i)}})}var i=a("d9f7");e["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,n=e.props,r=e.data,s=e.children,o=r.attrs;return o&&(r.attrs={},a=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),t(n.tag,Object(i["a"])(r,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(a||[])}),s)}})}}]);
//# sourceMappingURL=chunk-340b0e13.d35741a3.js.map