(this.webpackJsonpLister=this.webpackJsonpLister||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/add.34280c59.svg"},function(e,t,n){e.exports=n.p+"static/media/hamburger.78aa51f7.svg"},function(e,t,n){e.exports=n(33)},,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(13),s=n.n(r),l=n(6),c=n(1);n(23);var i=function(){const e=Object(c.e)(),[t,n]=Object(a.useState)("Submit");function r(){n("Error in form!"),document.getElementById("submit-proxy").classList.add("error-styling")}function s(e){document.getElementById("form-container").classList.add("shrink-width");const t=document.getElementById("error-box");e.forEach(e=>{let n=document.createElement("div");n.textContent=e,t.appendChild(n)}),t.classList.add("visible")}function l(){document.getElementById("form-container").classList.remove("shrink-width");const e=document.getElementById("error-box");e.classList.remove("visible"),e.textContent=""}function i(){l(),n("Submit"),document.getElementById("submit-proxy").classList.remove("error-styling")}function m(e){const t=document.getElementById(e.target.name);""===e.target.value&&t.classList.toggle("focussedLabel")}return o.a.createElement("div",{className:"signup-container"},o.a.createElement("div",{className:"welcome-banner"},o.a.createElement("h1",null,"New to Lister?"),o.a.createElement("h2",null,"Signup to Lister for free and keep your lists synced, on all your devices, all the time.")),o.a.createElement("div",{className:"form-area"},o.a.createElement("form",{onSubmit:async function(t){t.preventDefault(),t.persist();const n=function(e){const t=e.target.password.value,n=e.target.passwordConfirmation.value;if(t===n&&t.length>=8)return!0;var a=[];return t!==n&&a.push("Passwords don't match!"),t.length<=8&&a.push("Minimum password length 8 characters!"),a}(t);if(!0===n){const n=t.target,a=new FormData(n);await fetch("https://lister-backend.onrender.com/signup",{method:"POST",body:a}).then(e=>e.json()).then(t=>{t?e.push("/login"):(r(),s(["Username already in use, try something else!"]))})}else r(),l(),s(n)},name:"signup",className:"signup-form",autoComplete:"off"},o.a.createElement("div",{id:"form-container"},o.a.createElement("div",{className:"input-container"},o.a.createElement("label",{htmlFor:"username",id:"username"},"Username"),o.a.createElement("input",{type:"text",name:"username",onFocus:m,onBlur:m,onChange:i})),o.a.createElement("div",{className:"input-container"},o.a.createElement("label",{htmlFor:"password",id:"password"},"Password"),o.a.createElement("input",{type:"password",name:"password",onFocus:m,onBlur:m,onChange:i})),o.a.createElement("div",{className:"input-container"},o.a.createElement("label",{htmlFor:"passwordConfirmation",id:"passwordConfirmation"},"Confirm password"),o.a.createElement("input",{type:"password",name:"passwordConfirmation",onFocus:m,onBlur:m,onChange:i})),o.a.createElement("div",{id:"error-box"},"Error"),o.a.createElement("button",{name:"submit-button",id:"submit-button",hidden:!0}))),o.a.createElement("label",{id:"submit-proxy",htmlFor:"submit-button",className:"submit-proxy-button"},t)))};n(29);var m=function(e){let{setUser:t}=e;const n=Object(c.e)(),[r,s]=Object(a.useState)("Login");function l(){!function(){document.getElementById("form-container").classList.remove("shrink-width");const e=document.getElementById("error-box");e.classList.remove("visible"),e.textContent=""}(),s("Login"),document.getElementById("submit-proxy").classList.remove("error-styling")}function i(e){const t=document.getElementById(e.target.name);""===e.target.value&&t.classList.toggle("focussedLabel")}return o.a.createElement("div",{className:"login-container"},o.a.createElement("div",{className:"welcome-banner"},o.a.createElement("h1",null,"Welcome back!"),o.a.createElement("h2",null,"Login and keep your lists synced across all your devices.")),o.a.createElement("div",{className:"form-area"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault();const a=e.target,o=new FormData(a);fetch("https://lister-backend.onrender.com/login",{method:"POST",body:o,credentials:"include"}).then(e=>e.json()).then(e=>{!1===e?(s("Problem logging in!"),document.getElementById("submit-proxy").classList.add("error-styling"),function(){document.getElementById("form-container").classList.add("shrink-width");const e=document.getElementById("error-box");let t=document.createElement("div");t.textContent="Problem with username or password, try retyping and logging in again.",e.appendChild(t),e.classList.add("visible")}()):(window.localStorage.setItem("listerToken",e.token.toString()),t(e.username),n.push("/"))})},name:"login",className:"login-form"},o.a.createElement("div",{id:"form-container"},o.a.createElement("div",{className:"input-container"},o.a.createElement("label",{htmlFor:"username",id:"username"},"Username"),o.a.createElement("input",{type:"text",name:"username",onFocus:i,onBlur:i,onChange:l})),o.a.createElement("div",{className:"input-container"},o.a.createElement("label",{htmlFor:"password",id:"password"},"Password"),o.a.createElement("input",{type:"password",name:"password",onFocus:i,onBlur:i,onChange:l})),o.a.createElement("div",{id:"error-box"},"Error"),o.a.createElement("button",{name:"submit-button",id:"submit-button",hidden:!0}))),o.a.createElement("label",{id:"submit-proxy",htmlFor:"submit-button",className:"submit-proxy-button"},r)))},d=n(15);const u=n.n(d)()({"remove-todo":!0,"float-right":!0});var g=e=>{let{id:t,task:n,completed:a,toggleCompleted:r,removeTodo:s}=e;return o.a.createElement("div",{className:"todo-item"},o.a.createElement("input",{type:"checkbox",value:a,checked:a,onChange:()=>r(t)}),o.a.createElement("span",{className:a?"completed-todo":null}," ",n),o.a.createElement("button",{type:"button",className:u,onClick:()=>s(t)},"Remove"))};var p=e=>{let{todos:t,toggleCompleted:n,removeTodo:a}=e;return o.a.createElement("div",{className:"todo-container"},t.map(e=>o.a.createElement(g,{key:e.id,toggleCompleted:n,removeTodo:a,id:e.id,task:e.task,completed:e.completed})))},E=n(16),b=n.n(E);var h=e=>{let{submitNewTodo:t}=e,[n,r]=Object(a.useState)("");return o.a.createElement("div",{className:"new-todo-form"},o.a.createElement("form",{onSubmit:e=>(e=>{e.preventDefault(),t(n),r("")})(e),autoComplete:"off"},o.a.createElement("label",null,o.a.createElement("input",{name:"task",value:n,placeholder:"E.g. Water the plants",onChange:e=>{r(e.target.value)},type:"text"})),o.a.createElement("button",{type:"submit"},o.a.createElement("img",{src:b.a,alt:"plus symbol icon"}))))};n(30);const v=[{id:0,task:"Write first todo (or list item!)",completed:!1}];var f=function(e){let{user:t}=e;const[n,r]=Object(a.useState)(v);return Object(a.useEffect)(()=>{localStorage.getItem("listerToken")?fetch("https://lister-backend.onrender.com/todos",{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("listerToken"))}}).then(e=>e.json()).then(e=>{Array.isArray(e)&&(e[0]&&0!==e[0].id||e[1])&&r(e)}).catch(e=>{console.log(e)}):r([...v])},[t]),Object(a.useEffect)(()=>{localStorage.getItem("listerToken")&&fetch("https://lister-backend.onrender.com/todos",{method:"PUT",body:JSON.stringify({todos:n}),headers:{Authorization:"Bearer ".concat(localStorage.getItem("listerToken")),"Content-Type":"application/json"}}).catch(e=>{console.log(e)})},[n]),o.a.createElement("div",null,o.a.createElement(p,{todos:n,toggleCompleted:e=>{let t=n.map(t=>(t.id===e&&(t.completed=!t.completed),t));r(t)},removeTodo:e=>{r(n.filter(t=>t.id!==e))}}),o.a.createElement(h,{submitNewTodo:e=>{let t={id:(new Date).getTime(),task:e,completed:!1};r(e=>[...e,t])}}))};n(31);function y(e){document.getElementById("main-nav").classList.toggle("nav-popout")}function k(e){let{user:t,setUser:n}=e;return o.a.createElement("nav",{id:"main-nav"},o.a.createElement("div",{className:"nav-user"},t),o.a.createElement("div",{className:"nav-button",onClick:function(){fetch("https://lister-backend.onrender.com/logout",{credentials:"include"}).then(n(null)).then(window.localStorage.removeItem("listerToken"))}},"Logout"))}function w(){return o.a.createElement("nav",{id:"main-nav"},o.a.createElement(l.b,{to:"/login",exact:!0,activeClassName:"activeLink",className:"nav-button",onClick:y},"Login"),o.a.createElement(l.b,{to:"/signup",exact:!0,activeClassName:"activeLink",className:"nav-button",onClick:y},"Signup"),o.a.createElement(l.b,{to:"/",exact:!0,activeClassName:"activeLink",className:"nav-button",onClick:y},"Todos"))}n(32);var N=n(17),C=n.n(N);var x=function(){const[e,t]=Object(a.useState)(null);return Object(a.useEffect)(()=>{null===e&&localStorage.getItem("listerToken")&&fetch("https://lister-backend.onrender.com/token-login",{method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.getItem("listerToken"))}}).then(e=>e.json()).then(e=>{t(e)}).catch(console.log("Error logging in with JWT"))},[e]),o.a.createElement(l.a,null,o.a.createElement("header",{className:"main-header"},o.a.createElement("div",{className:"mobile-username"},function(){if(null!==e)return e.username}()),o.a.createElement(l.b,{to:"/",exact:!0,activeClassName:"activeLink",className:"logo"},"Lister"),o.a.createElement("div",{className:"hamburger-icon",onClick:function(e){document.getElementById("main-nav").classList.toggle("nav-popout")}},o.a.createElement("img",{src:C.a,alt:"Hamburger menu icon for navigation menu"})),e?o.a.createElement(k,{user:e,setUser:t}):o.a.createElement(w,null)),o.a.createElement("main",null,o.a.createElement(c.a,{exact:!0,path:"/signup",component:i}),o.a.createElement(c.a,{exact:!0,path:"/login",render:e=>o.a.createElement(m,Object.assign({},e,{isAuthed:!0,setUser:t}))}),o.a.createElement(c.a,{exact:!0,path:"/",render:t=>o.a.createElement(f,Object.assign({},t,{isAuthed:!0,user:e}))})))};s.a.render(o.a.createElement(x,null),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.84d7dc07.chunk.js.map