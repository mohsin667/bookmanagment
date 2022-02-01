"use strict";(self.webpackChunkassignment_1_mohsin_ansari=self.webpackChunkassignment_1_mohsin_ansari||[]).push([[567],{1567:function(e,s,a){a.r(s);var n=a(2982),r=a(885),t=a(2791),i=a(5927),l=a(4873),c=a(4819),o=a(9126),d=a(6355),u=a(8820),m=a(3853),h=a(6600),x=a(6504),j=(a(8922),a(184));s.default=function(){var e=(0,t.useContext)(c.Z),s="string"==typeof e.library?JSON.parse(e.library):e.library,a=(0,t.useState)(s),g=(0,r.Z)(a,2),f=g[0],p=(g[1],(0,t.useState)(f)),v=(0,r.Z)(p,2),N=v[0],b=v[1],y=(0,t.useState)(""),S=(0,r.Z)(y,2),k=S[0],Z=S[1],w=(0,t.useState)(e.cart),I=(0,r.Z)(w,2),C=I[0],L=I[1],A=(0,t.useState)(!1),O=(0,r.Z)(A,2),z=O[0],U=O[1],P=function(s,a){s.count=1;var r=(0,n.Z)(N);r[a].cart=!0,b(r);var t=(0,n.Z)(C);t.push(s),L(t),U(!0),e.setCart(t)};return(0,t.useEffect)((function(){if(P){localStorage.setItem("cart",JSON.stringify(C)),localStorage.setItem("books",JSON.stringify(N));var s=JSON.parse(localStorage.getItem("books"));e.setLibrary(s)}return function(){U(!1)}}),[z]),(0,j.jsxs)(t.Fragment,{children:[(0,j.jsxs)("main",{children:[(0,j.jsx)(i.V,{}),(0,j.jsx)("div",{className:"container",children:(0,j.jsxs)("div",{className:"content-box booklist-content-box",children:[(0,j.jsxs)("div",{className:"heading-bar",children:[(0,j.jsx)(l.Z,{heading:"Book Library"}),(0,j.jsx)("div",{className:"form-group",children:(0,j.jsxs)("div",{className:"search-bar",children:[(0,j.jsx)("input",{type:"text",onChange:function(e){Z(e.target.value);var a=f.filter((function(a){return""==e.target.value?s:a.title.toLocaleLowerCase().includes(k.toLocaleLowerCase().trim(""))?a:void 0}));b(a)},value:k,id:"search",placeholder:"Search"}),(0,j.jsx)(o.dVI,{})]})})]}),(0,j.jsx)("div",{className:"grid",children:f.length>0?(0,j.jsx)(j.Fragment,{children:N.map((function(e,s){return(0,j.jsxs)("div",{className:"grid-item",children:[(0,j.jsx)("img",{src:e.image,alt:""}),(0,j.jsxs)("div",{className:"book-detail",children:[(0,j.jsx)("p",{className:"title",children:e.title}),(0,j.jsxs)("p",{className:"light",children:["Author: ",e.author]}),(0,j.jsxs)("p",{className:"light",children:["Customer: ",e.customer]}),(0,j.jsxs)("p",{className:"medium",children:[(0,j.jsx)(d.t9y,{size:"12px"})," ",e.price]}),(0,j.jsx)("div",{className:"actions",children:(0,j.jsx)("span",{className:"action-icon",children:1==e.cart?(0,j.jsxs)("span",{style:{fontSize:12,cursor:"initial",display:"inline-flex",alignItems:"center"},children:[(0,j.jsx)(u.mny,{color:"green",size:"14px"})," Added to cart"]}):(0,j.jsx)(m.Qyq,{onClick:function(){return P(e,s)},color:"#3f8acc"})})})]})]},s)}))}):(0,j.jsx)(x.Z,{})})]})})]}),(0,j.jsx)(h.Z,{})]})}},1049:function(e,s,a){a.d(s,{Z:function(){return r}});a(2791);var n=a(184);var r=function(e){return(0,n.jsx)("div",{className:"flashmessage",children:(0,n.jsx)("p",{children:e.message})})}},6600:function(e,s,a){a.d(s,{Z:function(){return t}});a(2791);var n=a(3504),r=a(184);var t=function(){return(0,r.jsxs)("footer",{children:[(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:[(0,r.jsx)(n.rU,{to:"/",children:"Home"}),(0,r.jsx)(n.rU,{to:"/booklibrary",children:"Assignment #2"}),(0,r.jsx)(n.rU,{to:"/addbook",children:"Add a Book"})]})}),(0,r.jsx)("p",{children:"Book Managment Assignment: Mohsin Ansari"})]})}},5927:function(e,s,a){a.d(s,{h:function(){return p},V:function(){return v}});var n=a(5861),r=a(4942),t=a(1413),i=a(885),l=a(7757),c=a.n(l),o=a(2791),d=a(1049),u=a(3504),m=a(6871),h=a(3853),x=a(5763),j=a(71),g=a(4819),f=a(184),p=function(){(0,m.s0)();var e=(0,o.useContext)(g.Z),s=(0,o.useState)({email:"",password:""}),a=(0,i.Z)(s,2),l=a[0],h=a[1],x=(0,o.useState)({}),p=(0,i.Z)(x,2),v=p[0],N=p[1],b=(0,o.useState)(!1),y=(0,i.Z)(b,2),S=y[0],k=y[1],Z=function(e){var s=e.target,a=s.name,n=s.value;h((0,t.Z)((0,t.Z)({},l),{},(0,r.Z)({},a,n)))};(0,o.useEffect)((function(){0===Object.keys(v).length&&S&&console.log(l)}),[v,e.booklist]);var w=function(e){var s={};return e.email.trim()?/\S+@\S+\.\S+/.test(l.email)?l.email!==localStorage.getItem("email")&&(s.email="Email does not exist"):s.email="Please enter the valid email address":s.email="Please enter the Email",e.password.trim()?e.password!==localStorage.getItem("password")&&(s.password="Incorrect Password"):s.password="Please enter the password",s};return(0,f.jsxs)(o.Fragment,{children:[0===Object.keys(v).length&&S&&(0,f.jsx)(d.Z,{message:"You have successfully logged In!"}),(0,f.jsx)("nav",{className:"header",children:(0,f.jsx)("div",{className:"container",children:(0,f.jsxs)("div",{className:"inner-nav",children:[(0,f.jsx)(u.rU,{className:"logo",to:"/",children:(0,f.jsx)(j.dbK,{id:"logo"})}),(0,f.jsx)("div",{className:"login-form",children:(0,f.jsxs)("form",{onSubmit:function(s){if(s.preventDefault(),N(w(l)),k(!0),l.email===localStorage.getItem("email")&&l.password===localStorage.getItem("password")){var a=function(){var e=(0,n.Z)(c().mark((function e(){var s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.setItem("isLoggedIn",1),s=localStorage.getItem("isLoggedIn"),e.abrupt("return",s);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a().then((function(s){console.log(s),e.setLoggedIn(s)}))}},children:[(0,f.jsxs)("div",{className:"form-group",children:[(0,f.jsx)("input",{type:"text",onChange:Z,name:"email",value:l.email,placeholder:"Email"}),(0,f.jsx)("p",{className:"error",children:v.email})]}),(0,f.jsxs)("div",{className:"form-group",children:[(0,f.jsx)("input",{type:"password",onChange:Z,name:"password",value:l.password,placeholder:"Password",autoComplete:"true"}),(0,f.jsx)("p",{className:"error",children:v.password})]}),(0,f.jsx)("button",{type:"submit",children:"Login"})]})})]})})})]})},v=function(){var e=(0,m.s0)(),s=(0,o.useContext)(g.Z),a=(0,o.useState)(!1),n=(0,i.Z)(a,2),r=n[0],t=n[1],l=function(){t(!r)};return(0,f.jsxs)("nav",{className:"header mainHeader",children:[(0,f.jsxs)("div",{className:"mobile-nav",children:[(0,f.jsx)(u.rU,{to:"/",children:(0,f.jsx)(j.dbK,{id:"logo"})}),r?(0,f.jsx)(j.bjh,{onClick:l,size:"30px",color:"#3f8acc"}):(0,f.jsx)(j.pLT,{onClick:l,size:"30px",color:"#3f8acc"})]}),(0,f.jsx)("div",{className:"container",children:(0,f.jsxs)("div",{className:"inner-nav",style:r?{left:0}:{left:"-110%"},children:[(0,f.jsx)(u.rU,{className:"logo",to:"/",children:(0,f.jsx)(j.dbK,{id:"logo"})}),(0,f.jsxs)("div",{className:"menu",children:[(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(u.OL,{className:function(e){return e.isActive?"active":null},to:"/",children:"Home"})}),(0,f.jsx)("li",{children:(0,f.jsx)(u.OL,{className:function(e){return e.isActive?"active":null},to:"/booklibrary",children:"Assignment #2"})}),(0,f.jsx)("li",{children:(0,f.jsx)(u.OL,{className:function(e){return e.isActive?"active":null},to:"/addbook",children:"Add a Book"})})]}),(0,f.jsx)("div",{className:"cart",children:(0,f.jsxs)(u.OL,{className:function(e){return e.isActive?"active":null},to:"/cart",children:[(0,f.jsx)(h.Qyq,{size:"20px",color:"#3f8acc"}),(0,f.jsx)("span",{className:"cart-counter",children:s.cart.length}),(0,f.jsx)("span",{children:"Cart"})]})}),(0,f.jsxs)("div",{className:"logout",onClick:function(){localStorage.setItem("isLoggedIn",0);var a=localStorage.getItem("isLoggedIn");s.setLoggedIn(a),e("/")},children:[(0,f.jsx)(x.gcy,{size:"20px",color:"#3f8acc"}),(0,f.jsx)("p",{children:"Sign Out"})]}),(0,f.jsxs)("div",{className:"user-profile",children:[(0,f.jsx)("div",{className:"profile-image",children:(0,f.jsx)("img",{src:"https://avatars.githubusercontent.com/u/29727197",alt:""})}),(0,f.jsx)("p",{children:localStorage.getItem("username")})]})]})]})})]})}},4873:function(e,s,a){a(2791);var n=a(184);s.Z=function(e){var s=e.heading;return(0,n.jsx)("div",{className:"box-heading",children:(0,n.jsx)("h2",{children:s})})}},6504:function(e,s,a){var n=a(2791),r=a(3504),t=a(184);s.Z=function(){return(0,t.jsxs)(n.Fragment,{children:[(0,t.jsx)("img",{style:{maxWidth:350,width:"100%",margin:"0 auto"},src:a(2559)}),(0,t.jsxs)("div",{className:"empty-data",children:[(0,t.jsx)("p",{children:"No data found in your library. Please Click on the add button below to add some books in your library."}),(0,t.jsx)(r.rU,{to:"/addbook",children:"Add Book"})]})]})}},8922:function(){},2559:function(e,s,a){e.exports=a.p+"static/media/no-data.c1a2858d431963e218c8.jpg"}}]);
//# sourceMappingURL=567.4a0e3528.chunk.js.map