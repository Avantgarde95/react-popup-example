!function(){"use strict";var e,t={587:function(e,t,n){var r,a,o=n(294),i=n(935),l=n(372),c=n(126),u=(0,c.oM)({name:"image",initialState:{url:"https://i.kym-cdn.com/entries/icons/original/000/026/489/crying.jpg",brightness:100,blur:0,crop:0,text:"I created another bug"},reducers:{setURL:function(e,t){e.url=t.payload},setBrightness:function(e,t){e.brightness=t.payload},setBlur:function(e,t){e.blur=t.payload},setCrop:function(e,t){e.crop=t.payload},setText:function(e,t){e.text=t.payload}}}),s=(0,c.xC)({reducer:(r={},r[u.name]=u.reducer,r),devTools:!1}),p=l.I0,m=l.v9,d=function(){var e=(0,o.useState)(null),t=e[0],n=e[1],r=m((function(e){return e.image}));return(0,o.useEffect)((function(){if(t){var e=new Image;e.crossOrigin="anonymous",e.addEventListener("load",(function(){!function(e,t,n){var r=e.getContext("2d");if(r){r.clearRect(0,0,e.width,e.height),e.width=t.width,e.height=t.height,r.filter="blur("+n.blur+"px) brightness("+n.brightness+"%)",r.drawImage(t,0,0),r.filter="none",r.textAlign="center",r.fillStyle="#ffffff",r.strokeStyle="#000000",r.lineWidth=2,r.font="60px 'Noto Sans KR'";var a=e.width/2,o=e.height-n.crop-30;r.fillText(n.text,a,o),r.strokeText(n.text,a,o),r.clearRect(0,0,n.crop,e.height),r.clearRect(e.width-n.crop,0,n.crop,e.height),r.clearRect(0,0,e.width,n.crop),r.clearRect(0,e.height-n.crop,e.width,n.crop)}else alert("Failed to get 2D context from the canvas!")}(t,e,r)})),e.src=r.url}}),[t,r]),o.createElement("div",{className:"src-style-Viewer__viewer--x7C67"},o.createElement("canvas",{className:"src-style-Viewer__canvas--rd31W",ref:function(e){n(e)}}),o.createElement("button",{className:"src-style-Viewer__saveButton--VYU8U",type:"button",onClick:function(){var e,n;t&&(e=t.toDataURL("image/png"),"Result.png",(n=document.createElement("a")).href=e,n.download="Result.png",n.click())}},"Save"))},f=function(e){var t=e.about,n=e.type,r=e.initialValue,a=e.onSubmit,i=(0,o.useState)(r),l=i[0],c=i[1];return o.createElement("div",{className:"src-style-Input__container--amRp3"},o.createElement("span",{className:"src-style-Input__name--qalW6"},t),o.createElement("input",{className:"src-style-Input__input--zKTog",type:n,defaultValue:r,onChange:function(e){c(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&a(l)}}))},h=function(){var e=m((function(e){return e.image})),t=p();return o.createElement("div",{className:"src-style-Toolpane__toolpane--DaS9J"},o.createElement(f,{about:"Image URL",type:"text",initialValue:e.url,onSubmit:function(e){t(u.actions.setURL(e))}}),o.createElement(f,{about:"Brightness (%)",type:"number",initialValue:""+e.brightness,onSubmit:function(e){t(u.actions.setBrightness(+e))}}),o.createElement(f,{about:"Blur (px)",type:"number",initialValue:""+e.blur,onSubmit:function(e){t(u.actions.setBlur(+e))}}),o.createElement(f,{about:"Crop (px)",type:"number",initialValue:""+e.crop,onSubmit:function(e){t(u.actions.setCrop(+e))}}),o.createElement(f,{about:"Text",type:"text",initialValue:""+e.text,onSubmit:function(e){t(u.actions.setText(e))}}))},v=function(e){var t=e.windowWidth,n=e.windowHeight,r=e.children,a=e.onClose,l=window.open("","_blank","width="+t+",height="+n);if(!l)return alert("Failed to open the popup!"),a(),o.createElement(o.Fragment,null);l.document.write("<html><head>"),document.querySelectorAll("link").forEach((function(e){l.document.write(e.outerHTML)})),l.document.write("</head><body></body></html>");var c=document.createElement("div");return c.className="Popup",l.document.body.appendChild(c),l.addEventListener("beforeunload",a),(0,i.createPortal)(r,c)},g=document.querySelector(".Temporary");null===(a=null==g?void 0:g.parentNode)||void 0===a||a.removeChild(g),(0,i.render)(o.createElement((function(){var e=(0,o.useState)(!1),t=e[0],n=e[1];return o.createElement(l.zt,{store:s},o.createElement("div",{className:"src-style-App__app--YCAFs"},o.createElement("div",{className:"src-style-App__header--MljYn"},"Image editor"),o.createElement("div",{className:"src-style-App__content--PyGWm"},o.createElement("div",{className:"src-style-App__center--_G0NE"},o.createElement(d,null)),t?o.createElement(v,{windowWidth:400,windowHeight:600,onClose:function(){n(!1)}},o.createElement(h,null)):o.createElement("div",{className:"src-style-App__right--AJhmI"},o.createElement(h,null),o.createElement("button",{className:"src-style-App__popupButton--kzJHG",type:"button",onClick:function(){n(!0)}},"Open in the new window")))))}),null),document.querySelector(".Root"))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=function(t,n,a,o){if(!n){var i=1/0;for(s=0;s<e.length;s++){n=e[s][0],a=e[s][1],o=e[s][2];for(var l=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(l=!1,o<i&&(i=o));if(l){e.splice(s--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,a,o]},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,i=n[0],l=n[1],c=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(c)var s=c(r)}for(t&&t(n);u<i.length;u++)o=i[u],r.o(e,o)&&e[o]&&e[o][0](),e[i[u]]=0;return r.O(s)},n=self.webpackChunkreact_popup_example=self.webpackChunkreact_popup_example||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=r.O(void 0,[424],(function(){return r(587)}));a=r.O(a)}();