(this.webpackJsonpdefault=this.webpackJsonpdefault||[]).push([[0],{19:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),s=n(3),a=n.n(s),i=(n(19),n(10)),o=n.n(i),j=n(12),l=n(6),d=n(14),u=n(5),b=n(7),O=n.n(b),f=n(1),x=function(e){e.lat,e.lng;var t=e.onClick;return Object(f.jsx)("div",{className:"location-marker",onClick:t,children:Object(f.jsx)(u.Icon,{icon:O.a,className:"location-icon"})})},h=function(e){var t=e.info;return Object(f.jsxs)("div",{className:"location-info",children:[Object(f.jsx)("h2",{children:"Event Location Info"}),Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{children:["Fire ID: ",Object(f.jsx)("strong",{children:t.id})]}),Object(f.jsxs)("li",{children:["Fire Name: ",Object(f.jsx)("strong",{children:t.title})]}),Object(f.jsxs)("li",{children:["Date Recorded: ",Object(f.jsx)("strong",{children:t.date})]})]})]})};n(24).config();var v=function(e){var t=e.eventData,n=e.center,r=e.zoom,s=Object(c.useState)(null),a=Object(l.a)(s,2),i=a[0],o=a[1],j=t.map((function(e){return 8===e.categories[0].id?Object(f.jsx)(x,{lat:e.geometries[0].coordinates[1],lng:e.geometries[0].coordinates[0],onClick:function(){return o({id:e.id,title:e.title,date:e.geometries[0].date})}},e.id):null}));return Object(f.jsxs)("div",{className:"map",children:[Object(f.jsx)(d.a,{bootstrapURLKeys:{key:"AIzaSyAU_wFXXArQnydl_oggBsD0Q8d7vnNHzpU"},defaultCenter:n,defaultZoom:r,children:j}),i&&Object(f.jsx)(h,{info:i})]})};v.defaultProps={center:{lat:42.3265,lng:-122.8756},zoom:6};var m=v,g=n.p+"static/media/loading.20e5c8b9.gif",p=n(8),k=function(){return Object(f.jsxs)("div",{className:"loader",children:[Object(f.jsx)("img",{src:g,alt:"Loading"}),Object(f.jsxs)("h1",{children:["Fetching Data from ",Object(f.jsx)(u.Icon,{icon:p.a})]})]})},I=function(){return Object(f.jsx)("header",{className:"header",children:Object(f.jsxs)("h1",{children:[Object(f.jsx)(u.Icon,{icon:O.a})," Wildfire Tracker (Powered by ",Object(f.jsx)(u.Icon,{icon:p.a}),") "]})})};var N=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),a=Object(l.a)(s,2),i=a[0],d=a[1];return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c=n.events,r(c),d(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(f.jsxs)("div",{children:[Object(f.jsx)(I,{}),i?Object(f.jsx)(k,{}):Object(f.jsx)(m,{eventData:n})]})};a.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.0f93d275.chunk.js.map