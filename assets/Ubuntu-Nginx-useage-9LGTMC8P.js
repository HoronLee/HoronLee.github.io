import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-BlZE3LhB.js";import{_ as d,a as E,p as g,o as F,c as o,w as l,f as i,g as s,h as n,r as t,i as c}from"./app-DYGYtZ5U.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-B9Dth9xg.js";import"./YunCard.vue_vue_type_script_setup_true_lang-ZIvkhB7t.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-nY4cFgbl.js";import"./index-C7yU5XnD.js";const k=JSON.parse('{"title":"Ubuntu安装配置Nginx及基础用法","description":null,"frontmatter":{"title":"Ubuntu安装配置Nginx及基础用法","businesscard":true,"date":"2023-04-20T22:05:15.000Z","updated":null,"tags":["Ubuntu","Linux","Nginx"],"categories":["服务器运维","Nginx"],"keywords":null,"description":null,"top_img":null,"comments":null,"cover":"https://tse4-mm.cn.bing.net/th/id/OIP-C.E5LOy1agA--ii7IJgV7WMAHaD4?pid=ImgDet&rs=1","toc":null,"toc_number":null,"toc_style_simple":null,"copyright":null,"copyright_author":null,"copyright_author_href":null,"copyright_url":null,"copyright_info":null,"mathjax":null,"katex":null,"aplayer":null,"highlight_shrink":null,"aside":null,"swiper_index":null},"headers":[{"level":2,"title":"查看Nginx服务状态","slug":"查看nginx服务状态","link":"#查看nginx服务状态","children":[]},{"level":2,"title":"访问Nginx初始页","slug":"访问nginx初始页","link":"#访问nginx初始页","children":[{"level":3,"title":"更新中...","slug":"更新中","link":"#更新中","children":[]}]}],"relativePath":"pages/posts/Ubuntu-Nginx-useage.md","path":"/home/runner/work/horonlee.github.io/horonlee.github.io/pages/posts/Ubuntu-Nginx-useage.md","lastUpdated":1711418005000}'),y={name:"pages/posts/Ubuntu-Nginx-useage.md",data(){return{data:k,frontmatter:k.frontmatter,$frontmatter:k.frontmatter}},setup(){const a=E();a.meta.frontmatter=Object.assign(a.meta.frontmatter||{},k.frontmatter||{}),g("pageData",k)}},u={id:"安装nginx",tabindex:"-1"},C=i("p",null,[s("直接apt安装即可"),i("code",null,"sudo apt install nginx")],-1),B={id:"查看nginx服务状态",tabindex:"-1"},m=i("div",{class:"language-bash"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"bash"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"sudo"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," systemctl"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," enable"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," nginx"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    # 开机自启")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"sudo"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," systemctl"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," status"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," nginx"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    # 输出以下结果即为Nginx正常运行")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"●"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," nginx.service"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," -"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," A"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," high"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," performance"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," web"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," server"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," and"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," a"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," reverse"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," proxy"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," server")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"     Loaded:"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," loaded"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (/lib/systemd/system/nginx.service; "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"enabled"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"vendor"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," preset:"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," enabled"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"     Active:"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," active"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (running) since Thu 2023-04-20 20:08:51 CST; "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"2h"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 4"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"min"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ago")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"       Docs:"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," man:nginx"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"8"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    Process:"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 258455"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ExecStartPre=/usr/sbin/nginx"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -t"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -q"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -g"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," daemon"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," on"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"master_process"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," on"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; (code"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"exited,"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," status"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/SUCCESS"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    Process:"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 258456"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ExecStart=/usr/sbin/nginx"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -g"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," daemon"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," on"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; "),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"master_process"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," on"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; (code"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"exited,"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," status"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/SUCCESS"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"   Main"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," PID:"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 258457"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (nginx)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"      Tasks:"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 3"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (limit: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1929"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"     Memory:"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 3.7"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"M")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"        CPU:"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 44"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"ms")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"     CGroup:"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /system.slice/nginx.service")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"             ├─258457"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "nginx: master process /usr/sbin/nginx -g daemon on; master_process on;"')])])]),i("button",{class:"collapse"})],-1),_={id:"访问nginx初始页",tabindex:"-1"},x=i("blockquote",null,[i("p",null,[s("别忘记先关闭ufw防火墙，或者开通服务器的80端口 文中的"),i("code",null,"$IP"),s("就是虚拟机的IP地址，在虚拟机中也就是"),i("code",null,"127.0.0.1")])],-1),b=i("p",null,[s("在浏览器输入"),i("code",null,"http://$IP/"),s("，若出现"),i("code",null,"Welcome to nginx!"),s("即为成功运行Nginx。")],-1),f={id:"nginx文件结构",tabindex:"-1"},v=i("blockquote",null,[i("p",null,"文中的操作系统使用的是Ubuntu，和CentOS没有很大区别。 以下内容为本人自己的总结（若有疏漏请指正）")],-1),N=i("p",null,"Nginx分为站点目录和配置文件目录，其中：",-1),D=i("ul",null,[i("li",null,[s("站点目录在"),i("code",null,"/var/www"),s("下 "),i("ul",null,[i("li",null,[s("其中"),i("code",null,"html"),s("为默认文件夹，其中的"),i("code",null,"index.nginx-debian.html"),s("为Nginx默认的站点目录")])])]),i("li",null,[s("配置文件目录在"),i("code",null,"/etc/Nginx"),s("下 "),i("ul",null,[i("li",null,[s("其中"),i("code",null,"sites-available/"),s("中的"),i("code",null,"default"),s("就是Nginx的默认配置文件，里面可以设置Nginx最重要的虚拟主机，重定向等功能")]),i("li",null,"以下是文件结构：")])])],-1),A=i("div",{class:"language-bash"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"bash"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"root@HoronLeeFirstEcs:/etc/nginx#"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," tree")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},".")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"├──"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," conf.d")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"├──"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," fastcgi.conf")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"├──"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," fastcgi_params")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"├──"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," koi-utf")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"├──"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," koi-win")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"├──"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," mime.types")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"├──"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," modules-available")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"├──"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," modules-enabled")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"│"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"   ├──"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 50"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"-mod-http-geoip2.conf"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," -"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},">"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /usr/share/nginx/modules-available/mod-http-geoip2.conf")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"│"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"   └──"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 省略")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"├──"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," nginx.conf")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"├──"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," proxy_params")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"├──"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," scgi_params")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"├──"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," sites-available")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"│"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"   ├──"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"│   └── default")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"├── sites-enabled")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"│   └── default -> /etc/nginx/sites-available/default")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"├── snippets")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"│   ├── fastcgi-php.conf")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"│   └── snakeoil.conf")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"├── uwsgi_params")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"└── win-ut")])])]),i("button",{class:"collapse"})],-1),P={id:"使用nginx新建一个网页",tabindex:"-1"},w=i("ol",null,[i("li",null,[s("进入站点站点目录"),i("code",null,"cd /var/www")]),i("li",null,[s("新建网页文件夹"),i("code",null,"mkdir /var/www/test")]),i("li",null,[s("新建网页文件并写入html内容"),i("code",null,"vim test.html")])],-1),$=i("div",{class:"language-vim"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vim"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<!DOCTYPE html>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<html>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <head>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <meta charset"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"UTF-8"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <title>迫真测试网页</title>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <title>表白初号机</title>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </head>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</html>")])])]),i("button",{class:"collapse"})],-1),U=i("ol",{start:"4"},[i("li",null,[s("保存退出后再进入站点配置文件目录"),i("code",null,"cd /etc/Nginx/sites-available")]),i("li",null,[s("编辑默认配置文件"),i("code",null,"vim default")]),i("li",null,"添加一个server字段")],-1),I=i("div",{class:"language-vim"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vim"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"server {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        listen "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"81"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";   "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"#"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 这是监听端口")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        listen [::]:"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"81"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";  "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"#"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 这是监听端口（IPv6）   ")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        server_name test;    "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"#"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 服务器名字，随意")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        root "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"/var/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"www/test;  "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"#"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 站点目录")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        index index.html;    "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"#"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 站点默认文件（即优先使用的网页文件）")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        location / {         "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"#"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 暂时不用深入了解，可以理解为是一个规则")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                try_files $uri $uri/ "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"404"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),i("button",{class:"collapse"})],-1),S=i("ol",{start:"7"},[i("li",null,"编辑好之后保存并退出（别忘记开通防火墙的81端口）"),i("li",null,[s("重启Nginx服务"),i("code",null,"sudo systemctl restart")]),i("li",null,[s("访问"),i("code",null,"http://$IP:81"),s("，如果上一步没有报错，并且看到了新的网页，就说明建站成功了！")])],-1),q={id:"使用nginx进行重定向",tabindex:"-1"},T=i("blockquote",null,[i("p",null,[s("比如我需要在访问"),i("code",null,"http://$IP:82"),s("的时候自动跳转到"),i("code",null,"http://$IP:81"),s(" 这个时候就需要用到Nginx的重定向 重定向有多种方法，这里采用upstream字段的方法")])],-1),O=i("ol",null,[i("li",null,[s("和之前一样编辑站点配置文件"),i("code",null,"vim default")]),i("li",null,"在整个文件的最前面添加以下字段：")],-1),L=i("div",{class:"language-vim"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vim"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"upstream test_servers {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        server "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"127"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"81"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," max_fails"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"5"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," fail_timeout"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"10s weight"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"10"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),i("button",{class:"collapse"})],-1),M=i("ol",{start:"3"},[i("li",null,"然后在下面新建一个虚拟服务器（和之前差不多）")],-1),V=i("div",{class:"language-vim"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vim"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"server {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        listen "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"82"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        location / {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            proxy_pass http://test_servers;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),i("button",{class:"collapse"})],-1),H=i("ol",{start:"4"},[i("li",null,[s("这你可以理解为这个服务器由"),i("code",null,"http://test_servers"),s("进行代理，监听的是81端口，但是最终显示的还是"),i("code",null,"test_servers"),s("中所属权重（weight=）最高的网页内容")]),i("li",null,[s("重启Nginx服务"),i("code",null,"sudo systemctl restart")]),i("li",null,[s("访问"),i("code",null,"http://$IP:82"),s("，如果上一步没有报错，并且看到之前端口为81的网页了！")])],-1),j=i("blockquote",null,[i("p",null,"写在最后，其实upstream块是Nginx用来做负载均衡用的，这里只有一个后端服务器，所以无论如何都会只指向这个站点，起到了所谓的重定向，实际应用当中不可能这样操作，要不然你的老板可能让你第二天不要去上班了。")],-1),J={id:"使用nginx进行负载均衡",tabindex:"-1"},W=i("blockquote",null,[i("p",null,"其实就是建立反向代理和upstream 比如我们想要访问test.com这个网页，但是我们想要将访问的实际请求分不到服务器集群中的两台机器上")],-1),G=i("ol",null,[i("li",null,[s("和之前一样编辑站点配置文件"),i("code",null,"vim default")]),i("li",null,"在整个文件的最前面添加以下字段：")],-1),R=i("div",{class:"language-vim"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vim"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"upstream test_com {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        server "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"192"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"168"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"2"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"80"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," max_fails"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"5"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," fail_timeout"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"10s weight"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"10"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"#"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 这里的upstream字段中添加两个相同权重("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"weight"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")的服务器")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        server "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"192"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"168"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"3"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"80"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," max_fails"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"5"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," fail_timeout"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"10s weight"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"10"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"#"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," 就可以实现负载均衡，还能根据各个服务器的性能进行分配")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),i("button",{class:"collapse"})],-1),Y=i("ol",{start:"3"},[i("li",null,"然后在下面新建一个虚拟服务器（和之前差不多）")],-1),Z=i("div",{class:"language-vim"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"vim"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"server {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        listen "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"80"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        location / {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            proxy_pass http://test_com;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),i("button",{class:"collapse"})],-1),z={id:"使用nginx运行php网页",tabindex:"-1"},K=i("blockquote",null,[i("p",null,"应该写在别的文章里哦~")],-1),Q={id:"更新中",tabindex:"-1"};function X(a,ii,si,li,e,ai){const h=c,r=p;return F(),o(r,{frontmatter:e.frontmatter,data:e.data},{"main-content-md":l(()=>[i("h1",u,[s("安装Nginx "),n(h,{class:"header-anchor",href:"#安装nginx","aria-label":'Permalink to "安装Nginx"'},{default:l(()=>[s("​")]),_:1})]),C,i("h2",B,[s("查看Nginx服务状态 "),n(h,{class:"header-anchor",href:"#查看nginx服务状态","aria-label":'Permalink to "查看Nginx服务状态"'},{default:l(()=>[s("​")]),_:1})]),m,i("h2",_,[s("访问Nginx初始页 "),n(h,{class:"header-anchor",href:"#访问nginx初始页","aria-label":'Permalink to "访问Nginx初始页"'},{default:l(()=>[s("​")]),_:1})]),x,b,i("h1",f,[s("Nginx文件结构 "),n(h,{class:"header-anchor",href:"#nginx文件结构","aria-label":'Permalink to "Nginx文件结构"'},{default:l(()=>[s("​")]),_:1})]),v,N,D,A,i("h1",P,[s("使用Nginx新建一个网页 "),n(h,{class:"header-anchor",href:"#使用nginx新建一个网页","aria-label":'Permalink to "使用Nginx新建一个网页"'},{default:l(()=>[s("​")]),_:1})]),w,$,U,I,S,i("h1",q,[s("使用Nginx进行重定向 "),n(h,{class:"header-anchor",href:"#使用nginx进行重定向","aria-label":'Permalink to "使用Nginx进行重定向"'},{default:l(()=>[s("​")]),_:1})]),T,O,L,M,V,H,j,i("h1",J,[s("使用Nginx进行负载均衡 "),n(h,{class:"header-anchor",href:"#使用nginx进行负载均衡","aria-label":'Permalink to "使用Nginx进行负载均衡"'},{default:l(()=>[s("​")]),_:1})]),W,G,R,Y,Z,i("h1",z,[s("使用Nginx运行PHP网页 "),n(h,{class:"header-anchor",href:"#使用nginx运行php网页","aria-label":'Permalink to "使用Nginx运行PHP网页"'},{default:l(()=>[s("​")]),_:1})]),K,i("h3",Q,[s("更新中... "),n(h,{class:"header-anchor",href:"#更新中","aria-label":'Permalink to "更新中..."'},{default:l(()=>[s("​")]),_:1})])]),"main-header":l(()=>[t(a.$slots,"main-header")]),"main-header-after":l(()=>[t(a.$slots,"main-header-after")]),"main-nav":l(()=>[t(a.$slots,"main-nav")]),"main-content":l(()=>[t(a.$slots,"main-content")]),"main-content-after":l(()=>[t(a.$slots,"main-content-after")]),"main-nav-before":l(()=>[t(a.$slots,"main-nav-before")]),"main-nav-after":l(()=>[t(a.$slots,"main-nav-after")]),comment:l(()=>[t(a.$slots,"comment")]),footer:l(()=>[t(a.$slots,"footer")]),aside:l(()=>[t(a.$slots,"aside")]),"aside-custom":l(()=>[t(a.$slots,"aside-custom")]),default:l(()=>[t(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const pi=d(y,[["render",X]]);export{k as data,pi as default};