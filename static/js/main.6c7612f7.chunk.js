(this["webpackJsonpredux-app"]=this["webpackJsonpredux-app"]||[]).push([[0],{41:function(e,c,t){},65:function(e,c,t){"use strict";t.r(c);var n=t(0),r=t.n(n),a=t(13),s=t.n(a),i=t(7),d=t(11),j=t(2),l=t(1),o=function(){return Object(l.jsx)("div",{className:"ui fixed menu",children:Object(l.jsx)("div",{className:"ui container center",children:Object(l.jsx)("h2",{children:Object(l.jsx)("a",{href:"/FakeShop/#/",children:"FakeShop"})})})})},u=(t(41),t(10)),b=t.n(u),O=t(14),h=t(15),p=t.n(h),x="SET_PRODUCTS",m="SELECTED_PRODUCT",v="REMOVE_SELECTED_PRODUCT",f=function(e){return{type:x,payload:e}},N=function(e){return{type:m,payload:e}},g=function(){var e=Object(i.c)((function(e){return e.product})),c=Object(j.f)().productId,t=e.image,r=e.title,a=e.price,s=e.category,d=e.description,o=Object(i.b)(),u=function(){var e=Object(O.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://fakestoreapi.com/products/".concat(c)).catch((function(e){console.log("error: ",e)}));case 2:t=e.sent,o(N(t.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return c&&""!==c&&u(),function(){o({type:v})}}),[c]),Object(l.jsx)("div",{className:"ui grid container",children:0===Object.keys(e).length?Object(l.jsx)("div",{children:"...Loading"}):Object(l.jsx)("div",{className:"ui placeholder segment",children:Object(l.jsxs)("div",{className:"ui two column stackable center aligned grid",children:[Object(l.jsx)("div",{className:"ui vertical divider",children:"AND"}),Object(l.jsxs)("div",{className:"middle aligned row",children:[Object(l.jsx)("div",{className:"column lp",children:Object(l.jsx)("img",{className:"ui fluid image",src:t})}),Object(l.jsxs)("div",{className:"column rp",children:[Object(l.jsx)("h1",{children:r}),Object(l.jsx)("h2",{children:Object(l.jsxs)("a",{className:"ui teal tag label",children:["$",a]})}),Object(l.jsx)("h3",{className:"ui brown block header",children:s}),Object(l.jsx)("p",{children:d}),Object(l.jsxs)("div",{className:"ui vertical animated button",tabIndex:"0",children:[Object(l.jsx)("div",{className:"hidden content",children:Object(l.jsx)("i",{className:"shop icon"})}),Object(l.jsx)("div",{className:"visible content",children:"Add to Cart"})]})]})]})]})})})},E=function(){var e=Object(i.c)((function(e){return e.allProduct.products})).map((function(e){var c=e.id,t=e.image,n=e.title,r=e.price,a=e.category;return Object(l.jsx)("div",{className:"four wide column",children:Object(l.jsx)(d.b,{to:"/product/".concat(c),children:Object(l.jsx)("div",{className:"ui link cards",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"image",children:Object(l.jsx)("img",{src:t,alt:n})}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("div",{className:"header",children:n}),Object(l.jsxs)("div",{className:"meta price",children:["$ ",r]}),Object(l.jsx)("div",{className:"meta",children:a})]})]})})})},c)}));return Object(l.jsx)(l.Fragment,{children:e})},w=function(){Object(i.c)((function(e){return e}));var e=Object(i.b)(),c=function(){var c=Object(O.a)(b.a.mark((function c(){var t;return b.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,p.a.get("https://fakestoreapi.com/products").catch((function(e){}));case 2:t=c.sent,e(f(t.data));case 4:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[]),Object(l.jsx)("div",{className:"ui grid container",children:Object(l.jsx)(E,{})})},_=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(d.a,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/",exact:!0,component:w}),Object(l.jsx)(j.a,{path:"/product/:productId",exact:!0,component:g}),Object(l.jsx)(j.a,{children:"404 Not Found!"})]})]})})},y=t(16),k=t(8),S={products:[]},D=Object(y.a)({allProduct:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,c=arguments.length>1?arguments[1]:void 0,t=c.type,n=c.payload;switch(t){case x:return Object(k.a)(Object(k.a)({},e),{},{products:n});default:return e}},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0,t=c.type,n=c.payload;switch(t){case m:return Object(k.a)(Object(k.a)({},e),n);case v:return{};default:return e}}}),T=Object(y.b)(D,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(i.a,{store:T,children:Object(l.jsx)(_,{})})}),document.querySelector("#root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.6c7612f7.chunk.js.map