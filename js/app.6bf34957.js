(function(t){function e(e){for(var r,c,o=e[0],i=e[1],d=e[2],u=0,f=[];u<o.length;u++)c=o[u],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&f.push(s[c][0]),s[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(f.length)f.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var i=a[o];0!==s[i]&&(r=!1)}r&&(n.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},s={app:0},n=[];function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var l=i;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},4678:function(t,e,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=n(t);return a(e)}function n(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=n,t.exports=s,s.id="4678"},5:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",dark:""}},[a("v-toolbar-title",[t._v(t._s(t.appTitle))]),a("v-spacer"),a("v-btn",{attrs:{icon:"",large:""},on:{click:t.newCard}},[a("v-icon",[t._v("mdi-plus")])],1),a("v-btn",{attrs:{icon:"",large:""},on:{click:t.refresh}},[a("v-icon",[t._v("mdi-refresh")])],1)],1),a("v-content",[this.cards.length>0?a("v-container",{attrs:{fluid:""}},[a("v-row",t._l(this.cards,(function(t){return a("v-col",{key:t.cardNo,attrs:{cols:"12",md:"6",lg:"4",xl:"3"}},[a("CardListItem",{attrs:{cardInfo:t}})],1)})),1)],1):a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"text-center"},[a("v-icon",{staticStyle:{"font-size":"4em"}},[t._v("mdi-information")]),a("h3",{staticClass:"mt-3"},[t._v("點擊右上方新增按鈕添加電子消費卡")])],1)])],1)],1)],1),a("ErrorDialog",{attrs:{ctx:t.errorDialogCtx}}),a("MsgDialog",{attrs:{ctx:t.msgDialogCtx}}),a("ConfirmDialog",{attrs:{ctx:t.removeCardConfirmDialogCtx}}),a("NewCardDialog",{attrs:{ctx:t.newCardDialogCtx,cards:this.cards}}),a("EditCardDialog",{attrs:{ctx:t.editCardDialogCtx,cards:this.cards}})],1),a("v-footer",{attrs:{app:"",dark:""}},[a("v-btn",{attrs:{href:"mailto:trackecc@gmail.com?subject=建議",depressed:"",small:""}},[a("v-icon",{attrs:{dense:""}},[t._v("mdi-email")]),a("span",[t._v(" 建議")])],1),a("v-spacer"),a("small",[t._v("V"+t._s(t.appVersion))])],1)],1)},n=[],c=(a("4de4"),a("c975"),a("d81d"),a("a434"),a("b0c0"),a("96cf"),a("1da1")),o=a("a002"),i=a.n(o),d=a("d4ec"),l=a("bee2"),u=a("7f45"),f=a.n(u),v=function(){function t(e,a,r,s,n,c,o,i){Object(d["a"])(this,t),this._name=e,this._cardNo=a,this._balance=r,this._lastCardTranTime=s,this._usableAmount=n,this._eventDailyQuota=c,this._eventEndDate=o,this._lastUpdateAt=i}return Object(l["a"])(t,[{key:"updateCardInfo",value:function(t,e,a,r,s){this._balance=t,this._lastCardTranTime=e,this._usableAmount=a,this._eventDailyQuota=r,this._eventEndDate=s,this._lastUpdateAt=new Date}},{key:"name",get:function(){return this._name},set:function(t){this._name=t}},{key:"cardNo",get:function(){return this._cardNo},set:function(t){this._cardNo=t}},{key:"balance",get:function(){return this._balance}},{key:"lastCardTranTime",get:function(){return this._lastCardTranTime}},{key:"usableAmount",get:function(){return this._usableAmount}},{key:"eventDailyQuota",get:function(){return this._eventDailyQuota}},{key:"lastUpdateAt",get:function(){return this._lastUpdateAt}},{key:"eventEndDate",get:function(){return this._eventEndDate}},{key:"lastUpdateAtStr",get:function(){return void 0==this._lastUpdateAt?"":f()(this._lastUpdateAt).fromNow()}},{key:"comsumeMinDays",get:function(){if(this._eventDailyQuota&&this._balance)return Math.round(this._balance/this._eventDailyQuota)}}],[{key:"parse",value:function(e){return new t(e._name,e._cardNo,e._balance,e._lastCardTranTime,e._usableAmount,e._eventDailyQuota,e._eventEndDate,e._lastUpdateAt)}}]),t}(),h=v,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("v-skeleton-loader",{staticClass:"ma-auto",attrs:{type:"card",elevation:"5",height:"256"}}):a("v-card",{staticClass:"ma-auto d-flex flex-column",attrs:{dark:"",color:t.cardInfo.lastUpdateAt?"#00A19F":"grey",elevation:"5","min-height":"256"}},[a("v-card-title",{staticClass:"pb-1 pt-2"},[a("span",[t._v(t._s(t.cardInfo.name))]),a("v-spacer"),a("small",[t._v("#"+t._s(t.cardInfo.cardNo))])],1),a("v-divider",{staticClass:"mx-3"}),a("v-card-text",{staticClass:"py-1"},[a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"6"}},[a("div",[t._v("總餘額：")]),t.cardInfo.balance?a("div",[t._v("MOP "+t._s(t.cardInfo.balance))]):t._e()]),a("v-col",{attrs:{cols:"6"}},[a("div",[t._v("有效期至：")]),t.cardInfo.eventEndDate?a("div",[t._v(t._s(t.cardInfo.eventEndDate))]):t._e()]),a("v-col",{attrs:{cols:"6"}},[a("div",[t._v("每日交易限額：")]),t.cardInfo.eventDailyQuota?a("div",[t._v("MOP "+t._s(t.cardInfo.eventDailyQuota))]):t._e()]),a("v-col",{attrs:{cols:"6"}},[a("div",[t._v("最後交易時間：")]),t.cardInfo.lastCardTranTime?a("div",[t._v(t._s(t.cardInfo.lastCardTranTime))]):t._e()]),a("v-col",{attrs:{cols:"6"}},[a("div",[t._v("本日可用限額：")]),t.cardInfo.usableAmount?a("div",[t._v("MOP "+t._s(t.cardInfo.usableAmount))]):t._e()]),a("v-col",{attrs:{cols:"6"}},[a("div",[t._v("最少需要連續使用天數：")]),t.cardInfo.comsumeMinDays?a("div",[t._v(t._s(t.cardInfo.comsumeMinDays)+"天")]):t._e()])],1)],1),a("v-spacer"),a("v-divider",{staticClass:"mx-3"}),a("v-card-actions",{staticClass:"py-1 px-4"},[a("small",[a("i",[t._v("更新於："+t._s(t.cardInfo.lastUpdateAtStr))])]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:t.refresh}},[a("v-icon",[t._v("mdi-refresh")])],1),a("v-btn",{attrs:{icon:""},on:{click:t.edit}},[a("v-icon",[t._v("mdi-pencil")])],1),a("v-btn",{attrs:{icon:""},on:{click:t.remove}},[a("v-icon",[t._v("mdi-delete")])],1)],1)],1)},p=[],b=(a("d3b7"),a("3ca3"),a("ddb0"),a("bc3a")),g=a.n(b),x=a("94f8"),C=a.n(x),j=a("1132"),_=a.n(j);function w(){for(var t=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],e="",a=0;a<32;++a)e+=t[parseInt(t.length*Math.random())];return e}function y(t){return k.apply(this,arguments)}function k(){return k=Object(c["a"])(regeneratorRuntime.mark((function t(e){var a,r,s,n,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a={head:{version:"0.0.1",function:"macaupass.economia.cardquery",clientId:"11111111",reqTime:f()().tz("Asia/Macau").format("YYYY-MM-DD HH:mm:ss"),reqMsgId:w(),reserve:{},signType:"SHA256"},body:{cardFaceNo:e}},r=JSON.stringify(a),s=_.a.stringify(C()(r+"abcd1234efgh5678")),n={request:a,signature:s},t.next=7,g()({method:"post",url:"https://cors-anywhere.herokuapp.com/https://etc.macaupay.com.mo/card_service/ers/api",data:n});case 7:if(c=t.sent,200==c.status){t.next=10;break}throw"HTTP: "+c.status;case 10:if(o=c.data.response.body,"S"==o.resultInfo.resultStatus){t.next=13;break}throw o.resultInfo.resultMsg;case 13:return t.abrupt("return",{cardNo:e,success:!0,data:o});case 16:return t.prev=16,t.t0=t["catch"](0),t.abrupt("return",{cardNo:e,success:!1,message:t.t0});case 19:case"end":return t.stop()}}),t,null,[[0,16]])}))),k.apply(this,arguments)}var D=new r["a"],N=D,V={state:{errorDialogCtx:{msg:"",show:!1},msgDialogCtx:{msg:"",show:!1}}},I=V,S={showErrorDialog:function(t){I.state.errorDialogCtx.msg=t,I.state.errorDialogCtx.show=!0},hideErrorDialog:function(){I.state.errorDialogCtx.show=!1},isErrorDialogShown:function(){return I.state.errorDialogCtx.show},showMsgDialog:function(t){I.state.msgDialogCtx.msg=t,I.state.msgDialogCtx.show=!0},hideMsgDialog:function(){I.state.msgDialogCtx.show=!1},isMsgDialogShown:function(){return I.state.msgDialogCtx.show}},z=S,T={name:"CardListItem",props:["cardInfo"],data:function(){return{loading:!1}},methods:{remove:function(){N.$emit("removeCard",{cardNo:this.cardInfo.cardNo})},edit:function(){N.$emit("startEditCard",{card:this.cardInfo})},refresh:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.loading){t.next=2;break}return t.abrupt("return");case 2:return this.loading=!0,t.prev=3,t.next=6,y(this.cardInfo.cardNo);case 6:e=t.sent,e.success?this.cardInfo.updateCardInfo(e.data.balanceMoney,e.data.lastCardTranTime,e.data.usableMoney,e.data.eventDailyQuota,e.data.eventEndDate):void 0!=e.message?z.showErrorDialog(e.message+" ("+this.cardInfo.name+" - #"+this.cardInfo.cardNo+")"):z.showErrorDialog("發生不明錯誤。 ("+this.cardInfo.name+" - #"+this.cardInfo.cardNo+")"),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](3),z.showErrorDialog(t.t0+" ("+this.cardInfo.name+" - #"+this.cardInfo.cardNo+")");case 13:return t.prev=13,this.loading=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,this,[[3,10,13,16]])})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){N.$on("refreshAllCards",this.refresh),void 0==this.cardInfo.lastUpdateAt&&this.refresh()},destroyed:function(){N.$off("refreshAllCards",this.refresh)}},O=T,A=a("2877"),E=a("6544"),F=a.n(E),M=a("8336"),$=a("b0af"),R=a("99d9"),U=a("62ad"),q=a("ce7e"),P=a("132d"),Q=a("0fd9"),B=a("3129"),L=a("2fa4"),H=Object(A["a"])(O,m,p,!1,null,null,null),Y=H.exports;F()(H,{VBtn:M["a"],VCard:$["a"],VCardActions:R["a"],VCardText:R["b"],VCardTitle:R["c"],VCol:U["a"],VDivider:q["a"],VIcon:P["a"],VRow:Q["a"],VSkeletonLoader:B["a"],VSpacer:L["a"]});var J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"500"},model:{value:t.ctx.show,callback:function(e){t.$set(t.ctx,"show",e)},expression:"ctx.show"}},[a("v-card",{attrs:{dark:"",color:"#FFFFFF"}},[a("v-sheet",{staticClass:"red py-10 px-5",attrs:{tile:""}},[a("div",{staticClass:"text-center"},[a("v-icon",{staticStyle:{"font-size":"4em"}},[t._v("mdi-alert")]),a("h1",[t._v("錯誤")])],1)]),a("v-card-text",{staticClass:"pa-6"},[a("p",{staticClass:"grey--text text-center pa-3 ma-0",staticStyle:{"font-size":"1.5em"}},[t._v(t._s(t.ctx.msg))])]),a("v-card-actions",{staticClass:"pt-0 pb-5"},[a("v-spacer"),a("v-btn",{staticClass:"red px-6",attrs:{rounded:"",depressed:"",large:""},on:{click:function(e){t.ctx.show=!1}}},[t._v(" 知道了 ")]),a("v-spacer")],1)],1)],1)},W=[],G={name:"ErrorDialog",props:["ctx"]},K=G,X=a("169a"),Z=a("8dd9"),tt=Object(A["a"])(K,J,W,!1,null,null,null),et=tt.exports;F()(tt,{VBtn:M["a"],VCard:$["a"],VCardActions:R["a"],VCardText:R["b"],VDialog:X["a"],VIcon:P["a"],VSheet:Z["a"],VSpacer:L["a"]});var at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"500"},model:{value:t.ctx.show,callback:function(e){t.$set(t.ctx,"show",e)},expression:"ctx.show"}},[a("v-card",{attrs:{dark:"",color:"#FFFFFF"}},[a("v-sheet",{staticClass:"blue py-10 px-5",attrs:{tile:""}},[a("div",{staticClass:"text-center"},[a("v-icon",{staticStyle:{"font-size":"4em"}},[t._v("mdi-help-box")]),a("h1",[t._v("確認")])],1)]),a("v-card-text",{staticClass:"pa-6"},[a("p",{staticClass:"grey--text text-center pa-3 ma-0",staticStyle:{"font-size":"1.5em"}},[t._v(t._s(t.ctx.msg))])]),a("v-card-actions",{staticClass:"pt-0 pb-5"},[a("v-spacer"),a("v-btn",{staticClass:"blue px-6",attrs:{rounded:"",depressed:"",large:""},on:{click:t.confirm}},[t._v(" 確定 ")]),a("v-btn",{staticClass:"px-6",attrs:{rounded:"",depressed:"",large:""},on:{click:t.cancel}},[t._v(" 取消 ")]),a("v-spacer")],1)],1)],1)},rt=[],st={name:"ConfirmDialog",props:["ctx"],methods:{confirm:function(){this.ctx.show=!1,this.ctx.resolve&&this.ctx.resolve()},cancel:function(){this.ctx.show=!1}}},nt=st,ct=Object(A["a"])(nt,at,rt,!1,null,null,null),ot=ct.exports;F()(ct,{VBtn:M["a"],VCard:$["a"],VCardActions:R["a"],VCardText:R["b"],VDialog:X["a"],VIcon:P["a"],VSheet:Z["a"],VSpacer:L["a"]});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"500"},model:{value:t.ctx.show,callback:function(e){t.$set(t.ctx,"show",e)},expression:"ctx.show"}},[a("v-card",{attrs:{dark:"",color:"#FFFFFF"}},[a("v-sheet",{staticClass:"blue py-10 px-5",attrs:{tile:""}},[a("div",{staticClass:"text-center"},[a("v-icon",{staticStyle:{"font-size":"4em"}},[t._v("mdi-information")]),a("h1",[t._v("訊息")])],1)]),a("v-card-text",{staticClass:"pa-6"},[a("p",{staticClass:"grey--text text-center pa-3 ma-0",staticStyle:{"font-size":"1.5em"}},[t._v(t._s(t.ctx.msg))])]),a("v-card-actions",{staticClass:"pt-0 pb-5"},[a("v-spacer"),a("v-btn",{staticClass:"blue px-6",attrs:{rounded:"",depressed:"",large:""},on:{click:function(e){t.ctx.show=!1}}},[t._v(" 知道了 ")]),a("v-spacer")],1)],1)],1)},dt=[],lt={name:"MsgDialog",props:["ctx"]},ut=lt,ft=Object(A["a"])(ut,it,dt,!1,null,null,null),vt=ft.exports;F()(ft,{VBtn:M["a"],VCard:$["a"],VCardActions:R["a"],VCardText:R["b"],VDialog:X["a"],VIcon:P["a"],VSheet:Z["a"],VSpacer:L["a"]});var ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"500"},model:{value:t.ctx.show,callback:function(e){t.$set(t.ctx,"show",e)},expression:"ctx.show"}},[a("v-card",[a("v-sheet",{staticClass:"white--text green py-10 px-5",attrs:{tile:""}},[a("div",{staticClass:"text-center"},[a("v-icon",{staticClass:"white--text",staticStyle:{"font-size":"4em"}},[t._v("mdi-plus")]),a("h1",[t._v("新增")])],1)]),a("v-card-text",{staticClass:"pa-6"},[a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{staticClass:"mb-3",staticStyle:{"font-size":"2em"},attrs:{autofocus:"",rules:t.cardNameRules,label:"卡名",required:""},model:{value:t.cardName,callback:function(e){t.cardName=e},expression:"cardName"}}),a("v-text-field",{staticClass:"mt-3",staticStyle:{"font-size":"2em"},attrs:{rules:t.cardNoRules,label:"卡號",required:""},model:{value:t.cardNo,callback:function(e){t.cardNo=e},expression:"cardNo"}})],1)],1),a("v-card-actions",{staticClass:"pt-0 pb-5"},[a("v-spacer"),a("v-btn",{staticClass:"green px-6 white--text",attrs:{rounded:"",depressed:"",large:"",disabled:!t.valid},on:{click:t.add}},[t._v(" 新增 ")]),a("v-btn",{staticClass:"px-6",attrs:{rounded:"",depressed:"",large:""},on:{click:t.cancel}},[t._v(" 取消 ")]),a("v-spacer")],1)],1)],1)},mt=[],pt={name:"NewCardDialog",props:["ctx","cards"],data:function(){var t=this;return{valid:!0,cardName:"",cardNameRules:[function(t){return!!t||"必須填寫卡名"},function(e){return!(0!=t.cards.filter((function(t){return t.name==e})).length)||"重覆卡名"}],cardNo:"",cardNoRules:[function(t){return!!t||"必須填寫卡號"},function(t){return!!/^\d{10}$/.test(t)||"卡號不正確"},function(e){return!(0!=t.cards.filter((function(t){return t.cardNo==e})).length)||"重覆卡號"}]}},methods:{add:function(){this.ctx.show=!1,N.$emit("addCard",{cardNo:this.cardNo,cardName:this.cardName})},cancel:function(){this.ctx.show=!1}},watch:{ctx:{deep:!0,handler:function(t){t.show&&(this.cardName="",this.cardNo="")}}}},bt=pt,gt=a("4bd4"),xt=a("8654"),Ct=Object(A["a"])(bt,ht,mt,!1,null,null,null),jt=Ct.exports;F()(Ct,{VBtn:M["a"],VCard:$["a"],VCardActions:R["a"],VCardText:R["b"],VDialog:X["a"],VForm:gt["a"],VIcon:P["a"],VSheet:Z["a"],VSpacer:L["a"],VTextField:xt["a"]});var _t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"500"},model:{value:t.ctx.show,callback:function(e){t.$set(t.ctx,"show",e)},expression:"ctx.show"}},[a("v-card",[a("v-sheet",{staticClass:"white--text green py-10 px-5",attrs:{tile:""}},[a("div",{staticClass:"text-center"},[a("v-icon",{staticClass:"white--text",staticStyle:{"font-size":"4em"}},[t._v("mdi-pencil")]),a("h1",[t._v("編輯")])],1)]),a("v-card-text",{staticClass:"pa-6"},[a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{staticClass:"mb-3",staticStyle:{"font-size":"2em"},attrs:{autofocus:"",rules:t.cardNameRules,label:"卡名",required:""},model:{value:t.cardName,callback:function(e){t.cardName=e},expression:"cardName"}}),a("v-text-field",{staticClass:"mt-3",staticStyle:{"font-size":"2em"},attrs:{rules:t.cardNoRules,label:"卡號",required:""},model:{value:t.cardNo,callback:function(e){t.cardNo=e},expression:"cardNo"}})],1)],1),a("v-card-actions",{staticClass:"pt-0 pb-5"},[a("v-spacer"),a("v-btn",{staticClass:"green px-6 white--text",attrs:{rounded:"",depressed:"",large:"",disabled:!t.valid},on:{click:t.update}},[t._v(" 更新 ")]),a("v-btn",{staticClass:"px-6",attrs:{rounded:"",depressed:"",large:""},on:{click:t.cancel}},[t._v(" 取消 ")]),a("v-spacer")],1)],1)],1)},wt=[],yt={name:"EditCardDialog",props:["ctx","cards"],data:function(){var t=this;return{valid:!0,cardName:"",cardNameRules:[function(t){return!!t||"必須填寫卡名"},function(e){return!(0!=t.cards.filter((function(a){return a.name!=t.ctx.originalCard.name&&a.name==e})).length)||"重覆卡名"}],cardNo:"",cardNoRules:[function(t){return!!t||"必須填寫卡號"},function(t){return!!/^\d{10}$/.test(t)||"卡號不正確"},function(e){return!(0!=t.cards.filter((function(a){return a.cardNo!=t.ctx.originalCard.cardNo&&a.cardNo==e})).length)||"重覆卡號"}]}},methods:{update:function(){this.ctx.show=!1,N.$emit("updateCard",{originalCard:this.ctx.originalCard,cardNo:this.cardNo,cardName:this.cardName})},cancel:function(){this.ctx.show=!1}},watch:{ctx:{deep:!0,handler:function(t){t.show&&(this.cardName=this.ctx.originalCard.name,this.cardNo=this.ctx.originalCard.cardNo)}}}},kt=yt,Dt=Object(A["a"])(kt,_t,wt,!1,null,null,null),Nt=Dt.exports;F()(Dt,{VBtn:M["a"],VCard:$["a"],VCardActions:R["a"],VCardText:R["b"],VDialog:X["a"],VForm:gt["a"],VIcon:P["a"],VSheet:Z["a"],VSpacer:L["a"],VTextField:xt["a"]});var Vt={maxNumOfCards:"6"},It=Vt,St={name:"App",components:{CardListItem:Y,ErrorDialog:et,ConfirmDialog:ot,NewCardDialog:jt,EditCardDialog:Nt,MsgDialog:vt},methods:{newCard:function(){this.cards.length>=It.maxNumOfCards?z.showMsgDialog("您最多只能新增"+It.maxNumOfCards+"張卡，請先把您不需要追蹤的卡移除再作新增。"):this.newCardDialogCtx.show=!0},editCard:function(t){this.editCardDialogCtx.originalCard=t,this.editCardDialogCtx.show=!0},removeCard:function(t){var e=this,a=this.cards.filter((function(e){return e.cardNo==t}))[0];void 0!=a&&(this.removeCardConfirmDialogCtx.msg="您是否確定要刪除卡"+a.name+"(#"+a.cardNo+")?",this.removeCardConfirmDialogCtx.resolve=function(){var a=e.cards.map((function(t){return t.cardNo})).indexOf(t);a>=0&&e.cards.splice(a,1)},this.removeCardConfirmDialogCtx.show=!0)},refresh:function(){N.$emit("refreshAllCards")}},data:function(){return{appTitle:"追蹤電子消費卡使用情況",appVersion:"1.0.0",cards:[],errorDialogCtx:I.state.errorDialogCtx,removeCardConfirmDialogCtx:{msg:"",show:!1,resolve:void 0},newCardDialogCtx:{show:!1},editCardDialogCtx:{show:!1,originalCard:void 0},msgDialogCtx:I.state.msgDialogCtx}},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$vuetify.theme.dark=!1,f.a.locale("zh-TW"),e.next=4,i.a.getItem("cards");case 4:a=e.sent,t.cards=void 0==a?[]:a.map((function(t){return h.parse(t)})),N.$on("removeCard",(function(e){t.removeCard(e.cardNo)})),N.$on("addCard",(function(e){0==t.cards.filter((function(t){return t.cardNo==e.cardNo})).length&&t.cards.push(new h(e.cardName,e.cardNo))})),N.$on("startEditCard",(function(e){t.editCard(e.card)})),N.$on("updateCard",(function(e){0==t.cards.filter((function(t){return t.cardNo!=e.originalCard.cardNo&&t.cardNo==e.cardNo})).length&&(e.originalCard.cardNo=e.cardNo,e.originalCard.name=e.cardName)}));case 10:case"end":return e.stop()}}),e)})))()},watch:{cards:{deep:!0,handler:function(t){return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.setItem("cards",t);case 2:case"end":return e.stop()}}),e)})))()}}}},zt=St,Tt=a("7496"),Ot=a("40dc"),At=a("a523"),Et=a("a75b"),Ft=a("553a"),Mt=a("2a7f"),$t=Object(A["a"])(zt,s,n,!1,null,null,null),Rt=$t.exports;F()($t,{VApp:Tt["a"],VAppBar:Ot["a"],VBtn:M["a"],VCol:U["a"],VContainer:At["a"],VContent:Et["a"],VFooter:Ft["a"],VIcon:P["a"],VRow:Q["a"],VSpacer:L["a"],VToolbarTitle:Mt["a"]});var Ut=a("9483");Object(Ut["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var qt=a("f309");r["a"].use(qt["a"]);var Pt=new qt["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:Pt,render:function(t){return t(Rt)}}).$mount("#app")},6:function(t,e){},7:function(t,e){},8:function(t,e){},9:function(t,e){}});
//# sourceMappingURL=app.6bf34957.js.map