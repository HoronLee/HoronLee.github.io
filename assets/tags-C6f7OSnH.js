import{_ as E}from"./YunCard.vue_vue_type_script_setup_true_lang-ZIvkhB7t.js";import{_ as F}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-DSeS7r1G.js";import{d as S,o as t,e as _,f as c,t as p,ax as N,ay as A,a as I,u as j,D as H,x as K,M,aK as O,m as $,z as W,E as G,aB as J,aq as Q,q as U,c as a,w as s,r as X,h as r,az as Z,l as e,F as w,k as ee,n as te,s as se,aw as ne}from"./app-DYGYtZ5U.js";import{_ as oe}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-nY4cFgbl.js";const ae={"inline-flex":"",my:"2",p:"1",class:"post-tag cursor-pointer items-baseline leading-4"},re={"inline-flex":""},le={"inline-flex":"",text:"xs"},ie=S({__name:"YunLayoutPostTag",props:{title:{},count:{}},setup(b){return(l,f)=>(t(),_("span",ae,[c("span",re,"#"+p(l.title),1),c("span",le,"["+p(l.count)+"]",1)]))}}),ce={class:"yun-text-light",text:"center",p:"2"},ue={class:"justify-center items-end",flex:"~ wrap",gap:"1"},ge=S({__name:"tags",setup(b){N([A({"@type":"CollectionPage"})]);const l=I(),f=j(),k=H(),{t:d}=K(),u=M(),{tags:g,getTagStyle:T}=O({primary:k.value.colors.primary}),i=$(()=>l.query.tag||""),P=W(),Y=$(()=>P.postList.filter(o=>o.tags?typeof o.tags=="string"?o.tags===i.value:o.tags.includes(i.value):!1)),y=G(),{show:B}=J(y);function V(n){f.push({query:{tag:n}}),B()}const q=Q(u);return(n,o)=>{const h=ne,v=oe,L=ie,x=U("RouterView"),R=F,z=E;return t(),_(w,null,[n.$slots["sidebar-child"]?(t(),a(h,{key:0},{default:s(()=>[X(n.$slots,"sidebar-child")]),_:3})):(t(),a(h,{key:1})),r(x,null,{default:s(({Component:D})=>[(t(),a(Z(D),null,{"main-header":s(()=>[r(v,{title:e(q)||e(d)("menu.tags"),icon:e(u).icon||"i-ri-tag-line",color:e(u).color},null,8,["title","icon","color"])]),"main-content":s(()=>[c("div",ce,p(e(d)("counter.tags",Array.from(e(g)).length)),1),c("div",ue,[(t(!0),_(w,null,ee(Array.from(e(g)).sort(),([m,C])=>(t(),a(L,{key:m,title:m,count:C.count,style:te(e(T)(C.count)),onClick:me=>V(m.toString())},null,8,["title","count","style","onClick"]))),128))]),r(x)]),"main-nav-before":s(()=>[i.value?(t(),a(z,{key:0,ref_key:"collapse",ref:y,m:"t-4",w:"full"},{default:s(()=>[r(v,{title:i.value,icon:"i-ri-hashtag"},null,8,["title"]),r(R,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:Y.value},null,8,["posts"])]),_:1},512)):se("v-if",!0)]),_:2},1024))]),_:1})],64)}}});export{ge as default};
