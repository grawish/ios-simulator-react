(this["webpackJsonpios-simulator"]=this["webpackJsonpios-simulator"]||[]).push([[0],{18:function(e,t,s){},19:function(e,t,s){},21:function(e,t,s){},23:function(e,t,s){},25:function(e,t,s){},26:function(e,t,s){},27:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},42:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s.n(c),n=s(12),a=s.n(n),o=(s(18),s(19),s(13)),r=s(10),d=(s(21),s(5)),l=(s(22),s(23),s(0));var j=function(e){var t=function(t){var s=t.target,c=document.querySelector(".app-grid"),i={x:s.offsetLeft+s.offsetWidth/2+c.offsetLeft,y:s.offsetTop+s.offsetHeight/2+c.offsetTop};e.setPosition(i),console.log(t.target,t.target.dataset),e.setStatus(s.dataset.index)};return Object(l.jsx)("div",{className:"app-grid",children:Object(l.jsxs)("div",{className:"main-carousel","data-flickity":'{ "cellAlign": "left" }',children:[Object(l.jsx)("div",{className:"carousel-cell",children:Object(l.jsx)("div",{className:"app-page",children:Object(d.a)(Array(20)).map((function(e,s,c){return Object(l.jsx)("div",{children:Object(l.jsx)("img",{onClick:t,"data-index":s+1,src:"./img/icons/"+(s+1)+".svg",alt:""})},s)}))})}),Object(l.jsx)("div",{className:"carousel-cell",children:Object(l.jsx)("div",{className:"app-page",children:Object(d.a)(Array(9)).map((function(e,s,c){return Object(l.jsx)("div",{children:Object(l.jsx)("img",{onClick:t,"data-index":23+s+1,src:"./img/icons/"+(23+s+1)+".svg",alt:""})},s)}))})})]})})},u=s.p+"static/media/d1.5d853a16.svg",v=s.p+"static/media/d2.938f46f5.svg",f=s.p+"static/media/d3.35d7b375.svg",b=s.p+"static/media/d4.4d8c86ba.svg";s(25);var m=function(e){var t=function(t){var s=t.target,c=document.querySelector(".dock"),i={x:s.offsetLeft+s.offsetWidth/2+c.offsetLeft,y:s.offsetTop+s.offsetHeight/2+c.offsetTop};e.setPosition(i),console.log(t.target,t.target.dataset),e.setStatus(s.dataset.index)},s=[u,v,f,b];return Object(l.jsx)("div",{className:"dock",children:Object(d.a)(Array(4)).map((function(e,c,i){return Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:s[c],onClick:t,"data-index":c+21})},c)}))})},p=s.p+"static/media/reception.4250a028.svg",x=s.p+"static/media/wifi.783a4378.svg",O=s.p+"static/media/battery.e7797b2a.svg";s(26);var y=function(e){return Object(l.jsxs)("div",{className:"notification-bar",children:[Object(l.jsx)("div",{className:"notification-boxes notification-left",children:"19:30"}),Object(l.jsxs)("div",{className:"notification-boxes notification-right",children:[Object(l.jsx)("img",{src:p,alt:"Notification",className:"notification-icon"}),Object(l.jsx)("img",{src:x,alt:"Notification",className:"notification-icon"}),Object(l.jsx)("img",{src:O,alt:"Notification",className:"notification-icon"})]})]})};var g=function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(y,{}),Object(l.jsx)(j,{setStatus:e.setStatus,setPosition:e.setPosition}),Object(l.jsx)(m,{setStatus:e.setStatus,setPosition:e.setPosition})]})},h=(s(27),s.p+"static/media/bar.376cc08c.svg");var N=function(e){return Object(l.jsx)("div",{})};var S=function(e){return Object(l.jsx)("div",{})};var q=function(e){return Object(l.jsx)("div",{})};s(28);var L=function(e){var t=function(){var e=document.querySelector("#animation"),t=document.querySelector(".preview");e.classList.add("no-open"),e.classList.remove("open"),e.style.left=t.offsetLeft+"px",e.style.top=t.offsetTop+t.parentNode.parentNode.offsetTop+"px"};return Object(c.useEffect)((function(){!function(){var e=document.querySelector(".videoElement");navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:!0}).then((function(t){e.srcObject=t})).catch((function(e){console.log("Something went wrong!")}))}(),t()}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"camera-top-controls"}),Object(l.jsx)("div",{id:"animation",className:"no-open"}),Object(l.jsx)("video",{className:"videoElement",autoPlay:!0}),Object(l.jsxs)("div",{className:"camera-controls",children:[Object(l.jsx)("div",{className:"mode-slider"}),Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("div",{className:"preview",children:Object(l.jsx)("canvas",{className:"pic-canvas",id:"canvas-img"})}),Object(l.jsx)("div",{className:"shutter",onClick:function(e){var s=document.getElementById("canvas-img"),c=document.querySelector(".videoElement"),i=document.querySelector(".preview"),n=document.querySelector("#animation");e.target.onclick=function(){s.width=c.videoWidth,s.height=c.videoHeight,s.getContext("2d").drawImage(c,0,0),n.style.backgroundImage="url("+s.toDataURL("image/webp")+")",n.classList.remove("no-open"),n.classList.add("open"),setTimeout((function(){return t()}),100),i.style.backgroundImage="url("+s.toDataURL("image/webp")+")"}}}),Object(l.jsx)("div",{className:"switch-cam"})]})]})]})};var w=function(e){return Object(l.jsx)("div",{})};var k=function(e){return Object(l.jsx)("div",{})};var T=function(e){return Object(l.jsx)("div",{})};var E=function(e){return Object(l.jsx)("div",{})};var A=function(e){return Object(l.jsx)("div",{})};var P=function(e){return Object(l.jsx)("div",{})};var C=function(e){return Object(l.jsx)("div",{})};var F=function(e){return Object(l.jsx)("div",{})};var H=function(e){return Object(l.jsx)("div",{})};var I=function(e){return Object(l.jsx)("div",{})};var R=function(e){return Object(l.jsx)("div",{})};var D=function(e){return Object(l.jsx)("div",{})};var M=function(e){return Object(l.jsx)("div",{})};var U=function(e){return Object(l.jsx)("div",{})};var Y=function(e){return Object(l.jsx)("div",{})};var B=function(e){return Object(l.jsx)("div",{})};var W=function(e){return Object(l.jsx)("div",{})};var J=function(e){return Object(l.jsx)("div",{})};s(29);var V=function(e){return Object(l.jsxs)("div",{className:"safari",children:[Object(l.jsx)("div",{className:"safari-header"}),Object(l.jsx)("div",{className:"safari-main",children:Object(l.jsx)("iframe",{id:"safari",src:"https://grawishh.tk",title:"safari"})}),Object(l.jsx)("div",{className:"safari-footer",children:Object(l.jsx)("div",{})})]})};var z=function(e){return Object(l.jsx)("div",{})};var G=function(e){var t=function(e){var t=document.createElement("img");document.body.appendChild(t),t.style.width="0.01vh",t.style.height="0.01vh",t.style.position="absolute",t.style.left="0",t.style.top="0",e.dataTransfer.setDragImage(t,0,0)},s=function(e){var t=document.querySelector(".display").offsetHeight,s=document.querySelector(".display").offsetTop,c=100*(e.pageY-s)/t;console.log(e);var i=document.querySelector(".app-display");i.style.height=c+"%",i.style.width=c+"%",i.style.transition="0s",c>50&&c<100&&(i.classList.remove("opened"),i.style.top=(100-c)/2+"%",i.style.left=(100-c)/2+"%")},i=function(t){var s=document.querySelector(".display").offsetHeight,c=document.querySelector(".display").offsetTop,i=100*(t.clientY-c)/s,n=document.querySelector(".app-display");n.removeAttribute("style"),i>0&&i<100&&(i>80&&n.classList.add("opened"),i<80&&(n.classList.remove("opened"),n.style.top=e.position.y+"px",n.style.left=e.position.x+"px",setTimeout((function(){n.style.display="none",e.setStatus(0)}),500)))},n=function(e){var t=document.querySelector(".display").offsetHeight,s=document.querySelector(".display").offsetTop,c=100*(e.changedTouches[0].pageY-s)/t,i=document.querySelector(".app-display");i.style.height=c+"%",i.style.width=c+"%",i.style.transition="0s",c>50&&c<100&&(i.classList.remove("opened"),i.style.top=(100-c)/2+"%",i.style.left=(100-c)/2+"%")},a=function(t){var s=document.querySelector(".display").offsetHeight,c=document.querySelector(".display").offsetTop,i=100*(t.changedTouches[0].pageY-c)/s,n=document.querySelector(".app-display");n.removeAttribute("style"),i>0&&i<100&&(i>80&&n.classList.add("opened"),i<80&&(n.classList.remove("opened"),n.style.top=e.position.y+"px",n.style.left=e.position.x+"px",setTimeout((function(){n.style.display="none",e.setStatus(0)}),500)))},o={top:e.position.y,left:e.position.x};Object(c.useEffect)((function(){document.querySelector(".app-display").removeAttribute("style"),document.querySelector(".app-display").classList.add("opened"),document.querySelector(".app-display").removeAttribute("style"),function(){var e=document.getElementById("bottom-bar");e.addEventListener("dragstart",t),e.addEventListener("drag",s),e.addEventListener("dragend",i),e.addEventListener("touchmove",n),e.addEventListener("touchend",a)}()}));var r=[Object(l.jsx)(N,{},1),Object(l.jsx)(S,{},1),Object(l.jsx)(q,{},1),Object(l.jsx)(L,{},1),Object(l.jsx)(w,{},1),Object(l.jsx)(k,{},1),Object(l.jsx)(T,{},1),Object(l.jsx)(E,{},1),Object(l.jsx)(A,{},1),Object(l.jsx)(P,{},1),Object(l.jsx)(C,{},1),Object(l.jsx)(F,{},1),Object(l.jsx)(H,{},1),Object(l.jsx)(I,{},1),Object(l.jsx)(R,{},1),Object(l.jsx)(D,{},1),Object(l.jsx)(M,{},1),Object(l.jsx)(U,{},1),Object(l.jsx)(Y,{},1),Object(l.jsx)(B,{},1),Object(l.jsx)(W,{},1),Object(l.jsx)(J,{},1),Object(l.jsx)(V,{},1),Object(l.jsx)(z,{},1)];return Object(l.jsxs)("div",{className:"app-display",style:o,children:[Object(l.jsx)(y,{}),r.map((function(t,s,c){return e.status===""+[s+1]?r[s]:""})),Object(l.jsx)("div",{className:"bottom-bar",children:Object(l.jsx)("div",{className:"bar",children:Object(l.jsx)("img",{src:h,id:"bottom-bar",alt:""})})})]})};s(30);var K=function(e){var t=Object(c.useState)(0),s=Object(r.a)(t,2),i=s[0],n=s[1],a=Object(c.useState)({x:null,y:null}),o=Object(r.a)(a,2),d=o[0],j=o[1];return console.log(i,d),Object(l.jsx)("div",{className:"frame",children:Object(l.jsxs)("div",{className:"display",children:[Object(l.jsx)(g,{setStatus:n,setPosition:j}),i?Object(l.jsx)(G,{status:i,position:d,setStatus:n}):""]})})};var Q=function(){return Object(l.jsxs)("div",{className:"body",children:[Object(l.jsx)(o.MobileView,{children:Object(l.jsx)("div",{className:"mobile-overlay",children:Object(l.jsx)("div",{className:"start-btn",onClick:function(){var e=document.querySelector(".mobile-overlay"),t=document.querySelector(".body");t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen(),e.style.display="none"},children:"Start"})})}),Object(l.jsx)(K,{})]})};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(Q,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.5117a3a0.chunk.js.map