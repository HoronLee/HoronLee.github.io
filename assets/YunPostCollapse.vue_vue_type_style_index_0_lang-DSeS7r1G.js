import{d as w,x as B,E as v,V as C,m as D,q as b,o as s,e as a,f as o,t as c,l as h,F as _,k as m,aA as g,B as f,s as N,h as V,w as L,g as E}from"./app-DYGYtZ5U.js";const F={class:"post-collapse px-10 lt-sm:px-5",relative:""},I={w:"full",text:"center",class:"yun-text-light",p:"2"},M={class:"post-collapse-action",text:"center"},R={key:0,"i-ri-sort-desc":""},$={key:1,"i-ri-sort-asc":""},q={class:"collection-title","m-0":"",relative:""},A=["id"],P={class:"post-header",flex:"","items-center":"",relative:""},S={class:"post-meta"},T={key:0,class:"post-time",font:"mono",opacity:"80"},j={class:"post-title","inline-flex":"","items-center":"",font:"serif black"},G=w({__name:"YunPostCollapse",props:{posts:{}},setup(y){const p=y,{t:x}=B(),d=v([]),i=v({});C(()=>p.posts,()=>{i.value={},d.value=[],p.posts.forEach(t=>{if(!(t.hide&&t.hide!=="index")&&t.date){const e=Number.parseInt(f(t.date,"YYYY"));i.value[e]?i.value[e].push(t):(d.value.push(e),i.value[e]=[t])}})},{immediate:!0});const r=v(!0),k=D(()=>{const e=d.value.sort((u,n)=>n-u);return r.value?e:e.reverse()});return(t,e)=>{const u=b("RouterLink");return s(),a("div",F,[o("div",I,c(h(x)("counter.archives",t.posts.length)),1),o("div",M,[o("button",{class:"yun-icon-btn shadow hover:shadow-md",onClick:e[0]||(e[0]=n=>r.value=!r.value)},[r.value?(s(),a("div",R)):(s(),a("div",$))])]),(s(!0),a(_,null,m(k.value,n=>(s(),a("div",{key:n,m:"b-6"},[o("div",q,[o("h2",{id:`#archive-year-${n}`,class:"archive-year",text:"4xl",p:"y-2"},c(n),9,A)]),(s(!0),a(_,null,m(h(g)(i.value[n],r.value),(l,Y)=>(s(),a("article",{key:Y,class:"post-item",relative:""},[o("header",P,[o("div",S,[l.date?(s(),a("time",T,c(h(f)(l.date,"MM-DD")),1)):N("v-if",!0)]),o("h2",j,[V(u,{to:l.path||"",class:"post-title-link"},{default:L(()=>[E(c(l.title),1)]),_:2},1032,["to"])])])]))),128))]))),128))])}}});export{G as _};
