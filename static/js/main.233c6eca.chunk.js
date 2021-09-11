(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{30:function(t,e,n){"use strict";n.r(e);var c,a,r,i,o=n(0),b=n.n(o),s=n(10),d=n.n(s),u=n(7),l=n(6),j=n(16),f=n.n(j),p=n(12),h=n(17),O=n(5),x=n(32),m=Object(l.b)("addContact",(function(t){return{payload:{name:t.name,number:t.number,id:Object(x.a)()}}})),g=Object(l.b)("deleteContact"),v=Object(l.b)("filterContacts"),w=Object(l.c)([],(c={},Object(p.a)(c,m,(function(t,e){var n=e.payload;return[].concat(Object(h.a)(t),[n])})),Object(p.a)(c,g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),y=Object(l.c)("",Object(p.a)({},v,(function(t,e){return e.payload}))),k=Object(O.b)({items:w,filter:y}),C=Object(l.a)({reducer:{contacts:k},middleware:function(t){return t().concat(f.a)}}),z=n(15),A=n(3),S=n(4),E=S.a.form(a||(a=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  padding: 20px;\n  border: 3px solid #212121;\n"]))),F=S.a.label(r||(r=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  margin-bottom: 30px;\n  font-size: 20px;\n  font-weight: 800;\n"]))),J=S.a.button(i||(i=Object(A.a)(["\n  width: 100px;\n  padding: 5px;\n  font-weight: 600;\n  background-color: #5d5dff;\n  border-radius: 5px;\n"]))),N=n(1);var Z,q,B,D,L,M,P=function(t){var e=t.submit,n=t.change,c=t.number,a=t.name;return Object(N.jsxs)(E,{onSubmit:e,children:[Object(N.jsxs)(F,{children:["Name",Object(N.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:n,value:a})]}),Object(N.jsxs)(F,{children:["Number",Object(N.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:c,onChange:n})]}),Object(N.jsx)(J,{type:"submit",children:"Add contact"})]})},I=S.a.button(Z||(Z=Object(A.a)(["\n  padding: 3px;\n  font-weight: 600;\n  background-color: #5d5dff;\n  border-radius: 5px;\n"]))),Y=S.a.span(q||(q=Object(A.a)(["\n  margin-right: 30px;\n"]))),$=S.a.li(B||(B=Object(A.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  width: 350px;\n  font-size: 18px;\n"]))),G=function(t){var e=t.contacts,n=t.visibleContacts,c=t.deleteElement;return e&&Object(N.jsx)("ul",{children:n.map((function(t,e){var n=t.id,a=t.name,r=t.number;return Object(N.jsxs)($,{children:[Object(N.jsxs)(Y,{children:["".concat(e+1,")    "),a,": ",r]}),Object(N.jsx)(I,{type:"button",onClick:function(){return c(n)},children:"Delete"})]},n)}))})},H=S.a.label(D||(D=Object(A.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 380px;\n  font-size: 18px;\n  font-weight: 600;\n"]))),K=S.a.span(L||(L=Object(A.a)(["\n  font-size: 18px;\n  font-weight: 400;\n  font-style: italic;\n"]))),Q=function(t){var e=t.change,n=t.filter;return 0!==t.contacts.length?Object(N.jsxs)(H,{children:["Find contacts by Name",Object(N.jsx)("input",{type:"text",name:"Find contact",value:n,onChange:e})]}):Object(N.jsx)(K,{children:"Your Phonebook don`t have contacts"})},R=S.a.div(M||(M=Object(A.a)(["\n  padding: 20px;\n"])));var T=function(){var t=Object(o.useState)(""),e=Object(z.a)(t,2),n=e[0],c=e[1],a=Object(o.useState)(""),r=Object(z.a)(a,2),i=r[0],b=r[1],s=Object(u.c)((function(t){return t.contacts.items})),d=Object(u.c)((function(t){return t.contacts.filter})),l=Object(u.b)(),j=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":b(a);break;case"Find contact":l(v(a));break;default:return}},f=function(){c(""),b("")};return Object(N.jsxs)(R,{children:[Object(N.jsx)("h1",{children:"Phonebook"}),Object(N.jsx)(P,{submit:function(t){if(t.preventDefault(),s.find((function(t){return t.name===n})))return alert("".concat(n," is already in contacts")),void f();l(m({name:n,number:i})),f()},change:j,name:n,number:i}),Object(N.jsx)("h2",{children:"Contacts"}),Object(N.jsx)(Q,{change:j,filter:d,contacts:s}),Object(N.jsx)(G,{contacts:s,visibleContacts:function(){var t=d.toLowerCase();return s.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),deleteElement:function(t){l(g(t))}})]})};d.a.render(Object(N.jsx)(b.a.StrictMode,{children:Object(N.jsx)(u.a,{store:C,children:Object(N.jsx)(T,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.233c6eca.chunk.js.map