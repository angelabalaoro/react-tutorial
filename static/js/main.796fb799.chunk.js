(window["webpackJsonpreact-tutorial"]=window["webpackJsonpreact-tutorial"]||[]).push([[0],{24:function(e,t,a){e.exports=a(35)},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=(a(29),a(23)),u=a(5),i=a(6),m=a(8),h=a(7),s=a(9),b=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Job"),r.a.createElement("th",null,"Remove"),r.a.createElement("th",null,"View")))},E=function(e){var t=e.characterData.map(function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.job),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.removeCharacter(a)}},"Delete")),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.viewCharacter(a)}},"View")))});return r.a.createElement("tbody",null,t)},v=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.characterData,a=e.removeCharacter,n=e.viewCharacter;return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement(b,null),r.a.createElement(E,{characterData:t,removeCharacter:a,viewCharacter:n})))}}]),t}(n.Component),d=a(20),f=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r))},a.onFormSubmit=function(e){e.preventDefault(),a.props.handleSubmit(a.state),a.setState(a.initialState)},a.initialState={name:"",job:""},a.state=a.initialState,a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.job;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Job"),r.a.createElement("input",{type:"text",name:"job",value:a,onChange:this.handleChange}),r.a.createElement("button",{type:"submit"},"Submit")))}}]),t}(n.Component),p=a(13),j=a(10),C=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home..."))},w=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About..."))},O=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Contact..."))},g=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",null,r.a.createElement(p.b,{to:"/",className:"nav-link"}," Home ")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/contact",className:"nav-link"},"Contact")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/about",className:"nav-link"},"About")))),r.a.createElement("hr",null),r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:"/",component:C}),r.a.createElement(j.a,{path:"/contact",component:O}),r.a.createElement(j.a,{path:"/about",component:w}))))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={characters:[]},a.viewCharacter=function(e){var t={characters:a.state.characters.filter(function(t,a){return a===e})};console.log(t)},a.removeCharacter=function(e){var t=a.state.characters;a.setState({characters:t.filter(function(t,a){return a!==e})})},a.handleSubmit=function(e){a.setState({characters:[].concat(Object(o.a)(a.state.characters),[e])})},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.characters;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"React Tutorial"),r.a.createElement("p",null,"Add a character with a name and a job to the table."),r.a.createElement(g,null),r.a.createElement(v,{characterData:e,removeCharacter:this.removeCharacter,viewCharacter:this.viewCharacter}),r.a.createElement(f,{handleSubmit:this.handleSubmit}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.796fb799.chunk.js.map