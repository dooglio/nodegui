(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{285:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return i}));var n=a(1),r=a(9),c=(a(0),a(440)),b={id:"component",title:"Component",sidebar_label:"Component"},o={id:"api/generated/classes/component",title:"Component",description:"> Abstract class that is root most base class for all widgets and layouts in the NodeGui World.",source:"@site/docs/api/generated/classes/component.md",permalink:"/docs/api/generated/classes/component",editUrl:"https://github.com/nodegui/nodegui/edit/master/website/docs/api/generated/classes/component.md",sidebar_label:"Component",sidebar:"api",previous:{title:"Synopsis",permalink:"/docs/api/manual/synopsis"},next:{title:"EventWidget",permalink:"/docs/api/generated/classes/eventwidget"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Abstract</code> native",id:"abstract-native",children:[]},{value:"nodeChildren",id:"nodechildren",children:[]},{value:"<code>Optional</code> nodeParent",id:"optional-nodeparent",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"setNodeParent",id:"setnodeparent",children:[]}]}],s={rightToc:p};function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Abstract class that is root most base class for all widgets and layouts in the NodeGui World.")),Object(c.b)("p",null,"*This class is used to add core properties to all widgets, layouts etc in NodeGui world.\nCurrently it helps us maintain references to the native C++ instance of the widget or layout.\nIt also helps in preventing gc of child elements of a layout or widget**"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Component")," is an abstract class and hence no instances of the same should be created.\nIt exists so that we can add core functionalities to all widgets and layouts easily. This is an internal class."),Object(c.b)("p",null,"Its the root base class in NodeGui world."),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Component")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qvariant"}),"QVariant")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qpixmap"}),"QPixmap")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qclipboard"}),"QClipboard")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qstyle"}),"QStyle")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/eventwidget"}),"EventWidget")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qkeysequence"}),"QKeySequence")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qrect"}),"QRect")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qpicture"}),"QPicture")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qicon"}),"QIcon")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qfont"}),"QFont")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qsize"}),"QSize")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qcursor"}),"QCursor")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qfontdatabase"}),"QFontDatabase")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qpoint"}),"QPoint")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qmodelindex"}),"QModelIndex")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qdate"}),"QDate")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qtime"}),"QTime")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qdatetime"}),"QDateTime")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qlistwidgetitem"}),"QListWidgetItem")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qtablewidgetitem"}),"QTableWidgetItem")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qtreewidgetitem"}),"QTreeWidgetItem")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qcolor"}),"QColor")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qpainter"}),"QPainter")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qurl"}),"QUrl")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qsettings"}),"QSettings")))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"constructors"},"Constructors"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/component#constructor"}),"constructor"))),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/component#abstract-native"}),"native")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/component#nodechildren"}),"nodeChildren")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/component#optional-nodeparent"}),"nodeParent"))),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/component#setnodeparent"}),"setNodeParent"))),Object(c.b)("h2",{id:"constructors-1"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new Component"),"(): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"abstract-native"},Object(c.b)("inlineCode",{parentName:"h3"},"Abstract")," native"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"native"),": ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/globals#nativeelement"}),"NativeElement"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"nodechildren"},"nodeChildren"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"nodeChildren"),": ",Object(c.b)("em",{parentName:"p"},"Set\u2039",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),"\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"optional-nodeparent"},Object(c.b)("inlineCode",{parentName:"h3"},"Optional")," nodeParent"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"nodeParent"),"? : ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"))),Object(c.b)("h2",{id:"methods-1"},"Methods"),Object(c.b)("h3",{id:"setnodeparent"},"setNodeParent"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"setNodeParent"),"(",Object(c.b)("inlineCode",{parentName:"p"},"parent?"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/component"}),"Component"),"): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"parent?")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/classes/component"}),"Component"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")))}i.isMDXComponent=!0},440:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),i=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},l=function(e){var t=i(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=i(a),m=n,O=l["".concat(b,".").concat(m)]||l[m]||d[m]||c;return a?r.a.createElement(O,o({ref:t},s,{components:a})):r.a.createElement(O,o({ref:t},s))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,b[1]=o;for(var s=2;s<c;s++)b[s]=a[s];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);