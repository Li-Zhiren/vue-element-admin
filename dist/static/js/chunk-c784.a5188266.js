(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c784"],{GKSF:function(t,n,s){"use strict";var i=s("dQyQ");s.n(i).a},TfDL:function(t,n,s){},V27w:function(t,n,s){"use strict";var i=s("TfDL");s.n(i).a},Yfch:function(t,n,s){"use strict";function i(t){return["admin","editor"].indexOf(t.trim())>=0}function e(t){return/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(t)}s.d(n,"a",function(){return i}),s.d(n,"b",function(){return e})},c11S:function(t,n,s){"use strict";var i=s("fN6i");s.n(i).a},dQyQ:function(t,n,s){},fN6i:function(t,n,s){},ntYl:function(t,n,s){"use strict";s.r(n);var i=s("Yfch"),e=s("ETGp"),a={name:"SocialSignin",methods:{wechatHandleClick:function(t){alert("ok")},tencentHandleClick:function(t){alert("ok")}}},o=(s("V27w"),s("ZrdR")),r=Object(o.a)(a,function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"social-signup-container"},[s("div",{staticClass:"sign-btn",on:{click:function(n){t.wechatHandleClick("wechat")}}},[s("span",{staticClass:"wx-svg-container"},[s("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),t._v(" 微信\n  ")]),t._v(" "),s("div",{staticClass:"sign-btn",on:{click:function(n){t.tencentHandleClick("tencent")}}},[s("span",{staticClass:"qq-svg-container"},[s("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),t._v(" QQ\n  ")])])},[],!1,null,"20f71181",null);r.options.__file="socialsignin.vue";var l=r.exports,c={name:"Login",components:{LangSelect:e.a,SocialSign:l},data:function(){return{loginForm:{username:"admin",password:"1111111"},loginRules:{username:[{required:!0,trigger:"blur",validator:function(t,n,s){Object(i.a)(n)?s():s(new Error("Please enter the correct user name"))}}],password:[{required:!0,trigger:"blur",validator:function(t,n,s){n.length<6?s(new Error("The password can not be less than 6 digits")):s()}}]},passwordType:"password",loading:!1,showDialog:!1,redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},created:function(){},destroyed:function(){},methods:{showPwd:function(){"password"===this.passwordType?this.passwordType="":this.passwordType="password"},handleLogin:function(){var t=this;this.$refs.loginForm.validate(function(n){if(!n)return console.log("error submit!!"),!1;t.loading=!0,t.$store.dispatch("LoginByUsername",t.loginForm).then(function(){t.loading=!1,t.$router.push({path:t.redirect||"/"})}).catch(function(){t.loading=!1})})},afterQRScan:function(){}}},u=(s("c11S"),s("GKSF"),Object(o.a)(c,function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"login-container"},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[t._v(t._s(t.$t("login.title")))]),t._v(" "),s("lang-select",{staticClass:"set-language"})],1),t._v(" "),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),t._v(" "),s("el-input",{attrs:{placeholder:t.$t("login.username"),name:"username",type:"text","auto-complete":"on"},model:{value:t.loginForm.username,callback:function(n){t.$set(t.loginForm,"username",n)},expression:"loginForm.username"}})],1),t._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),t._v(" "),s("el-input",{attrs:{type:t.passwordType,placeholder:t.$t("login.password"),name:"password","auto-complete":"on"},nativeOn:{keyup:function(n){return"button"in n||!t._k(n.keyCode,"enter",13,n.key,"Enter")?t.handleLogin(n):null}},model:{value:t.loginForm.password,callback:function(n){t.$set(t.loginForm,"password",n)},expression:"loginForm.password"}}),t._v(" "),s("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[s("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),t._v(" "),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(n){return n.preventDefault(),t.handleLogin(n)}}},[t._v(t._s(t.$t("login.logIn")))]),t._v(" "),s("div",{staticClass:"tips"},[s("span",[t._v(t._s(t.$t("login.username"))+" : admin")]),t._v(" "),s("span",[t._v(t._s(t.$t("login.password"))+" : "+t._s(t.$t("login.any")))])]),t._v(" "),s("div",{staticClass:"tips"},[s("span",{staticStyle:{"margin-right":"18px"}},[t._v(t._s(t.$t("login.username"))+" : editor")]),t._v(" "),s("span",[t._v(t._s(t.$t("login.password"))+" : "+t._s(t.$t("login.any")))])]),t._v(" "),s("el-button",{staticClass:"thirdparty-button",attrs:{type:"primary"},on:{click:function(n){t.showDialog=!0}}},[t._v(t._s(t.$t("login.thirdparty")))])],1),t._v(" "),s("el-dialog",{attrs:{title:t.$t("login.thirdparty"),visible:t.showDialog,"append-to-body":""},on:{"update:visible":function(n){t.showDialog=n}}},[t._v("\n    "+t._s(t.$t("login.thirdpartyTips"))+"\n    "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("social-sign")],1)],1)},[],!1,null,"c329987a",null));u.options.__file="index.vue";n.default=u.exports}}]);