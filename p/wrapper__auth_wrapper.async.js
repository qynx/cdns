"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[688],{51561:function(W,P,n){n.d(P,{WC:function(){return S},UC:function(){return O},F9:function(){return M},fb:function(){return w},bT:function(){return B},lx:function(){return g},XB:function(){return L}});var D=n(35290),t=n.n(D),R=n(411),p=n.n(R),T=n(58482),b=n.n(T),f=n(9189),j=n.n(f),U=n(93275),c=n.n(U),d=n(13183),l=n(79053),I=n(70523),o=d.Z.create({baseURL:"https://laikecc.xyz",withCredentials:!0}),$=b()(function a(s,e){j()(this,a),c()(this,"selfEx",!0),c()(this,"code",void 0),c()(this,"msg",void 0),this.code=s,this.msg=e});o.interceptors.response.use(function(){var a=p()(t()().mark(function s(e){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(console.log(e.data),e.data.code==0){r.next=7;break}if(e.data.code!=4003){r.next=5;break}return I.m8.push("/login"),r.abrupt("return",Promise.reject("login required"));case 5:return l.FN.show(e.data.error_msg),r.abrupt("return",Promise.reject(new $(e.data.code,e.data.msg)));case 7:return r.abrupt("return",e);case 8:case"end":return r.stop()}},s)}));return function(s){return a.apply(this,arguments)}}(),function(){var a=p()(t()().mark(function s(e){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(console.log("listen error"),console.log(e),!e.selfEx){r.next=5;break}return l.FN.show(e.msg),r.abrupt("return",Promise.reject(e));case 5:return l.FN.show("\u7F51\u7EDC\u9519\u8BEF"),r.abrupt("return",Promise.reject(e));case 7:case"end":return r.stop()}},s)}));return function(s){return a.apply(this,arguments)}}());function w(a){return _.apply(this,arguments)}function _(){return _=p()(t()().mark(function a(s){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,o.get("/api/p/poetry/get/"+s,{});case 2:return u.abrupt("return",u.sent.data.result);case 3:case"end":return u.stop()}},a)})),_.apply(this,arguments)}function g(a){return v.apply(this,arguments)}function v(){return v=p()(t()().mark(function a(s){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,o.post("/api/p/user/login",s);case 2:return u.abrupt("return",u.sent.data.result);case 3:case"end":return u.stop()}},a)})),v.apply(this,arguments)}function L(){return m.apply(this,arguments)}function m(){return m=p()(t()().mark(function a(){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.post("/api/p/user/logout",{});case 2:return e.abrupt("return",e.sent.data.result);case 3:case"end":return e.stop()}},a)})),m.apply(this,arguments)}function M(){return E.apply(this,arguments)}function E(){return E=p()(t()().mark(function a(){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.post("/api/p/user/me",{});case 2:return e.abrupt("return",e.sent.data.result);case 3:case"end":return e.stop()}},a)})),E.apply(this,arguments)}function C(){return A.apply(this,arguments)}function A(){return A=_asyncToGenerator(_regeneratorRuntime().mark(function a(){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,API_CLI_INS.post("/api/p/user/me/required",{});case 2:return e.abrupt("return",e.sent.data.result);case 3:case"end":return e.stop()}},a)})),A.apply(this,arguments)}function S(a){return y.apply(this,arguments)}function y(){return y=p()(t()().mark(function a(s){var e;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return e={},Object.assign(e,s),e.trigger_time=s.trigger_time.getTime(),r.next=5,o.post("/api/p/sch/add",e);case 5:return r.abrupt("return",r.sent.data.result);case 6:case"end":return r.stop()}},a)})),y.apply(this,arguments)}function O(a){return h.apply(this,arguments)}function h(){return h=p()(t()().mark(function a(s){var e;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return e={id:s},r.next=3,o.post("/api/p/sch/done",e);case 3:return r.abrupt("return",r.sent.data.result);case 4:case"end":return r.stop()}},a)})),h.apply(this,arguments)}function B(a){return i.apply(this,arguments)}function i(){return i=p()(t()().mark(function a(s){var e;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return e={id:s},r.next=3,o.post("/api/p/sch/get",e);case 3:return r.abrupt("return",r.sent.data.result);case 4:case"end":return r.stop()}},a)})),i.apply(this,arguments)}},85621:function(W,P,n){n.r(P);var D=n(35290),t=n.n(D),R=n(411),p=n.n(R),T=n(46686),b=n.n(T),f=n(70523),j=n(51561),U=n(79053),c=n(93236),d=n(70134),l=n(62086),I=function($){var w=c.useState(),_=b()(w,2),g=_[0],v=_[1],L=c.useState(!0),m=b()(L,2),M=m[0],E=m[1],C=(0,f.TH)(),A="/login?redirect_path="+encodeURI(C.pathname+C.search),S=function(){var y=p()(t()().mark(function O(){var h;return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return console.log(C.pathname),i.prev=1,i.next=4,(0,j.F9)();case 4:h=i.sent,v(h),i.next=10;break;case 8:i.prev=8,i.t0=i.catch(1);case 10:E(!1);case 11:case"end":return i.stop()}},O,null,[[1,8]])}));return function(){return y.apply(this,arguments)}}();return c.useEffect(function(){S()},[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(d.rs,{children:[(0,l.jsx)(d.JZ,{condition:M,children:(0,l.jsx)(U.k_,{})}),(0,l.jsx)(d.JZ,{condition:!M&&(g==null?void 0:g.uid),children:(0,l.jsx)(f.j3,{})}),(0,l.jsx)(d.gA,{children:(0,l.jsx)(f.Fg,{to:A})})]})})};P.default=I}}]);
