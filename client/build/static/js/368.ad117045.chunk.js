"use strict";(self.webpackChunkeazy_manage=self.webpackChunkeazy_manage||[]).push([[368],{7222:function(e,n,a){a.d(n,{Z:function(){return o}});var t=a(286),s=a(6015),i=a(7205),r=(a(2791),a(9434)),c=a(2067),l=a(184);var o=function(e){var n=(0,r.I0)();return(0,l.jsxs)(t.Z,{className:"comment-box",elevation:3,children:[(0,l.jsx)(s.Z,{className:"item",children:e.description}),(0,l.jsx)(s.Z,{className:"item",children:e.department}),(0,l.jsx)(s.Z,{className:"item",children:e.topic}),(0,l.jsx)(s.Z,{className:"item",children:e.button?(0,l.jsx)(i.Z,{variant:"outlined",color:"warning",onClick:function(){return n((0,c.PN)({id:e.id}))},children:"Delete"}):""})]})}},4368:function(e,n,a){a.r(n),a.d(n,{default:function(){return S}});var t=a(4165),s=a(5861),i=a(9439),r=a(2791),c=a(8419),l=a(4729),o=a.n(l),d=a(9434),m=a(6015),h=a(7603),u=a(1267),x=a(3671),g=a(4565),j=a(1131),Z=a(7205),p=a(1680),v=a(9773),N=a(4390),f=a(9963),b=a(9827),w=a(807),y=a(286),z=a(5512),C=a(6444),k=(a(7222),a(184));var S=function(e){var n=r.useRef(),a=(0,d.I0)(),l=(0,d.v9)((function(e){return e.waitingListStoreReducer.events})),S=r.useState(!1),I=(0,i.Z)(S,2),P=I[0],D=I[1],T=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(){var a,s,i,r,l,d,m;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.current,e.next=3,o()(a);case 3:s=e.sent,i=s.toDataURL("image/png"),r=new c.ZP("landscape","pt","a2"),l=r.getImageProperties(i),d=r.internal.pageSize.getWidth(),m=l.height*d/l.width,r.addImage(i,"PNG",0,0,d,m),r.save("print.pdf");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,k.jsxs)(y.Z,{className:"waiting-list",elevation:5,children:[(0,k.jsx)(g.Z,{className:"waiting-list-header",align:"center",variant:"h4",children:e.language?"\u05e8\u05e9\u05d9\u05de\u05ea \u05d4\u05d4\u05de\u05ea\u05e0\u05d4":"Waiting List"}),l.map((function(t){return(0,k.jsxs)(h.Z,{expanded:P==="panel"+t.id,onChange:(s="panel"+t.id,function(e,n){D(!!n&&s)}),id:"pdf",ref:n,children:[(0,k.jsxs)(x.Z,{expandIcon:(0,k.jsx)(j.Z,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:[(0,k.jsx)(Z.Z,{className:"close-button-box",onClick:function(){return a((0,C.xC)(t.id))},children:(0,k.jsx)(z.Z,{color:"error",fontSize:"large"})}),(0,k.jsx)(g.Z,{className:"event-header-data-item",children:t.orderDate}),(0,k.jsx)(g.Z,{className:"event-header-data-item",children:t.eventName}),(0,k.jsx)(g.Z,{className:"event-header-data-item",children:t.eventType?e.language?"\u05dc\u05e9\u05d1\u05ea":"To Sit":"TA"})]}),(0,k.jsxs)(u.Z,{children:[(0,k.jsxs)(m.Z,{className:"event-details-header",children:[(0,k.jsxs)(g.Z,{variant:"subtitle1",className:"event-main-data-item",children:[(0,k.jsx)("span",{children:e.language?"\u05de\u05e1\u05e4\u05e8 \u05d4\u05d0\u05d5\u05e8\u05d7\u05d9\u05dd ":"Guests number"}),(0,k.jsx)("span",{children:t.guestsNum})]}),(0,k.jsxs)(g.Z,{variant:"subtitle1",className:"event-main-data-item",children:[(0,k.jsx)("span",{children:e.language?"\u05e1\u05d5\u05d2 \u05d4\u05d0\u05d5\u05e8\u05d7\u05d9\u05dd":"Guests type"}),t.guestsType]}),(0,k.jsxs)(g.Z,{variant:"subtitle1",className:"event-main-data-item",children:[(0,k.jsx)("span",{children:e.language?"\u05d6\u05de\u05df \u05d4\u05d0\u05d9\u05e8\u05d5\u05e2":"Event time"}),t.orderTime]}),(0,k.jsxs)(g.Z,{variant:"subtitle1",className:"event-main-data-item",children:[(0,k.jsx)("span",{children:e.language?"\u05ea\u05e4\u05e8\u05d9\u05d8 \u05d4\u05d0\u05d9\u05e8\u05d5\u05e2":"Event menu"}),t.menuName]})]}),(0,k.jsxs)(m.Z,{className:"event-details-main",children:[(0,k.jsxs)(f.Z,{component:y.Z,children:[(0,k.jsx)(g.Z,{variant:"h5",sx:{fontWeight:"600",textAlign:"center"},children:e.language?"\u05e4\u05e8\u05d9\u05d8\u05d9\u05dd":"Items"}),(0,k.jsxs)(p.Z,{size:"small","aria-label":"a dense table",children:[(0,k.jsx)(b.Z,{children:(0,k.jsxs)(w.Z,{children:[(0,k.jsx)(N.Z,{align:"center",children:(0,k.jsx)("h3",{children:e.language?"\u05db\u05de\u05d5\u05ea":"Amount"})}),(0,k.jsx)(N.Z,{align:"center",children:(0,k.jsx)("h3",{children:e.language?"\u05de\u05d5\u05e6\u05e8":"Product"})})]})}),(0,k.jsx)(v.Z,{children:t.items.map((function(n){return(0,k.jsxs)(w.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,k.jsx)(N.Z,{align:"center",children:n.quantity}),(0,k.jsx)(N.Z,{align:"center",component:"th",scope:"row",children:e.language?n.nameHe:n.nameEn})]})}))})]})]}),(0,k.jsxs)(y.Z,{elevation:3,className:"comments",children:[(0,k.jsx)(g.Z,{variant:"h5",sx:{fontWeight:"600"},children:e.language?"\u05d4\u05e2\u05e8\u05d5\u05ea":"Comments"}),(0,k.jsxs)(m.Z,{className:"comments-row",children:[(0,k.jsx)(m.Z,{className:"comments-row-item top",children:e.language?"\u05de\u05d7\u05dc\u05e7\u05d4":"Department"}),(0,k.jsx)(m.Z,{className:"comments-row-item top",children:e.language?"\u05d4\u05e2\u05e8\u05d4":"Comment"}),(0,k.jsx)(m.Z,{className:"comments-row-item top",children:e.language?"\u05e0\u05d5\u05e9\u05d0":"Topic"})]}),t.comments.map((function(e){return(0,k.jsxs)(m.Z,{className:"comments-row",children:[(0,k.jsx)(m.Z,{className:"comments-row-item",children:e.department}),(0,k.jsx)(m.Z,{className:"comments-row-item",children:e.description}),(0,k.jsx)(m.Z,{className:"comments-row-item",children:e.topic})]})}))]}),(0,k.jsxs)(y.Z,{elevation:3,className:"price-container",children:[(0,k.jsx)(g.Z,{variant:"h5",sx:{fontWeight:"600"},children:e.language?"\u05de\u05d7\u05d9\u05e8":"Price"}),(0,k.jsxs)(g.Z,{variant:"h5",children:[t.price," ILS"]})]})]}),(0,k.jsxs)(m.Z,{className:"event-details-footer",children:[(0,k.jsx)(Z.Z,{className:"footer-button",size:"large",color:"primary",variant:"contained",children:e.language?"\u05e9\u05dc\u05d7 \u05dc\u05d4\u05db\u05e0\u05d4":"Send to production"}),(0,k.jsx)(Z.Z,{className:"footer-button",size:"large",color:"primary",variant:"contained",onClick:T,children:e.language?"\u05d4\u05d5\u05e8\u05d9\u05d3 PDF":"Download pdf"}),(0,k.jsx)(Z.Z,{className:"footer-button",size:"large",color:"primary",variant:"contained",children:e.language?"\u05e9\u05dc\u05d7 \u05dc\u05de\u05d5\u05d6\u05d9\u05d0\u05d5\u05df":"Send to museum"}),(0,k.jsx)(Z.Z,{className:"footer-button",size:"large",color:"primary",variant:"contained",children:e.language?"\u05e9\u05e0\u05d4":"Edit"})]})]})]});var s}))]})}}}]);
//# sourceMappingURL=368.ad117045.chunk.js.map