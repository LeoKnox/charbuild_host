(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);a(27);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=(a(32),a(19)),s=a(20),i=a(24),u=a(21),m=a(25),h=a(6),p=a(7),E=(a(33),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"This is about page"),r.a.createElement("p",{className:"about"},"This will one day be a turn based role-playing game using web technologies. Using React, Node, Express and MongoDB. Of course HTML and CSS. Also plans for creating a web based dungeon creation application."),r.a.createElement("p",{className:"about"},"Inspired by my love of table top games and nethack. I like the turn based system to give more ability explore and socialize rather then run through an adventure as quickly as possible. Plus it should allow for the ability to inject creativity and uniqueness into the adventure."))}),f=function(e){var t=e.characters;return r.a.createElement(r.a.Fragment,null,t.map(function(e,t){return r.a.createElement("p",{key:t},r.a.createElement(h.b,{to:"/character/".concat(e.name),key:t,className:"characterList"},e.name," : ",e.class))}))},b=[{name:"Aelien",class:"Wizard",content:["ATK: 8","DEF: 10","MGC: 17","HP: 20"]},{name:"Colette",class:"Rogue",content:["atk:17","def:12","mgc:10","hp:25"]}],d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Characters"),r.a.createElement(f,{characters:b}))},v=a(5),g=a.n(v),y=a(8),w=a(11),k=function(e){var t=e.charAction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Actions:"),t.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("h4",null,e.username),r.a.createElement("p",null,e.text))}))},N=function(e){var t=e.characterName,a=e.hits,n=e.setCharacterInfo,c=function(){var e=Object(y.a)(g.a.mark(function e(){var a,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/characters/".concat(t,"/hits"),{method:"post"});case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,n(r);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return c()},className:"hitButton"},"Hit"),r.a.createElement("p",null,t," has been hit ",a," times."))},j=function(e){var t=e.characterName,a=e.setCharacterInfo,c=Object(n.useState)(""),l=Object(w.a)(c,2),o=l[0],s=l[1],i=Object(n.useState)(""),u=Object(w.a)(i,2),m=u[0],h=u[1],p=function(){var e=Object(y.a)(g.a.mark(function e(){var n,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/characters/".concat(t,"/charAction"),{method:"post",body:JSON.stringify({username:o,text:m}),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,console.log("!!"+m),a(r),s(""),h("");case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"actionTime"},r.a.createElement("h3",null,"Action Time It!"),r.a.createElement("label",{id:"charName"},r.a.createElement("label",{className:"actionTitle"},"Name:"),r.a.createElement("input",{type:"text",value:o,onChange:function(e){return s(e.target.value)}}),r.a.createElement("br",null)),r.a.createElement("label",{id:"charAction"},r.a.createElement("label",{className:"actionTitle"},"Action:"),r.a.createElement("textarea",{rows:"4",cols:"50",value:m,onChange:function(e){return h(e.target.value)}})),r.a.createElement("button",{className:"actionButton",onClick:function(){return p()}},"Add Action"))},x=function(){return r.a.createElement("h1",null,"404: Page Not Found")},O=function(e){var t=e.match.params.name,a=b.find(function(e){return e.name===t}),c=b.filter(function(e){return e.name!==t}),l=Object(n.useState)({hits:0,charAction:[]}),o=Object(w.a)(l,2),s=o[0],i=o[1];return console.log(s),Object(n.useEffect)(function(){!function(){var e=Object(y.a)(g.a.mark(function e(){var a,n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/characters/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,i(n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[t]),a?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,a.name," "),r.a.createElement(N,{characterName:t,hits:s.hits,setCharacterInfo:i}),r.a.createElement("h3",null,"Class: ",a.class),a.content.map(function(e,t){return r.a.createElement("p",{key:t},e)}),r.a.createElement(k,{charAction:s.charAction}),r.a.createElement(j,{characterName:t,setCharacterInfo:i}),r.a.createElement(f,{characters:c})):r.a.createElement(x,null)},A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"work begins here"),r.a.createElement("p",null,"Days of online adventure .... "))},C=function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",{className:"links"},r.a.createElement(h.b,{to:"/"},"Home")),r.a.createElement("li",{className:"links"},r.a.createElement(h.b,{to:"/about"},"About")),r.a.createElement("li",{className:"links"},r.a.createElement(h.b,{to:"/characters-list"},"Characters List"))))},T=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(C,null),r.a.createElement("div",{id:"page-body"},r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",component:A,exact:!0}),r.a.createElement(p.a,{path:"/about",component:E}),r.a.createElement(p.a,{path:"/characters-list",component:d}),r.a.createElement(p.a,{path:"/character/:name",component:O}),r.a.createElement(p.a,{component:x})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.2fd40639.chunk.js.map