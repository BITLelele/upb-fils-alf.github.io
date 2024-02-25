"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2468],{5444:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=n(7624),r=n(2172);const i={sidebar_position:4,slug:"/tp/04",description:"Description avanc\xe9e de mod\xe8les"},a="04 - Expressions r\xe9guli\xe8res",l={id:"tp/04/index",title:"04 - Expressions r\xe9guli\xe8res",description:"Description avanc\xe9e de mod\xe8les",source:"@site/docs/tp/04/index.md",sourceDirName:"tp/04",slug:"/tp/04",permalink:"/docs/tp/04",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-alf/upb-fils-alf.github.io/edit/main/docs/tp/04/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/tp/04",description:"Description avanc\xe9e de mod\xe8les"},sidebar:"tutorialSidebar",previous:{title:"03 - Automates Finis",permalink:"/docs/tp/03"},next:{title:"Devoir",permalink:"/docs/category/devoir"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Op\xe9rateurs et construction de RegEx",id:"op\xe9rateurs-et-construction-de-regex",level:2},{value:"Op\xe9rateurs math\xe9matiques",id:"op\xe9rateurs-math\xe9matiques",level:3},{value:"Extensions en Kotlin",id:"extensions-en-kotlin",level:3},{value:"Exemples",id:"exemples",level:3},{value:"Regex en Kotlin",id:"regex-en-kotlin",level:2},{value:"Exercices",id:"exercices",level:2},{value:"Bibliographie",id:"bibliographie",level:2}];function o(e){const s={a:"a",admonition:"admonition",annotation:"annotation",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mtext:"mtext",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"04---expressions-r\xe9guli\xe8res",children:"04 - Expressions r\xe9guli\xe8res"}),"\n",(0,t.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(s.p,{children:["Le TP pr\xe9c\xe9dent, on a \xe9tudi\xe9 les automats finis, un moyen d\u2019identifier certaines sous-cha\xeenes dans un texte. Le probl\xe8me d\u2019AFDs a \xe9t\xe9 la mani\xe8re lourde dans laquelle il faudrait les implanter. Aujourd\u2019hui, on va apprendre un autre moyen plus d\xe9claratif de d\xe9crire les sous-cha\xeenes cherch\xe9es: ",(0,t.jsx)(s.strong,{children:"les expressions r\xe9guli\xe8res"})," (ou ",(0,t.jsx)(s.strong,{children:"RegEx"}),"). Plus concret\xe8ment, on va voir comment utiliser les RegEx pour d\xe9crire facilement des mod\xe8les complexes, pour lesquels les cha\xeenes de caract\xe8res ne suffisent pas."]}),"\n",(0,t.jsx)(s.p,{children:"Dans un compilateur, on utilise les RegEx dans le processus de reconaissance de j\xe9tons (tokens), pour partager le code entier dans ses composantes: instructions, d\xe9finitions et noms des variables ou des fonctions."}),"\n",(0,t.jsx)(s.h2,{id:"op\xe9rateurs-et-construction-de-regex",children:"Op\xe9rateurs et construction de RegEx"}),"\n",(0,t.jsx)(s.p,{children:"Dans la construction des RegEx on utilise des op\xe9rateurs aussi que des caract\xe8res."}),"\n",(0,t.jsx)(s.h3,{id:"op\xe9rateurs-math\xe9matiques",children:"Op\xe9rateurs math\xe9matiques"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"center"},children:"Expr\xe9ssion"}),(0,t.jsx)(s.th,{children:"Correspond \xe0"}),(0,t.jsx)(s.th,{style:{textAlign:"center"},children:"Exemple"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"a"}),(0,t.jsx)(s.td,{children:"Le caract\xe8re 'a'."}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"a"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:'"abcca"'}),(0,t.jsx)(s.td,{children:'La cha\xeene "abcca".'}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:'"abcca"'})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"."}),(0,t.jsx)(s.td,{children:"Remplace tout caract\xe8re."}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"a.b"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"^"}),(0,t.jsx)(s.td,{children:"Commencement du texte."}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"^abc"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"$"}),(0,t.jsx)(s.td,{children:"Fin du texte."}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"abc$"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"[abc...]"}),(0,t.jsxs)(s.td,{children:["L\u2019un des caract\xe8res de l'ensemble ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mo,{fence:"true",children:"{"}),(0,t.jsx)(s.mtext,{children:"\u2005"}),(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsx)(s.mo,{separator:"true",children:","}),(0,t.jsx)(s.mi,{children:"b"}),(0,t.jsx)(s.mo,{separator:"true",children:","}),(0,t.jsx)(s.mi,{children:"c"}),(0,t.jsx)(s.mo,{separator:"true",children:","}),(0,t.jsx)(s.mi,{mathvariant:"normal",children:"."}),(0,t.jsx)(s.mi,{mathvariant:"normal",children:"."}),(0,t.jsx)(s.mi,{mathvariant:"normal",children:"."}),(0,t.jsx)(s.mtext,{children:"\u2005"}),(0,t.jsx)(s.mo,{fence:"true",children:"}"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\Set{a, b, c, ...}"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsxs)(s.span,{className:"minner",children:[(0,t.jsx)(s.span,{className:"mopen delimcenter",style:{top:"0em"},children:"{"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(s.span,{className:"mpunct",children:","}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,t.jsx)(s.span,{className:"mpunct",children:","}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"c"}),(0,t.jsx)(s.span,{className:"mpunct",children:","}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord",children:"..."}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(s.span,{className:"mclose delimcenter",style:{top:"0em"},children:"}"})]})]})})]}),"."]}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"[abc]"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"[^abc...]"}),(0,t.jsxs)(s.td,{children:["Tout caract\xe8re qui ne se trouve pas dans l'ensemble ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mo,{fence:"true",children:"{"}),(0,t.jsx)(s.mtext,{children:"\u2005"}),(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsx)(s.mo,{separator:"true",children:","}),(0,t.jsx)(s.mi,{children:"b"}),(0,t.jsx)(s.mo,{separator:"true",children:","}),(0,t.jsx)(s.mi,{children:"c"}),(0,t.jsx)(s.mo,{separator:"true",children:","}),(0,t.jsx)(s.mi,{mathvariant:"normal",children:"."}),(0,t.jsx)(s.mi,{mathvariant:"normal",children:"."}),(0,t.jsx)(s.mi,{mathvariant:"normal",children:"."}),(0,t.jsx)(s.mtext,{children:"\u2005"}),(0,t.jsx)(s.mo,{fence:"true",children:"}"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\Set{a, b, c, ...}"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsxs)(s.span,{className:"minner",children:[(0,t.jsx)(s.span,{className:"mopen delimcenter",style:{top:"0em"},children:"{"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(s.span,{className:"mpunct",children:","}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,t.jsx)(s.span,{className:"mpunct",children:","}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"c"}),(0,t.jsx)(s.span,{className:"mpunct",children:","}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord",children:"..."}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(s.span,{className:"mclose delimcenter",style:{top:"0em"},children:"}"})]})]})})]}),"."]}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"[^abc]"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"()"}),(0,t.jsx)(s.td,{children:"Groupe. On utilise le groupe quand on veut appliquer un op\xe9rateur sur une expr\xe9ssion (comme les parath\xe8ses en math\xe9matiques)."}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"(a|b)*a"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"[0-9]"}),(0,t.jsx)(s.td,{children:"Intervalle- corr\xe9spond \xe0 tout caract\xe8re entre les deux bornes (inclusivement)."}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"[0-9]"})]})]})]}),"\n",(0,t.jsx)(s.p,{children:"La plupart de langages de programmation offre du support pour les expressions r\xe9guli\xe8res, mais les op\xe9rateurs qu\u2019ils utilisent peuvent varier de l'un \xe0 l\u2019autre."}),"\n",(0,t.jsx)(s.h3,{id:"extensions-en-kotlin",children:"Extensions en Kotlin"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"center"},children:"Expr\xe9ssion"}),(0,t.jsx)(s.th,{children:"Correspond \xe0"}),(0,t.jsx)(s.th,{style:{textAlign:"center"},children:"Exemple"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"r1 | r2"}),(0,t.jsx)(s.td,{children:"r1 ou r2."}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"a | b"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"r1(?=r2)"}),(0,t.jsx)(s.td,{children:"r1 quand il est suivi par r2."}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"abc(?=123)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"\\w"}),(0,t.jsx)(s.td,{children:"Alphanum\xe9rique et _ ."}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"\\w"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"r*"}),(0,t.jsx)(s.td,{children:"Z\xe9ro ou plusieures occurences de la cha\xeene r."}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"a*"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"r+"}),(0,t.jsx)(s.td,{children:"Une ou plusieures occurences de la cha\xeene r."}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"a+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"r?"}),(0,t.jsx)(s.td,{children:"Z\xe9ro ou une occurence de la cha\xeene r."}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"a+"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"r{m, n}"}),(0,t.jsx)(s.td,{children:"Entre m et n occurences de r."}),(0,t.jsxs)(s.td,{style:{textAlign:"center"},children:["a",7]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"."}),(0,t.jsxs)(s.td,{children:["Remplace tout caract\xe8re ",(0,t.jsxs)(s.strong,{children:["que la ligne nouvelle (",(0,t.jsx)(s.code,{children:"newline"}),")"]}),"."]}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"a.b"})]})]})]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:'Si on a besoin d\u2019utiliser dans un RegEx la valeur d\u2019caract\xe8re qui est aussi un op\xe9rateur (*, ?, ^), il faut ajouter un "\\" devant lui: "\\*", "\\?", "\\^".'})}),"\n",(0,t.jsx)(s.h3,{id:"exemples",children:"Exemples"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:['Un RegEx qui reconna\xeet les cha\xeenes "aaba", "aaca", "baba": ',(0,t.jsx)(s.code,{children:"(a|b)a(b|c)a"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{title:"Raisonement",type:"tip",children:(0,t.jsx)(s.p,{children:"La reconna\xeessance des mod\xe8les en utilisant les RegEx se passe caract\xe8re par caract\xe8re: on prend le premier caract\xe8re du RegEx (qui, dans notre cas, est l\u2019expression a ou b) et on le compare avec le premier caract\xe8re dans chaque cha\xeene. On peut voir que les trois cha\xeenes commencent avec a ou b, donc, jusq\u2019\xe0 ce point, le mod\xe8le determin\xe9 par le RegEx se trouve dans les trois cha\xeenes. On continue avec le caract\xe8re suivant dans l\u2019expression, qui est tout simplement a, et qui se trouve en tant que deuxi\xe8me caract\xe8re toujours dans les trois cha\xeenes. Le processus continue jusqu\u2019\xe0 la fin de l\u2019expression r\xe9guli\xe8re."})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Un RegEx qui reconna\xeet les num\xe9ros enti\xe8rs: ",(0,t.jsx)(s.code,{children:"(-)?[1-9][0-9]*"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Un RegEx qui reconna\xeet les cha\xeenes qui commencent avec 'a', se terminent avec 'a' et contiennent que 'a' ou 'b' \xe0 l\u2019int\xe9rieur: ",(0,t.jsx)(s.code,{children:"a(a|b)*a"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"regex-en-kotlin",children:"Regex en Kotlin"}),"\n",(0,t.jsxs)(s.p,{children:["Kotlin, comme d\u2019autres langages de programmation, offre d\xe9j\xe0 une implantation pour les RegEx: la classe ",(0,t.jsx)(s.code,{children:"Regex()"}),". On peut instantier un objet de type ",(0,t.jsx)(s.code,{children:"Regex"})," soit en utilisant le constructeur de la classe, soit avec la m\xe9thode ",(0,t.jsx)(s.code,{children:"toRegex()"})," sur un ",(0,t.jsx)(s.code,{children:"String"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-kotlin",children:'    //instantiation avec le constructeur\n    val myRegex = Regex("a(a|b)*a")\n\n    //instantiation \xe0 partir d\u2019un String\n    val myOtherRegex = "(-)?[1-9][0-9]*".toRegex()\n'})}),"\n",(0,t.jsx)(s.p,{children:"La classe expose beaucoup de m\xe9thodes et on vous encourage de jetter un coup d\u2019oeil sur la documentation officielle dans la s\xe9ction de sources. Parmi les plus importantes, on trouve:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-kotlin",children:"    //retourne la premi\xe8re correspondance dans input, en chercheant \xe0 partir de startIndex\n    fun find(\n        input: CharSequence,\n        startIndex: Int = 0\n    ): MatchResult?\n\n    //la m\xeame chose que find, mais retourne une s\xe9quence de toutes les correspondances\n    fun findAll(\n        input: CharSequence,\n        startIndex: Int = 0\n    ): Sequence<MatchResult>\n\n    //partage input autour des occurences du regex\n    fun split(\n        input: CharSequence,\n        limit: Int = 0\n    ): List<String>\n"})}),"\n",(0,t.jsx)(s.h2,{id:"exercices",children:"Exercices"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Completez les exercices sur ce ",(0,t.jsx)(s.a,{href:"https://regexone.com/lesson/introduction_abcs",children:"site"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Pour chacun des RegEx suivants, donnez 3 exemples de cha\xeenes qui correspondent:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["((",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"\u03f5"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\epsilon"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"\u03f5"})]})})]}),"|a)b*)*"]}),"\n",(0,t.jsx)(s.li,{children:"a*ba*ba*ba*"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["V\xe9rifiez la correspondance avec ce ",(0,t.jsx)(s.a,{href:"https://regex101.com/",children:"site"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\xc9crivez des expressions r\xe9guli\xe8res pour reconna\xeetre:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["l\u2019ensemble des cha\xeenes sur l\u2019alphabet ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mo,{fence:"true",children:"{"}),(0,t.jsx)(s.mtext,{children:"\u2005"}),(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsx)(s.mo,{separator:"true",children:","}),(0,t.jsx)(s.mi,{children:"b"}),(0,t.jsx)(s.mo,{separator:"true",children:","}),(0,t.jsx)(s.mi,{children:"c"}),(0,t.jsx)(s.mtext,{children:"\u2005"}),(0,t.jsx)(s.mo,{fence:"true",children:"}"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\Set{a, b, c}"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsxs)(s.span,{className:"minner",children:[(0,t.jsx)(s.span,{className:"mopen delimcenter",style:{top:"0em"},children:"{"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(s.span,{className:"mpunct",children:","}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,t.jsx)(s.span,{className:"mpunct",children:","}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"c"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(s.span,{className:"mclose delimcenter",style:{top:"0em"},children:"}"})]})]})})]})," qui contiennent au moins un 'a' et au moins un 'b'"]}),"\n",(0,t.jsxs)(s.li,{children:["l\u2019ensemble des cha\xeenes sur l\u2019alphabet ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mo,{fence:"true",children:"{"}),(0,t.jsx)(s.mtext,{children:"\u2005"}),(0,t.jsx)(s.mn,{children:"0"}),(0,t.jsx)(s.mo,{separator:"true",children:","}),(0,t.jsx)(s.mn,{children:"1"}),(0,t.jsx)(s.mtext,{children:"\u2005"}),(0,t.jsx)(s.mo,{fence:"true",children:"}"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\Set{0, 1}"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsxs)(s.span,{className:"minner",children:[(0,t.jsx)(s.span,{className:"mopen delimcenter",style:{top:"0em"},children:"{"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(s.span,{className:"mord",children:"0"}),(0,t.jsx)(s.span,{className:"mpunct",children:","}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord",children:"1"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(s.span,{className:"mclose delimcenter",style:{top:"0em"},children:"}"})]})]})})]})," qui contiennent une seule paire de '1's cons\xe9cutives"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Ouvrez les fichiers de laboratoire. Regardez le fichier TP04/Ex4/etc/passwd. C\u2019est un fichier texte qui a le format du fichier etc/passwd dans Linux. Chaque ligne a le format suivant:",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.img,{alt:"Format du fichier etc/passwd",src:n(2548).c+"",width:"1480",height:"315"})]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Username"}),": le nom d\u2019utilisateur. Contient entre 1 et 32 caract\xe8res"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Password"}),": un caract\xe8re 'x' qui indique que le mot de passe est encod\xe9 et situ\xe9 dans le fichier ",(0,t.jsx)(s.code,{children:"/etc/shadow_file"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"User ID"}),": identificateur d\u2019utilisateur (un nombre sur 16 bits)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Group ID"}),": identificateur du group (toujours un nombre sur 16 bits)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"User info"}),": un champ pour des commentaires"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Home directory"}),": le chemin absolut du directeur dans lequel l\u2019utilisateur se trouve au moment de la connexion"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Command/shell"}),": le chemin absolut d\u2019une commande"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Les champs sont separ\xe9s avec des ",(0,t.jsx)(s.code,{children:":"}),". On demande:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\xe9crivez une expression r\xe9guli\xe8re qui accepte toutes les lignes du fichier;"}),"\n",(0,t.jsx)(s.li,{children:"completez le code du fichier TP04/Ex4/Passwd.kt pour \xe9crire un programme qui trouve toutes les commandes disponibles pour un nom d\u2019utilisateur donn\xe9"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"(Bonus) Ouvrez les fichiers de laboratoire. Regardez le fichier TP04/Ex2.txt. Vous avez un fichier texte qui contient des lignes avec des chiffres et des caract\xe8res comme les lignes suivantes:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"    two1nine\n    eightwothree\n    abcone2threexyz\n    xtwone3four\n    4nineeightseven2\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Parfois, ces caract\xe8res peuvent \xe9crire des chiffres eux-m\xeames (par exemple: pour la premi\xe8re ligne, on a ",(0,t.jsx)(s.code,{children:"two"})," et ",(0,t.jsx)(s.code,{children:"nine"}),"). Sachant cela, trouvez la premi\xe8re et la derni\xe8re chiffre dans chaque ligne et calculez la somme de toutes cettes chiffres."]}),"\n",(0,t.jsx)(s.h2,{id:"bibliographie",children:"Bibliographie"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"Introduction to Automata Theory, Languages and Computation - 3rd edition"}),"- Chapitre 3: Regular Expressions"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"Compilers: Principles, Techniques & Tools - 2nd Edition"})," - Chapitre 3.3: Specification of Tokens"]}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-regex/",children:"RegEx en Kotlin"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://regex101.com/",children:"Regex101"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://regexone.com/lesson/introduction_abcs",children:"Introduction \xe0 RegEx"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},2548:(e,s,n)=>{n.d(s,{c:()=>t});const t=n.p+"assets/images/04_etcpasswd_contents-6a1eee699c7b50f674c613f6b9d25d13.png"},2172:(e,s,n)=>{n.d(s,{I:()=>l,M:()=>a});var t=n(1504);const r={},i=t.createContext(r);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);