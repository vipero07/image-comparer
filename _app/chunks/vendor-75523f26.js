function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n,e,o){if(t){const r=i(t,n,e,o);return t[0](r)}}function i(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,n,e,o,r,c,u){const s=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,c);if(s){const r=i(n,e,o,u);t.p(r,s)}}function a(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function $(){return p(" ")}function g(){return p("")}function m(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function b(t){return function(n){return n.preventDefault(),t.call(this,n)}}function y(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function x(t){return""===t?null:+t}function _(t){return Array.from(t.childNodes)}function v(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const c=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||c.push(t.name)}for(let t=0;t<c.length;t++)o.removeAttribute(c[t]);return t.splice(r,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):h(n)}function E(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return p(n)}function w(t){return E(t," ")}function k(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function j(t,n){t.value=null==n?"":n}function A(t,n,e){t.classList[e?"add":"remove"](n)}let N;function C(t){N=t}function L(){if(!N)throw new Error("Function called outside component initialization");return N}function O(t){L().$$.on_mount.push(t)}function S(t){L().$$.after_update.push(t)}function M(){const t=L();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}function T(t,n){L().$$.context.set(t,n)}const q=[],z=[],B=[],D=[],F=Promise.resolve();let G=!1;function H(t){B.push(t)}let I=!1;const J=new Set;function K(){if(!I){I=!0;do{for(let t=0;t<q.length;t+=1){const n=q[t];C(n),P(n.$$)}for(C(null),q.length=0;z.length;)z.pop()();for(let t=0;t<B.length;t+=1){const n=B[t];J.has(n)||(J.add(n),n())}B.length=0}while(q.length);for(;D.length;)D.pop()();G=!1,I=!1,J.clear()}}function P(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(H)}}const Q=new Set;let R;function U(){R={r:0,c:[],p:R}}function V(){R.r||r(R.c),R=R.p}function W(t,n){t&&t.i&&(Q.delete(t),t.i(n))}function X(t,n,e,o){if(t&&t.o){if(Q.has(t))return;Q.add(t),R.c.push((()=>{Q.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function Y(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const u=t[c],s=n[c];if(s){for(const t in u)t in s||(o[t]=1);for(const t in s)r[t]||(e[t]=s[t],r[t]=1);t[c]=s}else for(const t in u)r[t]=1}for(const u in o)u in e||(e[u]=void 0);return e}function Z(t){return"object"==typeof t&&null!==t?t:{}}function tt(t){t&&t.c()}function nt(t,n){t&&t.l(n)}function et(t,n,o,u){const{fragment:s,on_mount:i,on_destroy:f,after_update:a}=t.$$;s&&s.m(n,o),u||H((()=>{const n=i.map(e).filter(c);f?f.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(H)}function ot(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){-1===t.$$.dirty[0]&&(q.push(t),G||(G=!0,F.then(K)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ct(n,e,c,u,s,i,f=[-1]){const a=N;C(n);const l=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:e.context||[]),callbacks:o(),dirty:f,skip_bound:!1};let h=!1;if(l.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&s(l.ctx[t],l.ctx[t]=r)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](r),h&&rt(n,t)),e})):[],l.update(),h=!0,r(l.before_update),l.fragment=!!u&&u(l.ctx),e.target){if(e.hydrate){const t=_(e.target);l.fragment&&l.fragment.l(t),t.forEach(d)}else l.fragment&&l.fragment.c();e.intro&&W(n.$$.fragment),et(n,e.target,e.anchor,e.customElement),K()}C(a)}class ut{$destroy(){ot(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const st=[];function it(n,e=t){let o;const r=[];function c(t){if(u(n,t)&&(n=t,o)){const t=!st.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),st.push(t,n)}if(t){for(let t=0;t<st.length;t+=2)st[t][0](st[t+1]);st.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(u,s=t){const i=[u,s];return r.push(i),1===r.length&&(o=e(c)||t),u(n),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{n as A,U as B,it as C,s as D,f as E,a as F,t as G,A as H,m as I,b as J,r as K,M as L,j as M,x as N,ut as S,_ as a,y as b,v as c,d,h as e,l as f,E as g,k as h,ct as i,tt as j,$ as k,g as l,nt as m,w as n,et as o,Y as p,Z as q,X as r,u as s,p as t,V as u,W as v,ot as w,T as x,S as y,O as z};
