(this["webpackJsonpcontact-list"]=this["webpackJsonpcontact-list"]||[]).push([[0],{37:function(t,e,n){t.exports={outerDiv:"Favourite_outerDiv__396_D",Favourite:"Favourite_Favourite__3BaED"}},49:function(t,e,n){t.exports={"btn-primary":"Button_btn-primary__2O9Qn"}},52:function(t,e,n){t.exports={Input:"Input_Input__1EbFE"}},53:function(t,e,n){t.exports={Form:"Form_Form__2iuF1"}},54:function(t,e,n){t.exports={loader:"Spinner_loader__3xBPf",spin:"Spinner_spin__3vCcq"}},68:function(t,e,n){},69:function(t,e,n){},97:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n(0),r=n(18),i=n.n(r),o=(n(68),n(5)),u=(n(69),n(33)),s=n(49),l=n.n(s);var j=function(t){return Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:l.a[t.class],children:t.children})})},d=n(23),b=n.p+"static/media/star.4ef7063e.svg",v=n(37),h=n.n(v),m="TOOGLE_FAVOURITE",p="SUBMIT_FORM",f=n(51),O=n.n(f).a.create({baseURL:"https://addtocontact-e5966-default-rtdb.firebaseio.com/"}),x=function(){return{type:p}};var g=Object(d.b)((function(t){return{isFav:t.favourite.isFavourite}}),(function(t){return{toggleFav:function(){return t({type:m})}}}))((function(t){return Object(a.jsxs)("div",{className:h.a.outerDiv,children:[Object(a.jsx)("h3",{children:"Favourite:"}),Object(a.jsx)("img",{onClick:function(){return t.toggleFav()},style:{backgroundColor:t.isFav?"yellow":"white"},className:h.a.Favourite,src:b,alt:"Favourite Icon"})]})})),F=n(52),_=n.n(F);var y=function(t){return Object(a.jsx)("div",{children:Object(a.jsx)("input",{className:_.a.Input,type:t.type,placeholder:t.placeholder,value:t.value,onChange:t.change})})},C=n(53),N=n.n(C),I=n(54),S=n.n(I);var w=function(){return Object(a.jsx)("div",{className:S.a.loader})};var k=Object(d.b)((function(t){return{load:t.submit.loading,isFavourite:t.favourite.isFavourite}}),(function(t){return{onSubmit:function(e){return t(function(t){return function(e){e(x()),O.post("/contacts.json",t).then((function(t){e(x()),console.log(t)})).catch((function(t){alert(t)}))}}(e))}}}))((function(t){var e=Object(c.useState)(""),n=Object(u.a)(e,2),r=n[0],i=n[1],o=Object(c.useState)(""),s=Object(u.a)(o,2),l=s[0],d=s[1],b=Object(c.useState)(""),v=Object(u.a)(b,2),h=v[0],m=v[1];return t.load?Object(a.jsx)(w,{}):Object(a.jsxs)("form",{className:N.a.Form,onSubmit:function(e){e.preventDefault(),t.onSubmit({name:r,number:l,email:h,isFavourite:t.isFavourite}),i(""),m(""),d("")},children:[Object(a.jsx)(g,{}),Object(a.jsx)(y,{change:function(t){return i(t.target.value)},value:r,type:"text",placeholder:"Name"}),Object(a.jsx)(y,{change:function(t){return d(t.target.value)},value:l,type:"number",placeholder:"Phone Number"}),Object(a.jsx)(y,{change:function(t){return m(t.target.value)},value:h,type:"email",placeholder:"Email"}),Object(a.jsx)(j,{class:"btn-primary",children:"Submit"})]})})),B=n(118),D=n(124),R=n(120),E=n(122),T=n(123),L=n(121),A=n(55),M=n.n(A),P=Object(B.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1},navigation:{display:"flex",marginRight:90},navItem:{marginRight:40,cursor:"pointer"}}}));function G(t){var e=P();return Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)(D.a,{position:"static",children:Object(a.jsxs)(R.a,{children:[Object(a.jsx)(L.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(a.jsx)(M.a,{})}),Object(a.jsx)(E.a,{variant:"h6",className:e.title,children:"MyContact"}),Object(a.jsxs)("div",{className:e.navigation,children:[Object(a.jsx)(E.a,{onClick:function(){return t.history.push("/add-contact")},variant:"h6",className:(e.title,e.navItem),children:"Add Contact"}),Object(a.jsx)(E.a,{onClick:function(){return t.history.push("/favourite-contact")},variant:"h6",className:(e.title,e.navItem),children:"Favourite Contact"}),Object(a.jsx)(E.a,{onClick:function(){return t.history.push("/all-contact")},variant:"h6",className:(e.title,e.navItem),children:"All Contact"})]}),Object(a.jsx)(T.a,{color:"inherit",onClick:function(){return alert("Feature not implemented yet")},children:"Login"})]})})})}var J=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(o.a,{path:"/",component:G}),Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{path:"/add-contact",exact:!0,component:k}),Object(a.jsx)(o.a,{path:"/add",exact:!0,component:y})]})]})},U=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))},q=n(35),Q=n(20),V=n(56),W=n(57),z={isFavourite:!1},H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return{isFavourite:!t.isFavourite};default:return{state:t}}},K={loading:!1},X=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:return{loading:!t.loading};default:return t}},Y=Object(Q.combineReducers)({favourite:H,submit:X}),Z=Object(Q.createStore)(Y,Object(V.composeWithDevTools)(Object(Q.applyMiddleware)(W.a)));i.a.render(Object(a.jsx)(d.a,{store:Z,children:Object(a.jsx)(q.a,{basename:"addContact - ReactJS",children:Object(a.jsx)(J,{})})}),document.getElementById("root")),U()}},[[97,1,2]]]);
//# sourceMappingURL=main.044a87ae.chunk.js.map