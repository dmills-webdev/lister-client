(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/add.34280c59.svg"},23:function(e,t,n){e.exports=n.p+"static/media/hamburger.78aa51f7.svg"},25:function(e,t,n){e.exports=n(41)},31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),s=n(8),l=n(6),u=n(1),i=n(11),m=n.n(i),d=n(14);n(31);var p=function(){var e=Object(u.e)();function t(e){return n.apply(this,arguments)}function n(){return(n=Object(d.a)(m.a.mark((function e(t){var n,a,r,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.username.value,a=t.target.password.value,r=t.target.passwordConfirmation.value,e.next=5,fetch("/api/signup/check-if-username-is-taken",{method:"POST",body:JSON.stringify({username:n}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){o=e}));case 5:if(!(o&&a===r&&a.length>8)){e.next=10;break}return console.log("Form OK"),e.abrupt("return",!0);case 10:return console.log("Form BAD"),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return(a=Object(d.a)(m.a.mark((function n(a){var r,o,c;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),a.persist(),n.next=4,t(a).then((function(e){r=e}));case 4:if(!r){n.next=12;break}return o=a.target,c=new FormData(o),n.next=9,fetch("/signup",{method:"POST",body:c});case 9:e.push("/login"),n.next=13;break;case 12:console.log("Error with inputs!");case 13:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function o(e){var t=document.getElementById(e.target.name);""===e.target.value&&t.classList.toggle("focussedLabel")}return r.a.createElement("div",{className:"signup-container"},r.a.createElement("div",{className:"welcome-banner"},r.a.createElement("h1",null,"New to Lister?"),r.a.createElement("h2",null,"Signup to Lister for free and keep your lists synced, on all your devices, all the time.")),r.a.createElement("div",{className:"form-area"},r.a.createElement("form",{onSubmit:function(e){return a.apply(this,arguments)},name:"signup",className:"signup-form"},r.a.createElement("label",{htmlFor:"username",id:"username"},"Username"),r.a.createElement("input",{type:"text",name:"username",onFocus:o,onBlur:o}),r.a.createElement("label",{htmlFor:"password",id:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",onFocus:o,onBlur:o}),r.a.createElement("label",{htmlFor:"passwordConfirmation",id:"passwordConfirmation"},"Confirm password"),r.a.createElement("input",{type:"password",name:"passwordConfirmation",onFocus:o,onBlur:o}),r.a.createElement("button",{name:"submit-button",id:"submit-button",hidden:!0},"Sign up")),r.a.createElement("label",{htmlFor:"submit-button",className:"submit-proxy-button"},"Signup")))};n(37);var f=function(e){var t=e.setUser,n=Object(u.e)();function a(e){var t=document.getElementById(e.target.name);""===e.target.value&&t.classList.toggle("focussedLabel")}return r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"welcome-banner"},r.a.createElement("h1",null,"Welcome back!"),r.a.createElement("h2",null,"Login and keep your lists synced across all your devices.")),r.a.createElement("div",{className:"form-area"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=e.target,r=new FormData(a);fetch("/login",{method:"POST",body:r}).then((function(e){return e.json()})).then((function(e){return t(e)})),n.push("/")},name:"login",className:"login-form"},r.a.createElement("label",{htmlFor:"username",id:"username"},"Username"),r.a.createElement("input",{type:"text",name:"username",onFocus:a,onBlur:a}),r.a.createElement("label",{htmlFor:"password",id:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",onFocus:a,onBlur:a}),r.a.createElement("button",{name:"submit-button",id:"submit-button",hidden:!0})),r.a.createElement("label",{htmlFor:"submit-button",className:"submit-proxy-button"},"Login")))},b=n(24),v=n(21),g=n.n(v)()({"remove-todo":!0,"float-right":!0}),E=function(e){var t=e.id,n=e.task,a=e.completed,o=e.toggleCompleted,c=e.removeTodo;return r.a.createElement("div",{className:"todo-item"},r.a.createElement("input",{type:"checkbox",value:a,checked:a,onChange:function(){return o(t)}}),r.a.createElement("span",{className:a?"completed-todo":null}," ",n),r.a.createElement("button",{type:"button",className:g,onClick:function(){return c(t)}},"Remove"))},h=function(e){var t=e.todos,n=e.toggleCompleted,a=e.removeTodo;return r.a.createElement("div",{className:"todo-container"},t.map((function(e){return r.a.createElement(E,{key:e.id,toggleCompleted:n,removeTodo:a,id:e.id,task:e.task,completed:e.completed})})))},y=n(22),w=n.n(y),N=function(e){var t=e.submitNewTodo,n=Object(a.useState)(""),o=Object(s.a)(n,2),c=o[0],l=o[1];return r.a.createElement("div",{className:"new-todo-form"},r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(c),l("")}(e)},autoComplete:"off"},r.a.createElement("label",null,r.a.createElement("input",{name:"task",value:c,placeholder:"E.g. Water the plants",onChange:function(e){l(e.target.value)},type:"text"})),r.a.createElement("button",{type:"submit"},r.a.createElement("img",{src:w.a,alt:"plus symbol icon"}))))};n(38);var k=function(e){var t=e.user,n=[{id:0,task:"Write first todo (or list item!)",completed:!1}],o=Object(a.useState)(n),c=Object(s.a)(o,2),l=c[0],u=c[1];return Object(a.useEffect)((function(){null!==t?fetch("/api/user-todos").then((function(e){return e.json()})).then((function(e){Array.isArray(e)&&(e[0]&&0!==e[0].id||e[1])&&u(e)})):u(n)}),[t]),Object(a.useEffect)((function(){null!==t&&fetch("api/user-todos",{method:"PUT",body:JSON.stringify({todos:l}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}))}),[l]),r.a.createElement("div",null,r.a.createElement(h,{todos:l,toggleCompleted:function(e){var t=l.map((function(t){return t.id===e&&(t.completed=!t.completed),t}));u(t)},removeTodo:function(e){u(l.filter((function(t){return t.id!==e})))}}),r.a.createElement(N,{submitNewTodo:function(e){var t={id:(new Date).getTime(),task:e,completed:!1};u((function(e){return[].concat(Object(b.a)(e),[t])}))}}))};n(39);function x(e){document.getElementById("main-nav").classList.toggle("nav-popout")}function C(e){var t=e.user,n=e.setUser;return r.a.createElement("nav",{id:"main-nav"},r.a.createElement("div",{className:"nav-user"},t.username),r.a.createElement("div",{className:"nav-button",onClick:function(){fetch("/logout").then(n(null))}},"Logout"))}function j(){return r.a.createElement("nav",{id:"main-nav"},r.a.createElement(l.b,{to:"/login",exact:!0,activeClassName:"activeLink",className:"nav-button",onClick:x},"Login"),r.a.createElement(l.b,{to:"/signup",exact:!0,activeClassName:"activeLink",className:"nav-button",onClick:x},"Signup"),r.a.createElement(l.b,{to:"/",exact:!0,activeClassName:"activeLink",className:"nav-button",onClick:x},"Todos"))}n(40);var O=n(23),L=n.n(O);var F=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],o=t[1];return r.a.createElement(l.a,null,r.a.createElement("header",{className:"main-header"},r.a.createElement("div",{className:"mobile-username"},function(){if(null!==n)return n.username}()),r.a.createElement(l.b,{to:"/",exact:!0,activeClassName:"activeLink",className:"logo"},"Lister"),r.a.createElement("div",{className:"hamburger-icon",onClick:function(e){document.getElementById("main-nav").classList.toggle("nav-popout")}},r.a.createElement("img",{src:L.a,alt:"Hamburger menu icon for navigation menu"})),n?r.a.createElement(C,{user:n,setUser:o}):r.a.createElement(j,null)),r.a.createElement("main",null,r.a.createElement(u.a,{exact:!0,path:"/signup",component:p}),r.a.createElement(u.a,{exact:!0,path:"/login",render:function(e){return r.a.createElement(f,Object.assign({},e,{isAuthed:!0,setUser:o}))}}),r.a.createElement(u.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(k,Object.assign({},e,{isAuthed:!0,user:n}))}})))};c.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.61d9776f.chunk.js.map