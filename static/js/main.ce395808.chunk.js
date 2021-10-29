(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={item:"Contact_item__16kEn"}},17:function(t,e,n){t.exports={contactsList:"ContactsList_contactsList__1b1cR"}},18:function(t,e,n){t.exports={Filter:"Filter_Filter__Cphd4"}},19:function(t,e,n){t.exports={form:"ContactForm_form__22I7m"}},20:function(t,e,n){t.exports={input:"InputField_input__1yEwc"}},21:function(t,e,n){t.exports={app:"App_app__QLjC9"}},29:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(10),o=n.n(r),i=(n(29),n(3)),s=n(42),b=n(4),u=Object(b.b)("contact/Add",(function(t){return{payload:{name:t.name,number:t.number,id:s.a()}}})),l=Object(b.b)("contact/Delete"),j=Object(b.b)("contact/Filter"),d=n(16),O=n.n(d),m=n(1),p=function(t){var e=t.id,n=t.name,c=t.number,a=Object(i.b)();return Object(m.jsxs)("li",{className:O.a.item,children:[Object(m.jsxs)("p",{children:[n,": ",c]}),Object(m.jsx)("button",{type:"button",onClick:function(){return a(l(e))},children:"Delete"})]},e)},f=function(t){return t.contacts.filter},h=function(t){var e=function(t){return t.contacts.items}(t),n=f(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},x=n(17),v=n.n(x),_=function(){var t=Object(i.c)(h),e=null===t||void 0===t?void 0:t.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(m.jsx)(p,{name:n,number:c,id:e},e)}));return t.length>0&&Object(m.jsx)("ul",{className:v.a.contactsList,children:e})},C=n(18),y=n.n(C),g=function(){var t=Object(i.b)(),e=Object(i.c)(f);return Object(m.jsxs)("label",{children:["Find contacts by name",Object(m.jsx)("input",{className:y.a.Filter,type:"text",value:e,onChange:function(e){return t(j(e.target.value))}})]})},k=n(6),w=n(14),A=n(19),L=n.n(A),F=n(20),N=n.n(F),z=function(t){return Object(m.jsxs)("label",{children:[t.label,Object(m.jsx)("input",Object(k.a)(Object(k.a)({},t),{},{className:N.a.input}))]})},S={name:{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,label:"Name"},number:{type:"text",name:"number",pattern:"+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,label:"Number"}};var D=function(){var t=Object(c.useState)(""),e=Object(w.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(w.a)(r,2),s=o[0],b=o[1],l=Object(i.b)(),j=function(){a(""),b("")};return Object(m.jsxs)("form",{className:L.a.form,onSubmit:function(t){t.preventDefault(),l(u({name:n,number:s})),j()},children:[Object(m.jsx)(z,Object(k.a)(Object(k.a)({},S.name),{},{value:n,onChange:function(t){a(t.target.value)}})),Object(m.jsx)(z,Object(k.a)(Object(k.a)({},S.number),{},{value:s,onChange:function(t){b(t.target.value)}})),Object(m.jsx)("button",{type:"submit",children:"Add contact"})]})},E=n(21),I=n.n(E);var J,Z=function(){return Object(m.jsxs)("div",{className:I.a.app,children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(D,{}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(g,{}),Object(m.jsx)(_,{})]})},q=n(22),B=n(9),M=n(2),P=n(23),Q=n.n(P),R=n(5),$=n(24),G=n.n($),H=n(7),K=Object(b.c)([],(J={},Object(H.a)(J,u,(function(t,e){return t.map((function(t){return t.name.toLowerCase()})).includes(e.payload.name.toLowerCase())?(alert("".concat(e.payload.name," is already in contacts")),Object(B.a)(t)):[].concat(Object(B.a)(t),[e.payload])})),Object(H.a)(J,l,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),J)),T=Object(b.c)("",Object(H.a)({},j,(function(t,e){return e.payload}))),U=Object(M.b)({items:K,filter:T}),V={key:"contacts",storage:G.a,blacklist:["filter"]},W=[].concat(Object(B.a)(Object(b.d)({serializableCheck:{ignoredActions:[R.a,R.f,R.b,R.c,R.d,R.e]}})),[Q.a]),X=Object(M.b)({contacts:U}),Y=Object(R.g)(V,X),tt=Object(b.a)({reducer:Y,middleware:W,devtools:!0}),et=Object(R.h)(tt);o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(i.a,{store:tt,children:Object(m.jsx)(q.a,{loading:null,persistor:et,children:Object(m.jsx)(Z,{})})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.ce395808.chunk.js.map