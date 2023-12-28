var ge=Object.defineProperty;var be=(t,e,n)=>e in t?ge(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var vt=(t,e,n)=>(be(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function y(){}const Xt=t=>t;function H(t,e){for(const n in e)t[n]=e[n];return t}function ye(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Zt(t){return t()}function jt(){return Object.create(null)}function q(t){t.forEach(Zt)}function lt(t){return typeof t=="function"}function x(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ke(t){return Object.keys(t).length===0}function te(t,...e){if(t==null){for(const r of e)r(void 0);return y}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function U(t,e,n){t.$$.on_destroy.push(te(e,n))}function mt(t,e,n,r){if(t){const o=ee(t,e,n,r);return t[0](o)}}function ee(t,e,n,r){return t[1]&&r?H(n.ctx.slice(),t[1](r(e))):n.ctx}function gt(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const s=[],c=Math.max(e.dirty.length,o.length);for(let u=0;u<c;u+=1)s[u]=e.dirty[u]|o[u];return s}return e.dirty|o}return e.dirty}function bt(t,e,n,r,o,s){if(o){const c=ee(e,n,r,s);t.p(c,o)}}function yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Ct(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function It(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}const ne=typeof window<"u";let re=ne?()=>window.performance.now():()=>Date.now(),Mt=ne?t=>requestAnimationFrame(t):y;const Y=new Set;function oe(t){Y.forEach(e=>{e.c(t)||(Y.delete(e),e.f())}),Y.size!==0&&Mt(oe)}function se(t){let e;return Y.size===0&&Mt(oe),{promise:new Promise(n=>{Y.add(e={c:t,f:n})}),abort(){Y.delete(e)}}}function w(t,e){t.appendChild(e)}function ce(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ve(t){const e=R("style");return e.textContent="/* empty */",we(ce(t),e),e.sheet}function we(t,e){return w(t.head||t,e),e.sheet}function O(t,e,n){t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function R(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function T(){return M(" ")}function X(){return M("")}function ie(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Nt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Se=["width","height"];function Dt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set&&Se.indexOf(r)===-1?t[r]=e[r]:Nt(t,r,e[r])}function Pe(t){return Array.from(t.childNodes)}function le(t,e){e=""+e,t.data!==e&&(t.data=e)}function ue(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function Ft(t,e){return new t(e)}const dt=new Map;let _t=0;function Ee(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Oe(t,e){const n={stylesheet:ve(e),rules:{}};return dt.set(t,n),n}function ae(t,e,n,r,o,s,c,u=0){const i=16.666/r;let l=`{
`;for(let _=0;_<=1;_+=i){const b=e+(n-e)*s(_);l+=_*100+`%{${c(b,1-b)}}
`}const a=l+`100% {${c(n,1-n)}}
}`,f=`__svelte_${Ee(a)}_${u}`,h=ce(t),{stylesheet:g,rules:d}=dt.get(h)||Oe(h,t);d[f]||(d[f]=!0,g.insertRule(`@keyframes ${f} ${a}`,g.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${r}ms linear ${o}ms 1 both`,_t+=1,f}function Rt(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),o=n.length-r.length;o&&(t.style.animation=r.join(", "),_t-=o,_t||Ce())}function Ce(){Mt(()=>{_t||(dt.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&E(e)}),dt.clear())})}let ct;function j(t){ct=t}function Z(){if(!ct)throw new Error("Function called outside component initialization");return ct}function Ne(t){Z().$$.on_mount.push(t)}function Re(t){Z().$$.on_destroy.push(t)}function Le(){const t=Z();return(e,n,{cancelable:r=!1}={})=>{const o=t.$$.callbacks[e];if(o){const s=ue(e,n,{cancelable:r});return o.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}function wt(t,e){return Z().$$.context.set(t,e),e}function Q(t){return Z().$$.context.get(t)}const W=[],xt=[];let G=[];const Ut=[],Ae=Promise.resolve();let Lt=!1;function $e(){Lt||(Lt=!0,Ae.then(Tt))}function J(t){G.push(t)}const St=new Set;let K=0;function Tt(){if(K!==0)return;const t=ct;do{try{for(;K<W.length;){const e=W[K];K++,j(e),Me(e.$$)}}catch(e){throw W.length=0,K=0,e}for(j(null),W.length=0,K=0;xt.length;)xt.pop()();for(let e=0;e<G.length;e+=1){const n=G[e];St.has(n)||(St.add(n),n())}G.length=0}while(W.length);for(;Ut.length;)Ut.pop()();Lt=!1,St.clear(),j(t)}function Me(t){if(t.fragment!==null){t.update(),q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}function Te(t){const e=[],n=[];G.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),G=e}let ot;function fe(){return ot||(ot=Promise.resolve(),ot.then(()=>{ot=null})),ot}function ht(t,e,n){t.dispatchEvent(ue(`${e?"intro":"outro"}${n}`))}const ft=new Set;let I;function tt(){I={r:0,c:[],p:I}}function et(){I.r||q(I.c),I=I.p}function v(t,e){t&&t.i&&(ft.delete(t),t.i(e))}function S(t,e,n,r){if(t&&t.o){if(ft.has(t))return;ft.add(t),I.c.push(()=>{ft.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const de={duration:0};function je(t,e,n){const r={direction:"in"};let o=e(t,n,r),s=!1,c,u,i=0;function l(){c&&Rt(t,c)}function a(){const{delay:h=0,duration:g=300,easing:d=Xt,tick:m=y,css:_}=o||de;_&&(c=ae(t,0,1,g,h,d,_,i++)),m(0,1);const b=re()+h,C=b+g;u&&u.abort(),s=!0,J(()=>ht(t,!0,"start")),u=se(P=>{if(s){if(P>=C)return m(1,0),ht(t,!0,"end"),l(),s=!1;if(P>=b){const A=d((P-b)/g);m(A,1-A)}}return s})}let f=!1;return{start(){f||(f=!0,Rt(t),lt(o)?(o=o(r),fe().then(a)):a())},invalidate(){f=!1},end(){s&&(l(),s=!1)}}}function Ie(t,e,n){const r={direction:"out"};let o=e(t,n,r),s=!0,c;const u=I;u.r+=1;let i;function l(){const{delay:a=0,duration:f=300,easing:h=Xt,tick:g=y,css:d}=o||de;d&&(c=ae(t,1,0,f,a,h,d));const m=re()+a,_=m+f;J(()=>ht(t,!1,"start")),"inert"in t&&(i=t.inert,t.inert=!0),se(b=>{if(s){if(b>=_)return g(0,1),ht(t,!1,"end"),--u.r||q(u.c),!1;if(b>=m){const C=h((b-m)/f);g(1-C,C)}}return s})}return lt(o)?fe().then(()=>{o=o(r),l()}):l(),{end(a){a&&"inert"in t&&(t.inert=i),a&&o.tick&&o.tick(1,0),s&&(c&&Rt(t,c),s=!1)}}}function Bt(t,e){const n=e.token={};function r(o,s,c,u){if(e.token!==n)return;e.resolved=u;let i=e.ctx;c!==void 0&&(i=i.slice(),i[c]=u);const l=o&&(e.current=o)(i);let a=!1;e.block&&(e.blocks?e.blocks.forEach((f,h)=>{h!==s&&f&&(tt(),S(f,1,1,()=>{e.blocks[h]===f&&(e.blocks[h]=null)}),et())}):e.block.d(1),l.c(),v(l,1),l.m(e.mount(),e.anchor),a=!0),e.block=l,e.blocks&&(e.blocks[s]=l),a&&Tt()}if(ye(t)){const o=Z();if(t.then(s=>{j(o),r(e.then,1,e.value,s),j(null)},s=>{if(j(o),r(e.catch,2,e.error,s),j(null),!e.hasCatch)throw s}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function De(t,e,n){const r=e.slice(),{resolved:o}=t;t.current===t.then&&(r[t.value]=o),t.current===t.catch&&(r[t.error]=o),t.block.p(r,n)}function At(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],u=e[s];if(u){for(const i in c)i in u||(r[i]=1);for(const i in u)o[i]||(n[i]=u[i],o[i]=1);t[s]=u}else for(const i in c)o[i]=1}for(const c in r)c in n||(n[c]=void 0);return n}function at(t){return typeof t=="object"&&t!==null?t:{}}function B(t){t&&t.c()}function D(t,e,n){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),J(()=>{const s=t.$$.on_mount.map(Zt).filter(lt);t.$$.on_destroy?t.$$.on_destroy.push(...s):q(s),t.$$.on_mount=[]}),o.forEach(J)}function F(t,e){const n=t.$$;n.fragment!==null&&(Te(n.after_update),q(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Fe(t,e){t.$$.dirty[0]===-1&&(W.push(t),$e(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(t,e,n,r,o,s,c=null,u=[-1]){const i=ct;j(t);const l=t.$$={fragment:null,ctx:[],props:s,update:y,not_equal:o,bound:jt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:jt(),dirty:u,skip_bound:!1,root:e.target||i.$$.root};c&&c(l.root);let a=!1;if(l.ctx=n?n(t,e.props||{},(f,h,...g)=>{const d=g.length?g[0]:h;return l.ctx&&o(l.ctx[f],l.ctx[f]=d)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](d),a&&Fe(t,f)),h}):[],l.update(),a=!0,q(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const f=Pe(e.target);l.fragment&&l.fragment.l(f),f.forEach(E)}else l.fragment&&l.fragment.c();e.intro&&v(t.$$.fragment),D(t,e.target,e.anchor),Tt()}j(i)}class rt{constructor(){vt(this,"$$");vt(this,"$$set")}$destroy(){F(this,1),this.$destroy=y}$on(e,n){if(!lt(n))return y;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!ke(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const xe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(xe);const Ue="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='26.6'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20308'%3e%3cpath%20fill='%23FF3E00'%20d='M239.682%2040.707C211.113-.182%20154.69-12.301%20113.895%2013.69L42.247%2059.356a82.198%2082.198%200%200%200-37.135%2055.056a86.566%2086.566%200%200%200%208.536%2055.576a82.425%2082.425%200%200%200-12.296%2030.719a87.596%2087.596%200%200%200%2014.964%2066.244c28.574%2040.893%2084.997%2053.007%20125.787%2027.016l71.648-45.664a82.182%2082.182%200%200%200%2037.135-55.057a86.601%2086.601%200%200%200-8.53-55.577a82.409%2082.409%200%200%200%2012.29-30.718a87.573%2087.573%200%200%200-14.963-66.244'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M106.889%20270.841c-23.102%206.007-47.497-3.036-61.103-22.648a52.685%2052.685%200%200%201-9.003-39.85a49.978%2049.978%200%200%201%201.713-6.693l1.35-4.115l3.671%202.697a92.447%2092.447%200%200%200%2028.036%2014.007l2.663.808l-.245%202.659a16.067%2016.067%200%200%200%202.89%2010.656a17.143%2017.143%200%200%200%2018.397%206.828a15.786%2015.786%200%200%200%204.403-1.935l71.67-45.672a14.922%2014.922%200%200%200%206.734-9.977a15.923%2015.923%200%200%200-2.713-12.011a17.156%2017.156%200%200%200-18.404-6.832a15.78%2015.78%200%200%200-4.396%201.933l-27.35%2017.434a52.298%2052.298%200%200%201-14.553%206.391c-23.101%206.007-47.497-3.036-61.101-22.649a52.681%2052.681%200%200%201-9.004-39.849a49.428%2049.428%200%200%201%2022.34-33.114l71.664-45.677a52.218%2052.218%200%200%201%2014.563-6.398c23.101-6.007%2047.497%203.036%2061.101%2022.648a52.685%2052.685%200%200%201%209.004%2039.85a50.559%2050.559%200%200%201-1.713%206.692l-1.35%204.116l-3.67-2.693a92.373%2092.373%200%200%200-28.037-14.013l-2.664-.809l.246-2.658a16.099%2016.099%200%200%200-2.89-10.656a17.143%2017.143%200%200%200-18.398-6.828a15.786%2015.786%200%200%200-4.402%201.935l-71.67%2045.674a14.898%2014.898%200%200%200-6.73%209.975a15.9%2015.9%200%200%200%202.709%2012.012a17.156%2017.156%200%200%200%2018.404%206.832a15.841%2015.841%200%200%200%204.402-1.935l27.345-17.427a52.147%2052.147%200%200%201%2014.552-6.397c23.101-6.006%2047.497%203.037%2061.102%2022.65a52.681%2052.681%200%200%201%209.003%2039.848a49.453%2049.453%200%200%201-22.34%2033.12l-71.664%2045.673a52.218%2052.218%200%200%201-14.563%206.398'%3e%3c/path%3e%3c/svg%3e",Be="/vite.svg";function He(t){let e,n,r,o,s;return{c(){e=R("button"),n=M("count is "),r=M(t[0])},m(c,u){O(c,e,u),w(e,n),w(e,r),o||(s=ie(e,"click",t[1]),o=!0)},p(c,[u]){u&1&&le(r,c[0])},i:y,o:y,d(c){c&&E(e),o=!1,s()}}}function qe(t,e,n){let r=0;return[r,()=>{n(0,r+=1)}]}class ze extends rt{constructor(e){super(),nt(this,e,qe,He,x,{})}}const $t={},pt={},_e={},he=/^:(.+)/,Ht=4,Ke=3,Ve=2,We=1,Ye=1,it=t=>t.replace(/(^\/+|\/+$)/g,"").split("/"),Pt=t=>t.replace(/(^\/+|\/+$)/g,""),Qe=(t,e)=>{const n=t.default?0:it(t.path).reduce((r,o)=>(r+=Ht,o===""?r+=Ye:he.test(o)?r+=Ve:o[0]==="*"?r-=Ht+We:r+=Ke,r),0);return{route:t,score:n,index:e}},Ge=t=>t.map(Qe).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index),qt=(t,e)=>{let n,r;const[o]=e.split("?"),s=it(o),c=s[0]==="",u=Ge(t);for(let i=0,l=u.length;i<l;i++){const a=u[i].route;let f=!1;if(a.default){r={route:a,params:{},uri:e};continue}const h=it(a.path),g={},d=Math.max(s.length,h.length);let m=0;for(;m<d;m++){const _=h[m],b=s[m];if(_&&_[0]==="*"){const P=_==="*"?"*":_.slice(1);g[P]=s.slice(m).map(decodeURIComponent).join("/");break}if(typeof b>"u"){f=!0;break}const C=he.exec(_);if(C&&!c){const P=decodeURIComponent(b);g[C[1]]=P}else if(_!==b){f=!0;break}}if(!f){n={route:a,params:g,uri:"/"+s.slice(0,m).join("/")};break}}return n||r||null},Et=(t,e)=>t+(e?`?${e}`:""),Je=(t,e)=>{if(t.startsWith("/"))return t;const[n,r]=t.split("?"),[o]=e.split("?"),s=it(n),c=it(o);if(s[0]==="")return Et(o,r);if(!s[0].startsWith(".")){const l=c.concat(s).join("/");return Et((o==="/"?"":"/")+l,r)}const u=c.concat(s),i=[];return u.forEach(l=>{l===".."?i.pop():l!=="."&&i.push(l)}),Et("/"+i.join("/"),r)},zt=(t,e)=>`${Pt(e==="/"?t:`${Pt(t)}/${Pt(e)}`)}/`,Xe=t=>!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey),pe=()=>typeof window<"u"&&"document"in window&&"location"in window,Ze=t=>({active:t&4}),Kt=t=>({active:!!t[2]});function tn(t){let e,n,r,o;const s=t[17].default,c=mt(s,t,t[16],Kt);let u=[{href:t[0]},{"aria-current":t[2]},t[1],t[6]],i={};for(let l=0;l<u.length;l+=1)i=H(i,u[l]);return{c(){e=R("a"),c&&c.c(),Dt(e,i)},m(l,a){O(l,e,a),c&&c.m(e,null),n=!0,r||(o=ie(e,"click",t[5]),r=!0)},p(l,[a]){c&&c.p&&(!n||a&65540)&&bt(c,s,l,l[16],n?gt(s,l[16],a,Ze):yt(l[16]),Kt),Dt(e,i=At(u,[(!n||a&1)&&{href:l[0]},(!n||a&4)&&{"aria-current":l[2]},a&2&&l[1],a&64&&l[6]]))},i(l){n||(v(c,l),n=!0)},o(l){S(c,l),n=!1},d(l){l&&E(e),c&&c.d(l),r=!1,o()}}}function en(t,e,n){let r;const o=["to","replace","state","getProps","preserveScroll"];let s=It(e,o),c,u,{$$slots:i={},$$scope:l}=e,{to:a="#"}=e,{replace:f=!1}=e,{state:h={}}=e,{getProps:g=()=>({})}=e,{preserveScroll:d=!1}=e;const m=Q($t);U(t,m,k=>n(14,c=k));const{base:_}=Q(pt);U(t,_,k=>n(15,u=k));const{navigate:b}=Q(_e),C=Le();let P,A,z,ut;const kt=k=>{if(C("click",k),Xe(k)){k.preventDefault();const p=c.pathname===P||f;b(P,{state:h,replace:p,preserveScroll:d})}};return t.$$set=k=>{e=H(H({},e),Ct(k)),n(6,s=It(e,o)),"to"in k&&n(7,a=k.to),"replace"in k&&n(8,f=k.replace),"state"in k&&n(9,h=k.state),"getProps"in k&&n(10,g=k.getProps),"preserveScroll"in k&&n(11,d=k.preserveScroll),"$$scope"in k&&n(16,l=k.$$scope)},t.$$.update=()=>{t.$$.dirty&32896&&n(0,P=Je(a,u.uri)),t.$$.dirty&16385&&n(12,A=c.pathname.startsWith(P)),t.$$.dirty&16385&&n(13,z=P===c.pathname),t.$$.dirty&8192&&n(2,r=z?"page":void 0),n(1,ut=g({location:c,href:P,isPartiallyCurrent:A,isCurrent:z,existingProps:s}))},[P,ut,r,m,_,kt,s,a,f,h,g,d,A,z,c,u,l,i]}class Vt extends rt{constructor(e){super(),nt(this,e,en,tn,x,{to:7,replace:8,state:9,getProps:10,preserveScroll:11})}}const nn=t=>({params:t&4}),Wt=t=>({params:t[2]});function Yt(t){let e,n,r,o;const s=[on,rn],c=[];function u(i,l){return i[0]?0:1}return e=u(t),n=c[e]=s[e](t),{c(){n.c(),r=X()},m(i,l){c[e].m(i,l),O(i,r,l),o=!0},p(i,l){let a=e;e=u(i),e===a?c[e].p(i,l):(tt(),S(c[a],1,1,()=>{c[a]=null}),et(),n=c[e],n?n.p(i,l):(n=c[e]=s[e](i),n.c()),v(n,1),n.m(r.parentNode,r))},i(i){o||(v(n),o=!0)},o(i){S(n),o=!1},d(i){i&&E(r),c[e].d(i)}}}function rn(t){let e;const n=t[8].default,r=mt(n,t,t[7],Wt);return{c(){r&&r.c()},m(o,s){r&&r.m(o,s),e=!0},p(o,s){r&&r.p&&(!e||s&132)&&bt(r,n,o,o[7],e?gt(n,o[7],s,nn):yt(o[7]),Wt)},i(o){e||(v(r,o),e=!0)},o(o){S(r,o),e=!1},d(o){r&&r.d(o)}}}function on(t){let e,n,r,o={ctx:t,current:null,token:null,hasCatch:!1,pending:ln,then:cn,catch:sn,value:12,blocks:[,,,]};return Bt(n=t[0],o),{c(){e=X(),o.block.c()},m(s,c){O(s,e,c),o.block.m(s,o.anchor=c),o.mount=()=>e.parentNode,o.anchor=e,r=!0},p(s,c){t=s,o.ctx=t,c&1&&n!==(n=t[0])&&Bt(n,o)||De(o,t,c)},i(s){r||(v(o.block),r=!0)},o(s){for(let c=0;c<3;c+=1){const u=o.blocks[c];S(u)}r=!1},d(s){s&&E(e),o.block.d(s),o.token=null,o=null}}}function sn(t){return{c:y,m:y,p:y,i:y,o:y,d:y}}function cn(t){var u;let e,n,r;const o=[t[2],t[3]];var s=((u=t[12])==null?void 0:u.default)||t[12];function c(i,l){let a={};if(l!==void 0&&l&12)a=At(o,[l&4&&at(i[2]),l&8&&at(i[3])]);else for(let f=0;f<o.length;f+=1)a=H(a,o[f]);return{props:a}}return s&&(e=Ft(s,c(t))),{c(){e&&B(e.$$.fragment),n=X()},m(i,l){e&&D(e,i,l),O(i,n,l),r=!0},p(i,l){var a;if(l&1&&s!==(s=((a=i[12])==null?void 0:a.default)||i[12])){if(e){tt();const f=e;S(f.$$.fragment,1,0,()=>{F(f,1)}),et()}s?(e=Ft(s,c(i,l)),B(e.$$.fragment),v(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else if(s){const f=l&12?At(o,[l&4&&at(i[2]),l&8&&at(i[3])]):{};e.$set(f)}},i(i){r||(e&&v(e.$$.fragment,i),r=!0)},o(i){e&&S(e.$$.fragment,i),r=!1},d(i){i&&E(n),e&&F(e,i)}}}function ln(t){return{c:y,m:y,p:y,i:y,o:y,d:y}}function un(t){let e,n,r=t[1]&&t[1].route===t[5]&&Yt(t);return{c(){r&&r.c(),e=X()},m(o,s){r&&r.m(o,s),O(o,e,s),n=!0},p(o,[s]){o[1]&&o[1].route===o[5]?r?(r.p(o,s),s&2&&v(r,1)):(r=Yt(o),r.c(),v(r,1),r.m(e.parentNode,e)):r&&(tt(),S(r,1,1,()=>{r=null}),et())},i(o){n||(v(r),n=!0)},o(o){S(r),n=!1},d(o){o&&E(e),r&&r.d(o)}}}function an(t,e,n){let r,{$$slots:o={},$$scope:s}=e,{path:c=""}=e,{component:u=null}=e,i={},l={};const{registerRoute:a,unregisterRoute:f,activeRoute:h}=Q(pt);U(t,h,d=>n(1,r=d));const g={path:c,default:c===""};return a(g),Re(()=>{f(g)}),t.$$set=d=>{n(11,e=H(H({},e),Ct(d))),"path"in d&&n(6,c=d.path),"component"in d&&n(0,u=d.component),"$$scope"in d&&n(7,s=d.$$scope)},t.$$.update=()=>{if(r&&r.route===g){n(2,i=r.params);const{component:d,path:m,..._}=e;n(3,l=_),d&&(d.toString().startsWith("class ")?n(0,u=d):n(0,u=d())),pe()&&!r.preserveScroll&&(window==null||window.scrollTo(0,0))}},e=Ct(e),[u,r,i,l,h,g,c,s,o]}class fn extends rt{constructor(e){super(),nt(this,e,an,un,x,{path:6,component:0})}}const V=[];function dn(t,e){return{subscribe:st(t,e).subscribe}}function st(t,e=y){let n;const r=new Set;function o(u){if(x(t,u)&&(t=u,n)){const i=!V.length;for(const l of r)l[1](),V.push(l,t);if(i){for(let l=0;l<V.length;l+=2)V[l][0](V[l+1]);V.length=0}}}function s(u){o(u(t))}function c(u,i=y){const l=[u,i];return r.add(l),r.size===1&&(n=e(o,s)||y),u(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:o,update:s,subscribe:c}}function _n(t,e,n){const r=!Array.isArray(t),o=r?[t]:t;if(!o.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=e.length<2;return dn(n,(c,u)=>{let i=!1;const l=[];let a=0,f=y;const h=()=>{if(a)return;f();const d=e(r?l[0]:l,c,u);s?c(d):f=lt(d)?d:y},g=o.map((d,m)=>te(d,_=>{l[m]=_,a&=~(1<<m),i&&h()},()=>{a|=1<<m}));return i=!0,h(),function(){q(g),f(),i=!1}})}const Ot=t=>({...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}),hn=t=>{const e=[];let n=Ot(t);return{get location(){return n},listen(r){e.push(r);const o=()=>{n=Ot(t),r({location:n,action:"POP"})};return t.addEventListener("popstate",o),()=>{t.removeEventListener("popstate",o);const s=e.indexOf(r);e.splice(s,1)}},navigate(r,{state:o,replace:s=!1,preserveScroll:c=!1,blurActiveElement:u=!0}={}){o={...o,key:Date.now()+""};try{s?t.history.replaceState(o,"",r):t.history.pushState(o,"",r)}catch{t.location[s?"replace":"assign"](r)}n=Ot(t),e.forEach(i=>i({location:n,action:"PUSH",preserveScroll:c})),u&&document.activeElement.blur()}}},pn=(t="/")=>{let e=0;const n=[{pathname:t,search:""}],r=[];return{get location(){return n[e]},addEventListener(o,s){},removeEventListener(o,s){},history:{get entries(){return n},get index(){return e},get state(){return r[e]},pushState(o,s,c){const[u,i=""]=c.split("?");e++,n.push({pathname:u,search:i}),r.push(o)},replaceState(o,s,c){const[u,i=""]=c.split("?");n[e]={pathname:u,search:i},r[e]=o}}}},mn=hn(pe()?window:pn()),gn=t=>({route:t&4,location:t&2}),Qt=t=>({route:t[2]&&t[2].uri,location:t[1]}),bn=t=>({route:t&4,location:t&2}),Gt=t=>({route:t[2]&&t[2].uri,location:t[1]});function yn(t){let e;const n=t[15].default,r=mt(n,t,t[14],Qt);return{c(){r&&r.c()},m(o,s){r&&r.m(o,s),e=!0},p(o,s){r&&r.p&&(!e||s&16390)&&bt(r,n,o,o[14],e?gt(n,o[14],s,gn):yt(o[14]),Qt)},i(o){e||(v(r,o),e=!0)},o(o){S(r,o),e=!1},d(o){r&&r.d(o)}}}function kn(t){let e=t[1].pathname,n,r,o=Jt(t);return{c(){o.c(),n=X()},m(s,c){o.m(s,c),O(s,n,c),r=!0},p(s,c){c&2&&x(e,e=s[1].pathname)?(tt(),S(o,1,1,y),et(),o=Jt(s),o.c(),v(o,1),o.m(n.parentNode,n)):o.p(s,c)},i(s){r||(v(o),r=!0)},o(s){S(o),r=!1},d(s){s&&E(n),o.d(s)}}}function Jt(t){let e,n,r,o;const s=t[15].default,c=mt(s,t,t[14],Gt);return{c(){e=R("div"),c&&c.c()},m(u,i){O(u,e,i),c&&c.m(e,null),o=!0},p(u,i){c&&c.p&&(!o||i&16390)&&bt(c,s,u,u[14],o?gt(s,u[14],i,bn):yt(u[14]),Gt)},i(u){o||(v(c,u),u&&J(()=>{o&&(r&&r.end(1),n=je(e,t[3],{}),n.start())}),o=!0)},o(u){S(c,u),n&&n.invalidate(),u&&(r=Ie(e,t[3],{})),o=!1},d(u){u&&E(e),c&&c.d(u),u&&r&&r.end()}}}function vn(t){let e,n,r,o;const s=[kn,yn],c=[];function u(i,l){return i[0]?0:1}return e=u(t),n=c[e]=s[e](t),{c(){n.c(),r=X()},m(i,l){c[e].m(i,l),O(i,r,l),o=!0},p(i,[l]){let a=e;e=u(i),e===a?c[e].p(i,l):(tt(),S(c[a],1,1,()=>{c[a]=null}),et(),n=c[e],n?n.p(i,l):(n=c[e]=s[e](i),n.c()),v(n,1),n.m(r.parentNode,r))},i(i){o||(v(n),o=!0)},o(i){S(n),o=!1},d(i){i&&E(r),c[e].d(i)}}}function wn(t,e,n){let r,o,s,c,{$$slots:u={},$$scope:i}=e,{basepath:l="/"}=e,{url:a=null}=e,{viewtransition:f=null}=e,{history:h=mn}=e;const g=(p,L,$)=>{const N=f($);return typeof(N==null?void 0:N.fn)=="function"?N.fn(p,N):N};wt(_e,h);const d=Q($t),m=Q(pt),_=st([]);U(t,_,p=>n(12,o=p));const b=st(null);U(t,b,p=>n(2,c=p));let C=!1;const P=d||st(a?{pathname:a}:h.location);U(t,P,p=>n(1,r=p));const A=m?m.routerBase:st({path:l,uri:l});U(t,A,p=>n(13,s=p));const z=_n([A,b],([p,L])=>{if(!L)return p;const{path:$}=p,{route:N,uri:me}=L;return{path:N.default?$:N.path.replace(/\*.*$/,""),uri:me}}),ut=p=>{const{path:L}=s;let{path:$}=p;if(p._path=$,p.path=zt(L,$),typeof window>"u"){if(C)return;const N=qt([p],r.pathname);N&&(b.set(N),C=!0)}else _.update(N=>[...N,p])},kt=p=>{_.update(L=>L.filter($=>$!==p))};let k=!1;return d||(Ne(()=>h.listen(L=>{n(11,k=L.preserveScroll||!1),P.set(L.location)})),wt($t,P)),wt(pt,{activeRoute:b,base:A,routerBase:z,registerRoute:ut,unregisterRoute:kt}),t.$$set=p=>{"basepath"in p&&n(8,l=p.basepath),"url"in p&&n(9,a=p.url),"viewtransition"in p&&n(0,f=p.viewtransition),"history"in p&&n(10,h=p.history),"$$scope"in p&&n(14,i=p.$$scope)},t.$$.update=()=>{if(t.$$.dirty&8192){const{path:p}=s;_.update(L=>L.map($=>Object.assign($,{path:zt(p,$._path)})))}if(t.$$.dirty&6146){const p=qt(o,r.pathname);b.set(p&&{...p,preserveScroll:k})}},[f,r,c,g,_,b,P,A,l,a,h,k,o,s,i,u]}class Sn extends rt{constructor(e){super(),nt(this,e,wn,vn,x,{basepath:8,url:9,viewtransition:0,history:10})}}function Pn(t){let e,n,r,o,s,c,u;return{c(){e=R("div"),n=R("h1"),n.textContent="About Us",r=T(),o=R("p"),s=M("Welcome to the About page, "),c=M(t[0]),u=M("!")},m(i,l){O(i,e,l),w(e,n),w(e,r),w(e,o),w(o,s),w(o,c),w(o,u)},p(i,[l]){l&1&&le(c,i[0])},i:y,o:y,d(i){i&&E(e)}}}function En(t,e,n){let{name:r="Your Name"}=e;return t.$$set=o=>{"name"in o&&n(0,r=o.name)},[r]}class On extends rt{constructor(e){super(),nt(this,e,En,Pn,x,{name:0})}}function Cn(t){let e;return{c(){e=M("Home")},m(n,r){O(n,e,r)},d(n){n&&E(e)}}}function Nn(t){let e;return{c(){e=M("About")},m(n,r){O(n,e,r)},d(n){n&&E(e)}}}function Rn(t){let e;return{c(){e=M("about")},m(n,r){O(n,e,r)},d(n){n&&E(e)}}}function Ln(t){let e,n,r,o,s,c,u;return n=new Vt({props:{to:"/",$$slots:{default:[Cn]},$$scope:{ctx:t}}}),o=new Vt({props:{to:"/about",$$slots:{default:[Nn]},$$scope:{ctx:t}}}),c=new fn({props:{path:"/about",component:On,$$slots:{default:[Rn]},$$scope:{ctx:t}}}),{c(){e=R("nav"),B(n.$$.fragment),r=T(),B(o.$$.fragment),s=T(),B(c.$$.fragment)},m(i,l){O(i,e,l),D(n,e,null),w(e,r),D(o,e,null),w(e,s),D(c,e,null),u=!0},p(i,l){const a={};l&1&&(a.$$scope={dirty:l,ctx:i}),n.$set(a);const f={};l&1&&(f.$$scope={dirty:l,ctx:i}),o.$set(f);const h={};l&1&&(h.$$scope={dirty:l,ctx:i}),c.$set(h)},i(i){u||(v(n.$$.fragment,i),v(o.$$.fragment,i),v(c.$$.fragment,i),u=!0)},o(i){S(n.$$.fragment,i),S(o.$$.fragment,i),S(c.$$.fragment,i),u=!1},d(i){i&&E(e),F(n),F(o),F(c)}}}function An(t){let e,n,r,o,s,c,u,i,l,a,f,h,g,d,m;return r=new Sn({props:{$$slots:{default:[Ln]},$$scope:{ctx:t}}}),a=new ze({}),{c(){e=T(),n=R("main"),B(r.$$.fragment),o=T(),s=R("div"),s.innerHTML=`<a href="https://vitejs.dev" target="_blank" rel="noreferrer"><img src="${Be}" class="logo svelte-11cv5lq" alt="Vite Logo"/></a> <a href="https://svelte.dev" target="_blank" rel="noreferrer"><img src="${Ue}" class="logo svelte svelte-11cv5lq" alt="Svelte Logo"/></a>`,c=T(),u=R("h1"),u.textContent="Vite + Svelte",i=T(),l=R("div"),B(a.$$.fragment),f=T(),h=R("p"),h.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!',g=T(),d=R("p"),d.textContent="Click on the Vite and Svelte logos to learn more",document.title="new page",Nt(l,"class","card"),Nt(d,"class","read-the-docs svelte-11cv5lq")},m(_,b){O(_,e,b),O(_,n,b),D(r,n,null),w(n,o),w(n,s),w(n,c),w(n,u),w(n,i),w(n,l),D(a,l,null),w(n,f),w(n,h),w(n,g),w(n,d),m=!0},p(_,[b]){const C={};b&1&&(C.$$scope={dirty:b,ctx:_}),r.$set(C)},i(_){m||(v(r.$$.fragment,_),v(a.$$.fragment,_),m=!0)},o(_){S(r.$$.fragment,_),S(a.$$.fragment,_),m=!1},d(_){_&&(E(e),E(n)),F(r),F(a)}}}class $n extends rt{constructor(e){super(),nt(this,e,null,An,x,{})}}new $n({target:document.getElementById("app")});
