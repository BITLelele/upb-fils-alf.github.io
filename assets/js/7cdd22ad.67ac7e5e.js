"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4616],{5936:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=s(7624),l=s(2172);const r={sidebar_position:1,description:"Simuler un CPU"},t="01 - Simulateur",d={id:"devoir/01",title:"01 - Simulateur",description:"Simuler un CPU",source:"@site/docs/devoir/01.md",sourceDirName:"devoir",slug:"/devoir/01",permalink:"/docs/devoir/01",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-alf/upb-fils-alf.github.io/edit/main/docs/devoir/01.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Simuler un CPU"},sidebar:"tutorialSidebar",previous:{title:"Devoir",permalink:"/docs/category/devoir"},next:{title:"Analyse syntaxique",permalink:"/docs/devoir/02"}},c={},a=[{value:"Information",id:"information",level:2},{value:"Objectifs",id:"objectifs",level:2},{value:"Description du devoir",id:"description-du-devoir",level:2},{value:"Ensemble d&#39;instructions",id:"ensemble-dinstructions",level:3},{value:"No Action",id:"no-action",level:3},{value:"Memory",id:"memory",level:3},{value:"Math",id:"math",level:3},{value:"Flow",id:"flow",level:3},{value:"Pseudo Debug",id:"pseudo-debug",level:3},{value:"Erreurs",id:"erreurs",level:3},{value:"Conseils d&#39;implantation",id:"conseils-dimplantation",level:2},{value:"Bonus",id:"bonus",level:2},{value:"Ex\xe9cution du programme",id:"ex\xe9cution-du-programme",level:2},{value:"Exemple",id:"exemple",level:2},{value:"R\xe8gles",id:"r\xe8gles",level:2},{value:"Questions",id:"questions",level:2}];function o(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"01---simulateur",children:"01 - Simulateur"}),"\n",(0,i.jsx)(n.h2,{id:"information",children:"Information"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Deadline: le 17 mars ",(0,i.jsx)(n.br,{}),"\n","Points: 2 points de la note finale ",(0,i.jsx)(n.br,{}),"\n","Lien: ",(0,i.jsx)(n.a,{href:"https://classroom.github.com/a/s3tmWRAY",children:"https://classroom.github.com/a/s3tmWRAY"})," ",(0,i.jsx)(n.br,{}),"\n","T\xe9l\xe9chargement tardif: ",(0,i.jsx)(n.strong,{children:"1p/jour"})," (maximum 2 jours)"]})}),"\n",(0,i.jsx)(n.h2,{id:"objectifs",children:"Objectifs"}),"\n",(0,i.jsx)(n.p,{children:"Le but de ce travail est de vous familiariser avec les concepts suivants:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"d\xe9veloppement de base de Kotlin"}),"\n",(0,i.jsx)(n.li,{children:"utilisation de structures de donn\xe9es dans Kotlin"}),"\n",(0,i.jsx)(n.li,{children:"utilisation des param\xe8tres de la ligne de commande"}),"\n",(0,i.jsx)(n.li,{children:"lecture de donn\xe9es \xe0 partir de fichiers"}),"\n",(0,i.jsx)(n.li,{children:"division et traitement de cha\xeenes"}),"\n",(0,i.jsx)(n.li,{children:"le mode de fonctionnement d'un processeur simple"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"description-du-devoir",children:"Description du devoir"}),"\n",(0,i.jsx)(n.p,{children:"Le but de ce devoir est de simuler un CPU. Il s'agit d'un processeur tr\xe8s simple, qui a un registre, appel\xe9 R, et un espace de pile infini, appel\xe9 STACK. Le CPU effectue tous les calculs en utilisant des nombres entiers sign\xe9s. Il ne sait pas comment g\xe9rer les nombres \xe0 virgule flottante."}),"\n",(0,i.jsx)(n.h3,{id:"ensemble-dinstructions",children:"Ensemble d'instructions"}),"\n",(0,i.jsx)(n.p,{children:"L'ensemble d'instructions est divis\xe9 en cinq cat\xe9gories d'instructions:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"No Action - ces instructions n'effectuent aucune action"}),"\n",(0,i.jsx)(n.li,{children:"Memory - ces instructions permettent au CPU d'interagir avec la pile (la m\xe9moire)"}),"\n",(0,i.jsx)(n.li,{children:"Math - ces instructions permettent au CPU d'effectuer des op\xe9rations math\xe9matiques"}),"\n",(0,i.jsx)(n.li,{children:"Flow - ces instructions permettent au CPU d'effectuer des if et des boucles"}),"\n",(0,i.jsx)(n.li,{children:"Pseudo Debug - ces instructions sont utilis\xe9es pour le d\xe9bogage"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Dans les exemples suivants, on utilisera le ",(0,i.jsx)(n.code,{children:";"})," pour marquer les commentaires dans les fichiers ",(0,i.jsx)(n.code,{children:".asm"}),". Les fichiers du devoir ",(0,i.jsx)(n.strong,{children:"ne contiendront pas"})," de commentaires, on les utilise ici seulement pour vous donner plusieurs explications."]})}),"\n",(0,i.jsx)(n.h3,{id:"no-action",children:"No Action"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Instruction"}),(0,i.jsx)(n.th,{children:"Param\xe8tres"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Exemple"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"nop"})}),(0,i.jsx)(n.td,{children:"pas de param\xe8tres"}),(0,i.jsx)(n.td,{children:"Elle ne fait rien, \xe9tant utilis\xe9e seulement pour les commentaires"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"nop"})})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"memory",children:"Memory"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Instruction"}),(0,i.jsx)("td",{children:"Param\xe8tres"}),(0,i.jsx)("td",{children:"Description"}),(0,i.jsx)("td",{children:"Exemple"})]})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.code,{children:"push"})}),(0,i.jsx)("td",{children:"num\xe9ro entier "}),(0,i.jsx)("td",{children:"Elle ajoute le param\xe8tre sur la pile "}),(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nasm",children:"   ; la pile est [ ]\n   push 1\n   ; la pile est [ 1 ]\n   push 2\n   ;la pile est [ 1 2 ] \n"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.code,{children:"pop"})}),(0,i.jsx)("td",{children:" -  "}),(0,i.jsx)("td",{children:"Elle extrait le premier nombre de la pile; en d'autres termes, elle supprime le premier nombre de la pile"}),(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nasm",children:"   ;la pile est [ 1 2 ] \n   pop\n   ; la pile est [ 1 ]\n"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.code,{children:"load"})}),(0,i.jsx)("td",{children:" -  "}),(0,i.jsx)("td",{children:"Elle extrait le premier nombre de la pile et le met dans R (le registre du processeur)"}),(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nasm",children:"   ;la pile est [ 1 2 ] \n   load\n   ; la pile est [ 1 ]\n   ; R est 2\n"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.code,{children:"store"})}),(0,i.jsx)("td",{children:" -  "}),(0,i.jsx)("td",{children:"Elle ajoute le nombre de R (le registre du processeur) dans la pile "}),(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nasm",children:"   ; la pile est [ 1 ]\n   ; R est 2\n   store\n   ; la pile est [ 1 2 ]\n   ; R est 2 \n"})})})]})]}),"\n",(0,i.jsx)(n.h3,{id:"math",children:"Math"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Instruction"}),(0,i.jsx)("td",{children:"Param\xe8tres"}),(0,i.jsx)("td",{children:"Description"}),(0,i.jsx)("td",{children:"Exemple"})]})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.code,{children:"add"})}),(0,i.jsx)("td",{children:"- "}),(0,i.jsx)("td",{children:"Elle extrait deux nombres de la pile, fait l'addition, et ajoute le r\xe9sultat \xe0 la pile  "}),(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nasm",children:"    push 1 \n    push 2\n    ; la pile est [ 1 2 ]\n    add \n    ; la pile est [ 3 ]\n"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.code,{children:"sub"})}),(0,i.jsx)("td",{children:" -  "}),(0,i.jsx)("td",{children:"Elle extrait deux nombres de la pile, fait la soustraction, et ajoute le r\xe9sultat \xe0 la pile "}),(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nasm",children:"    push 1 \n    push 2\n    ; la pile est [ 1 2 ]\n    sub \n    ; la pile est [ -1 ]\n"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.code,{children:"mul"})}),(0,i.jsx)("td",{children:" -  "}),(0,i.jsx)("td",{children:"Elle extrait deux nombres de la pile, fait la multiplication, et ajoute le r\xe9sultat \xe0 la pile "}),(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nasm",children:"    push 1 \n    push 2\n    ; la pile est [ 1 2 ]\n    mul \n    ; la pile est [ 2 ]\n"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.code,{children:"div"})}),(0,i.jsx)("td",{children:" -  "}),(0,i.jsx)("td",{children:"Elle extrait deux nombres de la pile, fait la division en utilisant une division enti\xe8re et ajoute le r\xe9sultat \xe0 la pile  "}),(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nasm",children:"    push 1 \n    push 2\n    ; la pile est [ 1 2 ]\n    div \n    ; la pile est [ 0 ]\n"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.code,{children:"mod"})}),(0,i.jsx)("td",{children:" -  "}),(0,i.jsx)("td",{children:"Elle extrait deux nombres de la pile, calcule le reste de leur division et ajoute le r\xe9sultat \xe0 la pile "}),(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nasm",children:"    push 5 \n    push 3\n    ; la pile est [ 5 3 ]\n    mod \n    ; la pile est [ 2 ]\n"})})})]})]}),"\n",(0,i.jsx)(n.h3,{id:"flow",children:"Flow"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Instruction"}),(0,i.jsx)("td",{children:"Param\xe8tres"}),(0,i.jsx)("td",{children:"Description"}),(0,i.jsx)("td",{children:"Exemple"})]})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.code,{children:"jump"})}),(0,i.jsx)("td",{children:"num\xe9ro entier / \xe9tiquette  "}),(0,i.jsx)("td",{children:"Au lieu d'ex\xe9cuter l'instruction suivante, la CPU prendra l'instruction: a) au num\xe9ro de ligne sp\xe9cifi\xe9 comme param\xe8tre ou b) de l'\xe9tiquette sp\xe9cifi\xe9e par le param\xe8tre  "}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nasm",children:"    ; exemple avec la ligne \n    push 5 ; line 1\n    jump 5 ; line 2\n    push 3 ; line 3 - ignor\xe9\n    push 2 ; line 4 - ignor\xe9\n    push 2 ; line 5 - jump ici\n    mul\n    ; la pile est [ 10 ] \n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nasm",children:"    ; exemple avec \xe9tiquette\n    push 5 \n    jump two \n    push 3 ; ignor\xe9\n    push 2 ; ignor\xe9\n    two: push 2 ; label two\n    mul\n    ; la pile est [ 10 ]\n"})})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.code,{children:"jumpz"})}),(0,i.jsx)("td",{children:"  num\xe9ro entier / \xe9tiquette   "}),(0,i.jsx)("td",{children:"Si la valeur sup\xe9rieure de la pile est z\xe9ro, cela fonctionne de la m\xeame mani\xe8re que jump, sinon cela ne fait rien  "}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nasm",children:"    ; example ignore\n    push 5  \n    jumpz two ; ignor\xe9, le sommet de la pile est 5\n    push 3 \n    push 3 \n    two: push 2 \n    mul\n    ; la pile est [ 5 3 6 ] \n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nasm",children:"    ; example jump\n    push 0  \n    jumpz two ; saute, le sommet de la pile est 0\n    push 3 ; ignor\xe9\n    push 3 ; ignor\xe9\n    two: push 2 \n    mul\n    ; la pile est [ 0 ]\n"})})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.code,{children:"jumpnz"})}),(0,i.jsx)("td",{children:"  num\xe9ro entier / \xe9tiquette   "}),(0,i.jsx)("td",{children:" Si la valeur sup\xe9rieure de la pile n'est pas z\xe9ro, cela fonctionne de la m\xeame mani\xe8re que jump, sinon cela ne fait rien "}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nasm",children:"    ; example jump\n    push 5  \n    jumpnz two ; jumps, le sommet de la pile n'est pas 0\n    push 3 ; ignor\xe9\n    push 3 ; ignor\xe9\n    two: push 2 \n    mul\n    ; la pile est [ 10 ] \n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nasm",children:"    ; example ignore\n    push 0  \n    jumpnz two ; ignor\xe9, le sommet de la pile est 0\n    push 3 \n    push 3 \n    two: push 2 \n    mul\n    ; la pile est [ 0 3 6 ]\n"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"pseudo-debug",children:"Pseudo Debug"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Instruction"}),(0,i.jsx)("td",{children:"Param\xe8tres"}),(0,i.jsx)("td",{children:"Description"}),(0,i.jsx)("td",{children:"Exemple"})]})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.code,{children:"print"})}),(0,i.jsx)("td",{children:"-  "}),(0,i.jsx)("td",{children:"Affiche le num\xe9ro du sommet de la pile  "}),(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nasm",children:"    ; la pile est [ 1 2 ]\n    print ; affiche 2\n"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.code,{children:"stack"})}),(0,i.jsx)("td",{children:"  -  "}),(0,i.jsx)("td",{children:" Affiche la pile "}),(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nasm",children:"    ; la pile est [ 1 2 ]\n    stack ; imprime [ 1 2 ]\n"})})})]})]}),"\n",(0,i.jsx)(n.h3,{id:"erreurs",children:"Erreurs"}),"\n",(0,i.jsx)(n.p,{children:"Le fichier que le simulateur de processeur ex\xe9cute peut contenir des erreurs. Lorsque le simulateur rencontre une erreur, il ignore cette instruction et continue l'ex\xe9cution avec la ligne suivante."}),"\n",(0,i.jsx)(n.p,{children:"Le format d'erreur g\xe9n\xe9ral est:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    ERROR (nom_instruction): texte d'erreur\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Les erreurs doivent \xeatre affich\xe9s exactement comme dans l'exemple suivant:"})}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Erreur"}),(0,i.jsx)("td",{children:"Signification"}),(0,i.jsx)("td",{children:"Exemple"})]})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"unknown instruction"}),(0,i.jsx)("td",{children:"le simulateur a trouv\xe9 une instruction qu'il ne conna\xeet pas "}),(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nasm",children:"    multi ; ERROR (multi): unknown instruction\n"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"stack underflow"}),(0,i.jsx)("td",{children:"le simulateur essaie d'ex\xe9cuter une instruction qui extrait certaines valeurs de la pile, mais la pile n'a pas assez de valeurs"}),(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nasm",children:"    push 1\n    mul ; ERROR (mul): stack underflow\n"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:["unable to open file ",(0,i.jsx)(n.code,{children:"filename"})]}),(0,i.jsx)("td",{children:"le simulateur tente d'ouvrir un fichier qu'il ne peut pas ouvrir "}),(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    ERROR unable to open file filename.asm(ENOENT: no such file or directory, open filename.asm)\n"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"undefined label"}),(0,i.jsx)("td",{children:"le simulateur essaie de faire un jump \xe0 une \xe9tiquette qui n'est pas d\xe9finie "}),(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nasm",children:"    jump jumper ; ERROR (jump): undefined label jumper\n"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"invalid jump address "}),(0,i.jsx)("td",{children:"le simulateur essaie de faire un jump \xe0 une adresse (num\xe9ro de ligne) qui n'existe pas dans le fichier "}),(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nasm",children:"    jump 2 ; ERROR (jump): invalid jump address 2\n"})})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"conseils-dimplantation",children:"Conseils d'implantation"}),"\n",(0,i.jsx)(n.p,{children:"Le devoir comprend beaucoup de fonctionnalit\xe9s \xe0 impl\xe9menter, donc on vous sugg\xe8re de suivre les \xe9tapes suivantes:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Lire le contenu du fichier dans le string ",(0,i.jsx)(n.code,{children:"s"})," et implanter l'erreur ",(0,i.jsx)(n.code,{children:"no file"})]}),"\n",(0,i.jsxs)(n.li,{children:["S\xe9parer l'entr\xe9e lue par ",(0,i.jsx)(n.code,{children:"\\n"})," (",(0,i.jsx)(n.code,{children:"\\r\\n"})," pour Windows, assurez-vous de l'avoir chang\xe9 avant de transf\xe9rer sur git), en utilisant la fonction ",(0,i.jsx)(n.code,{children:"split()"})]}),"\n",(0,i.jsxs)(n.li,{children:["S\xe9parer chaque ligne par ",(0,i.jsx)(n.code,{children:" "})," (espace) et extraire l'instruction et ses parametres"]}),"\n",(0,i.jsxs)(n.li,{children:["Implanter l'erreur ",(0,i.jsx)(n.code,{children:"unknown instruction"})]}),"\n",(0,i.jsxs)(n.li,{children:["Implanter les instructions ",(0,i.jsx)(n.code,{children:"push"})," et ",(0,i.jsx)(n.code,{children:"pop"})," en utilisant un array de num\xe9ros pour la pile"]}),"\n",(0,i.jsx)(n.li,{children:"Implanter les fonctions math\xe9matiques"}),"\n",(0,i.jsx)(n.li,{children:"Implanter les autres instructions"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"bonus",children:"Bonus"}),"\n",(0,i.jsx)(n.p,{children:"Pour 2p suppl\xe9mentaires, implantez une m\xe9moire pour le CPU. Le simulateur recevra un autre param\xe8tre dans la ligne de commande qui repr\xe9sente le nombre d'emplacements de m\xe9moire disponibles."}),"\n",(0,i.jsx)(n.p,{children:"Implantez les instructions de m\xe9moire suivantes:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Instruction"}),(0,i.jsx)("td",{children:"Param\xe8tres"}),(0,i.jsx)("td",{children:"D\xe9tails"})]})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.code,{children:"write"})}),(0,i.jsx)("td",{children:"-  "}),(0,i.jsx)("td",{children:"Extrait 2 num\xe9ros de la pile et \xe9crit le premier \xe0 l'emplacement de la m\xe9moire d\xe9fini par le deuxi\xe8me   "})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.code,{children:"read"})}),(0,i.jsx)("td",{children:"  -  "}),(0,i.jsx)("td",{children:" Extrait un num\xe9ro de la pile et lit un num\xe9ro de l'emplacement de la m\xe9moire d\xe9fini par le premier num\xe9ro, en ajoutant le deuxieme a la pile  "})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Le bonus ne sera attribu\xe9 que si tous les autres tests r\xe9ussissent."})}),"\n",(0,i.jsx)(n.h2,{id:"ex\xe9cution-du-programme",children:"Ex\xe9cution du programme"}),"\n",(0,i.jsx)(n.p,{children:"Pour compiler et ex\xe9cuter le programme, on va utiliser gradle."}),"\n",(0,i.jsx)(n.p,{children:"Pour compiler le programme:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    $./gradlew build\n"})}),"\n",(0,i.jsx)(n.p,{children:"Pour ex\xe9cuter le programme:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'    $./gradlew run --args="<nom_du_fichier_d\'entr\xe9e>"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsxs)(n.p,{children:["Pour le fichier ",(0,i.jsx)(n.code,{children:".asm"})," suivant (les fichiers du devoir ",(0,i.jsx)(n.strong,{children:"ne contiendront pas"})," de commentaires, on les a mis ici seulement pour expliquer ce que les instructions font):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nasm",metastring:"showLineNumbers",children:"    push 20     ;ajoute 20 \xe0 la pile, la pile est [ 20 ]\n    push 35     ;ajoute 35 \xe0 la pile, la pile est [ 20 35 ] \n    push 9      ;ajoute 9 \xe0 la pile, la pile est [ 20 35 9 ]\n    stack       ;affiche les contenus de la pile\n    load        ;met le sommet de la pile (9 dans notre cas) dans R\n    pop         ;supprime le premier nombre de la pile, la pile est [ 20 35 ] et R est [9]\n    add         ;ajoute les premiers deux num\xe9ros de la pile et met le r\xe9sultat sur la pile, la pile est [ 55 ] et R est [9]\n    print       ;affiche le premier num\xe9ro de la pile\n    store       ;met la valeur de R sur la pile, la pile est [ 55 9] et R est [9]\n    stack       ;affiche la pile\n"})}),"\n",(0,i.jsx)(n.p,{children:"On aura la sortie suivante (sans les commentaires):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    [ 20 35 9 ]\n    55           \n    [ 55 9 ]     \n"})}),"\n",(0,i.jsx)(n.h2,{id:"r\xe8gles",children:"R\xe8gles"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Vous ne pouvez pas utiliser ",(0,i.jsx)(n.em,{children:"RegEx"})," ou toute autre biblioth\xe8que qui utilise des expressions r\xe9guli\xe8res (sauf \\n\\r? pour s\xe9parer les lignes d'entr\xe9e de la source)."]}),"\n",(0,i.jsx)(n.li,{children:"Le code source doit \xeatre indent\xe9 (-0.1p)."}),"\n",(0,i.jsx)(n.li,{children:"Vous devez expliquer en d\xe9tail dans le Readme.md comment vous avez r\xe9dig\xe9 les devoirs (-1p)"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Tricher",type:"danger",children:(0,i.jsx)(n.p,{children:"Les devoirs sont individuels. Toute tentative de tricher entra\xeenera 0p pour les devoirs. Un syst\xe8me anti-copie automatis\xe9 sera utilis\xe9."})}),"\n",(0,i.jsx)(n.h2,{id:"questions",children:"Questions"}),"\n",(0,i.jsxs)(n.p,{children:["Si vous avez des questions concernant les devoirs, posez-les en publiant un probl\xe8me sur le ",(0,i.jsx)(n.a,{href:"https://github.com/UPB-FILS-ALF/questions",children:"github repository pour les questions"})," avec le format du titre ",(0,i.jsx)(n.code,{children:"[simulator]<titre de votre question>"}),". Vous aurez besoin d'un compte github pour cela."]}),"\n",(0,i.jsx)(n.admonition,{title:"Attention",type:"danger",children:(0,i.jsx)(n.p,{children:"Ne postez pas de code. Cette action est consid\xe9r\xe9 comme tentative de tricher et alors vous obtiendrez 0p pour le devoir."})}),"\n",(0,i.jsxs)(n.p,{children:["Si vous souhaitez recevoir un e-mail lorsque des probl\xe8mes sont publi\xe9s ou lorsqu'il y a de nouveaux messages, acc\xe9dez au ",(0,i.jsx)(n.a,{href:"https://github.com/UPB-FILS-ALF/questions",children:"repository pour les questions"})," et cliquez sur Regarder."]})]})}function u(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},2172:(e,n,s)=>{s.d(n,{I:()=>d,M:()=>t});var i=s(1504);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);