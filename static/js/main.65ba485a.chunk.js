(this["webpackJsonpreact-parent-children-test"]=this["webpackJsonpreact-parent-children-test"]||[]).push([[0],{56:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n=c(21),a=c(4),r=c(2),o=c(7),s=c(1),i=c(5),u=c.n(i),l=c(22),d=c.n(l);var j=function(e,t){var c=Object(r.useRef)({}),n=Object(r.useRef)(!1),i={status:"init",error:void 0,data:void 0},l=Object(r.useReducer)((function(e,t){switch(t.type){case"request":return Object(s.a)(Object(s.a)({},i),{},{status:"fetching"});case"success":return Object(s.a)(Object(s.a)({},i),{},{status:"fetched",data:t.payload});case"failure":return Object(s.a)(Object(s.a)({},i),{},{status:"error",error:t.payload});default:return e}}),i),j=Object(a.a)(l,2),b=j[0],h=j[1];return Object(r.useEffect)((function(){if(e&&""!==e){var a=function(){var a=Object(o.a)(u.a.mark((function a(){var r;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(h({type:"request"}),!c.current[e]){a.next=5;break}h({type:"success",payload:c.current[e]}),a.next=20;break;case 5:return a.prev=5,a.next=8,d()(e,t);case 8:if(r=a.sent,c.current[e]=r.data,!n.current){a.next=12;break}return a.abrupt("return");case 12:h({type:"success",payload:r.data}),a.next=20;break;case 15:if(a.prev=15,a.t0=a.catch(5),!n.current){a.next=19;break}return a.abrupt("return");case 19:h({type:"failure",payload:""});case 20:case"end":return a.stop()}}),a,null,[[5,15]])})));return function(){return a.apply(this,arguments)}}();return a(),function(){n.current=!0}}}),[e]),b},b=c(59),h=c(23),p=c(24),v=c(0),f=function(){var e=Object(o.a)(u.a.mark((function e(t){var c,n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new TextEncoder,n=c.encode(t),e.next=4,window.crypto.subtle.digest("SHA-256",n);case 4:return a=e.sent,r=Object(p.a)(a),e.abrupt("return",r.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function O(e){var t,c,n=e.store,o=e.setStore,i=e.config,u=e.children,l=Object(r.useState)(""),d=Object(a.a)(l,2),p=d[0],O=d[1],k=Object(r.useState)(""),x=Object(a.a)(k,2),g=x[0],m=x[1],w=Object(r.useState)(""),y=Object(a.a)(w,2),S=y[0],L=y[1],_=j(p,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},data:new URLSearchParams({grant_type:"authorization_code",client_id:i.okta.clientID,redirect_uri:i.okta.redirectUri,code:S,code_verifier:null!==(t=localStorage.getItem("okta-code-verifier"))&&void 0!==t?t:""})}),E=j(g,{method:"GET",headers:{Authorization:"Bearer ".concat(null===(c=_.data)||void 0===c?void 0:c.access_token)}});return Object(r.useEffect)((function(){if(window.location.search.match(/code/gi)){var e=new URL(window.location.href).searchParams.get("code");e&&L(e)}}),[]),Object(r.useEffect)((function(){""!==S&&O("".concat(i.okta.tenant,"/oauth2/v1/token"))}),[i.okta.tenant,S]),Object(r.useEffect)((function(){_.data&&!n.token&&(o(Object(s.a)(Object(s.a)({},n),{},{token:_.data})),m("".concat(i.okta.tenant,"/oauth2/v1/userinfo")),window.history.pushState({},document.title,window.location.pathname),localStorage.removeItem("okta-code-verifier"))}),[o,n,_.data,i.okta.tenant]),Object(r.useEffect)((function(){E.data&&!n.user&&o(Object(s.a)(Object(s.a)({},n),{},{user:E.data}))}),[E.data,o,n]),n.user&&""!==n.user.sub?u:n.user&&""!==n.user.sub||""!==S?Object(v.jsx)("div",{children:"Fetching access token..."}):Object(v.jsxs)("div",{className:"login-box",children:[Object(v.jsx)("h3",{children:"Login"}),Object(v.jsx)("button",{onClick:function(){var e=h.generate(128);localStorage.setItem("okta-code-verifier",e),f(e).then((function(e){window.location.href="".concat(i.okta.tenant,"/oauth2/v1/authorize?client_id=").concat(i.okta.clientID,"&response_type=").concat(i.okta.responseType,"&response_mode=").concat(i.okta.responseMode,"&scope=").concat(i.okta.scope,"&redirect_uri=").concat(i.okta.redirectUri,"&state=").concat(Object(b.a)(),"&nonce=").concat(Object(b.a)(),"&code_challenge_method=S256&code_challenge=").concat(e)}))},children:"Login with OKTA"})]})}function k(e){return Object(v.jsxs)("div",{className:"level1",children:[Object(v.jsx)("h3",{children:"Level 1"}),Object(v.jsxs)("div",{style:{padding:10,margin:10,backgroundColor:"#eee"},children:["count lvl1: ",Object(v.jsx)("b",{children:e.store.level1.countLvl1})]}),Object(v.jsx)("button",{onClick:function(){e.setStore(Object(s.a)(Object(s.a)({},e.store),{},{level2:{countLvl2:++e.store.level2.countLvl2}}))},children:"Update count level 2"}),e.children]})}function x(e){return Object(v.jsxs)("div",{className:"level2",children:[Object(v.jsx)("h4",{children:"Level 2"}),Object(v.jsxs)("div",{style:{padding:10,margin:10,backgroundColor:"#eee"},children:["count lvl2: ",Object(v.jsx)("b",{children:e.store.level2.countLvl2})]}),Object(v.jsx)("button",{onClick:function(){e.setStore(Object(s.a)(Object(s.a)({},e.store),{},{level1:{countLvl1:++e.store.level1.countLvl1}}))},children:"Update count level 1"})]})}c(56);function g(){var e=Object(r.useState)({level1:{countLvl1:0},level2:{countLvl2:0},user:void 0,token:void 0}),t=Object(a.a)(e,2),c=t[0],n=t[1],o=j("./config.json");return o.data&&(document.title=o.data.appTitle),o.data?Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("h1",{children:"Hello CodeSandbox"}),Object(v.jsx)("h2",{children:"Start editing to see some magic happen!"}),Object(v.jsx)(O,{store:c,setStore:n,config:o.data,children:Object(v.jsx)(k,{store:c,setStore:n,children:Object(v.jsx)(x,{store:c,setStore:n})})})]}):null}var m=document.getElementById("root");Object(n.render)(Object(v.jsx)(g,{}),m)}},[[57,1,2]]]);
//# sourceMappingURL=main.65ba485a.chunk.js.map