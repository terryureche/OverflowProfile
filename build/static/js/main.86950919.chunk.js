(this["webpackJsonpcommunity-feed"]=this["webpackJsonpcommunity-feed"]||[]).push([[0],{31:function(n,e,t){n.exports=t(54)},54:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(25),c=t.n(o),i=t(11),s=t(12),u=t(14),l=t(13),f=t(15),d=t(1),p=t(2);function h(){var n=Object(d.a)(["\n  pointer-events: none;\n"]);return h=function(){return n},n}function v(){var n=Object(d.a)(["\n  background-color: orange;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n"]);return v=function(){return n},n}var m=p.b.div(v()),b=p.b.h1(h()),g=function(){return r.a.createElement(m,null,r.a.createElement(b,null,"Q&A Feed"))},w=t(17),j=t(3),y=t(8),x=t.n(y);function O(){var n=Object(d.a)(["\n  margin-left: 5%;\n"]);return O=function(){return n},n}function k(){var n=Object(d.a)(["\n  display: block;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n"]);return k=function(){return n},n}function E(){var n=Object(d.a)(["\n  display: flex;\n  flex-basis: 40%;\n  align-items: center;\n  justify-content: flex-end;\n"]);return E=function(){return n},n}var S=p.b.div(E()),A=p.b.img(k()),q=p.b.h3(O()),_=function(n){var e=n.data;return(r.a.createElement(S,null,r.a.createElement(A,{src:e.profile_image}),r.a.createElement(q,null,e.display_name)))};function C(){var n=Object(d.a)(["\n  flex-basis: 80%;\n"]);return C=function(){return n},n}function I(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 2%;\n"]);return I=function(){return n},n}function W(){var n=Object(d.a)(["\n  width: 100%;\n  padding-bottom: 10px;\n  text-align: center;\n  border-bottom: 1px solid darkGray;\n"]);return W=function(){return n},n}function P(){var n=Object(d.a)(["\n  text-align: left;\n  padding: 1%;\n  background: lightGray;\n  border-radius: 5px;\n  margin-bottom: 2%;\n"]);return P=function(){return n},n}var U=p.b.div(P()),B=p.b.h2(W()),D=p.b.div(I()),F=p.b.div(C()),L=function(n){var e=n.data;return(r.a.createElement(U,null,r.a.createElement(B,null,e.title),r.a.createElement(D,null,r.a.createElement(F,null,"Views: ".concat(e.view_count," | Answers: ").concat(e.answer_count)),r.a.createElement(_,{data:e.owner}))))},N=t(21),R=t.n(N);function M(){var n=Object(d.a)(["\n  padding: 1%;\n  background: lightBlue;\n  color: white;\n  text-decoration: none\n  border-radius: 5px;\n "]);return M=function(){return n},n}function z(){var n=Object(d.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n "]);return z=function(){return n},n}function G(){var n=Object(d.a)(["\n    text-decoration: none;\n    color: inherit;\n"]);return G=function(){return n},n}function J(){var n=Object(d.a)(["\n  text-align: center;\n"]);return J=function(){return n},n}function T(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  margin: 5%;\n"]);return T=function(){return n},n}var H=p.b.div(T()),Q=p.b.div(J()),V=Object(p.b)(w.b)(G()),$=p.b.div(z()),K=Object(p.b)(w.b)(M()),X=function(n){function e(n){var t;Object(i.a)(this,e),t=Object(u.a)(this,Object(l.a)(e).call(this,n));var a=R.a.parse(n.location.search);return t.state={data:[],loading:!0,page:a.page?parseInt(a.page):1,error:""},t}return Object(f.a)(e,n),Object(s.a)(e,[{key:"fetchAPI",value:function(n){var e,t;return x.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,x.a.awrap(fetch("".concat("https://api.stackexchange.com/2.2/","questions?order=desc&sort=activity&tagged=reactjs&site=stackoverflow").concat(n?"&page=".concat(n):"")));case 3:return e=a.sent,a.next=6,x.a.awrap(e.json());case 6:(t=a.sent)&&this.setState({data:t,loading:!1}),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),this.setState({loading:!1,error:a.t0.message});case 13:case"end":return a.stop()}}),null,this,[[0,10]])}},{key:"componentDidMount",value:function(){var n;return x.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:n=this.state.page,this.fetchAPI(n);case 2:case"end":return e.stop()}}),null,this)}},{key:"componentDidUpdate",value:function(n){var e=this;if(n.location.search!==this.props.location.search){var t=R.a.parse(this.props.location.search);this.setState({page:parseInt(t.page)},(function(){return e.fetchAPI(e.state.page)}))}}},{key:"render",value:function(){var n=this.state,e=n.data,t=n.page,a=n.loading,o=n.error,c=this.props.match;return a||o?r.a.createElement(Q,null,a?"Loading...":o):r.a.createElement(H,null,e.items.map((function(n){return r.a.createElement(V,{key:n.question_id,to:"/questions/".concat(n.question_id)},r.a.createElement(L,{key:n.question_id,data:n}))})),r.a.createElement($,null,t>1&&r.a.createElement(K,{to:"".concat(c.url,"?page=").concat(t-1)},"Previous"),e.has_more&&r.a.createElement(K,{to:"".concat(c.url,"?page=").concat(t+1)},"Next")))}}]),e}(a.Component);function Y(){var n=Object(d.a)(["\n  text-align: center;\n"]);return Y=function(){return n},n}function Z(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  margin: 5%;\n"]);return Z=function(){return n},n}var nn=p.b.div(Z()),en=p.b.div(Y()),tn=function(n){function e(){var n;return Object(i.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this))).state={data:[],loading:!0,error:""},n}return Object(f.a)(e,n),Object(s.a)(e,[{key:"componentDidMount",value:function(){var n,e,t;return x.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return n=this.props.match,a.prev=1,a.next=4,x.a.awrap(fetch("".concat("https://api.stackexchange.com/2.2/","questions/").concat(n.params.id,"?site=stackoverflow")));case 4:return e=a.sent,a.next=7,x.a.awrap(e.json());case 7:(t=a.sent)&&this.setState({data:t,loading:!1}),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),this.setState({loading:!0,error:a.t0.message});case 14:case"end":return a.stop()}}),null,this,[[1,11]])}},{key:"render",value:function(){var n=this.state,e=n.data,t=n.loading,a=n.error;return t||a?r.a.createElement(en,null,t?"Loading...":a):r.a.createElement(nn,null,r.a.createElement(L,{key:e.items[0].question_id,data:e.items[0]}))}}]),e}(a.Component);function an(){var n=Object(d.a)(["\n  text-align: center;\n"]);return an=function(){return n},n}function rn(){var n=Object(d.a)(['\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n']);return rn=function(){return n},n}var on=Object(p.a)(rn()),cn=p.b.div(an()),sn=function(n){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(f.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(on,null),r.a.createElement(cn,null,r.a.createElement(g,null),r.a.createElement(w.a,null,r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:"/",component:X}),r.a.createElement(j.a,{path:"/questions/:id",component:tn}),r.a.createElement(j.a,{path:"/questions",component:X})))))}}]),e}(a.Component),un=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ln(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}c.a.hydrate(r.a.createElement(sn,null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");un?(!function(n,e){fetch(n).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):ln(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ln(e,n)}))}}()}},[[31,1,2]]]);
//# sourceMappingURL=main.86950919.chunk.js.map