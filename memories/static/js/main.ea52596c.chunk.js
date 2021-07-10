(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{117:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchPosts",(function(){return V})),n.d(a,"createPost",(function(){return q})),n.d(a,"likePost",(function(){return G})),n.d(a,"updatePost",(function(){return Q})),n.d(a,"deletePost",(function(){return X}));var r=n(0),c=n(9),i=n.n(c),s=n(17),o=n(22),l=n(69),u=n(79),d="CREATE",p="UPDATE",j="DELETE",b="FETCH_ALL",f="LIKE",m=Object(o.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return t.payload;case f:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case d:return[].concat(Object(u.a)(e),[t.payload]);case p:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case j:return e.filter((function(e){return e._id!==t.payload}));default:return e}}}),h=n(48),x=n(158),g=n(159),O=n(153),v=n(162),y=n(157),C=n.p+"static/media/memories.9cfa8a46.png",k=n(156),w=n(147),E=Object(w.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),I=n(150),N=n(152),T=n(161),S=n(154),_=n(155),A=n(76),D=n.n(A),L=n(77),z=n.n(L),P=n(75),W=n.n(P),F=n(74),B=n.n(F),M=n(18),R=n.n(M),H=n(35),J=n(36),U=n.n(J),K="https://memories-project-mp.herokuapp.com/posts",V=function(){return U.a.get(K)},q=function(e){return U.a.post(K,e)},G=function(e){return U.a.patch("".concat(K,"/").concat(e,"/likePost"))},Q=function(e,t){return U.a.patch("".concat(K,"/").concat(e),t)},X=function(e){return U.a.delete("".concat(K,"/").concat(e))},Y=n(5),Z=function(e){var t,n=e.post,a=e.setCurrentId,r=E(),c=Object(s.b)();return console.log(n),Object(Y.jsxs)(I.a,{className:r.card,children:[Object(Y.jsx)(N.a,{className:r.media,image:n.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:n.title}),Object(Y.jsxs)("div",{className:r.overlay,children:[Object(Y.jsx)(O.a,{variant:"h6",children:n.creator}),Object(Y.jsx)(O.a,{variant:"body2",children:B()(n.createdAt).fromNow()})]}),Object(Y.jsx)("div",{className:r.overlay2,children:Object(Y.jsx)(T.a,{style:{color:"white"},size:"small",onClick:function(){return a(n._id)},children:Object(Y.jsx)(W.a,{fontSize:"default"})})}),Object(Y.jsx)("div",{className:r.details,children:Object(Y.jsx)(O.a,{variant:"body2",color:"textSecondary",component:"h2",children:null===(t=n.tags)||void 0===t?void 0:t.map((function(e){return"#".concat(e," ")}))})}),Object(Y.jsx)(O.a,{className:r.title,gutterBottom:!0,variant:"h5",component:"h2",children:n.title}),Object(Y.jsx)(S.a,{children:Object(Y.jsx)(O.a,{variant:"body2",color:"textSecondary",component:"p",children:n.message})}),Object(Y.jsxs)(_.a,{className:r.cardActions,children:[Object(Y.jsxs)(T.a,{size:"small",color:"primary",onClick:function(){},children:[Object(Y.jsx)(D.a,{fontSize:"small"})," Like ",n.likeCount," "]}),Object(Y.jsxs)(T.a,{size:"small",color:"primary",onClick:function(){return c((e=n._id,function(){var t=Object(H.a)(R.a.mark((function t(n){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,X(e);case 3:n({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(Y.jsx)(z.a,{fontSize:"small"})," Delete"]})]})]})},$=Object(w.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),ee=function(e){var t=e.setCurrentId,n=Object(s.c)((function(e){return e.posts})),a=$();return console.log(n),n.length?Object(Y.jsx)(y.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3,children:n.map((function(e){return Object(Y.jsx)(y.a,{item:!0,xs:12,sm:6,md:6,children:Object(Y.jsx)(Z,{post:e,setCurrentId:t})},e._id)}))}):Object(Y.jsx)(k.a,{})},te=n(19),ne=n(81),ae=n(160),re=n(78),ce=n.n(re),ie=Object(w.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),se=function(e){var t=e.currentId,n=e.setCurrentId,c=Object(r.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),i=Object(h.a)(c,2),o=i[0],l=i[1],u=Object(s.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null}));Object(r.useEffect)((function(){u&&l(u)}),[u]);var d=ie(),p=Object(s.b)(),j=function(){n(null),l({creator:"",title:"",message:"",tags:"",selectedFile:""})};return Object(Y.jsx)(ne.a,{className:d.paper,children:Object(Y.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(d.root," ").concat(d.form),onSubmit:function(e){e.preventDefault(),p(t?function(e,t){return function(){var n=Object(H.a)(R.a.mark((function n(a){var r,c;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Q(e,t);case 3:r=n.sent,c=r.data,a({type:"UPDATE",payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(t,o):function(e){return function(){var t=Object(H.a)(R.a.mark((function t(n){var r,c;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a),t.prev=1,t.next=4,q(e);case 4:r=t.sent,c=r.data,n({type:"CREATE",payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(o)),j()},children:[Object(Y.jsxs)(O.a,{variant:"h6",children:[t?"Editing ":"Creating"," Memory "]}),Object(Y.jsx)(ae.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:o.creator,onChange:function(e){return l(Object(te.a)(Object(te.a)({},o),{},{creator:e.target.value}))}}),Object(Y.jsx)(ae.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:o.title,onChange:function(e){return l(Object(te.a)(Object(te.a)({},o),{},{title:e.target.value}))}}),Object(Y.jsx)(ae.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:o.message,onChange:function(e){return l(Object(te.a)(Object(te.a)({},o),{},{message:e.target.value}))}}),Object(Y.jsx)(ae.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:o.tags,onChange:function(e){return l(Object(te.a)(Object(te.a)({},o),{},{tags:e.target.value}))}}),Object(Y.jsx)("div",{className:d.fileInput,children:Object(Y.jsx)(ce.a,{type:"file",multiple:!1,onDone:function(e){return l(Object(te.a)(Object(te.a)({},o),{},{selectedFile:e.base64}))}})}),Object(Y.jsx)(T.a,{className:d.buttonSubmit,variant:"contained",size:"large",color:"primary",type:"submit",fullWidth:!0,children:"Submit"}),Object(Y.jsx)(T.a,{variant:"contained",size:"small",color:"secondary",onClick:j,fullWidth:!0,children:"clear"})]})})},oe=Object(w.a)((function(){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}}})),le=function(){var e=Object(r.useState)(null),t=Object(h.a)(e,2),n=t[0],a=t[1],c=oe(),i=Object(s.b)();return Object(r.useEffect)((function(){i(function(){var e=Object(H.a)(R.a.mark((function e(t){var n,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V();case 3:n=e.sent,a=n.data,t({type:"FETCH_ALL",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[n,i]),Object(Y.jsxs)(x.a,{maxWidth:"lg",children:[Object(Y.jsxs)(g.a,{className:c.appBar,position:"static",color:"inherit",children:[Object(Y.jsx)(O.a,{className:c.heading,variant:"h2",align:"center",children:"Memories"}),Object(Y.jsx)("img",{className:c.image,src:C,alt:"memories",height:"60"})]}),Object(Y.jsx)(v.a,{in:!0,children:Object(Y.jsx)(x.a,{children:Object(Y.jsxs)(y.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(Y.jsx)(y.a,{item:!0,xs:12,sm:7,children:Object(Y.jsx)(ee,{setCurrentId:a})}),Object(Y.jsx)(y.a,{item:!0,xs:12,sm:4,children:Object(Y.jsx)(se,{currentId:n,setCurrentId:a})})]})})})]})},ue=(n(117),Object(o.e)(m,Object(o.d)(Object(o.a)(l.a))));i.a.render(Object(Y.jsx)(s.a,{store:ue,children:Object(Y.jsx)(le,{})}),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.ea52596c.chunk.js.map