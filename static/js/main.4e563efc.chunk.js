(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(6),c=n.n(r),o=n(3),a=n(5),s=n(2),u=n.n(s),i=n(1),d=n.n(i),l=(n(12),n(0)),f=d.a.memo((function(t){var e=t.goods;return Object(l.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.color,r=t.name;return Object(l.jsx)("li",{"data-cy":"good",style:{color:n},children:r},e)}))})}));function p(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var b=function(){var t=Object(i.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1],c=Object(i.useState)(!1),s=Object(a.a)(c,2),d=s[0],b=s[1],j=function(){var t=Object(o.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p();case 3:e=t.sent,r(e),b(!1),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),b(!0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(o.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)}));case 3:e=t.sent,r(e),b(!1),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),b(!0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(o.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p().then((function(t){return t.filter((function(t){return"red"===t.color}))}));case 3:e=t.sent,r(e),b(!1),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),b(!0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Dynamic list of Goods"}),Object(l.jsx)("button",{type:"button","data-cy":"all-button",onClick:j,children:"Load all goods"}),Object(l.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:h,children:"Load 5 first goods"}),Object(l.jsx)("button",{type:"button","data-cy":"red-button",onClick:v,children:"Load red goods"}),d?Object(l.jsx)("h4",{children:" No goods on server"}):Object(l.jsx)(f,{goods:n})]})};c.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4e563efc.chunk.js.map