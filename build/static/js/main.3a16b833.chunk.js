(this.webpackJsonpLister=this.webpackJsonpLister||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/add.34280c59.svg"},23:function(e,t,n){e.exports=n.p+"static/media/hamburger.78aa51f7.svg"},25:function(e,t,n){e.exports=n(41)},31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(18),c=n.n(r),s=n(6),i=n(7),l=n(1),m=n(13),u=n.n(m),d=n(19);n(31);var p=function(){var e=Object(l.e)(),t=Object(a.useState)("Submit"),n=Object(s.a)(t,2),r=n[0],c=n[1];function i(e){var t=e.target.password.value,n=e.target.passwordConfirmation.value;if(t===n&&t.length>=8)return!0;var a=[];return t!==n&&a.push("Passwords don't match!"),t.length<=8&&a.push("Minimum password length 8 characters!"),a}function m(){return(m=Object(d.a)(u.a.mark((function t(n){var a,o,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),n.persist(),!0!==(a=i(n))){t.next=10;break}return o=n.target,r=new FormData(o),t.next=8,fetch("https://lister-server.herokuapp.com/signup",{method:"POST",body:r}).then((function(e){return e.json()})).then((function(t){t?e.push("/login"):(p(),f(["Username already in use, try something else!"]))}));case 8:t.next=13;break;case 10:p(),g(),f(a);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){c("Error in form!"),document.getElementById("submit-proxy").classList.add("error-styling")}function f(e){document.getElementById("form-container").classList.add("shrink-width");var t=document.getElementById("error-box");e.map((function(e){var n=document.createElement("div");n.textContent=e,t.appendChild(n)})),t.classList.add("visible")}function g(){document.getElementById("form-container").classList.remove("shrink-width");var e=document.getElementById("error-box");e.classList.remove("visible"),e.textContent=""}function v(){g(),c("Submit"),document.getElementById("submit-proxy").classList.remove("error-styling")}function h(e){var t=document.getElementById(e.target.name);""===e.target.value&&t.classList.toggle("focussedLabel")}return o.a.createElement("div",{className:"signup-container"},o.a.createElement("div",{className:"welcome-banner"},o.a.createElement("h1",null,"New to Lister?"),o.a.createElement("h2",null,"Signup to Lister for free and keep your lists synced, on all your devices, all the time.")),o.a.createElement("div",{className:"form-area"},o.a.createElement("form",{onSubmit:function(e){return m.apply(this,arguments)},name:"signup",className:"signup-form",autoComplete:"off"},o.a.createElement("div",{id:"form-container"},o.a.createElement("div",{className:"input-container"},o.a.createElement("label",{htmlFor:"username",id:"username"},"Username"),o.a.createElement("input",{type:"text",name:"username",onFocus:h,onBlur:h,onChange:v})),o.a.createElement("div",{className:"input-container"},o.a.createElement("label",{htmlFor:"password",id:"password"},"Password"),o.a.createElement("input",{type:"password",name:"password",onFocus:h,onBlur:h,onChange:v})),o.a.createElement("div",{className:"input-container"},o.a.createElement("label",{htmlFor:"passwordConfirmation",id:"passwordConfirmation"},"Confirm password"),o.a.createElement("input",{type:"password",name:"passwordConfirmation",onFocus:h,onBlur:h,onChange:v})),o.a.createElement("div",{id:"error-box"},"Error"),o.a.createElement("button",{name:"submit-button",id:"submit-button",hidden:!0}))),o.a.createElement("label",{id:"submit-proxy",htmlFor:"submit-button",className:"submit-proxy-button"},r)))};n(37);var f=function(e){var t=e.setUser,n=Object(l.e)(),r=Object(a.useState)("Login"),c=Object(s.a)(r,2),i=c[0],m=c[1];function u(){!function(){document.getElementById("form-container").classList.remove("shrink-width");var e=document.getElementById("error-box");e.classList.remove("visible"),e.textContent=""}(),m("Login"),document.getElementById("submit-proxy").classList.remove("error-styling")}function d(e){var t=document.getElementById(e.target.name);""===e.target.value&&t.classList.toggle("focussedLabel")}return o.a.createElement("div",{className:"login-container"},o.a.createElement("div",{className:"welcome-banner"},o.a.createElement("h1",null,"Welcome back!"),o.a.createElement("h2",null,"Login and keep your lists synced across all your devices.")),o.a.createElement("div",{className:"form-area"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=e.target,o=new FormData(a);fetch("https://lister-server.herokuapp.com/login",{method:"POST",body:o,credentials:"include"}).then((function(e){return e.json()})).then((function(e){!1===e?(m("Problem logging in!"),document.getElementById("submit-proxy").classList.add("error-styling"),function(){document.getElementById("form-container").classList.add("shrink-width");var e=document.getElementById("error-box"),t=document.createElement("div");t.textContent="Problem with username or password, try retyping and logging in again.",e.appendChild(t),e.classList.add("visible")}()):(window.localStorage.setItem("listerToken",e.token.toString()),t(e.username),console.log(e.token),n.push("/"))}))},name:"login",className:"login-form"},o.a.createElement("div",{id:"form-container"},o.a.createElement("div",{className:"input-container"},o.a.createElement("label",{htmlFor:"username",id:"username"},"Username"),o.a.createElement("input",{type:"text",name:"username",onFocus:d,onBlur:d,onChange:u})),o.a.createElement("div",{className:"input-container"},o.a.createElement("label",{htmlFor:"password",id:"password"},"Password"),o.a.createElement("input",{type:"password",name:"password",onFocus:d,onBlur:d,onChange:u})),o.a.createElement("div",{id:"error-box"},"Error"),o.a.createElement("button",{name:"submit-button",id:"submit-button",hidden:!0}))),o.a.createElement("label",{id:"submit-proxy",htmlFor:"submit-button",className:"submit-proxy-button"},i)))},g=n(24),v=n(21),h=n.n(v)()({"remove-todo":!0,"float-right":!0}),E=function(e){var t=e.id,n=e.task,a=e.completed,r=e.toggleCompleted,c=e.removeTodo;return o.a.createElement("div",{className:"todo-item"},o.a.createElement("input",{type:"checkbox",value:a,checked:a,onChange:function(){return r(t)}}),o.a.createElement("span",{className:a?"completed-todo":null}," ",n),o.a.createElement("button",{type:"button",className:h,onClick:function(){return c(t)}},"Remove"))},b=function(e){var t=e.todos,n=e.toggleCompleted,a=e.removeTodo;return o.a.createElement("div",{className:"todo-container"},t.map((function(e){return o.a.createElement(E,{key:e.id,toggleCompleted:n,removeTodo:a,id:e.id,task:e.task,completed:e.completed})})))},y=n(22),k=n.n(y),w=function(e){var t=e.submitNewTodo,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1];return o.a.createElement("div",{className:"new-todo-form"},o.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(c),i("")}(e)},autoComplete:"off"},o.a.createElement("label",null,o.a.createElement("input",{name:"task",value:c,placeholder:"E.g. Water the plants",onChange:function(e){i(e.target.value)},type:"text"})),o.a.createElement("button",{type:"submit"},o.a.createElement("img",{src:k.a,alt:"plus symbol icon"}))))};n(38);var N=function(e){var t=e.user,n=[{id:0,task:"Write first todo (or list item!)",completed:!1}],r=Object(a.useState)(n),c=Object(s.a)(r,2),i=c[0],l=c[1];return Object(a.useEffect)((function(){null!==t?fetch("https://lister-server.herokuapp.com/todos",{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("listerToken"))}}).then((function(e){return e.json()})).then((function(e){Array.isArray(e)&&(e[0]&&0!==e[0].id||e[1])&&l(e)})).catch((function(e){l(n)})):l(n)}),[t]),Object(a.useEffect)((function(){null!==t&&fetch("https://lister-server.herokuapp.com/todos",{method:"PUT",body:JSON.stringify({todos:i}),headers:{Authorization:"Bearer ".concat(localStorage.getItem("listerToken")),"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("PUT FAILED")}))}),[i]),o.a.createElement("div",null,o.a.createElement(b,{todos:i,toggleCompleted:function(e){var t=i.map((function(t){return t.id===e&&(t.completed=!t.completed),t}));l(t)},removeTodo:function(e){l(i.filter((function(t){return t.id!==e})))}}),o.a.createElement(w,{submitNewTodo:function(e){var t={id:(new Date).getTime(),task:e,completed:!1};l((function(e){return[].concat(Object(g.a)(e),[t])}))}}))};n(39);function x(e){document.getElementById("main-nav").classList.toggle("nav-popout")}function C(e){var t=e.user,n=e.setUser;return o.a.createElement("nav",{id:"main-nav"},o.a.createElement("div",{className:"nav-user"},t),o.a.createElement("div",{className:"nav-button",onClick:function(){fetch("https://lister-server.herokuapp.com/logout",{credentials:"include"}).then(n(null)).then(window.localStorage.removeItem("listerToken"))}},"Logout"))}function L(){return o.a.createElement("nav",{id:"main-nav"},o.a.createElement(i.b,{to:"/login",exact:!0,activeClassName:"activeLink",className:"nav-button",onClick:x},"Login"),o.a.createElement(i.b,{to:"/signup",exact:!0,activeClassName:"activeLink",className:"nav-button",onClick:x},"Signup"),o.a.createElement(i.b,{to:"/",exact:!0,activeClassName:"activeLink",className:"nav-button",onClick:x},"Todos"))}n(40);var j=n(23),B=n.n(j);var I=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){localStorage.getItem("listerToken")&&fetch("https://lister-server.herokuapp.com/token-login",{method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.getItem("listerToken"))}}).then((function(e){return e.json()})).then((function(e){r(e)})).catch(console.log("Error logging in with JWT"))}),[]),o.a.createElement(i.a,null,o.a.createElement("header",{className:"main-header"},o.a.createElement("div",{className:"mobile-username"},function(){if(null!==n)return n.username}()),o.a.createElement(i.b,{to:"/",exact:!0,activeClassName:"activeLink",className:"logo"},"Lister"),o.a.createElement("div",{className:"hamburger-icon",onClick:function(e){document.getElementById("main-nav").classList.toggle("nav-popout")}},o.a.createElement("img",{src:B.a,alt:"Hamburger menu icon for navigation menu"})),n?o.a.createElement(C,{user:n,setUser:r}):o.a.createElement(L,null)),o.a.createElement("main",null,o.a.createElement(l.a,{exact:!0,path:"/signup",component:p}),o.a.createElement(l.a,{exact:!0,path:"/login",render:function(e){return o.a.createElement(f,Object.assign({},e,{isAuthed:!0,setUser:r}))}}),o.a.createElement(l.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(N,Object.assign({},e,{isAuthed:!0,user:n}))}})))};c.a.render(o.a.createElement(I,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.3a16b833.chunk.js.map