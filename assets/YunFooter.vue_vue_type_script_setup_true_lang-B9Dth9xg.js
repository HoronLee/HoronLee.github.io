import{d as T,x as D,E as h,U as V,o as r,e as c,r as x,f as t,t as o,l as e,as as z,A as F,D as H,m as k,at as g,s as v,g as n,F as L,v as C,au as S,a6 as B,c as N,w as M,h as Y}from"./app-DYGYtZ5U.js";const I={class:"vc-site-live-time"},P={"mx-1":""},j={"mx-1":""},E={"mx-1":""},A={"mx-1":""},U=T({__name:"VCLiveTime",props:{startTime:{}},setup(b){const u=b,{t:i}=D(),l=h(0),s=h(0),_=h(0),d=h(0);function y(){const a=new Date(u.startTime),m=new Date().getTime()-a.getTime(),p=60*1e3,f=60*p,w=24*f;l.value=Math.floor(m/w),s.value=Math.floor(m%w/60/60/1e3),_.value=Math.floor(m%f/60/1e3),d.value=Math.floor(m%p/1e3)}return V(()=>{setInterval(y,1e3)}),(a,$)=>(r(),c("div",I,[x(a.$slots,"live-time-before"),t("span",P,o(e(i)("time.day",l.value)),1),t("span",j,o(e(i)("time.hour",s.value)),1),t("span",E,o(e(i)("time.minute",_.value)),1),t("span",A,o(e(i)("time.second",d.value)),1),x(a.$slots,"live-time-after")]))}}),q={class:"va-footer p-4 text-$va-c-text-light",text:"center sm"},G={key:0,class:"beian",m:"y-2"},J={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},K={class:"copyright flex justify-center items-center gap-2",p:"1"},O=["href","title"],Q={key:1,class:"powered",m:"2"},R=["innerHTML"],W=["href","title"],X=T({__name:"YunFooter",setup(b){const{t:u}=D(),i=z(),l=F(),s=H(),_=new Date().getFullYear(),d=k(()=>_===s.value.footer.since),y=k(()=>u("footer.powered",[`<a href="${g.repository.url}" target="_blank" rel="noopener">Valaxy</a> v${g.version}`])),a=k(()=>s.value.footer.icon||{url:g.repository.url,name:"i-ri-cloud-line",title:g.name});return($,m)=>{var p,f;return r(),c("footer",q,[(p=e(s).footer.beian)!=null&&p.enable&&e(s).footer.beian.icp?(r(),c("div",G,[t("a",J,o(e(s).footer.beian.icp),1)])):v("v-if",!0),t("div",K,[t("span",null,[n(" © "),d.value?v("v-if",!0):(r(),c(L,{key:0},[n(o(e(s).footer.since)+" - ",1)],64)),n(" "+o(e(_)),1)]),(f=e(s).footer.icon)!=null&&f.enable?(r(),c("a",{key:0,class:C(["inline-flex",e(s).footer.icon.animated?"animate-pulse":""]),href:a.value.url,target:"_blank",title:a.value.title},[t("div",{class:C(a.value.name)},null,2)],10,O)):v("v-if",!0),t("span",null,o(e(l).author.name),1)]),e(s).footer.powered?(r(),c("div",Q,[t("span",{innerHTML:y.value},null,8,R),n(" | "),t("span",null,[n(o(e(u)("footer.theme"))+" - ",1),t("a",{href:e(s).pkg.repository.url,title:e(s).pkg.name,target:"_blank"},o(S(e(i).theme)),9,W),n(" v"+o(e(s).pkg.version),1)])])):v("v-if",!0),x($.$slots,"default")])}}}),Z=t("div",null,[n("本站总访问量 "),t("span",{id:"busuanzi_value_site_pv"}),n(" 次")],-1),ee=t("div",null,[n("本站访客数 "),t("span",{id:"busuanzi_value_site_uv"}),n(" 人次")],-1),te=t("span",null,"本站已运行",-1),oe=T({__name:"YunFooter",setup(b){return B("//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"),(u,i)=>{const l=U;return r(),N(X,null,{default:M(()=>[v(" 自定义页脚内容 "),Z,ee,Y(l,{mt:"2","start-time":"2022-2-10"},{"live-time-before":M(()=>[te]),_:1})]),_:1})}}});export{oe as _};