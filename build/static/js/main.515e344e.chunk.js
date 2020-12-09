(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/add.34280c59.svg"},23:function(e,t,n){e.exports=n.p+"static/media/hamburger.78aa51f7.svg"},25:function(e,t,n){e.exports=n(41)},31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),s=n(6),i=n(7),l=n(1),m=n(13),u=n.n(m),d=n(19);n(31);var p=function(){var e=Object(l.e)(),t=Object(a.useState)("Submit"),n=Object(s.a)(t,2),o=n[0],c=n[1];function i(e){var t=e.target.password.value,n=e.target.passwordConfirmation.value;if(t===n&&t.length>=8)return!0;var a=[];return t!==n&&a.push("Passwords don't match!"),t.length<=8&&a.push("Minimum password length 8 characters!"),a}function m(){return(m=Object(d.a)(u.a.mark((function t(n){var a,r,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),n.persist(),!0!==(a=i(n))){t.next=10;break}return r=n.target,o=new FormData(r),t.next=8,fetch("/signup",{method:"POST",body:o}).then((function(e){return e.json()})).then((function(t){t?e.push("/login"):(p(),f(["Username already in use, try something else!"]))}));case 8:t.next=13;break;case 10:p(),v(),f(a);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){c("Error in form!"),document.getElementById("submit-proxy").classList.add("error-styling")}function f(e){document.getElementById("form-container").classList.add("shrink-width");var t=document.getElementById("error-box");e.map((function(e){var n=document.createElement("div");n.textContent=e,t.appendChild(n)})),t.classList.add("visible")}function v(){document.getElementById("form-container").classList.remove("shrink-width");var e=document.getElementById("error-box");e.classList.remove("visible"),e.textContent=""}function g(){v(),c("Submit"),document.getElementById("submit-proxy").classList.remove("error-styling")}function b(e){var t=document.getElementById(e.target.name);""===e.target.value&&t.classList.toggle("focussedLabel")}return r.a.createElement("div",{className:"signup-container"},r.a.createElement("div",{className:"welcome-banner"},r.a.createElement("h1",null,"New to Lister?"),r.a.createElement("h2",null,"Signup to Lister for free and keep your lists synced, on all your devices, all the time.")),r.a.createElement("div",{className:"form-area"},r.a.createElement("form",{onSubmit:function(e){return m.apply(this,arguments)},name:"signup",className:"signup-form",autoComplete:"off"},r.a.createElement("div",{id:"form-container"},r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{htmlFor:"username",id:"username"},"Username"),r.a.createElement("input",{type:"text",name:"username",onFocus:b,onBlur:b,onChange:g})),r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{htmlFor:"password",id:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",onFocus:b,onBlur:b,onChange:g})),r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{htmlFor:"passwordConfirmation",id:"passwordConfirmation"},"Confirm password"),r.a.createElement("input",{type:"password",name:"passwordConfirmation",onFocus:b,onBlur:b,onChange:g})),r.a.createElement("div",{id:"error-box"},"Error"),r.a.createElement("button",{name:"submit-button",id:"submit-button",hidden:!0}))),r.a.createElement("label",{id:"submit-proxy",htmlFor:"submit-button",className:"submit-proxy-button"},o)))};n(37);var f=function(e){var t=e.setUser,n=Object(l.e)(),o=Object(a.useState)("Login"),c=Object(s.a)(o,2),i=c[0],m=c[1];function u(){!function(){document.getElementById("form-container").classList.remove("shrink-width");var e=document.getElementById("error-box");e.classList.remove("visible"),e.textContent=""}(),m("Login"),document.getElementById("submit-proxy").classList.remove("error-styling")}function d(e){var t=document.getElementById(e.target.name);""===e.target.value&&t.classList.toggle("focussedLabel")}return r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"welcome-banner"},r.a.createElement("h1",null,"Welcome back!"),r.a.createElement("h2",null,"Login and keep your lists synced across all your devices.")),r.a.createElement("div",{className:"form-area"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=e.target,r=new FormData(a);fetch("https://lister-server.herokuapp.com/login",{method:"POST",body:r}).then((function(e){return e.json()})).then((function(e){!1===e?(m("Problem logging in!"),document.getElementById("submit-proxy").classList.add("error-styling"),function(){document.getElementById("form-container").classList.add("shrink-width");var e=document.getElementById("error-box"),t=document.createElement("div");t.textContent="Problem with username or password, try retyping and logging in again.",e.appendChild(t),e.classList.add("visible")}()):(t(e),n.push("/"))}))},name:"login",className:"login-form"},r.a.createElement("div",{id:"form-container"},r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{htmlFor:"username",id:"username"},"Username"),r.a.createElement("input",{type:"text",name:"username",onFocus:d,onBlur:d,onChange:u})),r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{htmlFor:"password",id:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",onFocus:d,onBlur:d,onChange:u})),r.a.createElement("div",{id:"error-box"},"Error"),r.a.createElement("button",{name:"submit-button",id:"submit-button",hidden:!0}))),r.a.createElement("label",{id:"submit-proxy",htmlFor:"submit-button",className:"submit-proxy-button"},i)))},v=n(24),g=n(21),b=n.n(g)()({"remove-todo":!0,"float-right":!0}),E=function(e){var t=e.id,n=e.task,a=e.completed,o=e.toggleCompleted,c=e.removeTodo;return r.a.createElement("div",{className:"todo-item"},r.a.createElement("input",{type:"checkbox",value:a,checked:a,onChange:function(){return o(t)}}),r.a.createElement("span",{className:a?"completed-todo":null}," ",n),r.a.createElement("button",{type:"button",className:b,onClick:function(){return c(t)}},"Remove"))},h=function(e){var t=e.todos,n=e.toggleCompleted,a=e.removeTodo;return r.a.createElement("div",{className:"todo-container"},t.map((function(e){return r.a.createElement(E,{key:e.id,toggleCompleted:n,removeTodo:a,id:e.id,task:e.task,completed:e.completed})})))},y=n(22),w=n.n(y),N=function(e){var t=e.submitNewTodo,n=Object(a.useState)(""),o=Object(s.a)(n,2),c=o[0],i=o[1];return r.a.createElement("div",{className:"new-todo-form"},r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(c),i("")}(e)},autoComplete:"off"},r.a.createElement("label",null,r.a.createElement("input",{name:"task",value:c,placeholder:"E.g. Water the plants",onChange:function(e){i(e.target.value)},type:"text"})),r.a.createElement("button",{type:"submit"},r.a.createElement("img",{src:w.a,alt:"plus symbol icon"}))))};n(38);var x=function(e){var t=e.user,n=[{id:0,task:"Write first todo (or list item!)",completed:!1}],o=Object(a.useState)(n),c=Object(s.a)(o,2),i=c[0],l=c[1];return Object(a.useEffect)((function(){null!==t?fetch("/api/todos").then((function(e){return e.json()})).then((function(e){Array.isArray(e)&&(e[0]&&0!==e[0].id||e[1])&&l(e)})):l(n)}),[t]),Object(a.useEffect)((function(){null!==t&&fetch("api/todos",{method:"PUT",body:JSON.stringify({todos:i}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}))}),[i]),r.a.createElement("div",null,r.a.createElement(h,{todos:i,toggleCompleted:function(e){var t=i.map((function(t){return t.id===e&&(t.completed=!t.completed),t}));l(t)},removeTodo:function(e){l(i.filter((function(t){return t.id!==e})))}}),r.a.createElement(N,{submitNewTodo:function(e){var t={id:(new Date).getTime(),task:e,completed:!1};l((function(e){return[].concat(Object(v.a)(e),[t])}))}}))};n(39);function C(e){document.getElementById("main-nav").classList.toggle("nav-popout")}function k(e){var t=e.user,n=e.setUser;return r.a.createElement("nav",{id:"main-nav"},r.a.createElement("div",{className:"nav-user"},t.username),r.a.createElement("div",{className:"nav-button",onClick:function(){fetch("/logout").then(n(null))}},"Logout"))}function L(){return r.a.createElement("nav",{id:"main-nav"},r.a.createElement(i.b,{to:"/login",exact:!0,activeClassName:"activeLink",className:"nav-button",onClick:C},"Login"),r.a.createElement(i.b,{to:"/signup",exact:!0,activeClassName:"activeLink",className:"nav-button",onClick:C},"Signup"),r.a.createElement(i.b,{to:"/",exact:!0,activeClassName:"activeLink",className:"nav-button",onClick:C},"Todos"))}n(40);var j=n(23),B=n.n(j);var O=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],o=t[1];return r.a.createElement(i.a,null,r.a.createElement("header",{className:"main-header"},r.a.createElement("div",{className:"mobile-username"},function(){if(null!==n)return n.username}()),r.a.createElement(i.b,{to:"/",exact:!0,activeClassName:"activeLink",className:"logo"},"Lister"),r.a.createElement("div",{className:"hamburger-icon",onClick:function(e){document.getElementById("main-nav").classList.toggle("nav-popout")}},r.a.createElement("img",{src:B.a,alt:"Hamburger menu icon for navigation menu"})),n?r.a.createElement(k,{user:n,setUser:o}):r.a.createElement(L,null)),r.a.createElement("main",null,r.a.createElement(l.a,{exact:!0,path:"/signup",component:p}),r.a.createElement(l.a,{exact:!0,path:"/login",render:function(e){return r.a.createElement(f,Object.assign({},e,{isAuthed:!0,setUser:o}))}}),r.a.createElement(l.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(x,Object.assign({},e,{isAuthed:!0,user:n}))}})))};c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.515e344e.chunk.js.map