(this["webpackJsonpreact-rescripts-antd-starter-kit"]=this["webpackJsonpreact-rescripts-antd-starter-kit"]||[]).push([[8],{278:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return A}));var n=a(42),c=a(43),l=a(50),r=a(49),o=a(0),s=a.n(o),i=a(1),m=a(279),u=a(141),p=a(182),f=a(183),d=a(39),h=a(40),b=a(25),E=a(168);function g(e){var t=e.role,a=e.collapse,n=e.match.url,c=function(e){return[{path:"monitor",name:"Monitor",icon:f.f,enabled:"admin"===e},{path:"data",name:"Data",icon:f.e,enabled:"admin"===e},{path:"account",name:"Account",icon:f.g,enabled:["admin","user"].includes(e)},{path:"settings",name:"Settings",icon:f.a,enabled:["admin","user"].includes(e)}]}(t).filter((function(e){return e.enabled}));return s.a.createElement(s.a.Fragment,null,s.a.createElement("section",{className:"flex flex-col justify-center h-12"},s.a.createElement("figure",{className:"m-auto"},s.a.createElement("img",{className:"h-8 w-8",src:"https://camo.githubusercontent.com/bc93494c1f9faf29cae5064245e03f086a2cb1b5/68747470733a2f2f67772e616c697061796f626a656374732e636f6d2f7a6f732f726d73706f7274616c2f4b4470677667754d704766716148506a6963524b2e737667",alt:"Ant Design Logo"}))),s.a.createElement("section",null,s.a.createElement("div",{className:"w-full"},s.a.createElement("ul",{className:"w-full list-none text-white pl-0"},c.map((function(e){var t=e.path,c=e.name,l=e.icon;return s.a.createElement("li",{key:Object(E.uniqueId)("menuItem__"),className:"hover:bg-gray-800"},s.a.createElement(b.b,{className:"block text-white text-left py-2 px-4 rounded ".concat(a?"text-center":"text-left"),to:"".concat(n,"/").concat(t)},s.a.createElement(p.a,{icon:l}),a?null:" "+c))})))),s.a.createElement("div",{className:"absolute text-center w-full",style:{bottom:2}},s.a.createElement(b.b,{to:"/",className:"block text-white py-2 px-4 hover:bg-gray-800 ".concat(a?"text-center":"text-left")},s.a.createElement(p.a,{icon:f.d}),a?null:" Logout"))))}function x(){var e=Object(d.a)(["\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return x=function(){return e},e}var v=m.a.Sider,y=Object(h.a)(v)(x());var w=function(e){var t=e.role,a=e.match,n=e.collapse;return s.a.createElement(y,{trigger:null,collapsible:!0,collapsed:n},s.a.createElement(g,{role:t,match:a,collapse:n}))},N=a(277);function k(){var e=Object(d.a)(["\n  display: none;\n  @media only screen and (max-width: 768px) {\n    display: block;\n  }\n  .ant-drawer-body {\n    background: black;\n    padding: 0;\n  }\n"]);return k=function(){return e},e}var j=Object(h.a)(N.a)(k());var C=function(e){var t=e.role,a=e.match,n=e.collapse,c=e.onClose;return s.a.createElement(j,{className:"w-auto",visible:n,placement:"left",onClose:c},s.a.createElement(g,{role:t,match:a,collapse:!1}))},O=m.a.Content,A=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,l=new Array(c),r=0;r<c;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={collapse:!0},e.toggleCollapse=function(){e.setState({collapse:!e.state.collapse})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.match,n=t.history,c=a.url,l=this.state.collapse;return s.a.createElement(m.a,{className:"flex h-full w-full"},s.a.createElement(w,{match:a,history:n,role:"user",className:"shadow-2xl",collapse:this.state.collapse}),s.a.createElement(C,{match:a,history:n,role:"user",className:"shadow-2xl",collapse:this.state.collapse,onClose:this.toggleCollapse}),s.a.createElement(O,null,s.a.createElement("div",{className:"flex items-center bg-white h-12 px-6 shadow"},s.a.createElement(u.a,{style:{padding:0},type:"link",onClick:function(){return e.toggleCollapse()}},s.a.createElement(p.a,{className:"text-black",icon:l?f.b:f.c}))),s.a.createElement("main",{className:"p-6"},s.a.createElement(i.a,{path:"".concat(c,"/account"),component:function(){return s.a.createElement("p",null,"account")}}),s.a.createElement(i.a,{path:"".concat(c,"/data"),component:function(){return s.a.createElement("p",null,"data")}}),s.a.createElement(i.a,{path:"".concat(c,"/monitor"),component:function(){return s.a.createElement("p",null,"monitor")}}),s.a.createElement(i.a,{path:"".concat(c,"/settings"),component:function(){return s.a.createElement("p",null,"settings")}}))))}}]),a}(o.Component)}}]);
//# sourceMappingURL=8.ea3084a3.chunk.js.map