(function(t){function e(e){for(var n,r,u=e[0],i=e[1],d=e[2],s=0,l=[];s<u.length;s++)r=u[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);p&&p(e);while(l.length)l.shift()();return c.push.apply(c,d||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,r=1;r<o.length;r++){var u=o[r];0!==a[u]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},a={app:0},c=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d1cdd51e"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(t){var e=[],o={about:1};r[t]?e.push(r[t]):0!==r[t]&&o[t]&&e.push(r[t]=new Promise(function(e,o){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"1c2e0ca8"}[t]+".css",a=i.p+n,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var d=c[u],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===n||s===a))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){d=l[u],s=d.getAttribute("data-href");if(s===n||s===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete r[t],p.parentNode.removeChild(p),o(c)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){r[t]=0}));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var c=new Promise(function(e,o){n=a[t]=[e,o]});e.push(n[2]=c);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(t);var l=new Error;d=function(e){s.onerror=s.onload=null,clearTimeout(p);var o=a[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,o[1](l)}a[t]=void 0}};var p=setTimeout(function(){d({type:"timeout",target:s})},12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/todo_list/",i.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=e,d=d.slice();for(var l=0;l<d.length;l++)e(d[l]);var p=s;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("64a9"),r=o.n(n);r.a},"2ba5":function(t,e,o){},5414:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("router-view")],1)},a=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("h1",[t._v("TodoList")]),o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("|\n    "),o("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])},u=[],i={name:"Header"},d=i,s=(o("f058"),o("2877")),l=Object(s["a"])(d,c,u,!1,null,"51084e3f",null),p=l.exports,f={name:"app ",components:{Header:p}},m=f,h=(o("034f"),Object(s["a"])(m,r,a,!1,null,null,null)),v=h.exports,b=o("8c4f"),g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("AddTodo",{on:{"add-todo":t.pushTodo}}),o("Todos",{attrs:{todos:t.todos},on:{"del-todo":t.deleteTodo}})],1)},y=[],_=o("75fc"),T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.todos,function(e){return o("div",{key:e.id},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})],1)}),0)},j=[],w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"is-completed":t.todo.completed}},[o("p",[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.todo.completed},on:{change:t.markComplete}}),t._v("\n    "+t._s(t.todo.title)+"\n    "),o("button",{staticClass:"del",on:{click:function(e){return t.$emit("del-todo",t.todo.id)}}},[t._v("x")])])])},O=[],x={name:"TodoItem",props:["todo"],methods:{markComplete:function(){this.todo.completed=!this.todo.completed}}},k=x,E=(o("a1a9"),Object(s["a"])(k,w,O,!1,null,"c723b618",null)),C=E.exports,P={components:{TodoItem:C},name:"Todos",props:["todos"]},A=P,S=Object(s["a"])(A,T,j,!1,null,"0c2daef8",null),$=S.exports,H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:t.addTodo}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add todo.."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])},L=[],N={name:"AddTodo",data:function(){return{title:""}},methods:{addTodo:function(t){t.preventDefault();var e={title:this.title,completed:!1};this.$emit("add-todo",e),this.title=""}}},I=N,M=(o("81a9"),Object(s["a"])(I,H,L,!1,null,"eb28d29c",null)),B=M.exports,D=o("bc3a"),q=o.n(D),J={name:"Home",components:{Todos:$,AddTodo:B},data:function(){return{todos:[]}},methods:{deleteTodo:function(t){var e=this;q.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then(function(){return e.todos=e.todos.filter(function(e){return e.id!==t})}).catch(function(t){return console.log(t)})},pushTodo:function(t){var e=this,o=t.title,n=t.completed;q.a.post("https://jsonplaceholder.typicode.com/todos",{title:o,completed:n}).then(function(t){return e.todos=[].concat(Object(_["a"])(e.todos),[t.data])}).catch(function(t){return console.log(t)})}},created:function(){var t=this;q.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(function(e){return t.todos=e.data}).catch(function(t){return console.log(t)})}},F=J,K=(o("cccb"),Object(s["a"])(F,g,y,!1,null,null,null)),U=K.exports;n["a"].use(b["a"]);var z=new b["a"]({routes:[{path:"/",name:"home",component:U},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}}]});n["a"].config.productionTip=!1,new n["a"]({router:z,render:function(t){return t(v)}}).$mount("#app")},"64a9":function(t,e,o){},"81a9":function(t,e,o){"use strict";var n=o("a3e3"),r=o.n(n);r.a},a1a9:function(t,e,o){"use strict";var n=o("5414"),r=o.n(n);r.a},a3e3:function(t,e,o){},cccb:function(t,e,o){"use strict";var n=o("d563"),r=o.n(n);r.a},d563:function(t,e,o){},f058:function(t,e,o){"use strict";var n=o("2ba5"),r=o.n(n);r.a}});
//# sourceMappingURL=app.41f8d8d5.js.map