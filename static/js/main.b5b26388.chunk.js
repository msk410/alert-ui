(this["webpackJsonpftp-ui"]=this["webpackJsonpftp-ui"]||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),i=a(19),l=a(24),u=a(64),s=a(152),m=a(140),p=a(143),d=a(145),f=a(156),E=a(146),b=a(107),O=a(68),h=a.n(O),v=a(10),g=Object(m.a)((function(e){return{appBar:{position:"relative !important",background:"#24292e"},search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(v.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(v.b)(e.palette.common.white,.25)}},searchIcon:{padding:e.spacing(0,1),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)")}}})),y=function(){var e=g(),t=Object(i.b)();return r.a.createElement(p.a,{className:e.appBar},r.a.createElement(d.a,null,r.a.createElement(b.a,{variant:"h4"},"alert"),r.a.createElement("div",{style:{flexGrow:1,padding:"10px"}},r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(h.a,null)),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t({type:"OPEN_CARD",isCardOpen:!0}),t({type:"OPEN_FORM",isFormOpen:!1})}(e)}},r.a.createElement(f.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})))),r.a.createElement(E.a,{onClick:function(){return t({type:"OPEN_FORM",isFormOpen:!0}),void t({type:"OPEN_CARD",isCardOpen:!1})},variant:"contained"},"Report Incident")))},C=a(47),j=a(147),w=a(149),N=a(150),x=a(69),R=a.n(x),k=a(148),P=Object(m.a)((function(e){return{root:{width:"60%",display:"flex",flexDirection:"column",alignContent:"center",justifyContent:"center",marginTop:"10px"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}}));function F(){var e=P(),t=r.a.useState(!1),a=Object(C.a)(t,2),n=a[0],c=a[1];return r.a.createElement(j.a,{className:e.root},r.a.createElement(k.a,{onClick:function(){c(!n)}},r.a.createElement(w.a,null,r.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Officer Poop of Poopy Police Department")),r.a.createElement(N.a,{in:n,timeout:"auto",unmountOnExit:!0},r.a.createElement(w.a,null,r.a.createElement(b.a,{paragraph:!0},"Badge Number: 234"),r.a.createElement(b.a,{paragraph:!0},"Description of Incident: he beat me with his night stick and then maced my puppy"),r.a.createElement(R.a,{width:"auto",url:"https://www.youtube.com/watch?v=N5koIMwLTJ4"})))))}var I=a(153),D=a(155),_=a(151),M=a(154),B=Object(m.a)((function(){return{root:{width:"60%",display:"flex",alignContent:"center",justifyContent:"center",marginTop:"10px"}}})),L=function(){var e=B(),t=r.a.useState("city"),a=Object(C.a)(t,2),n=a[0],c=a[1],o=Object(i.b)();return r.a.createElement(j.a,{className:e.root},r.a.createElement("form",{onSubmit:function(){return alert("u die")},style:{width:"80%"}},r.a.createElement(I.a,{label:"Location",required:!0,fullWidth:!0}),r.a.createElement(D.a,{defaultValue:"city","aria-label":"location",name:"location",value:n,onClick:function(e){return function(e){c(e.target.value)}(e)}},r.a.createElement(_.a,{value:"city",control:r.a.createElement(M.a,null),label:"City"}),r.a.createElement(_.a,{value:"county",control:r.a.createElement(M.a,null),label:"County"})),r.a.createElement(I.a,{label:"Officer Name",fullWidth:!0}),r.a.createElement(I.a,{id:"standard-multiline-flexible",label:"Description of Incident",multiline:!0,rowsMax:4,required:!0,fullWidth:!0}),r.a.createElement(I.a,{label:"Youtube Link",fullWidth:!0}),r.a.createElement(E.a,{onClick:function(){return o({type:"OPEN_FORM",isFormOpen:!1}),void o({type:"OPEN_CARD",isCardOpen:!1})}},"submit")))},S=Object(m.a)((function(){return{content:{display:"flex",alignContent:"center",justifyContent:"center"}}})),A=function(){var e=S(),t=Object(i.c)((function(e){return e.showContentReducer.isFormOpen})),a=Object(i.c)((function(e){return e.showContentReducer.isCardOpen}));return r.a.createElement("div",null,r.a.createElement(s.a,null),r.a.createElement(y,null),t&&r.a.createElement("div",{className:e.content},r.a.createElement(L,null)),a&&r.a.createElement("div",{className:e.content},r.a.createElement(F,null)))},W=a(39);var J=Object(l.c)({showContentReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_FORM":return Object(W.a)(Object(W.a)({},e),{},{isFormOpen:t.isFormOpen});case"OPEN_CARD":return Object(W.a)(Object(W.a)({},e),{},{isCardOpen:t.isCardOpen});default:return e}}}),T=Object(l.d)(J,[Object(l.a)(u.a)]);o.a.render(r.a.createElement(i.a,{store:T},r.a.createElement(A,null)),document.getElementById("root"))},77:function(e,t,a){e.exports=a(106)}},[[77,1,2]]]);
//# sourceMappingURL=main.b5b26388.chunk.js.map