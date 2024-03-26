import{_ as E}from"./ValaxyMain.vue_vue_type_style_index_0_lang-BlZE3LhB.js";import{_ as p,a as d,p as o,o as g,c,w as l,f as i,g as s,h as n,r as a,i as y}from"./app-DYGYtZ5U.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-B9Dth9xg.js";import"./YunCard.vue_vue_type_script_setup_true_lang-ZIvkhB7t.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-nY4cFgbl.js";import"./index-C7yU5XnD.js";const e=JSON.parse('{"title":"Java学习-String","description":"学习笔记","frontmatter":{"title":"Java学习-String","businesscard":true,"date":"2022-11-10T19:28:15.000Z","updated":null,"tags":["Java"],"categories":["编程笔记"],"keywords":null,"description":"学习笔记","top_img":null,"comments":null,"cover":"https://tse2-mm.cn.bing.net/th/id/OIP-C.pxF-tUepOPC8xJ0qz1mkzQHaD2?pid=ImgDet&rs=1","toc":null,"toc_number":null,"toc_style_simple":null,"copyright":null,"copyright_author":null,"copyright_author_href":null,"copyright_url":null,"copyright_info":null,"mathjax":null,"katex":null,"aplayer":null,"highlight_shrink":null,"aside":null,"swiper_index":null},"headers":[{"level":2,"title":"比较两个字符串的两种方法","slug":"比较两个字符串的两种方法","link":"#比较两个字符串的两种方法","children":[{"level":3,"title":"避免NullPointerException的比较操作。","slug":"避免nullpointerexception的比较操作。","link":"#避免nullpointerexception的比较操作。","children":[]}]},{"level":2,"title":"实例化字符串的两个方法","slug":"实例化字符串的两个方法","link":"#实例化字符串的两个方法","children":[]},{"level":2,"title":"字符串的内容不可改变","slug":"字符串的内容不可改变","link":"#字符串的内容不可改变","children":[]}],"relativePath":"pages/posts/Java-note.md","path":"/home/runner/work/horonlee.github.io/horonlee.github.io/pages/posts/Java-note.md","lastUpdated":1711418005000}'),u={name:"pages/posts/Java-note.md",data(){return{data:e,frontmatter:e.frontmatter,$frontmatter:e.frontmatter}},setup(){const t=d();t.meta.frontmatter=Object.assign(t.meta.frontmatter||{},e.frontmatter||{}),o("pageData",e)}},F={id:"string类",tabindex:"-1"},m={id:"比较两个字符串的两种方法",tabindex:"-1"},_=i("ul",null,[i("li",null,"直接使用“==”进行运算,这样是比较两个字符串对象在内存中的位置,而不是实际上看到的内容。"),i("li",null,"使用String类中的equals()方法进行比较,就是比较实际上我们看到的字面内容了。")],-1),C={id:"避免nullpointerexception的比较操作。",tabindex:"-1"},v=i("blockquote",null,[i("p",null,[s("实际上在要求用户输入某一个字符串后续要与一个现有字符串进行比较,但是用户不输入消息的时候处理不当就会报"),i("code",null,"NullPointerException"),s("错,假设输入就是null,代码如下:")])],-1),f=i("div",{class:"language-java"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," class"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," test"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," static"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," main"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(String "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"args"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[]) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        String input "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," null"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (input."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"equals"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"hello"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            System.out."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"println"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Hello World!!!"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),i("button",{class:"collapse"})],-1),b=i("p",null,"直接运行会报以下错误:",-1),A=i("div",{class:"language-java"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"Exception in thread "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"main"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," java.lang.NullPointerException"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Cannot invoke "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"String.equals(Object)"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," because "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"input"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," is "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"null")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        at top.horon.string.test."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"main"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(test.java"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"6"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")])])]),i("button",{class:"collapse"})],-1),D=i("p",null,"如何回避这个NullPointerException问题呢?",-1),B=i("div",{class:"language-java"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," class"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," test"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," static"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," main"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(String "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"args"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[]) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        String input "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," null"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"hello"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"equals"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(input)) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            System.out."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"println"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Hello World!!!"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),i("button",{class:"collapse"})],-1),S=i("p",null,"此时的程序直接利用了字符串常量来调用了equals()方法,因为字符串常量是一个String类的匿名对象,所以该对象永远不可能是null,所以将不会出现NullPointerException。其中,需要注意的是,在equals()方法中也有检查参数是否为空的代码,可以自己去底层源码里看看。",-1),j={id:"实例化字符串的两个方法",tabindex:"-1"},$=i("ul",null,[i("li",null,[s("直接赋值的方法"),i("code",null,'String str1 = "hello";'),i("ul",null,[i("li",null,"实际上就是把一个在堆中开辟好的堆内存空间的使用权给str1这个对象,对一对指向的"),i("li",null,"这种赋值方法有一个好处就是,当一个完全相同的字符串再次被声明时,java不会重新开辟内存空间,而是在将在栈内存中新建的对象指向堆内存中的同一个值,这样就不容易造成内存浪费。")])]),i("li",null,[s("使用new关键词来实例化String对象"),i("code",null,'String str = new String("hello");'),i("ul",null,[i("li",null,[s("使用这一类方法来实例化String对象时,会开辟两个堆内存空间,一个是String的参数hello,一个是str对象指向的hello字符串,其中,参数hello会暂时存在并且进入垃圾空间等待被jvm回收 "),i("em",null,[i("strong",null,"所以说,日后开发中,String对象的实例化永远都采用通过直接复制的方法完成。")])])])]),i("li",null,"技术穿越:String类所采用的设计模式为共享设计模式。在JVM的底层实际上会存在有一个对象池(不一定只保存String对象),当代码之中使用了直接赋值的方式定义了一个String类对象时,会将此字符串对象所使用的匿名对象入池保存,而后如果后续还有其他String类对象也采用了直接赋值的方式,并且设置了同样内容的时候,那么将不会开辟新的堆内存空间,而是使用已有的对象进行引用的分配,从而继续使用。————摘自《Java开发实战经典(第二版)》")],-1),x={id:"字符串的内容不可改变",tabindex:"-1"},P=i("blockquote",null,[i("p",null,"String类操作中有一个特性,就是字符串内容一旦声明了,就不能被更改,下面用一个实例来“更改”一个字符串。")],-1),J=i("div",{class:"language-java"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," class"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," test"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," static"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," main"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(String "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"args"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[]) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        String str "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "hello"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        str "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," str "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "world!"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        System.out."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"println"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"Str = "'),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," +"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," str);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"Java"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},">"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Str "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," helloworld"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"!")])])]),i("button",{class:"collapse"})],-1),w=i("p",null,[s("在我们看来,字符串确实改变了,我们通过连接的方式更改了一个现有字符串 但是实际上在堆内存中,"),i("code",null,'"hello"'),s("有一个内存空间。"),i("code",null,'"world!"'),s("也会开辟一个,最后java会合成一个"),i("code",null,'str + "world!"'),s("的内存空间,然后最后将对象str在栈中指向到"),i("code",null,'str + "world!"'),s("的内存中,完成了所谓的“字符串的改变”。")],-1),N=i("blockquote",null,[i("p",null,"所以在实际开发中,要尽量避免以下代码的出现")],-1),q=i("div",{class:"language-java"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," class"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," test"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," static"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," main"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(String "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"args"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[]) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        String str1 "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "HoronLee"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        for"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"int"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," i "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; i "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 100"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"; i"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"++"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"){")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            str1 "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," i;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        System.out."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"println"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(str1);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"Java"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},">"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," HoronLee01234567891011121314151617181920212223242526272829303132333435")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"\\"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"3637383940414243444546474849505152535455565758596061626364656667686970")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"\\"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"71727374757677787980818283848586878889"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 90919293949596979899")])])]),i("button",{class:"collapse"})],-1);function H(t,O,V,L,k,U){const h=y,r=E;return g(),c(r,{frontmatter:k.frontmatter,data:k.data},{"main-content-md":l(()=>[i("h1",F,[s("String类 "),n(h,{class:"header-anchor",href:"#string类","aria-label":'Permalink to "String类"'},{default:l(()=>[s("​")]),_:1})]),i("h2",m,[s("比较两个字符串的两种方法 "),n(h,{class:"header-anchor",href:"#比较两个字符串的两种方法","aria-label":'Permalink to "比较两个字符串的两种方法"'},{default:l(()=>[s("​")]),_:1})]),_,i("h3",C,[s("避免NullPointerException的比较操作。 "),n(h,{class:"header-anchor",href:"#避免nullpointerexception的比较操作。","aria-label":'Permalink to "避免NullPointerException的比较操作。"'},{default:l(()=>[s("​")]),_:1})]),v,f,b,A,D,B,S,i("h2",j,[s("实例化字符串的两个方法 "),n(h,{class:"header-anchor",href:"#实例化字符串的两个方法","aria-label":'Permalink to "实例化字符串的两个方法"'},{default:l(()=>[s("​")]),_:1})]),$,i("h2",x,[s("字符串的内容不可改变 "),n(h,{class:"header-anchor",href:"#字符串的内容不可改变","aria-label":'Permalink to "字符串的内容不可改变"'},{default:l(()=>[s("​")]),_:1})]),P,J,w,N,q,i("p",null,[s("最后确实时完成了“字符串的连接”,但是实际上这样的代码的执行效率时很低的,字符串指向的内存对象断开和连接了一百多,造成了内存和CPU性能的浪费。我们可以采用 SreingBuffer类"),n(h,{href:"./这个工具类后续会讲到"},{default:l(()=>[s("^1")]),_:1}),s("来完成。")])]),"main-header":l(()=>[a(t.$slots,"main-header")]),"main-header-after":l(()=>[a(t.$slots,"main-header-after")]),"main-nav":l(()=>[a(t.$slots,"main-nav")]),"main-content":l(()=>[a(t.$slots,"main-content")]),"main-content-after":l(()=>[a(t.$slots,"main-content-after")]),"main-nav-before":l(()=>[a(t.$slots,"main-nav-before")]),"main-nav-after":l(()=>[a(t.$slots,"main-nav-after")]),comment:l(()=>[a(t.$slots,"comment")]),footer:l(()=>[a(t.$slots,"footer")]),aside:l(()=>[a(t.$slots,"aside")]),"aside-custom":l(()=>[a(t.$slots,"aside-custom")]),default:l(()=>[a(t.$slots,"default")]),_:3},8,["frontmatter","data"])}const R=p(u,[["render",H]]);export{e as data,R as default};