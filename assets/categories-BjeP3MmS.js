import{_ as U}from"./YunCard.vue_vue_type_script_setup_true_lang-ZIvkhB7t.js";import{_ as V}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-DSeS7r1G.js";import{d as S,u as x,a as A,m as $,E,x as B,aB as D,U as K,q as L,o as t,e as r,f as _,t as b,l,F as g,k as P,aC as N,c as y,w as p,s as R,h as m,z as j,M as F,aD as T,aq as M,ax as W,ay as H,r as O,az as G,aw as J}from"./app-DYGYtZ5U.js";import{_ as Q}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-nY4cFgbl.js";const X={class:"category-list-item inline-flex items-center cursor-pointer"},Z={key:0,"i-ri-folder-add-line":""},I={key:1,style:{color:"var(--va-c-primary)"},"i-ri-folder-reduce-line":""},ee={key:0},te=_("div",{"i-ri-file-text-line":""},null,-1),oe={m:"l-1",font:"serif black"},ne=S({__name:"YunCategory",props:{parentKey:{},category:{},level:{},collapsable:{type:Boolean,default:!0}},setup(z){const u=z,f=x(),n=A(),v=$(()=>{const e=n.query.category||"";return Array.isArray(e)?[e]:e.split("/")}),o=E(u.collapsable),{t:i}=B(),{locale:k}=B();function Y(e){const c=k.value==="zh-CN"?"zh":k.value;return e[`title_${c}`]?e[`title_${c}`]:e.title}const d=E(),{show:s}=D(d);function C(e){f.push({query:{category:e}}),s()}return K(()=>{const e=document.querySelector(".post-collapse-container");e&&(d.value=e)}),(e,c)=>{const h=L("YunCategory",!0),w=L("RouterLink");return t(),r(g,null,[_("li",X,[_("span",{class:"folder-action inline-flex",onClick:c[0]||(c[0]=a=>o.value=!o.value)},[o.value?(t(),r("div",Z)):(t(),r("div",I))]),_("span",{class:"category-name",m:"l-1",onClick:c[1]||(c[1]=a=>C(e.parentKey))},b(e.category.name==="Uncategorized"?l(i)("category.uncategorized"):e.category.name)+" ["+b(e.category.total)+"] ",1)]),o.value?R("v-if",!0):(t(),r("ul",ee,[(t(!0),r(g,null,P(e.category.children.values(),(a,q)=>(t(),r("li",{key:q,class:"post-list-item",m:"l-4"},[l(N)(a)?(t(),y(h,{key:0,"parent-key":e.parentKey?`${e.parentKey}/${a.name}`:a.name,category:a,collapsable:!v.value.includes(a.name)},null,8,["parent-key","category","collapsable"])):(t(),r(g,{key:1},[a.title?(t(),y(w,{key:0,to:a.path||"",class:"inline-flex items-center"},{default:p(()=>[te,_("span",oe,b(Y(a)),1)]),_:2},1032,["to"])):R("v-if",!0)],64))]))),128))]))],64)}}}),ae=S({__name:"YunCategories",props:{categories:{},level:{default:0},collapsable:{type:Boolean,default:!0}},setup(z){const u=A(),f=$(()=>{const n=u.query.category||"";return Array.isArray(n)?[n]:n.split("/")});return(n,v)=>{const o=ne;return t(!0),r(g,null,P(n.categories.values(),i=>(t(),r("ul",{key:i.name,class:"category-list",m:"l-4"},[m(o,{"parent-key":i.name,category:i,level:n.level+1,collapsable:!f.value.includes(i.name)},null,8,["parent-key","category","level","collapsable"])]))),128)}}}),se={text:"center",class:"yun-text-light",p:"2"},ue=S({__name:"categories",setup(z){const{t:u}=B(),f=j(),n=F(),v=A(),o=$(()=>v.query.category||""),i=T(),k=$(()=>f.postList.filter(s=>s.categories&&o.value!=="Uncategorized"?typeof s.categories=="string"?s.categories===o.value:s.categories.join("/").startsWith(o.value)&&s.categories[0]===o.value.split("/")[0]:!s.categories&&o.value==="Uncategorized"?s.categories===void 0:!1)),Y=M(n);return W([H({"@type":"CollectionPage"})]),(d,s)=>{const C=J,e=Q,c=ae,h=L("RouterView"),w=V,a=U;return t(),r(g,null,[d.$slots["sidebar-child"]?(t(),y(C,{key:0},{default:p(()=>[O(d.$slots,"sidebar-child")]),_:3})):(t(),y(C,{key:1})),m(h,null,{default:p(({Component:q})=>[(t(),y(G(q),null,{"main-header":p(()=>[m(e,{title:l(Y)||l(u)("menu.categories"),icon:l(n).icon||"i-ri-folder-2-line",color:l(n).color},null,8,["title","icon","color"])]),"main-content":p(()=>[_("div",se,b(l(u)("counter.categories",Array.from(l(i).children).length)),1),m(c,{categories:l(i).children},null,8,["categories"]),m(h)]),"main-nav-before":p(()=>[o.value?(t(),y(a,{key:0,class:"post-collapse-container",m:"t-4",w:"full"},{default:p(()=>[m(e,{title:o.value==="Uncategorized"?l(u)("category.uncategorized"):o.value.split("/").join(" / "),icon:"i-ri-folder-open-line"},null,8,["title"]),m(w,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:k.value},null,8,["posts"])]),_:1})):R("v-if",!0)]),_:2},1024))]),_:1})],64)}}});export{ue as default};
