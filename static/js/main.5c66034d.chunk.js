(this["webpackJsonpftp-ui"]=this["webpackJsonpftp-ui"]||[]).push([[0],{101:function(e,t,a){e.exports=a(130)},130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),i=a(33),o=a(36),u=a(77),s=a(177),m=a(162),p=a(19),d=a(165),f=a(167),E=a(179),b=a(186),h=a(86),O=a(170),g=a(131),v=a(81),y=a.n(v),C=Object(m.a)((function(e){return{appBar:{position:"relative !important",background:"#24292e"},search:{display:"flex",borderRadius:e.shape.borderRadius,backgroundColor:"white"},searchIcon:{padding:e.spacing(0,1),pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{width:"100%"},inputInput:{padding:e.spacing(1,1,1,0)}}})),j=function(){var e=C(),t=Object(i.b)(),a=r.a.useState(""),n=Object(p.a)(a,2),l=n[0],c=n[1];return r.a.createElement(d.a,{className:e.appBar},r.a.createElement(f.a,null,r.a.createElement(g.a,{variant:"h4"},"alert"),r.a.createElement("div",{style:{flexGrow:1,padding:"10px"}},r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(y.a,{color:"primary"})),r.a.createElement(E.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:l,onChange:function(e){return c(e.target.value)},disableUnderline:"true"},r.a.createElement(b.a,{value:10},"Location"),r.a.createElement(b.a,{value:20},"Officer Name")),r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t({type:"OPEN_CARD",isCardOpen:!0}),t({type:"OPEN_FORM",isFormOpen:!1})}(e)}},r.a.createElement(h.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}}))))),r.a.createElement(O.a,{onClick:function(){return t({type:"OPEN_FORM",isFormOpen:!0}),void t({type:"OPEN_CARD",isCardOpen:!1})},variant:"contained"},"Report Incident")))},N=a(171),w=a(173),x=a(174),R=a(82),P=a.n(R),S=a(172),k=Object(m.a)((function(e){return{root:{width:"60%",display:"flex",flexDirection:"column",alignContent:"center",justifyContent:"center",marginTop:"10px"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}}));function I(){var e=k(),t=r.a.useState(!1),a=Object(p.a)(t,2),n=a[0],l=a[1];return r.a.createElement(N.a,{className:e.root},r.a.createElement(S.a,{onClick:function(){l(!n)}},r.a.createElement(w.a,null,r.a.createElement(g.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Officer Poop of Poopy Police Department")),r.a.createElement(x.a,{in:n,timeout:"auto",unmountOnExit:!0},r.a.createElement(w.a,null,r.a.createElement(g.a,{paragraph:!0},"Badge Number: 234"),r.a.createElement(g.a,{paragraph:!0},"Description of Incident: he beat me with his night stick and then maced my puppy"),r.a.createElement(P.a,{width:"auto",url:"https://www.youtube.com/watch?v=N5koIMwLTJ4"})))))}var D=a(182),F=a(183),M=a(175),B=a(180),L=a(15),_=a(178),W=a(83),q=Object(m.a)((function(){return{root:{width:"60%",display:"flex",flexDirection:"column",alignContent:"center",justifyContent:"center",marginTop:"10px"},input:{marginLeft:"10px"}}})),A=function(){var e=q(),t=r.a.useState("city"),a=Object(p.a)(t,2),n=a[0],l=a[1],c=r.a.useState(""),o=Object(p.a)(c,2),u=o[0],s=o[1],m=r.a.useState(new Date),d=Object(p.a)(m,2),f=d[0],E=d[1],b=r.a.useState(""),h=Object(p.a)(b,2),g=h[0],v=h[1],y=r.a.useState(""),C=Object(p.a)(y,2),j=C[0],w=C[1],x=r.a.useState(""),R=Object(p.a)(x,2),P=R[0],S=R[1],k=r.a.useState(""),I=Object(p.a)(k,2),A=I[0],J=I[1],T=r.a.useState(""),G=Object(p.a)(T,2),K=G[0],U=G[1],V=Object(i.b)(),Y=function(){V({type:"OPEN_FORM",isFormOpen:!1})};return r.a.createElement(N.a,{className:e.root},r.a.createElement("form",{onSubmit:function(){return Y()},style:{width:"80%"}},r.a.createElement(D.a,{className:e.input,value:u,onChange:function(e){return s(e.target.value)},label:"Location",required:!0,fullWidth:!0}),r.a.createElement(F.a,{className:e.input,defaultValue:"city","aria-label":"location",name:"location",value:n,onClick:function(e){return function(e){l(e.target.value)}(e)}},r.a.createElement(M.a,{value:"city",control:r.a.createElement(B.a,null),label:"City"}),r.a.createElement(M.a,{value:"county",control:r.a.createElement(B.a,null),label:"County"})),r.a.createElement(L.a,{utils:W.a},r.a.createElement(_.a,{required:!0,className:e.input,margin:"normal",id:"date-picker-dialog",label:"Date of Incident",format:"MM/dd/yyyy",value:f,onChange:function(e){return E(e)},KeyboardButtonProps:{"aria-label":"change date"}})),r.a.createElement(D.a,{className:e.input,label:"Officer Last Name",value:g,onChange:function(e){return v(e.target.value)},fullWidth:!0}),r.a.createElement(D.a,{className:e.input,label:"Officer First Name",value:j,onChange:function(e){return w(e.target.value)},fullWidth:!0}),r.a.createElement(D.a,{className:e.input,label:"Badge Number",value:P,onChange:function(e){return S(e.target.value)},fullWidth:!0}),r.a.createElement(D.a,{className:e.input,id:"standard-multiline-flexible",label:"Incident Description",multiline:!0,rowsMax:4,required:!0,value:A,onChange:function(e){return J(e.target.value)},fullWidth:!0}),r.a.createElement(D.a,{className:e.input,label:"Youtube Link",value:K,onChange:function(e){return U(e.target.value)},fullWidth:!0}),r.a.createElement(O.a,{onClick:function(){return Y()}},"submit")),r.a.createElement("div",{style:{margin:"10px"}},"Please fill out as much information as you can. Only the location, date, and description of the incident are required. Reporting an incident is completely anonymous."))},J=Object(m.a)((function(){return{content:{display:"flex",alignContent:"center",justifyContent:"center"}}})),T=function(){var e=J(),t=Object(i.c)((function(e){return e.showContentReducer.isFormOpen})),a=Object(i.c)((function(e){return e.showContentReducer.isCardOpen}));return r.a.createElement("div",null,r.a.createElement(s.a,null),r.a.createElement(j,null),t&&r.a.createElement("div",{className:e.content},r.a.createElement(A,null)),a&&r.a.createElement("div",{className:e.content},r.a.createElement(I,null)))},G=a(52);var K=Object(o.c)({showContentReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_FORM":return Object(G.a)(Object(G.a)({},e),{},{isFormOpen:t.isFormOpen});case"OPEN_CARD":return Object(G.a)(Object(G.a)({},e),{},{isCardOpen:t.isCardOpen});default:return e}}}),U=Object(o.d)(K,[Object(o.a)(u.a)]);c.a.render(r.a.createElement(i.a,{store:U},r.a.createElement(T,null)),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.5c66034d.chunk.js.map