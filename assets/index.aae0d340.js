(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();function E(){}const Et=e=>e;function ce(e,t){for(const n in t)e[n]=t[n];return e}function Ft(e){return e()}function Ut(){return Object.create(null)}function G(e){e.forEach(Ft)}function Ct(e){return typeof e=="function"}function J(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ct;function Y(e,t){return ct||(ct=document.createElement("a")),ct.href=t,e===ct.href}function ue(e){return Object.keys(e).length===0}function Ht(e,t,n,s){if(e){const l=Kt(e,t,n,s);return e[0](l)}}function Kt(e,t,n,s){return e[1]&&s?ce(n.ctx.slice(),e[1](s(t))):n.ctx}function Wt(e,t,n,s){if(e[2]&&s){const l=e[2](s(n));if(t.dirty===void 0)return l;if(typeof l=="object"){const r=[],i=Math.max(t.dirty.length,l.length);for(let a=0;a<i;a+=1)r[a]=t.dirty[a]|l[a];return r}return t.dirty|l}return t.dirty}function xt(e,t,n,s,l,r){if(l){const i=Kt(t,n,s,r);e.p(i,l)}}function Gt(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let s=0;s<n;s++)t[s]=-1;return t}return-1}const Jt=typeof window<"u";let Qt=Jt?()=>window.performance.now():()=>Date.now(),St=Jt?e=>requestAnimationFrame(e):E;const Z=new Set;function Vt(e){Z.forEach(t=>{t.c(e)||(Z.delete(t),t.f())}),Z.size!==0&&St(Vt)}function Xt(e){let t;return Z.size===0&&St(Vt),{promise:new Promise(n=>{Z.add(t={c:e,f:n})}),abort(){Z.delete(t)}}}function u(e,t){e.appendChild(t)}function Yt(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function fe(e){const t=p("style");return _e(Yt(e),t),t.sheet}function _e(e,t){u(e.head||e,t)}function C(e,t,n){e.insertBefore(t,n||null)}function w(e){e.parentNode.removeChild(e)}function de(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function k(e){return document.createTextNode(e)}function v(){return k(" ")}function pe(){return k("")}function Lt(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function me(e){return function(t){return t.preventDefault(),e.call(this,t)}}function d(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ge(e){return Array.from(e.childNodes)}function z(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function jt(e,t){e.value=t==null?"":t}function ut(e,t,n,s){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}function Bt(e,t,n){e.classList[n?"add":"remove"](t)}function Zt(e,t,{bubbles:n=!1,cancelable:s=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(e,n,s,t),l}const pt=new Map;let mt=0;function he(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function ve(e,t){const n={stylesheet:fe(t),rules:{}};return pt.set(e,n),n}function te(e,t,n,s,l,r,i,a=0){const c=16.666/s;let o=`{
`;for(let y=0;y<=1;y+=c){const R=t+(n-t)*r(y);o+=y*100+`%{${i(R,1-R)}}
`}const f=o+`100% {${i(n,1-n)}}
}`,_=`__svelte_${he(f)}_${a}`,m=Yt(e),{stylesheet:g,rules:h}=pt.get(m)||ve(m,e);h[_]||(h[_]=!0,g.insertRule(`@keyframes ${_} ${f}`,g.cssRules.length));const $=e.style.animation||"";return e.style.animation=`${$?`${$}, `:""}${_} ${s}ms linear ${l}ms 1 both`,mt+=1,_}function wt(e,t){const n=(e.style.animation||"").split(", "),s=n.filter(t?r=>r.indexOf(t)<0:r=>r.indexOf("__svelte")===-1),l=n.length-s.length;l&&(e.style.animation=s.join(", "),mt-=l,mt||be())}function be(){St(()=>{mt||(pt.forEach(e=>{const{stylesheet:t}=e;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.rules={}}),pt.clear())})}let it;function ot(e){it=e}function ye(){if(!it)throw new Error("Function called outside component initialization");return it}function $e(){const e=ye();return(t,n,{cancelable:s=!1}={})=>{const l=e.$$.callbacks[t];if(l){const r=Zt(t,n,{cancelable:s});return l.slice().forEach(i=>{i.call(e,r)}),!r.defaultPrevented}return!0}}const rt=[],Rt=[],_t=[],Pt=[],we=Promise.resolve();let kt=!1;function ke(){kt||(kt=!0,we.then(ee))}function K(e){_t.push(e)}const $t=new Set;let ft=0;function ee(){const e=it;do{for(;ft<rt.length;){const t=rt[ft];ft++,ot(t),Ee(t.$$)}for(ot(null),rt.length=0,ft=0;Rt.length;)Rt.pop()();for(let t=0;t<_t.length;t+=1){const n=_t[t];$t.has(n)||($t.add(n),n())}_t.length=0}while(rt.length);for(;Pt.length;)Pt.pop()();kt=!1,$t.clear(),ot(e)}function Ee(e){if(e.fragment!==null){e.update(),G(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(K)}}let lt;function ne(){return lt||(lt=Promise.resolve(),lt.then(()=>{lt=null})),lt}function gt(e,t,n){e.dispatchEvent(Zt(`${t?"intro":"outro"}${n}`))}const dt=new Set;let T;function ht(){T={r:0,c:[],p:T}}function vt(){T.r||G(T.c),T=T.p}function b(e,t){e&&e.i&&(dt.delete(e),e.i(t))}function U(e,t,n,s){if(e&&e.o){if(dt.has(e))return;dt.add(e),T.c.push(()=>{dt.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}const se={duration:0};function le(e,t,n){let s=t(e,n),l=!1,r,i,a=0;function c(){r&&wt(e,r)}function o(){const{delay:_=0,duration:m=300,easing:g=Et,tick:h=E,css:$}=s||se;$&&(r=te(e,0,1,m,_,g,$,a++)),h(0,1);const y=Qt()+_,R=y+m;i&&i.abort(),l=!0,K(()=>gt(e,!0,"start")),i=Xt(O=>{if(l){if(O>=R)return h(1,0),gt(e,!0,"end"),c(),l=!1;if(O>=y){const P=g((O-y)/m);h(P,1-P)}}return l})}let f=!1;return{start(){f||(f=!0,wt(e),Ct(s)?(s=s(),ne().then(o)):o())},invalidate(){f=!1},end(){l&&(c(),l=!1)}}}function re(e,t,n){let s=t(e,n),l=!0,r;const i=T;i.r+=1;function a(){const{delay:c=0,duration:o=300,easing:f=Et,tick:_=E,css:m}=s||se;m&&(r=te(e,1,0,o,c,f,m));const g=Qt()+c,h=g+o;K(()=>gt(e,!1,"start")),Xt($=>{if(l){if($>=h)return _(0,1),gt(e,!1,"end"),--i.r||G(i.c),!1;if($>=g){const y=f(($-g)/o);_(1-y,y)}}return l})}return Ct(s)?ne().then(()=>{s=s(),a()}):a(),{end(c){c&&s.tick&&s.tick(1,0),l&&(r&&wt(e,r),l=!1)}}}function tt(e){e&&e.c()}function W(e,t,n,s){const{fragment:l,on_mount:r,on_destroy:i,after_update:a}=e.$$;l&&l.m(t,n),s||K(()=>{const c=r.map(Ft).filter(Ct);i?i.push(...c):G(c),e.$$.on_mount=[]}),a.forEach(K)}function x(e,t){const n=e.$$;n.fragment!==null&&(G(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ce(e,t){e.$$.dirty[0]===-1&&(rt.push(e),ke(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Q(e,t,n,s,l,r,i,a=[-1]){const c=it;ot(e);const o=e.$$={fragment:null,ctx:null,props:r,update:E,not_equal:l,bound:Ut(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Ut(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};i&&i(o.root);let f=!1;if(o.ctx=n?n(e,t.props||{},(_,m,...g)=>{const h=g.length?g[0]:m;return o.ctx&&l(o.ctx[_],o.ctx[_]=h)&&(!o.skip_bound&&o.bound[_]&&o.bound[_](h),f&&Ce(e,_)),m}):[],o.update(),f=!0,G(o.before_update),o.fragment=s?s(o.ctx):!1,t.target){if(t.hydrate){const _=ge(t.target);o.fragment&&o.fragment.l(_),_.forEach(w)}else o.fragment&&o.fragment.c();t.intro&&b(e.$$.fragment),W(e,t.target,t.anchor,t.customElement),ee()}ot(c)}class V{$destroy(){x(this,1),this.$destroy=E}$on(t,n){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}$set(t){this.$$set&&!ue(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Se(e){const t=e-1;return t*t*t+1}function oe(e){const t=Math.cos(e*Math.PI*.5);return Math.abs(t)<1e-14?1:1-t}function ie(e,{delay:t=0,duration:n=400,easing:s=Et}={}){const l=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:s,css:r=>`opacity: ${r*l}`}}function ae(e,{delay:t=0,duration:n=400,easing:s=Se,x:l=0,y:r=0,opacity:i=0}={}){const a=getComputedStyle(e),c=+a.opacity,o=a.transform==="none"?"":a.transform,f=c*(1-i);return{delay:t,duration:n,easing:s,css:(_,m)=>`
			transform: ${o} translate(${(1-_)*l}px, ${(1-_)*r}px);
			opacity: ${c-f*m}`}}const Ue=async e=>{const t=await fetch(`https://api.github.com/users/${e}`),n=await t.json();return t.ok?{status:t.status,data:{avatar_url:n.avatar_url,login:n.login,name:n.name,public_repos:n.public_repos,followers:n.followers,html_url:n.html_url}}:{status:t.status,data:null}},Le=async e=>{const n=await fetch(`https://api.github.com/users/${e}/repos?sort=created&per_page=5`),s=await n.json();return n.ok?{status:n.status,data:s.map(l=>({name:l.name,html_url:l.html_url,description:l.description,watchers_count:l.watchers_count,stargazers_count:l.stargazers_count,language:l.language,created_at:l.created_at}))}:{status:n.status,data:null}},je="/assets/lupa.37075f03.svg";const Be=e=>({}),Dt=e=>({}),Re=e=>({}),Nt=e=>({});function Pe(e){let t;return{c(){t=k("Buscar")},m(n,s){C(n,t,s)},d(n){n&&w(t)}}}function Ot(e){let t;const n=e[2].icone,s=Ht(n,e,e[1],Dt),l=s||De();return{c(){l&&l.c()},m(r,i){l&&l.m(r,i),t=!0},p(r,i){s&&s.p&&(!t||i&2)&&xt(s,n,r,r[1],t?Wt(n,r[1],i,Be):Gt(r[1]),Dt)},i(r){t||(b(l,r),t=!0)},o(r){U(l,r),t=!1},d(r){l&&l.d(r)}}}function De(e){let t,n;return{c(){t=p("img"),Y(t.src,n=je)||d(t,"src",n),d(t,"alt","\xEDcone de lupa")},m(s,l){C(s,t,l)},p:E,d(s){s&&w(t)}}}function Ne(e){let t,n,s;const l=e[2].label,r=Ht(l,e,e[1],Nt),i=r||Pe();let a=!e[0]&&Ot(e);return{c(){t=p("button"),i&&i.c(),n=v(),a&&a.c(),d(t,"type","submit"),d(t,"class","botao svelte-17culla")},m(c,o){C(c,t,o),i&&i.m(t,null),u(t,n),a&&a.m(t,null),s=!0},p(c,[o]){r&&r.p&&(!s||o&2)&&xt(r,l,c,c[1],s?Wt(l,c[1],o,Re):Gt(c[1]),Nt),c[0]?a&&(ht(),U(a,1,1,()=>{a=null}),vt()):a?(a.p(c,o),o&1&&b(a,1)):(a=Ot(c),a.c(),b(a,1),a.m(t,null))},i(c){s||(b(i,c),b(a),s=!0)},o(c){U(i,c),U(a),s=!1},d(c){c&&w(t),i&&i.d(c),a&&a.d()}}}function Oe(e,t,n){let{$$slots:s={},$$scope:l}=t,{loading:r=!1}=t;return e.$$set=i=>{"loading"in i&&n(0,r=i.loading),"$$scope"in i&&n(1,l=i.$$scope)},[r,l,s]}class Ae extends V{constructor(t){super(),Q(this,t,Oe,Ne,J,{loading:0})}}function Me(e){let t;return{c(){t=p("div"),t.innerHTML='<svg class="circular-loader svelte-wchhd6" viewBox="22 22 44 44" fill="currentColor" stroke="currentColor"><circle class="loader-path svelte-wchhd6" cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6"></circle></svg>',d(t,"class","loader svelte-wchhd6")},m(n,s){C(n,t,s)},p:E,i:E,o:E,d(n){n&&w(t)}}}function Ie(e){return[]}class ze extends V{constructor(t){super(),Q(this,t,Ie,Me,J,{})}}function At(e){let t,n,s,l;return{c(){t=p("span"),t.textContent="Usu\xE1rio n\xE3o encontrado!",d(t,"class","erro svelte-6sa8bg")},m(r,i){C(r,t,i),l=!0},p(r,i){},i(r){l||(K(()=>{s&&s.end(1),n=le(t,ae,{easing:oe}),n.start()}),l=!0)},o(r){n&&n.invalidate(),s=re(t,ie,{}),l=!1},d(r){r&&w(t),r&&s&&s.end()}}}function Te(e){let t;return{c(){t=k("Buscar")},m(n,s){C(n,t,s)},i:E,o:E,d(n){n&&w(t)}}}function qe(e){let t,n;return t=new ze({}),{c(){tt(t.$$.fragment)},m(s,l){W(t,s,l),n=!0},i(s){n||(b(t.$$.fragment,s),n=!0)},o(s){U(t.$$.fragment,s),n=!1},d(s){x(t,s)}}}function Fe(e){let t,n,s,l;const r=[qe,Te],i=[];function a(c,o){return c[2]?0:1}return t=a(e),n=i[t]=r[t](e),{c(){n.c(),s=pe()},m(c,o){i[t].m(c,o),C(c,s,o),l=!0},p(c,o){let f=t;t=a(c),t!==f&&(ht(),U(i[f],1,1,()=>{i[f]=null}),vt(),n=i[t],n||(n=i[t]=r[t](c),n.c()),b(n,1),n.m(s.parentNode,s))},i(c){l||(b(n),l=!0)},o(c){U(n),l=!1},d(c){i[t].d(c),c&&w(s)}}}function He(e){let t,n,s,l,r,i,a,c,o=e[1]===404&&At();return r=new Ae({props:{loading:e[2],$$slots:{label:[Fe]},$$scope:{ctx:e}}}),{c(){t=p("form"),n=p("input"),s=v(),o&&o.c(),l=v(),tt(r.$$.fragment),d(n,"type","text"),d(n,"class","input svelte-6sa8bg"),d(n,"placeholder","Pesquisar usu\xE1rio"),Bt(n,"erro-input",e[1]===404),d(t,"class","svelte-6sa8bg")},m(f,_){C(f,t,_),u(t,n),jt(n,e[0]),u(t,s),o&&o.m(t,null),u(t,l),W(r,t,null),i=!0,a||(c=[Lt(n,"input",e[4]),Lt(t,"submit",me(e[3]))],a=!0)},p(f,[_]){_&1&&n.value!==f[0]&&jt(n,f[0]),_&2&&Bt(n,"erro-input",f[1]===404),f[1]===404?o?_&2&&b(o,1):(o=At(),o.c(),b(o,1),o.m(t,l)):o&&(ht(),U(o,1,1,()=>{o=null}),vt());const m={};_&4&&(m.loading=f[2]),_&68&&(m.$$scope={dirty:_,ctx:f}),r.$set(m)},i(f){i||(b(o),b(r.$$.fragment,f),i=!0)},o(f){U(o),U(r.$$.fragment,f),i=!1},d(f){f&&w(t),o&&o.d(),x(r),a=!1,G(c)}}}function Ke(e,t,n){let{valorInput:s=""}=t,l=null,r=!1;const i=$e(),a=async()=>{n(2,r=!0);const{data:o,status:f}=await Ue(s),{data:_,status:m}=await Le(s);if(o&&_){const g={avatar_url:o.avatar_url,login:o.login,name:o.name,public_repos:o.public_repos,followers:o.followers,html_url:o.html_url,repositories:_};n(1,l=null),i("onUserUpdated",g),n(2,r=!1)}else n(1,l=f),i("onUserUpdated",null),n(2,r=!1)};function c(){s=this.value,n(0,s)}return e.$$set=o=>{"valorInput"in o&&n(0,s=o.valorInput)},[s,l,r,a,c]}class We extends V{constructor(t){super(),Q(this,t,Ke,He,J,{valorInput:0})}}function xe(e){let t;return{c(){t=p("h1"),t.textContent="Svelte Perfis",d(t,"class","titulo svelte-10g3pho")},m(n,s){C(n,t,s)},p:E,i:E,o:E,d(n){n&&w(t)}}}class Ge extends V{constructor(t){super(),Q(this,t,null,xe,J,{})}}const Je="/assets/github.bb361e72.svg",Qe="/assets/plus.bd1fb5b3.svg",Ve="/assets/copy.0fc5fff7.svg";function Xe(e){let t,n,s,l,r,i,a,c,o,f,_,m;return{c(){t=p("div"),n=p("div"),n.innerHTML=`<span class="acao svelte-11r59lc"></span> 
    <span class="acao svelte-11r59lc"></span> 
    <span class="acao svelte-11r59lc"></span>`,s=v(),l=p("div"),r=p("img"),a=v(),c=p("img"),f=v(),_=p("img"),d(n,"class","barra-superior svelte-11r59lc"),Y(r.src,i=Je)||d(r,"src",i),d(r,"alt","\xEDcone github"),d(r,"class","svelte-11r59lc"),Y(c.src,o=Qe)||d(c,"src",o),d(c,"alt","\xEDcone mais"),d(c,"class","svelte-11r59lc"),Y(_.src,m=Ve)||d(_,"src",m),d(_,"alt","\xEDcone copy"),d(_,"class","svelte-11r59lc"),d(l,"class","icones svelte-11r59lc"),ut(t,"display","flex",!1),ut(t,"justify-content","space-between",!1),ut(t,"align-items","center",!1),ut(t,"flex-wrap","wrap",!1)},m(g,h){C(g,t,h),u(t,n),u(t,s),u(t,l),u(l,r),u(l,a),u(l,c),u(l,f),u(l,_)},p:E,i:E,o:E,d(g){g&&w(t)}}}class Ye extends V{constructor(t){super(),Q(this,t,null,Xe,J,{})}}function Mt(e,t,n){const s=e.slice();return s[2]=t[n],s}function It(e){let t,n,s,l=e[0].name+"",r;return{c(){t=p("div"),n=k("Nome: "),s=p("span"),r=k(l),d(s,"class","svelte-t01af9"),d(t,"class","info svelte-t01af9")},m(i,a){C(i,t,a),u(t,n),u(t,s),u(s,r)},p(i,a){a&1&&l!==(l=i[0].name+"")&&z(r,l)},d(i){i&&w(t)}}}function zt(e){let t,n,s,l,r=e[0].repositories,i=[];for(let a=0;a<r.length;a+=1)i[a]=Tt(Mt(e,r,a));return{c(){t=p("div"),n=p("h2"),n.textContent="Reposit\xF3rios",s=v(),l=p("div");for(let a=0;a<i.length;a+=1)i[a].c();d(n,"class","titulo svelte-t01af9"),d(l,"class","svelte-t01af9"),d(t,"class","repositorios svelte-t01af9")},m(a,c){C(a,t,c),u(t,n),u(t,s),u(t,l);for(let o=0;o<i.length;o+=1)i[o].m(l,null)},p(a,c){if(c&1){r=a[0].repositories;let o;for(o=0;o<r.length;o+=1){const f=Mt(a,r,o);i[o]?i[o].p(f,c):(i[o]=Tt(f),i[o].c(),i[o].m(l,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=r.length}},d(a){a&&w(t),de(i,a)}}}function Tt(e){let t,n,s=e[2].name+"",l,r,i,a,c,o=(e[2].description?e[2].description:"Sem descri\xE7\xE3o.")+"",f,_,m,g,h=new Date(e[2].created_at).toLocaleString("pt-BR")+"",$,y,R,O,P=e[2].stargazers_count+"",X,q,A,F,H=e[2].watchers_count+"",M,et;return{c(){t=p("div"),n=p("a"),l=k(s),i=v(),a=p("p"),c=p("b"),c.textContent="Descri\xE7\xE3o: ",f=k(o),_=v(),m=p("p"),g=p("b"),g.textContent="Data de Cria\xE7\xE3o: ",$=k(h),y=v(),R=p("p"),O=p("b"),O.textContent="Stars: ",X=k(P),q=v(),A=p("p"),F=p("b"),F.textContent="Watching: ",M=k(H),et=v(),d(n,"href",r=e[2].html_url),d(n,"target","_blank"),d(n,"rel","noopener"),d(n,"class","repositorio-link svelte-t01af9"),d(a,"class","description svelte-t01af9"),d(t,"class","repositorio svelte-t01af9")},m(S,D){C(S,t,D),u(t,n),u(n,l),u(t,i),u(t,a),u(a,c),u(a,f),u(t,_),u(t,m),u(m,g),u(m,$),u(t,y),u(t,R),u(R,O),u(R,X),u(t,q),u(t,A),u(A,F),u(A,M),u(t,et)},p(S,D){D&1&&s!==(s=S[2].name+"")&&z(l,s),D&1&&r!==(r=S[2].html_url)&&d(n,"href",r),D&1&&o!==(o=(S[2].description?S[2].description:"Sem descri\xE7\xE3o.")+"")&&z(f,o),D&1&&h!==(h=new Date(S[2].created_at).toLocaleString("pt-BR")+"")&&z($,h),D&1&&P!==(P=S[2].stargazers_count+"")&&z(X,P),D&1&&H!==(H=S[2].watchers_count+"")&&z(M,H)},d(S){S&&w(t)}}}function Ze(e){let t,n,s,l,r,i,a,c,o,f,_,m,g,h,$,y=e[0].login+"",R,O,P,X,q,A=e[0].public_repos+"",F,H,M,et,S,D=e[0].followers+"",bt,at,nt,yt,st,I;n=new Ye({});let L=e[0].name&&It(e),j=e[1]&&zt(e);return{c(){t=p("section"),tt(n.$$.fragment),s=v(),l=p("div"),r=p("div"),i=p("a"),a=p("img"),f=v(),_=p("div"),L&&L.c(),m=v(),g=p("div"),h=k("Usu\xE1rio: "),$=p("span"),R=k(y),O=v(),P=p("div"),X=k("Reposit\xF3rios: "),q=p("span"),F=k(A),H=v(),M=p("div"),et=k("Seguidores: "),S=p("span"),bt=k(D),yt=v(),st=p("section"),j&&j.c(),Y(a.src,c=e[0].avatar_url)||d(a,"src",c),d(a,"alt",""),d(a,"class","foto-usuario svelte-t01af9"),d(i,"href",o=e[0].html_url),d(i,"target","_blank"),d(i,"rel","noopener"),d(r,"class","foto-container"),d($,"class","svelte-t01af9"),d(g,"class","info svelte-t01af9"),d(q,"class","svelte-t01af9"),d(P,"class","info svelte-t01af9"),d(S,"class","svelte-t01af9"),d(M,"class","info svelte-t01af9"),d(_,"class","detalhes-usuario svelte-t01af9"),d(l,"class","usuario svelte-t01af9"),d(t,"class","card-usuario svelte-t01af9")},m(B,N){C(B,t,N),W(n,t,null),u(t,s),u(t,l),u(l,r),u(r,i),u(i,a),u(l,f),u(l,_),L&&L.m(_,null),u(_,m),u(_,g),u(g,h),u(g,$),u($,R),u(_,O),u(_,P),u(P,X),u(P,q),u(q,F),u(_,H),u(_,M),u(M,et),u(M,S),u(S,bt),C(B,yt,N),C(B,st,N),j&&j.m(st,null),I=!0},p(B,[N]){e=B,(!I||N&1&&!Y(a.src,c=e[0].avatar_url))&&d(a,"src",c),(!I||N&1&&o!==(o=e[0].html_url))&&d(i,"href",o),e[0].name?L?L.p(e,N):(L=It(e),L.c(),L.m(_,m)):L&&(L.d(1),L=null),(!I||N&1)&&y!==(y=e[0].login+"")&&z(R,y),(!I||N&1)&&A!==(A=e[0].public_repos+"")&&z(F,A),(!I||N&1)&&D!==(D=e[0].followers+"")&&z(bt,D),e[1]?j?j.p(e,N):(j=zt(e),j.c(),j.m(st,null)):j&&(j.d(1),j=null)},i(B){I||(b(n.$$.fragment,B),K(()=>{nt&&nt.end(1),at=le(t,ae,{easing:oe}),at.start()}),I=!0)},o(B){U(n.$$.fragment,B),at&&at.invalidate(),nt=re(t,ie,{}),I=!1},d(B){B&&w(t),x(n),L&&L.d(),B&&nt&&nt.end(),B&&w(yt),B&&w(st),j&&j.d()}}}function tn(e,t,n){let s,{usuario:l}=t;return e.$$set=r=>{"usuario"in r&&n(0,l=r.usuario)},e.$$.update=()=>{e.$$.dirty&1&&n(1,s=Boolean(l.repositories.length))},[l,s]}class en extends V{constructor(t){super(),Q(this,t,tn,Ze,J,{usuario:0})}}function qt(e){let t,n;return t=new en({props:{usuario:e[0]}}),{c(){tt(t.$$.fragment)},m(s,l){W(t,s,l),n=!0},p(s,l){const r={};l&1&&(r.usuario=s[0]),t.$set(r)},i(s){n||(b(t.$$.fragment,s),n=!0)},o(s){U(t.$$.fragment,s),n=!1},d(s){x(t,s)}}}function nn(e){let t,n,s,l,r,i,a,c;s=new Ge({}),i=new We({}),i.$on("onUserUpdated",e[1]);let o=e[0]&&qt(e);return{c(){t=p("main"),n=p("header"),tt(s.$$.fragment),l=v(),r=p("div"),tt(i.$$.fragment),a=v(),o&&o.c(),d(r,"class","busca-usuario svelte-1mujk8v"),d(n,"class","svelte-1mujk8v"),d(t,"class","app svelte-1mujk8v")},m(f,_){C(f,t,_),u(t,n),W(s,n,null),u(n,l),u(n,r),W(i,r,null),u(t,a),o&&o.m(t,null),c=!0},p(f,[_]){f[0]?o?(o.p(f,_),_&1&&b(o,1)):(o=qt(f),o.c(),b(o,1),o.m(t,null)):o&&(ht(),U(o,1,1,()=>{o=null}),vt())},i(f){c||(b(s.$$.fragment,f),b(i.$$.fragment,f),b(o),c=!0)},o(f){U(s.$$.fragment,f),U(i.$$.fragment,f),U(o),c=!1},d(f){f&&w(t),x(s),x(i),o&&o.d()}}}function sn(e,t,n){let s=null;return[s,r=>{n(0,s=r.detail)}]}class ln extends V{constructor(t){super(),Q(this,t,sn,nn,J,{})}}new ln({target:document.getElementById("app")});
