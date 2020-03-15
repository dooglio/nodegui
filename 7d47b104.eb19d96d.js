(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{298:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(1),o=n(9),a=(n(0),n(440)),s={},r={id:"development/signal_and_event_handling",title:"signal_and_event_handling",description:"# Event handling",source:"@site/docs/development/signal_and_event_handling.md",permalink:"/docs/development/signal_and_event_handling",editUrl:"https://github.com/nodegui/nodegui/edit/master/website/docs/development/signal_and_event_handling.md"},l=[],c={rightToc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"event-handling"},"Event handling"),Object(a.b)("p",null,"In Qt you can respond to an external event like a key press via event handling. Events always are processed by the event loop. Alongside events Qt also has a concept of Signals/Slots. Signals and slots are used to primarily communicate between widgets (more precisely QObjects). So the most common way of interacting between Qt Widgets is done through signals/slots. (More details here: ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://doc.qt.io/qt-5/signalsandslots.html"}),"https://doc.qt.io/qt-5/signalsandslots.html"),"). Hence we would be implementing support for both events and signals."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Technicals:")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'An event is a message encapsulated in a class (QEvent) which is processed in an event loop and dispatched to a recipient that can either accept the message or pass it along to others to process. They are usually created in response to external system events like mouse clicks.\nSignals and Slots are a convenient way for QObjects to communicate with one another and are more similar to callback functions. In most circumstances, when a "signal" is emitted, any slot function connected to it is called directly. The exception is when signals and slots cross thread boundaries. In this case, the signal will essentially be converted into an event.')),Object(a.b)("h1",{id:"implementing-signal-handling"},"Implementing Signal handling"),Object(a.b)("p",null,"In Qt signals and slots are used to communicate between different qt widgets. So they can be used to implement things like\nonClick, onHover etc."),Object(a.b)("p",null,"The way Qt Signals work is explained here:"),Object(a.b)("p",null,Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://doc.qt.io/qt-5/signalsandslots.html"}),"https://doc.qt.io/qt-5/signalsandslots.html")),Object(a.b)("p",null,"The way you use them in Qt for a PushButton is explained here:\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://wiki.qt.io/How_to_Use_QPushButton#Signals"}),"https://wiki.qt.io/How_to_Use_QPushButton#Signals")),Object(a.b)("h1",{id:"adding-signalevent-handling-support-to-a-nodewidget"},"Adding signal/event handling support to a NodeWidget"),Object(a.b)("p",null,"We will take the example of PushButton"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Javascript")),Object(a.b)("p",null,"Steps:"),Object(a.b)("p",null,"The widget should inherit from ",Object(a.b)("inlineCode",{parentName:"p"},"NodeWidget"),". NodeWidget inherits from EventWidget internally. EventWidget constructor needs native object while initialising. So arrange your code such that native object gets initialised before calling ",Object(a.b)("inlineCode",{parentName:"p"},"super(native)"),"."),Object(a.b)("p",null,"EventWidget adds ",Object(a.b)("inlineCode",{parentName:"p"},"addEventListener")," method to the widget which can be called\nlike this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"button.addEventListener('clicked', () => {\n    console.log('clicked');\n});\n")),Object(a.b)("p",null,"To help the user know what all signals/events are supported, export an enum like ",Object(a.b)("inlineCode",{parentName:"p"},"QPushButtonEvents")," as shown below."),Object(a.b)("p",null,"So the user can then use it as below:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"button.addEventListener(QPushButtonEvents.clicked, () => {\n    console.log('clicked');\n});\n")),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"import addon from '../../core/addon';\nimport { NodeWidget } from '../../QtGui/QWidget';\nimport { BaseWidgetEvents } from '../../core/EventWidget';\n\nexport const QPushButtonEvents = Object.freeze({\n    ...BaseWidgetEvents,\n    clicked: 'clicked',\n    pressed: 'pressed',\n    released: 'released',\n    toggled: 'toggled',\n});\n\nexport class QPushButton extends NodeWidget {\n    native: NativeElement;\n    constructor(parent?: NodeWidget) {\n        let native;\n        if (parent) {\n            native = new addon.QPushButton(parent.native);\n        } else {\n            native = new addon.QPushButton();\n        }\n        super(native);\n        this.parent = parent;\n        this.native = native;\n    }\n\n    setText(text: string | number) {\n        this.native.setText(`${text}`);\n    }\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"C++")),Object(a.b)("p",null,"Steps:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"NPushButton"))),Object(a.b)("p",null,"Inherit from both QPushButton and NodeWidget. Make sure you have added NODEWIDGET_IMPLEMENTATIONS macro. This adds a crucial method for events support. It will override ",Object(a.b)("inlineCode",{parentName:"p"},"event(QEvent *)")," method of QPushbutton so that nodejs can listen to the events of this widget. This makes sure we convert all the QEvent's of this widget to an event for the nodejs event emitter."),Object(a.b)("p",null,"Also make sure to connect all the signals of the widgets to the event emitter instance from NodeJS. This way we kindof convert the signal to a simple nodejs event."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),'#pragma once\n\n#include <QPushButton>\n#include "src/cpp/core/NodeWidget/nodewidget.h"\n#include "napi.h"\n\nclass NPushButton: public QPushButton, public NodeWidget\n{\n    NODEWIDGET_IMPLEMENTATIONS(QPushButton)\npublic:\n    using QPushButton::QPushButton; //inherit all constructors of QPushButton\n\n    // override this method and implement all signals here\n    void connectSignalsToEventEmitter() {\n        // Qt Connects: Implement all signal connects here\n        QObject::connect(this, &QPushButton::clicked, [=](bool checked) {\n            Napi::Env env = this->emitOnNode.Env();\n            Napi::HandleScope scope(env);\n            this->emitOnNode.Call({  Napi::String::New(env, "clicked"), Napi::Value::From(env, checked) });\n        });\n        QObject::connect(this, &QPushButton::released, [=]() {\n            Napi::Env env = this->emitOnNode.Env();\n            Napi::HandleScope scope(env);\n            this->emitOnNode.Call({  Napi::String::New(env, "released") });\n        });\n        QObject::connect(this, &QPushButton::pressed, [=]() {\n            Napi::Env env = this->emitOnNode.Env();\n            Napi::HandleScope scope(env);\n            this->emitOnNode.Call({  Napi::String::New(env, "pressed") });\n        });\n        QObject::connect(this, &QPushButton::toggled, [=](bool checked) {\n            Napi::Env env = this->emitOnNode.Env();\n            Napi::HandleScope scope(env);\n            this->emitOnNode.Call({  Napi::String::New(env, "toggled"), Napi::Value::From(env, checked) });\n        });\n    }\n};\n\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Additional")),Object(a.b)("p",null,"Make sure ",Object(a.b)("inlineCode",{parentName:"p"},"npushbutton.h")," is added to ",Object(a.b)("inlineCode",{parentName:"p"},"config/moc.json"),".\nAnd run ",Object(a.b)("inlineCode",{parentName:"p"},"npm run automoc")," before running ",Object(a.b)("inlineCode",{parentName:"p"},"npm run build:addon")),Object(a.b)("p",null,"We need to run Qt's MOC (Meta Object Compiler) on the file whenever we use Q_OBJECT in a class or use QObject::connect. This is so that Qt can expand the macros and add necessary implementations to our class."),Object(a.b)("h1",{id:"how-does-it-work-"},"How does it work ?"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"On JS side for each widget instance we create an instance of NodeJS's Event Emitter. This is done by the class ",Object(a.b)("inlineCode",{parentName:"li"},"EventWidget")," from which ",Object(a.b)("inlineCode",{parentName:"li"},"NodeWidget")," inherits"),Object(a.b)("li",{parentName:"ol"},"We send this event emiiter's ",Object(a.b)("inlineCode",{parentName:"li"},"emit")," function to the C++ side by calling ",Object(a.b)("inlineCode",{parentName:"li"},"initNodeEventEmitter")," method and store a pointer to the event emitter's emit function using ",Object(a.b)("inlineCode",{parentName:"li"},"emitOnNode"),". initNodeEventEmitter function is added by a macro from EventWidget (c++). You can find the initNodeEventEmitter method with the event widget macros."),Object(a.b)("li",{parentName:"ol"},"We setup Qt's connect method for all the signals that we want to listen to and call the emitOnNode (which is actually emit from Event emitter) whenever a signal arrives. This is done manually on every widget by overriding the method ",Object(a.b)("inlineCode",{parentName:"li"},"connectSignalsToEventEmitter"),". Check ",Object(a.b)("inlineCode",{parentName:"li"},"npushbutton.h")," for details. This takes care of all the signals of the widgets. Now to export all qt events of the widget, we had overriden the widgets ",Object(a.b)("inlineCode",{parentName:"li"},"event(Event*)")," method to listen to events received by the widget and send it to the event emitter. This is done inside the EVENTWIDGET_IMPLEMENTATIONS macro")))}d.isMDXComponent=!0},440:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r({},t,{},e)),n},p=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=i,h=p["".concat(s,".").concat(b)]||p[b]||u[b]||a;return n?o.a.createElement(h,r({ref:t},c,{components:n})):o.a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=b;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<a;c++)s[c]=n[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);