webpackJsonp([4],{"/5NY":function(e,n,A){"use strict";n.a={data:function(){return{l:!1,shows:0,logindb:!1,welcome:!0,footer:!0,unlogin:!1,show:!0,msg:"请输入"}},methods:{back:function(){this.$router.back()},inputL:function(){var e=this;this.shows=1,setTimeout(function(){e.shows=!1},1500),/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$|^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(this.$refs.loginUserName.value)||(this.msg="请输入正确的手机号或者邮箱")},inputN:function(){var e=this;this.shows=1,setTimeout(function(){e.shows=!1},1500),(this.$refs.loginUser.value.length<4||this.$refs.loginUser.value.length>10)&&(this.msg="请输入正确的昵称")},loginOn:function(){var e=this;console.log(this.$refs.loginUser.value.length);var n=/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$|^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,A=/^.*(?=.{6,})(?=.*\d)(?=.*[A-Za-z0-9]).*$/;""==this.$refs.loginUserName.value&&""==this.$refs.loginPassWord.value&&""==this.$refs.loginUser.value?this.msg="请输入用户名、密码、昵称":""==this.$refs.loginUserName.value?this.msg="请输入账号":""==this.$refs.loginPassWord.value?this.msg="请输入密码":""==this.$refs.loginUser.value?this.msg="请输入您的昵称":n.test(this.$refs.loginUserName.value)?A.test(this.$refs.loginPassWord.value)?this.$refs.loginUser.value.length<4||this.$refs.loginUser.value.length>10?this.msg="请输入正确的昵称":(this.l=!0,this.msg="注册成功",setTimeout(function(){e.$router.push({path:"/login"})},2e3),this.JSONP("http://192.168.43.134:8888/register?user="+this.$refs.loginUserName.value+"&pwd="+this.$refs.loginPassWord.value+"&userId="+this.$refs.loginUser.value,{name:"callback"},function(e,n){n=JSON.parse(n),0==n.status?console.log("注册失败"):console.log("注册成功")})):this.msg="请输入正确的密码":this.msg="请输入正确的手机号或者邮箱"},seePassword:function(){(this.$refs.seePassword.src="password"==this.$refs.loginPassWord.type)?(this.$refs.seePassword.src="../../../static/seepass.png",this.show=!1):(this.$refs.seePassword.src="../../../static/nopass.png",this.show=!0)}}}},"1cHr":function(e,n,A){"use strict";function t(e){A("42HN")}Object.defineProperty(n,"__esModule",{value:!0});var a=A("/5NY"),i=A("lX7e"),o=A("/Xao"),r=t,s=o(a.a,i.a,!1,r,"data-v-3ceeecc2",null);n.default=s.exports},"2S7P":function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB9klEQVRYR+1V7XHaQBC9J/gfUkFIBXEKQKerILgDUkGcCowrCK7AlGBXcDrRgDuI04HdwL7MMjpGEhIIGI//SL8Ysbfv496uYD74wQfjm4HA4MDgwNkObDabjCTjGKdpGs4Z6ZMIFEWxEJEfAOZtYCRzAGsReXLOvfYh1ItAURRzEfkDYNpoGlXb6nuSrwCW1tr7YyQOEvDeTwA8tCi+E5FVVKl1SZLcGGNuG0SeSV475166iHQS8N5fleBX1cMi8t0599zWUHMhIr7pBknXdaaVQAnuAUwaQHfW2mWp+JbkgqQS2ikMISybTmgPAD/TNF03ie8R0KCRfGhTKCJfFSyEsDLG/NIaEflcDZz3fpokyd+2820kagQOgWtDa+22Ps/zFwBf9DfJNcnfxphJdCKEsBvPPcXAdZqmj/H9xQRiI5L/sizbTskRArWruPgKKgpjPs6/gtisXDgrAJ8OhHCpISwDtrbW6hiq+r0QknzTMe0VwghYToJuthqJJEncbDbLTxjDN5LZSWNYITEF8AjgWwNwKSL3jUWkU6Hqq08QkfmhtdxrFautJG+abpDcLiQAtWWlgSwt36X95E3YPKDLZzQa6cdo0eJILH9Sx9ru+mIC1QZKZjwe11R35aILuHUPHCt+j/97ZeA9gAcHBgcGB6ID/wETwRswQJ2M/gAAAABJRU5ErkJggg=="},"331u":function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACvklEQVRYR+1WzXHaQBTeJySGW0gFsSsIrsB2BSEVJFQAHNAOp+ATs8sBXEFwBUkHoYPgCgIVBF/50fN8iuRZFsFKwAyX7EUj6e37vv32/ZG48KIL4wsnAa11TQhxS0TVKIqqnuctQJqZJ0EQPLfb7fj92JVJYDgcVtfrdZOZW0KIqsP5mIieOp3O5BgSOwSUUnUi+p4D2MYbB0HQLqrIFgGt9VchBMCPXdMgCO6LkHgjcAbwlHQhEjGBfr9/VSqVfpuyM/NzFEX1SqWyWC6XEyL6aMnyGIZhazAY3DHzL/MfMz9JKaGmc8UEtNYjIUTTcvIgpezhm1KqR0TfLG83YRhOk/1sI202m+tutztzMYgJKKUWRPTOMl4gC5B2zDzOCMopEYFgjZljotYB2lJKHOzgIqTcarX66zJ0/J8z88jzvCkzQ40a6oYQAu/zVKksH5R1h3nJMPOLEKKXAOOK7vbshcIj3/cf7QyhJAD/5AVN7QDueV49iqImEdVz7sd1NqSUP1P7NAh3guiQwxScmYeQOye4adYIwxBx9a8XKKVQTr/kdcTMD0QEuW/z7rHtiOge5TtVAKdAHXAu4/R27sdRbx+GmePvWmvI/sm4wpmU8vqtEiqlWkQESQ8uFJlYOksxA2irpuwjkIDcbPWCPFeRyI8q98FF1vU/9mUbuZRg5s9E9MPlPM//TAKuwoRNQgi0bLs35MG0bRo7CqRdMSkycSklIgRplZnxxLerIlmzjxn6RdYVID9n5XJ5tK+vn1I9jSyIO+YOAVxBnoHCTquC+s+DIKgBxzmU7nMMonvmBFcav6CIpQ3qaAJASQIWrXhrljjAYI4ANrvjSQRSIMREFEWoDcgOe66AGYBRNxZhGL43CZ6FgOkQZMx33/enuOtk2h5hyNnphgUD6CRztH9zVDu7AkXZ/SdwcQVeARvOb+eCuX+1AAAAAElFTkSuQmCC"},"42HN":function(e,n,A){var t=A("rJpa");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);A("8bSs")("5cf87cbb",t,!0)},"7DsX":function(e,n,A){"use strict";n.a={data:function(){return{l:!1,shows:!1,logindb:!1,welcome:!0,footer:!0,unlogin:!1,msg:"请输入正确的用户名密码"}},methods:{back:function(){history.back()},setCookie:function(e,n,A){var t=new Date;t.setDate(t.getDate()+A),document.cookie=e+"="+escape(n)+(null==A?"":";expires="+t.toGMTString())},getCookie:function(e){if(document.cookie.length>0){var n=document.cookie.indexOf(e+"=");if(-1!=n){n=n+e.length+1;var A=document.cookie.indexOf(";",n);return-1==A&&(A=document.cookie.length),unescape(document.cookie.substring(n,A))}}return""},loginOn:function(e){var n=this,A=/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$|^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,t=/^.*(?=.{6,})(?=.*\d)(?=.*[A-Za-z0-9]).*$/;""==this.$refs.loginUserName.value&&""==this.$refs.loginPassWord.value?this.msg="请输入用户名和密码":""==this.$refs.loginUserName.value?this.msg="请输入账号":""==this.$refs.loginPassWord.value?this.msg="请输入密码":A.test(this.$refs.loginUserName.value)?t.test(this.$refs.loginPassWord.value)?this.JSONP("http://192.168.43.134:8888/login?user="+this.$refs.loginUserName.value+"&pwd="+this.$refs.loginPassWord.value,{name:"callback"},function(e,A){A=JSON.parse(A),1==A.status&&(n.setCookie("user",n.$refs.loginUserName.value,30),n.setCookie("pwd",n.$refs.loginPassWord.value,30),n.setCookie("userId",A.userId,30),n.msg="登录成功",n.l=!0,setTimeout(function(){n.$router.push({path:"/Mine",query:{userId:A.userId}})},2e3))}):this.msg="请输入正确的密码":this.msg="请输入正确的用户名",this.shows=!0,setTimeout(function(){n.shows=!1},1500)},register:function(e){this.$router.push({path:"/register"})},anim:function(){this.welcome=!1,this.logindb=!0},show:function(){this.welcome=!0,this.logindb=!1},ulogin:function(){var e=this;this.unlogin=!0,setTimeout(function(){e.unlogin=!1},1500)},losepassword:function(e){this.$router.push({path:"/losepassword"})}}}},H0lm:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACNklEQVRoQ+2Z3U3DMBCA75oBygawAdw7Ep0AiQ3gGSGVCSgTlCdeYYQiFigS77YnoQukhywSKSpx/HdOVal9aVU5yff5XPuuh3DgLzxwfjgK7DuCzggopc6qqjqt69oQ0WZfoEqpi6qqpi6OXgGl1BwRlw30hpkfieh9bAljzJKZ5x2OOyJadTl6BbTWPwBw0h3IzPbi0SS01m8AcLvD8EVEsxAB7pvtsST64C0PM4cJKKU0Ip7vQ8IF3wg8E9HCGwH7wwGANSJOx5TwwBsAmO1uKEO70KgSKfB2cgcPsrEikQrvFbADSkvkwAcJlJTIhQ8WKCEhAR8lICkhBR8tICEhCZ8kkCMhDZ8skCJRAj5LIEaiFHy2QIgEAHwDwKUjJelND2LSdpGS0nfYlYIXiUALFyPBzNkz3z5XJAIxEpLwohFoJYwxH8x87Vg29ut7InqNWedDY0Uj4NltAPHvcZKVnZhAKHw7m1ISIgIe+BoRK8eSyv6jIFvAd0hNJpOH7Xb7Wao8zRLwwbc1rG+LzVlOyQKh8KFbbKpEkkAsfEmJaIFU+FISUQK58CUkggWk4KUlggSk4SUlvAKl4KUkBgVKw0tIOAXGgs+VcHVoFoj4VLKS6rt3wIl9k9yhadJgsUrKleMPSQQ3OLTW/zo00pXUUJHikggWUErZ5sZVJ3cvPvO7Qn0SzBzcobENPtvQa99X+2i12lYvALw0HGv7ObhDI1Wzlr6P9yArDZB7/6NA7gzmXv8Lv4xsT9oVZyYAAAAASUVORK5CYII="},KyjS:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAgCAYAAACRpmGNAAAEOklEQVRYR81Xy3EbORDtpmbmajkC2xGYjsBUBJIjsBSBzQOB0snSSQXoIG4EpiIwFcGKESwVgakM6KtEol1vCuBiMB+SqvLWokoHDQfoh+5+r98w/Qfr+vp6ICKfiehtHI6Z70XkTik1b4LBfxqbtbZPRP9siXNPRMMU5P8FXImdmS9Go9FluMgfB4dA1tpTEUFJ571eb4lnInJCRPh7k2R1opQ6K8G+tKxXV1dvDw4OyoOVUrOXnuOBj5n5VThDRD5prad7gbu5uTlcrVZfnHOnzLxpbhFZOOeOzs/PF10gw4XyPH8YDodlBn1m+yJyHwFc5nn+bidwAZSIXHQEB+tQpsZlrR0T0ZfoxwoJGohzthUcNonIjzhTbQCUUq3nBXAi8isuIRF9CCw1xkyYGZKDddcJDv1ARDdEdLhLT3WBi/ejEk9PTyjje4AIGTfGnDDzD//uvOumAPZ9F1CefQ9aa2ga2Nln5mMRGYSLoS+Z+TJkyfffT0+oEkda2kZwPmM7A/MXWDLzOCVLcrnler3+EIhjrZUYnAdYPsOqgXshsF0TDH271FqXxErB+TH3tz9sVgGX/LhzwH1eFJFbrTVaBuDGIrIMYI0xX5kZPY5L3G7A+R7ADNyp+fcBlLx7ppSaNO1P2PqvlFhrkU40cNt69EIJli1Wq9UiFl1k3Tl3yMxwIAPPxNpZeZ6/jgU4fsETYopn6/V6EFjSxcyZiIwxTvbJlm8R9NbHZB/s0STP89s2kBVCGGN+piILsSSi0zZQ1toy6La52jQ7A7tF5Kzr0pwIX7lPRB6ccyfprDTGfGbmr0RU6llYIjKNNSzNcJcChCHfVBWAi0cGgP1yzvVjYFD05+dn9GQFVHIgBvlRm6u11mKWpiVGvIXW+l0buLSkNTYZYzBbW4d6lMHWQE0V2vQW89FoNAL4yuIghOFpOh+32Ow7mMiYmdwSqEtD2/agrBg7wejNlFIVOTHGXDDzNw8ecgKNwoB+j4ukViieAHEatgj8xpnEe3A4JOLYP6yBi3ql4tf8PjjhlBxDrTW8W2U1+Lnw+6NSqvJVtil3PDK8NFRGWgCXpj7JaAyklgVPKDiQ2vRpyzQOZO+tYGdCaSuEiEziJiO+D8HeNFgt8wjSQajHPM/7bWJcZinJQsXWJOCh7pCM2piDNhZFMUgDWWthvcpBHy/viAdt0lNmLmyI9c4bw0+JMUQfhd7cxPFBMI4uYmD+Ut+bJGgXYBVwPoOxIJfmMcuyv0JQOJderwcCBBLMi6K4bwB1jL0tPfbAzKddGdsQIk03xBKDOf5MIyKMp2mWZbOm/vBfZx+dc3AjKGFT42NWw0B0fcFVRTgFF/738xAHpV/keCVW8y6bhXehjeOiKCbbXEiKZeunoS8lRBc+rTIN2i5GRLBZ8H3TXcrXds5WcE0b/ddVrXRZls33zU7HBek33yWMOwaDvSIAAAAASUVORK5CYII="},Luci:function(e,n,A){"use strict";function t(e){A("wHcP")}Object.defineProperty(n,"__esModule",{value:!0});var a=A("7DsX"),i=A("PlCV"),o=A("/Xao"),r=t,s=o(a.a,i.a,!1,r,"data-v-7fe56ee2",null);n.default=s.exports},PlCV:function(e,n,A){"use strict";var t=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:" all",on:{click:function(n){e.show()}}},[t("nav",[t("img",{attrs:{src:A("H0lm"),alt:""},on:{click:e.back}}),e._v(" "),e.logindb?t("span",[e._v("登录豆瓣")]):e._e()]),e._v(" "),t("transition",{attrs:{name:"bounce"}},[e.shows?t("p",{ref:"pleasePut",staticClass:"pleasePut",class:{greenshow:e.l}},[e._v(e._s(e.msg))]):e._e()]),e._v(" "),t("main",[t("p",{directives:[{name:"show",rawName:"v-show",value:e.welcome,expression:"welcome"}],staticClass:"welcomedb"},[e._v("欢迎来到豆瓣")]),e._v(" "),t("input",{ref:"loginUserName",attrs:{id:"loginUserName",type:"text",name:"user",value:"",placeholder:"手机 / 邮箱"},on:{click:function(n){n.stopPropagation(),e.anim()}}}),e._v(" "),t("input",{ref:"loginPassWord",attrs:{id:"loginPassWord",type:"password",name:"pwd",value:"",placeholder:"密码"},on:{click:function(n){n.stopPropagation(),e.anim()}}}),e._v(" "),t("button",{staticClass:"loginin",attrs:{type:"button",name:"button"},on:{click:function(n){n.stopPropagation(),e.loginOn()}}},[e._v("登录")]),e._v(" "),t("div",{staticClass:"enroll"},[t("span",{on:{click:function(n){e.register("register")}}},[e._v("注册豆瓣")]),e._v(" "),t("span",[e._v("|")]),e._v(" "),t("span",{on:{click:function(n){e.losepassword("losepassword")}}},[e._v("忘记密码")])])]),e._v(" "),t("footer",[t("img",{attrs:{src:A("KyjS"),alt:""}}),e._v(" "),t("span",{on:{click:function(n){n.stopPropagation(),e.ulogin(n)}}},[e._v("微博登录")]),e._v(" "),t("span",[e._v("|")]),e._v(" "),t("img",{attrs:{src:A("331u"),alt:""}}),e._v(" "),t("span",{on:{click:function(n){n.stopPropagation(),e.ulogin(n)}}},[e._v("微信登录")])]),e._v(" "),e.unlogin?t("p",{staticClass:"unlogin"},[e._v("该登录接口暂未开放，敬请期待！")]):e._e()],1)},a=[],i={render:t,staticRenderFns:a};n.a=i},VYUW:function(e,n,A){"use strict";var t=function(){var e=this,n=e.$createElement,A=e._self._c||n;return A("div",{staticClass:" all"},[A("nav",[A("span",{staticClass:"img",on:{click:e.back}},[e._v("取消")]),e._v(" "),A("span",[e._v("豆瓣账号")])]),e._v(" "),A("main",[A("p",{staticClass:"welcomedb"},[e._v("欢迎加入豆瓣")]),e._v(" "),A("input",{ref:"loginUserName",attrs:{id:"loginUserName",type:"text",name:"user",value:"",placeholder:"手机 / 邮箱"}}),e._v(" "),A("div",{staticClass:"mima"},[e.show?A("input",{ref:"loginPassWord",staticClass:"loginPassWord",attrs:{type:"password",name:"pwd",value:"",placeholder:"验证码"}}):e._e(),e._v(" "),e._m(0,!1,!1)]),e._v(" "),A("button",{staticClass:"loginin",attrs:{type:"button",name:"button"},on:{click:function(n){e.ulogin()}}},[e._v("确定")])]),e._v(" "),e.unlogin?A("p",{staticClass:"unlogin"},[e._v("该登录接口暂未开放，敬请期待！")]):e._e()])},a=[function(){var e=this,n=e.$createElement,A=e._self._c||n;return A("p",{staticClass:"img"},[A("span",[e._v("|")]),e._v("获取验证码")])}],i={render:t,staticRenderFns:a};n.a=i},baRL:function(e,n,A){n=e.exports=A("BkJT")(!0),n.push([e.i,".all[data-v-1e7fefba]{position:relative}nav[data-v-1e7fefba]{width:100%;height:1rem;text-align:center;overflow:hidden;font-weight:400;font-size:.26rem;line-height:1rem;border-bottom:1px solid #c2c2c2}nav .img[data-v-1e7fefba]{margin-left:.2rem;float:left;vertical-align:bottom}nav span[data-v-1e7fefba]{vertical-align:bottom;display:inline-block}main[data-v-1e7fefba]{width:90%;margin-left:5%;text-align:center;height:8rem}main .welcomedb[data-v-1e7fefba]{font-size:.7rem;color:#3fbc53;height:.7rem;text-align:center;margin:.6rem 0;-webkit-transition:display 3s;transition:display 3s}main input[data-v-1e7fefba]{border:.01rem solid #c2c2c2;display:block;border-radius:.03rem;width:80%;margin-left:10%;height:.6rem;padding-left:.2rem;font-size:.22rem}.loginPassWord[data-v-1e7fefba]{border:0;margin-left:0;padding-left:0}.mima .img[data-v-1e7fefba]{position:absolute;right:0;top:25%;color:#3cbb55}.mima .img span[data-v-1e7fefba]{margin-right:.2rem}.mima[data-v-1e7fefba]{width:80%;margin-left:10%;border-left:.01rem solid #c2c2c2;border-right:.01rem solid #c2c2c2;border-bottom:.01rem solid #c2c2c2;padding-left:.2rem;position:relative;margin-bottom:1rem}main input[data-v-1e7fefba]:nth-of-type(2){margin-bottom:.3rem}.loginin[data-v-1e7fefba]{width:83%;margin-left:10%;height:.6rem;background-color:#3fbc53;border-radius:.13rem;color:#fff;font-weight:600;font-size:.26rem;display:block}.unlogin[data-v-1e7fefba]{position:absolute;left:50%;margin-left:-2.5rem;top:50%;margin-top:-3rem;width:3rem;height:2rem;padding:1rem;background-color:#f9f9f9;border-radius:.4rem;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:distribute;justify-content:space-around;font-size:.26rem}","",{version:3,sources:["/Users/anyanan/Documents/anyaqiong的副本/doubanmovie/doubanmovie/src/pages/losePassword.vue"],names:[],mappings:"AACA,sBACE,iBAAmB,CACpB,AACD,qBACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,gBAAiB,AACjB,gBAAoB,AACpB,iBAAmB,AACnB,iBAAkB,AAClB,+BAAiC,CAClC,AACD,0BACE,kBAAoB,AACpB,WAAY,AACZ,qBAAuB,CACxB,AACD,0BAEE,sBAAuB,AACvB,oBAAsB,CACvB,AACD,sBACE,UAAW,AACX,eAAgB,AAChB,kBAAmB,AACnB,WAAa,CACd,AACD,iCACE,gBAAkB,AAClB,cAAe,AACf,aAAe,AACf,kBAAmB,AACnB,eAAiB,AACjB,8BAA+B,AAC/B,qBAAuB,CACxB,AACD,4BACE,4BAA8B,AAC9B,cAAe,AACf,qBAAuB,AACvB,UAAW,AACX,gBAAiB,AACjB,aAAe,AACf,mBAAqB,AACrB,gBAAmB,CAEpB,AACD,gCACE,SAAU,AACV,cAAe,AACf,cAAgB,CACjB,AACD,4BACE,kBAAmB,AACnB,QAAS,AACT,QAAS,AACT,aAAe,CAChB,AACD,iCACE,kBAAqB,CACtB,AACD,uBACE,UAAW,AACX,gBAAiB,AACjB,iCAAmC,AACnC,kCAAoC,AACpC,mCAAqC,AACrC,mBAAqB,AACrB,kBAAmB,AACnB,kBAAoB,CACrB,AACD,2CACE,mBAAsB,CACvB,AACD,0BACE,UAAW,AACX,gBAAiB,AACjB,aAAe,AACf,yBAA0B,AAC1B,qBAAuB,AACvB,WAAa,AACb,gBAAiB,AACjB,iBAAmB,AACnB,aAAe,CAChB,AACD,0BACE,kBAAmB,AACnB,SAAU,AACV,oBAAqB,AACrB,QAAS,AACT,iBAAkB,AAClB,WAAY,AACZ,YAAa,AACb,aAAc,AACd,yBAA0B,AAC1B,oBAAsB,AACtB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AAChB,eAAgB,AACpB,yBAA0B,AACtB,6BAA8B,AAClC,gBAAmB,CACpB",file:"losePassword.vue",sourcesContent:["\n.all[data-v-1e7fefba] {\n  position: relative;\n}\nnav[data-v-1e7fefba] {\n  width: 100%;\n  height: 1rem;\n  text-align: center;\n  overflow: hidden;\n  font-weight: normal;\n  font-size: 0.26rem;\n  line-height: 1rem;\n  border-bottom: 1px solid #c2c2c2;\n}\nnav .img[data-v-1e7fefba] {\n  margin-left: 0.2rem;\n  float: left;\n  vertical-align: bottom;\n}\nnav span[data-v-1e7fefba] {\n  /*margin-top: 3%;*/\n  vertical-align: bottom;\n  display: inline-block;\n}\nmain[data-v-1e7fefba] {\n  width: 90%;\n  margin-left: 5%;\n  text-align: center;\n  height: 8rem;\n}\nmain .welcomedb[data-v-1e7fefba] {\n  font-size: 0.7rem;\n  color: #3fbc53;\n  height: 0.7rem;\n  text-align: center;\n  margin: 0.6rem 0;\n  -webkit-transition: display 3s;\n  transition: display 3s;\n}\nmain input[data-v-1e7fefba] {\n  border: 0.01rem solid #c2c2c2;\n  display: block;\n  border-radius: 0.03rem;\n  width: 80%;\n  margin-left: 10%;\n  height: 0.6rem;\n  padding-left: 0.2rem;\n  font-size: 0.22rem;\n  /*color: #C8C8CE;*/\n}\n.loginPassWord[data-v-1e7fefba] {\n  border: 0;\n  margin-left: 0;\n  padding-left: 0;\n}\n.mima .img[data-v-1e7fefba] {\n  position: absolute;\n  right: 0;\n  top: 25%;\n  color: #3cbb55;\n}\n.mima .img span[data-v-1e7fefba] {\n  margin-right: 0.2rem;\n}\n.mima[data-v-1e7fefba] {\n  width: 80%;\n  margin-left: 10%;\n  border-left: 0.01rem solid #c2c2c2;\n  border-right: 0.01rem solid #c2c2c2;\n  border-bottom: 0.01rem solid #c2c2c2;\n  padding-left: 0.2rem;\n  position: relative;\n  margin-bottom: 1rem;\n}\nmain input[data-v-1e7fefba]:nth-of-type(2) {\n  margin-bottom: 0.3rem;\n}\n.loginin[data-v-1e7fefba] {\n  width: 83%;\n  margin-left: 10%;\n  height: 0.6rem;\n  background-color: #3fbc53;\n  border-radius: 0.13rem;\n  color: white;\n  font-weight: 600;\n  font-size: 0.26rem;\n  display: block;\n}\n.unlogin[data-v-1e7fefba] {\n  position: absolute;\n  left: 50%;\n  margin-left: -2.5rem;\n  top: 50%;\n  margin-top: -3rem;\n  width: 3rem;\n  height: 2rem;\n  padding: 1rem;\n  background-color: #f9f9f9;\n  border-radius: 0.4rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  font-size: 0.26rem;\n}\n"],sourceRoot:""}])},bait:function(e,n,A){"use strict";n.a={data:function(){return{logindb:!1,welcome:!0,footer:!0,unlogin:!1,show:!0}},methods:{back:function(){history.back()},ulogin:function(){var e=this;this.unlogin=!0,setTimeout(function(){e.unlogin=!1},1500)}}}},dosD:function(e,n,A){"use strict";function t(e){A("tYh3")}Object.defineProperty(n,"__esModule",{value:!0});var a=A("bait"),i=A("VYUW"),o=A("/Xao"),r=t,s=o(a.a,i.a,!1,r,"data-v-1e7fefba",null);n.default=s.exports},lX7e:function(e,n,A){"use strict";var t=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:" all"},[t("nav",[t("span",{staticClass:"img",on:{click:e.back}},[e._v("取消")]),e._v(" "),t("span",[e._v("注册豆瓣")])]),e._v(" "),t("transition",{attrs:{name:"bounce"}},[e.shows?t("p",{ref:"pleasePut",staticClass:"pleasePut",class:{greenshow:e.l}},[e._v(e._s(e.msg))]):e._e()]),e._v(" "),t("main",[t("p",{staticClass:"welcomedb"},[e._v("欢迎加入豆瓣")]),e._v(" "),t("input",{ref:"loginUserName",attrs:{id:"loginUserName",type:"text",name:"user",value:"",placeholder:"手机 / 邮箱"},on:{change:function(n){e.inputL()}}}),e._v(" "),t("div",{staticClass:"mima"},[e.show?t("input",{ref:"loginPassWord",staticClass:"loginPassWord",attrs:{type:"password",name:"pwd",value:"",placeholder:"密码(最少6位)"}}):t("input",{ref:"loginPassWord",staticClass:"loginPassWord",attrs:{type:"text",name:"pwd",value:"",placeholder:"密码(最少6位)"}}),e._v(" "),t("img",{ref:"seePassword",attrs:{src:A("2S7P"),alt:""},on:{click:function(n){e.seePassword()}}})]),e._v(" "),t("input",{ref:"loginUser",attrs:{id:"UserName",type:"text",name:"user",value:"",placeholder:"昵称(4-10个字)"},on:{change:function(n){e.inputN()}}}),e._v(" "),t("button",{staticClass:"loginin",attrs:{type:"button",name:"button"},on:{click:function(n){e.loginOn()}}},[e._v("确定")]),t("br"),e._v(" "),e._m(0,!1,!1)])],1)},a=[function(){var e=this,n=e.$createElement,A=e._self._c||n;return A("p",[e._v("如果点击『确定』,代表你已经阅读并 "),A("a",{attrs:{href:"#"}},[e._v("同意用户使用协议")])])}],i={render:t,staticRenderFns:a};n.a=i},rJpa:function(e,n,A){n=e.exports=A("BkJT")(!0),n.push([e.i,".all[data-v-3ceeecc2]{position:relative}nav[data-v-3ceeecc2]{width:100%;height:1rem;text-align:center;overflow:hidden;font-weight:400;font-size:.26rem;line-height:1rem;border-bottom:1px solid #c2c2c2}.pleasePut[data-v-3ceeecc2]{width:40%;margin-left:30%;height:.5rem;text-align:center;line-height:.5rem;background-color:#f66028;color:#fff;border-radius:.4rem;position:absolute;left:0;top:24%}.bounce-enter-active[data-v-3ceeecc2]{-webkit-animation:bounce-in-data-v-3ceeecc2 .5s;animation:bounce-in-data-v-3ceeecc2 .5s}.bounce-leave-active[data-v-3ceeecc2]{-webkit-animation:bounce-in-data-v-3ceeecc2 .5s reverse;animation:bounce-in-data-v-3ceeecc2 .5s reverse}@-webkit-keyframes bounce-in-data-v-3ceeecc2{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes bounce-in-data-v-3ceeecc2{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}to{-webkit-transform:scale(1);transform:scale(1)}}.greenshow[data-v-3ceeecc2]{background:#3fbc53}nav .img[data-v-3ceeecc2]{margin-left:.2rem;float:left;vertical-align:bottom}nav span[data-v-3ceeecc2]{vertical-align:bottom;display:inline-block}main[data-v-3ceeecc2]{width:90%;margin-left:5%;text-align:center;height:8rem}main .welcomedb[data-v-3ceeecc2]{font-size:.7rem;color:#3fbc53;height:.7rem;text-align:center;margin:.6rem 0;-webkit-transition:display 3s;transition:display 3s}main input[data-v-3ceeecc2]{border:.01rem solid #c2c2c2;display:block;border-radius:.03rem;width:80%;margin-left:10%;height:.6rem;padding-left:.2rem;font-size:.22rem}.loginPassWord[data-v-3ceeecc2]{border:0;margin-left:0;padding-left:0}.mima img[data-v-3ceeecc2]{position:absolute;right:0;top:5%}.mima[data-v-3ceeecc2]{width:80%;margin-left:10%;border-left:.01rem solid #c2c2c2;border-right:.01rem solid #c2c2c2;padding-left:.2rem;position:relative}main input[data-v-3ceeecc2]:nth-of-type(2){margin-bottom:.3rem}.loginin[data-v-3ceeecc2]{width:83%;margin-left:10%;height:.6rem;background-color:#3fbc53;border-radius:.13rem;color:#fff;font-weight:600;font-size:.26rem;display:block}.enroll[data-v-3ceeecc2]{margin-top:.3rem;font-size:.26rem;font-weight:400;color:#747474}.enroll span[data-v-3ceeecc2]:first-of-type{color:#3fbc53}.enroll span[data-v-3ceeecc2]:nth-of-type(2){margin:0 2%;color:#c1c1c1}","",{version:3,sources:["/Users/anyanan/Documents/anyaqiong的副本/doubanmovie/doubanmovie/src/pages/register.vue"],names:[],mappings:"AACA,sBACI,iBAAmB,CACtB,AACD,qBACI,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,gBAAiB,AACjB,gBAAoB,AACpB,iBAAkB,AAClB,iBAAkB,AAClB,+BAAiC,CACpC,AA0BD,4BACI,UAAW,AACX,gBAAiB,AACjB,aAAe,AACf,kBAAmB,AACnB,kBAAoB,AACpB,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,AACtB,kBAAmB,AACnB,OAAQ,AACR,OAAS,CACZ,AACD,sCACI,gDAAkD,AAC1C,uCAA0C,CACrD,AACD,sCACI,wDAA0D,AAClD,+CAAkD,CAC7D,AACD,6CACA,GACM,2BAA4B,AACpB,kBAAoB,CACjC,AACD,IACM,6BAA8B,AACtB,oBAAsB,CACnC,AACD,GACM,2BAA4B,AACpB,kBAAoB,CACjC,CACA,AACD,qCACA,GACM,2BAA4B,AACpB,kBAAoB,CACjC,AACD,IACM,6BAA8B,AACtB,oBAAsB,CACnC,AACD,GACM,2BAA4B,AACpB,kBAAoB,CACjC,CACA,AACD,4BACI,kBAAmB,CACtB,AA0DD,0BACE,kBAAoB,AACpB,WAAY,AACZ,qBAAuB,CACxB,AACD,0BAEE,sBAAuB,AACvB,oBAAsB,CACvB,AACD,sBACE,UAAW,AACX,eAAgB,AAChB,kBAAmB,AACnB,WAAa,CACd,AACD,iCACE,gBAAkB,AAClB,cAAe,AACf,aAAe,AACf,kBAAmB,AACnB,eAAiB,AACjB,8BAA+B,AAC/B,qBAAuB,CACxB,AACD,4BACE,4BAA8B,AAC9B,cAAe,AACf,qBAAuB,AACvB,UAAW,AACX,gBAAiB,AACjB,aAAe,AACf,mBAAqB,AACrB,gBAAmB,CAEpB,AACD,gCACE,SAAU,AACV,cAAe,AACf,cAAgB,CACjB,AACD,2BACE,kBAAmB,AACnB,QAAS,AACT,MAAQ,CACT,AACD,uBACE,UAAW,AACX,gBAAiB,AACjB,iCAAmC,AACnC,kCAAoC,AACpC,mBAAqB,AACrB,iBAAmB,CACpB,AACD,2CAEE,mBAAsB,CACvB,AACD,0BACE,UAAW,AACX,gBAAiB,AACjB,aAAe,AACf,yBAA0B,AAC1B,qBAAuB,AACvB,WAAa,AACb,gBAAiB,AACjB,iBAAmB,AACnB,aAAe,CAChB,AACD,yBACE,iBAAmB,AACnB,iBAAmB,AACnB,gBAAiB,AACjB,aAAe,CAChB,AACD,4CACE,aAAe,CAChB,AACD,6CACE,YAAa,AACb,aAAe,CAChB",file:"register.vue",sourcesContent:["\n.all[data-v-3ceeecc2]{\n    position: relative;\n}\nnav[data-v-3ceeecc2]{\n    width: 100%;\n    height: 1rem;\n    text-align: center;\n    overflow: hidden;\n    font-weight: normal;\n    font-size: .26rem;\n    line-height: 1rem;\n    border-bottom: 1px solid #C2C2C2;\n}\nnav .img[data-v-3ceeecc2]{\n    margin-left: .2rem;\n    float: left;\n    vertical-align: bottom;\n}\nnav span[data-v-3ceeecc2]{\n    /*margin-top: 3%;*/\n    vertical-align: bottom;\n    display: inline-block;\n}\nmain[data-v-3ceeecc2]{\n    width: 90%;\n    margin-left: 5%;\n    text-align: center;\n    height: 8rem;\n}\nmain .welcomedb[data-v-3ceeecc2]{\n    font-size: .7rem;\n    color: #3FBC53;\n    height: .7rem;\n    text-align: center;\n    margin: .6rem 0;\n    -webkit-transition:display 3s;\n    transition:display 3s;\n}\n.pleasePut[data-v-3ceeecc2] {\n    width: 40%;\n    margin-left: 30%;\n    height: 0.5rem;\n    text-align: center;\n    line-height: 0.5rem;\n    background-color: #f66028;\n    color: #fff;\n    border-radius: 0.4rem;\n    position: absolute;\n    left: 0;\n    top: 24%;\n}\n.bounce-enter-active[data-v-3ceeecc2] {\n    -webkit-animation: bounce-in-data-v-3ceeecc2 0.5s;\n            animation: bounce-in-data-v-3ceeecc2 0.5s;\n}\n.bounce-leave-active[data-v-3ceeecc2] {\n    -webkit-animation: bounce-in-data-v-3ceeecc2 0.5s reverse;\n            animation: bounce-in-data-v-3ceeecc2 0.5s reverse;\n}\n@-webkit-keyframes bounce-in-data-v-3ceeecc2 {\n0% {\n      -webkit-transform: scale(0);\n              transform: scale(0);\n}\n50% {\n      -webkit-transform: scale(1.5);\n              transform: scale(1.5);\n}\n100% {\n      -webkit-transform: scale(1);\n              transform: scale(1);\n}\n}\n@keyframes bounce-in-data-v-3ceeecc2 {\n0% {\n      -webkit-transform: scale(0);\n              transform: scale(0);\n}\n50% {\n      -webkit-transform: scale(1.5);\n              transform: scale(1.5);\n}\n100% {\n      -webkit-transform: scale(1);\n              transform: scale(1);\n}\n}\n.greenshow[data-v-3ceeecc2]{\n    background:#3fbc53;\n}\nmain input[data-v-3ceeecc2]{\n    border: .01rem solid #C2C2C2;\n    display:block;\n    border-radius: .03rem ;\n    width: 80%;\n    margin-left: 10%;\n    height: .6rem;\n    padding-left: .2rem;\n    font-size: .22rem;\n    /*color: #C8C8CE;*/\n}\n.loginPassWord[data-v-3ceeecc2]{\n    border:0;\n    margin-left: 0;\n    padding-left: 0;\n}\n.mima img[data-v-3ceeecc2]{\n      position: absolute;\n      right: 0;\n      top: 5%;\n}\n.mima[data-v-3ceeecc2]{\n    width: 80%;\n    margin-left: 10%;\n    border-left: .01rem solid #C2C2C2;\n    border-right: .01rem solid #C2C2C2;\n      padding-left: .2rem;\n      position: relative;\n}\nmain input[data-v-3ceeecc2]:nth-of-type(2){\n    /*border-top: 0;*/\n    margin-bottom: .3rem;\n}\n.loginin[data-v-3ceeecc2]{\n    width: 83%;\n    margin-left: 10%;\n    height: .6rem;\n    background-color: #3FBC53;\n    border-radius: .13rem;\n    color: white;\n    font-weight: 600;\n    font-size: .26rem;\n    display: block;\n}\n.enroll[data-v-3ceeecc2]{\n    margin-top: .3rem;\n    font-size: .26rem;\n    font-weight: 400;\n    color: #747474;\n}\n.enroll span[data-v-3ceeecc2]:nth-of-type(1){\n    color:#3FBC53;\n}\n.enroll span[data-v-3ceeecc2]:nth-of-type(2){\n    margin: 0 2%;\n    color: #C1C1C1;\n}\nnav .img[data-v-3ceeecc2] {\n  margin-left: 0.2rem;\n  float: left;\n  vertical-align: bottom;\n}\nnav span[data-v-3ceeecc2] {\n  /*margin-top: 3%;*/\n  vertical-align: bottom;\n  display: inline-block;\n}\nmain[data-v-3ceeecc2] {\n  width: 90%;\n  margin-left: 5%;\n  text-align: center;\n  height: 8rem;\n}\nmain .welcomedb[data-v-3ceeecc2] {\n  font-size: 0.7rem;\n  color: #3fbc53;\n  height: 0.7rem;\n  text-align: center;\n  margin: 0.6rem 0;\n  -webkit-transition: display 3s;\n  transition: display 3s;\n}\nmain input[data-v-3ceeecc2] {\n  border: 0.01rem solid #c2c2c2;\n  display: block;\n  border-radius: 0.03rem;\n  width: 80%;\n  margin-left: 10%;\n  height: 0.6rem;\n  padding-left: 0.2rem;\n  font-size: 0.22rem;\n  /*color: #C8C8CE;*/\n}\n.loginPassWord[data-v-3ceeecc2] {\n  border: 0;\n  margin-left: 0;\n  padding-left: 0;\n}\n.mima img[data-v-3ceeecc2] {\n  position: absolute;\n  right: 0;\n  top: 5%;\n}\n.mima[data-v-3ceeecc2] {\n  width: 80%;\n  margin-left: 10%;\n  border-left: 0.01rem solid #c2c2c2;\n  border-right: 0.01rem solid #c2c2c2;\n  padding-left: 0.2rem;\n  position: relative;\n}\nmain input[data-v-3ceeecc2]:nth-of-type(2) {\n  /*border-top: 0;*/\n  margin-bottom: 0.3rem;\n}\n.loginin[data-v-3ceeecc2] {\n  width: 83%;\n  margin-left: 10%;\n  height: 0.6rem;\n  background-color: #3fbc53;\n  border-radius: 0.13rem;\n  color: white;\n  font-weight: 600;\n  font-size: 0.26rem;\n  display: block;\n}\n.enroll[data-v-3ceeecc2] {\n  margin-top: 0.3rem;\n  font-size: 0.26rem;\n  font-weight: 400;\n  color: #747474;\n}\n.enroll span[data-v-3ceeecc2]:nth-of-type(1) {\n  color: #3fbc53;\n}\n.enroll span[data-v-3ceeecc2]:nth-of-type(2) {\n  margin: 0 2%;\n  color: #c1c1c1;\n}\n"],sourceRoot:""}])},sFS4:function(e,n,A){n=e.exports=A("BkJT")(!0),n.push([e.i,".all[data-v-7fe56ee2]{position:relative}nav[data-v-7fe56ee2]{width:100%;height:1rem;text-align:center;overflow:hidden;font-weight:400;font-size:.26rem;line-height:1rem}nav img[data-v-7fe56ee2]{padding:.2rem;width:.4rem;height:.4rem;float:left;vertical-align:bottom}nav span[data-v-7fe56ee2]{vertical-align:bottom;display:inline-block}.pleasePut[data-v-7fe56ee2]{width:40%;margin-left:30%;height:.5rem;text-align:center;line-height:.5rem;background-color:#f66028;color:#fff;border-radius:.4rem;position:absolute;left:0;top:10%}.bounce-enter-active[data-v-7fe56ee2]{-webkit-animation:bounce-in-data-v-7fe56ee2 .5s;animation:bounce-in-data-v-7fe56ee2 .5s}.bounce-leave-active[data-v-7fe56ee2]{-webkit-animation:bounce-in-data-v-7fe56ee2 .5s reverse;animation:bounce-in-data-v-7fe56ee2 .5s reverse}@-webkit-keyframes bounce-in-data-v-7fe56ee2{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes bounce-in-data-v-7fe56ee2{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}to{-webkit-transform:scale(1);transform:scale(1)}}main[data-v-7fe56ee2]{width:90%;margin-left:5%;text-align:center;height:8rem;margin-top:1rem}main .welcomedb[data-v-7fe56ee2]{font-size:.7rem;color:#3fbc53;height:.7rem;text-align:center;margin:.6rem 0;-webkit-transition:display 3s;transition:display 3s}main input[data-v-7fe56ee2]{border:.01rem solid #c2c2c2;display:block;border-radius:.03rem;width:80%;margin-left:10%;height:.6rem;padding-left:.2rem;font-size:.22rem}main input[data-v-7fe56ee2]:nth-of-type(2){border-top:0;margin-bottom:.3rem}.loginin[data-v-7fe56ee2]{width:83%;margin-left:10%;height:.6rem;background-color:#3fbc53;border-radius:.13rem;color:#fff;font-weight:600;font-size:.26rem;display:block}.enroll[data-v-7fe56ee2]{margin-top:.3rem;font-size:.26rem;font-weight:400;color:#747474}.enroll span[data-v-7fe56ee2]:first-of-type{color:#3fbc53}.enroll span[data-v-7fe56ee2]:nth-of-type(2){margin:0 2%;color:#c1c1c1}footer[data-v-7fe56ee2]{width:60%;text-align:center;position:relative;bottom:0;left:0;z-index:999;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;font-weight:400;font-size:.26rem;margin-left:20%;color:#747474}footer img[data-v-7fe56ee2]{width:.34rem;height:.34rem}.unlogin[data-v-7fe56ee2]{position:absolute;left:50%;margin-left:-2.5rem;top:50%;margin-top:-3rem;width:3rem;height:2rem;padding:1rem;background-color:#f9f9f9;border-radius:.4rem;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:distribute;justify-content:space-around;font-size:.26rem;border:1px solid #c2c2c2}.l[data-v-7fe56ee2]{background:#41b883}","",{version:3,sources:["/Users/anyanan/Documents/anyaqiong的副本/doubanmovie/doubanmovie/src/pages/login.vue"],names:[],mappings:"AACA,sBACE,iBAAmB,CACpB,AACD,qBACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,gBAAiB,AACjB,gBAAoB,AACpB,iBAAmB,AACnB,gBAAkB,CACnB,AACD,yBACE,cAAgB,AAChB,YAAc,AACd,aAAe,AACf,WAAY,AACZ,qBAAuB,CACxB,AACD,0BAEE,sBAAuB,AACvB,oBAAsB,CACvB,AACD,4BACE,UAAW,AACX,gBAAiB,AACjB,aAAe,AACf,kBAAmB,AACnB,kBAAoB,AACpB,yBAA0B,AAC1B,WAAY,AACZ,oBAAsB,AACtB,kBAAmB,AACnB,OAAQ,AACR,OAAS,CACV,AACD,sCACE,gDAAkD,AAC1C,uCAA0C,CACnD,AACD,sCACE,wDAA0D,AAClD,+CAAkD,CAC3D,AACD,6CACA,GACI,2BAA4B,AACpB,kBAAoB,CAC/B,AACD,IACI,6BAA8B,AACtB,oBAAsB,CACjC,AACD,GACI,2BAA4B,AACpB,kBAAoB,CAC/B,CACA,AACD,qCACA,GACI,2BAA4B,AACpB,kBAAoB,CAC/B,AACD,IACI,6BAA8B,AACtB,oBAAsB,CACjC,AACD,GACI,2BAA4B,AACpB,kBAAoB,CAC/B,CACA,AACD,sBACE,UAAW,AACX,eAAgB,AAChB,kBAAmB,AACnB,YAAa,AACb,eAAiB,CAClB,AACD,iCACE,gBAAkB,AAClB,cAAe,AACf,aAAe,AACf,kBAAmB,AACnB,eAAiB,AACjB,8BAA+B,AAC/B,qBAAuB,CACxB,AACD,4BACE,4BAA8B,AAC9B,cAAe,AACf,qBAAuB,AACvB,UAAW,AACX,gBAAiB,AACjB,aAAe,AACf,mBAAqB,AACrB,gBAAmB,CAEpB,AACD,2CACE,aAAc,AACd,mBAAsB,CACvB,AACD,0BACE,UAAW,AACX,gBAAiB,AACjB,aAAe,AACf,yBAA0B,AAC1B,qBAAuB,AACvB,WAAa,AACb,gBAAiB,AACjB,iBAAmB,AACnB,aAAe,CAChB,AACD,yBACE,iBAAmB,AACnB,iBAAmB,AACnB,gBAAiB,AACjB,aAAe,CAChB,AACD,4CACE,aAAe,CAChB,AACD,6CACE,YAAa,AACb,aAAe,CAChB,AACD,wBACE,UAAW,AACX,kBAAmB,AACnB,kBAAmB,AACnB,SAAU,AACV,OAAQ,AACR,YAAa,AACb,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,6BAA8B,AAClC,gBAAoB,AACpB,iBAAmB,AACnB,gBAAiB,AACjB,aAAe,CAChB,AACD,4BACE,aAAe,AACf,aAAgB,CACjB,AACD,0BACE,kBAAmB,AACnB,SAAU,AACV,oBAAqB,AACrB,QAAS,AACT,iBAAkB,AAClB,WAAY,AACZ,YAAa,AACb,aAAc,AACd,yBAA0B,AAC1B,oBAAsB,AACtB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AAChB,eAAgB,AACpB,yBAA0B,AACtB,6BAA8B,AAClC,iBAAmB,AACnB,wBAA0B,CAC3B,AACD,oBACE,kBAAoB,CACrB",file:"login.vue",sourcesContent:["\n.all[data-v-7fe56ee2] {\n  position: relative;\n}\nnav[data-v-7fe56ee2] {\n  width: 100%;\n  height: 1rem;\n  text-align: center;\n  overflow: hidden;\n  font-weight: normal;\n  font-size: 0.26rem;\n  line-height: 1rem;\n}\nnav img[data-v-7fe56ee2] {\n  padding: 0.2rem;\n  width: 0.4rem;\n  height: 0.4rem;\n  float: left;\n  vertical-align: bottom;\n}\nnav span[data-v-7fe56ee2] {\n  /*margin-top: 3%;*/\n  vertical-align: bottom;\n  display: inline-block;\n}\n.pleasePut[data-v-7fe56ee2] {\n  width: 40%;\n  margin-left: 30%;\n  height: 0.5rem;\n  text-align: center;\n  line-height: 0.5rem;\n  background-color: #f66028;\n  color: #fff;\n  border-radius: 0.4rem;\n  position: absolute;\n  left: 0;\n  top: 10%;\n}\n.bounce-enter-active[data-v-7fe56ee2] {\n  -webkit-animation: bounce-in-data-v-7fe56ee2 0.5s;\n          animation: bounce-in-data-v-7fe56ee2 0.5s;\n}\n.bounce-leave-active[data-v-7fe56ee2] {\n  -webkit-animation: bounce-in-data-v-7fe56ee2 0.5s reverse;\n          animation: bounce-in-data-v-7fe56ee2 0.5s reverse;\n}\n@-webkit-keyframes bounce-in-data-v-7fe56ee2 {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n50% {\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@keyframes bounce-in-data-v-7fe56ee2 {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\n50% {\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\nmain[data-v-7fe56ee2] {\n  width: 90%;\n  margin-left: 5%;\n  text-align: center;\n  height: 8rem;\n  margin-top: 1rem;\n}\nmain .welcomedb[data-v-7fe56ee2] {\n  font-size: 0.7rem;\n  color: #3fbc53;\n  height: 0.7rem;\n  text-align: center;\n  margin: 0.6rem 0;\n  -webkit-transition: display 3s;\n  transition: display 3s;\n}\nmain input[data-v-7fe56ee2] {\n  border: 0.01rem solid #c2c2c2;\n  display: block;\n  border-radius: 0.03rem;\n  width: 80%;\n  margin-left: 10%;\n  height: 0.6rem;\n  padding-left: 0.2rem;\n  font-size: 0.22rem;\n  /*color: #C8C8CE;*/\n}\nmain input[data-v-7fe56ee2]:nth-of-type(2) {\n  border-top: 0;\n  margin-bottom: 0.3rem;\n}\n.loginin[data-v-7fe56ee2] {\n  width: 83%;\n  margin-left: 10%;\n  height: 0.6rem;\n  background-color: #3fbc53;\n  border-radius: 0.13rem;\n  color: white;\n  font-weight: 600;\n  font-size: 0.26rem;\n  display: block;\n}\n.enroll[data-v-7fe56ee2] {\n  margin-top: 0.3rem;\n  font-size: 0.26rem;\n  font-weight: 400;\n  color: #747474;\n}\n.enroll span[data-v-7fe56ee2]:nth-of-type(1) {\n  color: #3fbc53;\n}\n.enroll span[data-v-7fe56ee2]:nth-of-type(2) {\n  margin: 0 2%;\n  color: #c1c1c1;\n}\nfooter[data-v-7fe56ee2] {\n  width: 60%;\n  text-align: center;\n  position: relative;\n  bottom: 0;\n  left: 0;\n  z-index: 999;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  font-weight: normal;\n  font-size: 0.26rem;\n  margin-left: 20%;\n  color: #747474;\n}\nfooter img[data-v-7fe56ee2] {\n  width: 0.34rem;\n  height: 0.34rem;\n}\n.unlogin[data-v-7fe56ee2] {\n  position: absolute;\n  left: 50%;\n  margin-left: -2.5rem;\n  top: 50%;\n  margin-top: -3rem;\n  width: 3rem;\n  height: 2rem;\n  padding: 1rem;\n  background-color: #f9f9f9;\n  border-radius: 0.4rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  font-size: 0.26rem;\n  border: 1px solid #c2c2c2;\n}\n.l[data-v-7fe56ee2] {\n  background: #41b883;\n}\n"],sourceRoot:""}])},tYh3:function(e,n,A){var t=A("baRL");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);A("8bSs")("aa8ca198",t,!0)},wHcP:function(e,n,A){var t=A("sFS4");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);A("8bSs")("bd7ab9a2",t,!0)}});
//# sourceMappingURL=4.eac62232ea5f2fab7d03.js.map