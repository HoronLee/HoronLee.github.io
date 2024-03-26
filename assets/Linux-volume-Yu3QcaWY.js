import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang-BlZE3LhB.js";import{_ as r,a as d,p,o as c,c as k,w as t,s as u,r as a,f as s,g as l}from"./app-DYGYtZ5U.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-B9Dth9xg.js";import"./YunCard.vue_vue_type_script_setup_true_lang-ZIvkhB7t.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-nY4cFgbl.js";import"./index-C7yU5XnD.js";const e=JSON.parse('{"title":"Linux在线扩容磁盘","description":null,"frontmatter":{"title":"Linux在线扩容磁盘","businesscard":true,"date":"2022-12-19T17:19:14.000Z","updated":null,"tags":["Linux"],"categories":["服务器运维"],"keywords":null,"description":null,"top_img":null,"comments":null,"cover":"https://tse3-mm.cn.bing.net/th/id/OIP-C.wnNG3ph-NCpb_xjB1-FsBQHaE8?pid=ImgDet&rs=1","toc":null,"toc_number":null,"toc_style_simple":null,"copyright":null,"copyright_author":null,"copyright_author_href":null,"copyright_url":null,"copyright_info":null,"mathjax":null,"katex":null,"aplayer":null,"highlight_shrink":null,"aside":null,"swiper_index":null},"headers":[],"relativePath":"pages/posts/Linux-volume.md","path":"/home/runner/work/horonlee.github.io/horonlee.github.io/pages/posts/Linux-volume.md","lastUpdated":1711418005000}'),g={name:"pages/posts/Linux-volume.md",data(){return{data:e,frontmatter:e.frontmatter,$frontmatter:e.frontmatter}},setup(){const i=d();i.meta.frontmatter=Object.assign(i.meta.frontmatter||{},e.frontmatter||{}),p("pageData",e)}},F=s("p",null,"CentOS7： 进入SSH并运行如下命令",-1),m=s("div",{class:"language-bash"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"yum"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," cloud-utils-growpart"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," gdisk"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," xfsprogs"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," e2fsprogs")])])]),s("button",{class:"collapse"})],-1),y=s("p",null,[l("使用"),s("code",null,"fdisk -l"),l("命令根据大小及其他信息查看要扩容的云盘，本例子中要扩容的分区为/dev/sda1")],-1),C=s("p",null,"执行命令：",-1),b=s("div",{class:"language-bash"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"growpart"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /dev/sda"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 1")])])]),s("button",{class:"collapse"})],-1),_=s("p",null,"#centos 7 使用",-1),f=s("div",{class:"language-bash"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"resize2fs"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /dev/sda1")])])]),s("button",{class:"collapse"})],-1),B=s("p",null,"#centos 8 使用",-1),v=s("div",{class:"language-bash"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"xfsprogs"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"  /dev/sda1")])])]),s("button",{class:"collapse"})],-1),E=s("p",null,[l("注意：如果您把系统设置成了中文，在运行growpart命令之前必须先运行："),s("code",null,"LANG=en_US.UTF-8"),l("，否则会报错如：unexpected output in sfdisk --version")],-1),$=s("p",null,"CentOS6： 进入SSH并执行命令：",-1),w=s("div",{class:"language-bash"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"yum"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -y"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," dracut-modules-growroot")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"dracut"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -f")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"growpart"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /dev/sda"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 1")])])]),s("button",{class:"collapse"})],-1),x=s("p",null,"执行完上述命令后，使用reboot命令重启服务器。 重启完毕执行命令：",-1),S=s("div",{class:"language-bash"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"resize2fs"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /dev/sda1")])])]),s("button",{class:"collapse"})],-1),L=s("p",null,"Ubuntu/Debian系列操作系统：",-1),N=s("div",{class:"language-bash"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"apt"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," cloud-guest-utils")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"apt"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," xfsprogs")])])]),s("button",{class:"collapse"})],-1),O=s("p",null,[l("使用"),s("code",null,"fdisk -l"),l("命令根据大小及其他信息查看要扩容的云盘，本例子中要扩容的分区为/dev/sda1")],-1),V=s("p",null,"执行命令：",-1),U=s("div",{class:"language-bash"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"growpart"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /dev/sda"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"resize2fs"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /dev/sda1")])])]),s("button",{class:"collapse"})],-1);function j(i,z,D,H,n,T){const o=h;return c(),k(o,{frontmatter:n.frontmatter,data:n.data},{"main-content-md":t(()=>[F,m,y,u(" more "),C,b,_,f,B,v,E,$,w,x,S,L,N,O,V,U]),"main-header":t(()=>[a(i.$slots,"main-header")]),"main-header-after":t(()=>[a(i.$slots,"main-header-after")]),"main-nav":t(()=>[a(i.$slots,"main-nav")]),"main-content":t(()=>[a(i.$slots,"main-content")]),"main-content-after":t(()=>[a(i.$slots,"main-content-after")]),"main-nav-before":t(()=>[a(i.$slots,"main-nav-before")]),"main-nav-after":t(()=>[a(i.$slots,"main-nav-after")]),comment:t(()=>[a(i.$slots,"comment")]),footer:t(()=>[a(i.$slots,"footer")]),aside:t(()=>[a(i.$slots,"aside")]),"aside-custom":t(()=>[a(i.$slots,"aside-custom")]),default:t(()=>[a(i.$slots,"default")]),_:3},8,["frontmatter","data"])}const Q=r(g,[["render",j]]);export{e as data,Q as default};
