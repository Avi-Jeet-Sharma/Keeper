(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(4),c=n.n(l),o=n(6),u=n(2);var i=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Keeper"))};var m=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright ",e))};var E=function(e){return r.a.createElement("div",{className:"note"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content),r.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},"DELETE"))},f=n(1),d=n(5);var v=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(u.a)(t,2),l=n[0],c=n[1];function o(e){var t=e.target,n=t.name,a=t.value;c(function(e){return Object(d.a)({},e,Object(f.a)({},n,a))})}return r.a.createElement("div",null,r.a.createElement("form",{className:"create-note"},r.a.createElement("input",{name:"title",onChange:o,value:l.title,placeholder:"Title"}),r.a.createElement("textarea",{name:"content",onChange:o,value:l.content,placeholder:"Take a note...",rows:"3"}),r.a.createElement("button",{onClick:function(t){e.onAdd(l),c({title:"",content:""}),t.preventDefault()}},"ADD")))};var p=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],l=t[1];function c(e){l(function(t){return t.filter(function(t,n){return n!==e})})}return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(v,{onAdd:function(e){l(function(t){return[].concat(Object(o.a)(t),[e])})}}),n.map(function(e,t){return r.a.createElement(E,{key:t,id:t,title:e.title,content:e.content,onDelete:c})}),r.a.createElement(m,null))};c.a.render(r.a.createElement(p,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.f6c0f7dd.chunk.js.map