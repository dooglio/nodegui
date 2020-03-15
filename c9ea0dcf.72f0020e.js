(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{368:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(1),a=n(9),r=(n(0),n(440)),i={sidebar_label:"Getting started",title:"Getting started"},l={id:"guides/getting-started",title:"Getting started",description:"NodeGui enables you to create desktop applications with JavaScript. You could see it",source:"@site/docs/guides/getting-started.md",permalink:"/docs/guides/getting-started",editUrl:"https://github.com/nodegui/nodegui/edit/master/website/docs/guides/getting-started.md",sidebar_label:"Getting started",sidebar:"guides",next:{title:"Learn the Basics",permalink:"/docs/guides/tutorial"}},s=[{value:"Developer environment",id:"developer-environment",children:[{value:"Setting up on macOS",id:"setting-up-on-macos",children:[]},{value:"Setting up on Windows",id:"setting-up-on-windows",children:[]},{value:"Setting up on Linux",id:"setting-up-on-linux",children:[]},{value:"A Good Editor",id:"a-good-editor",children:[]},{value:"Hello World",id:"hello-world",children:[]},{value:"Now what?",id:"now-what",children:[]}]}],u={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"NodeGui enables you to create desktop applications with JavaScript. You could see it\nas a lightly modified variant of the Node.js runtime that is focused on desktop applications\ninstead of web servers."),Object(r.b)("p",null,"NodeGui is also an efficient JavaScript binding to a cross platform graphical user interface\n(GUI) library ",Object(r.b)("inlineCode",{parentName:"p"},"Qt"),". Qt is one of the most mature and efficient library for building desktop applications.\nThis enabled NodeGui to be extrememly memory and CPU efficient as compared to other popular Javascript Desktop GUI solutions. A hello world app built with NodeGui runs on less than 20Mb of memory."),Object(r.b)("h2",{id:"developer-environment"},"Developer environment"),Object(r.b)("p",null,"To turn your operating system into an environment capable of building desktop apps with NodeGui, you would need Node.js, npm,a code editor of your choice, and a rudimentary understanding of your operating system's command line client."),Object(r.b)("p",null,"Along with these, there are a few operating system dependent instructions that are listed below."),Object(r.b)("h3",{id:"setting-up-on-macos"},"Setting up on macOS"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Requirements:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"NodeGui supports macOS 10.10 (Yosemite) and up. NodeGui currently only supports 64bit OS."),Object(r.b)("li",{parentName:"ul"},"CMake 3.1 and up (Installation instructions can be found here: ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://cmake.org/install/"}),"https://cmake.org/install/"),")"),Object(r.b)("li",{parentName:"ul"},"Make, GCC v7"),Object(r.b)("li",{parentName:"ul"},"Currently supported Node.Js versions are 12.x and up.")),Object(r.b)("p",null,"We strongly suggest you use some kind of version manager for Node.Js. This would allow you to switch to any version of nodejs quite easily. We recommend ",Object(r.b)("inlineCode",{parentName:"p"},"nvm"),": ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/nvm-sh/nvm"}),"https://github.com/nvm-sh/nvm")),Object(r.b)("p",null,"Confirm that both ",Object(r.b)("inlineCode",{parentName:"p"},"node")," and ",Object(r.b)("inlineCode",{parentName:"p"},"npm")," are available by running:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"# This command should print the version of Node.js\nnode -v\n\n# This command should print the version of npm\nnpm -v\n")),Object(r.b)("p",null,"If both commands printed a version number, you are all set! Before you get\nstarted, you might want to install a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#a-good-editor"}),"code editor")," suited\nfor JavaScript development."),Object(r.b)("h3",{id:"setting-up-on-windows"},"Setting up on Windows"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"NodeGui supports Windows 7 and later versions \u2013\xa0attempting to develop NodeGui\napplications on earlier versions of Windows might not work. NodeGui currently only supports 64bit OS.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Requirements:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Visual studio 2017 and up."),Object(r.b)("li",{parentName:"ul"},"CMake 3.1 and up (Installation instructions can be found here: ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://cmake.org/install/"}),"https://cmake.org/install/"),")"),Object(r.b)("li",{parentName:"ul"},"Currently supported Node.Js versions are 12.x and up.")),Object(r.b)("p",null,"We strongly suggest you use some kind of version manager for Node.Js. This would allow you to switch to any version of nodejs quite easily."),Object(r.b)("p",null,"We strongly recommend Powershell as preferred terminal in Windows."),Object(r.b)("p",null,"Confirm that both ",Object(r.b)("inlineCode",{parentName:"p"},"node")," and ",Object(r.b)("inlineCode",{parentName:"p"},"npm")," are available by running:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-powershell"}),"# This command should print the version of Node.js\nnode -v\n\n# This command should print the version of npm\nnpm -v\n")),Object(r.b)("p",null,"If both commands printed a version number, you are all set! Before you get\nstarted, you might want to install a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#a-good-editor"}),"code editor")," suited\nfor JavaScript development."),Object(r.b)("h3",{id:"setting-up-on-linux"},"Setting up on Linux"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"NodeGui currently supports Ubuntu 16.04 and Debian 10 and up. Although other Linux distributions can also be easily supported. NodeGui currently only supports 64bit OS.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Requirements:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Make, GCC v7"),Object(r.b)("li",{parentName:"ul"},"CMake 3.1 and up (Installation instructions can be found here: ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://cmake.org/install/"}),"https://cmake.org/install/"),")"),Object(r.b)("li",{parentName:"ul"},"Currently supported Node.Js versions are 12.x and up."),Object(r.b)("li",{parentName:"ul"},"On Ubuntu and Ubuntu-based distros it is advisable to run ",Object(r.b)("inlineCode",{parentName:"li"},"sudo apt-get update"),", followed by ",Object(r.b)("inlineCode",{parentName:"li"},"sudo apt-get install pkg-config build-essential"))),Object(r.b)("p",null,"We strongly suggest you use some kind of version manager for Node.Js. This would allow you to switch to any version of nodejs quite easily. We recommend ",Object(r.b)("inlineCode",{parentName:"p"},"nvm"),": ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/nvm-sh/nvm"}),"https://github.com/nvm-sh/nvm")),Object(r.b)("p",null,"Confirm that both ",Object(r.b)("inlineCode",{parentName:"p"},"node")," and ",Object(r.b)("inlineCode",{parentName:"p"},"npm")," are available by running:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"# This command should print the version of Node.js\nnode -v\n\n# This command should print the version of npm\nnpm -v\n")),Object(r.b)("p",null,"If both commands printed a version number, you are all set! Before you get\nstarted, you might want to install a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#a-good-editor"}),"code editor")," suited\nfor JavaScript development."),Object(r.b)("h3",{id:"a-good-editor"},"A Good Editor"),Object(r.b)("p",null,"We might suggest two free popular editors:\nGitHub's ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://atom.io/"}),"Atom")," and Microsoft's ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://code.visualstudio.com/"}),"Visual Studio Code"),". Both of\nthem have excellent JavaScript support."),Object(r.b)("p",null,"If you are one of the many developers with a strong preference, know that\nvirtually all code editors and IDEs these days support JavaScript."),Object(r.b)("h3",{id:"hello-world"},"Hello World"),Object(r.b)("p",null,"Clone and run the code in this tutorial by using the\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/nodegui/nodegui-starter"}),Object(r.b)("inlineCode",{parentName:"a"},"nodegui/nodegui-starter"))," repository."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),": Running this requires ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://git-scm.com"}),"Git")," and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.npmjs.com/"}),"npm"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"\ngit clone https://github.com/nodegui/nodegui-starter\n\ncd nodegui-starter\n\nnpm install\n\nnpm start\n\n")),Object(r.b)("p",null,"That's it!"),Object(r.b)("p",null,"Congratulations! You've successfully run and modified your first NodeGui app."),Object(r.b)("h3",{id:"now-what"},"Now what?"),Object(r.b)("p",null,"If you're curious to learn more about NodeGui, continue on to the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/guides/tutorial"}),"tutorial"),"."))}p.isMDXComponent=!0},440:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},c=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,m=c["".concat(i,".").concat(d)]||c[d]||b[d]||r;return n?a.a.createElement(m,l({ref:t},u,{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);