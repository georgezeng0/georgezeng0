(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},24:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),l=(a(24),a(4)),s=a.n(l),i=a(6),u=a(2),m=a(7),f=a.n(m),d=r.a.createContext(),p=function(e){var t=e.children,a=Object(n.useState)(!0),c=Object(u.a)(a,2),o=c[0],l=c[1],m=Object(n.useState)(!0),p=Object(u.a)(m,2),b=p[0],E=p[1],h=Object(n.useState)([]),g=Object(u.a)(h,2),v=g[0],y=g[1],O=Object(n.useState)(0),j=Object(u.a)(O,2),N=j[0],S=j[1],w=Object(n.useState)(0),C=Object(u.a)(w,2),k=C[0],M=C[1],_=Object(n.useState)(5),x=Object(u.a)(_,2),q=x[0],A=x[1],L=Object(n.useState)(""),I=Object(u.a)(L,2),z=I[0],Q=I[1],D=Object(n.useState)([]),F=Object(u.a)(D,2),H=F[0],T=F[1],P=Object(n.useState)("easy"),J=Object(u.a)(P,2),B=J[0],Y=J[1],G=Object(n.useState)(""),K=Object(u.a)(G,2),R=K[0],U=K[1],V=Object(n.useState)(!1),W=Object(u.a)(V,2),X=W[0],Z=W[1],$=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,f()("https://opentdb.com/api.php",{params:{amount:q,category:z,difficulty:B}});case 4:t=e.sent,0===(a=t.data).response_code?(y(a.results),l(!1),E(!1),U("")):(l(!1),1==a.response_code?U("Amount is set too high for specific query!"):U("Something went wrong with the API - try again.")),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),l(!1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()("https://opentdb.com/api_category.php");case 2:t=e.sent,a=t.data.trivia_categories,T(a),l(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){ee()}),[]),r.a.createElement(d.Provider,{value:{isLoading:o,amount:q,questions:v,isSetup:b,isModal:X,score:k,questionNum:N,category:z,difficulty:B,error:R,categoryList:H,setAmount:A,handleSubmit:function(e){e.preventDefault(),$()},setIsModal:Z,handleAnswer:function(e){e&&M(k+1),N<v.length-1?S(N+1):Z(!0)},resetQuiz:function(){M(0),Z(!1),E(!0),S(0)},setDifficulty:Y,setCategory:Q}},t)},b=function(){return Object(n.useContext)(d)},E=function(){var e=b(),t=e.amount,a=e.error,n=e.setAmount,c=e.handleSubmit,o=(e.category,e.isLoading),l=e.categoryList,s=(e.difficulty,e.setDifficulty),i=e.setCategory;return r.a.createElement("div",{className:"quiz"},r.a.createElement("h2",null,"Trivia Quiz"),a&&r.a.createElement("div",{className:"error"},a),r.a.createElement("form",{action:"",className:"setup-form",onSubmit:function(e){return c(e)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Number of Questions"),r.a.createElement("input",{type:"number",id:"amount",className:"form-input",min:"1",max:"50",value:t,onChange:function(e){n(e.target.value)}})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"category"},"Set Category"),r.a.createElement("select",{id:"category",className:"form-input",name:"category",onChange:function(e){return i(e.target.value)}},o&&r.a.createElement("option",null,"Loading Categories..."),r.a.createElement("option",{value:""},"All Categories"),l.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})))),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"difficulty"},"Set Difficulty"),r.a.createElement("select",{type:"number",id:"difficulty",className:"form-input",onChange:function(e){s(e.target.value)}},r.a.createElement("option",{value:"easy"},"Easy"),r.a.createElement("option",{value:"medium"},"Medium"),r.a.createElement("option",{value:"hard"},"Hard"))),r.a.createElement("button",{className:"submit-btn"},"Start")))},h=function(){return r.a.createElement("main",null,r.a.createElement("div",{className:"loading"}))},g=a(18),v=function(){var e=b(),t=e.questions,a=e.score,n=e.questionNum,c=e.handleAnswer,o=e.isModal,l=e.resetQuiz,s=t[n],i=s.question,u=s.correct_answer,m=s.incorrect_answers,f=m.length+1,d=Math.floor(Math.random()*f);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"modal-container ".concat(o&&"isOpen")},r.a.createElement("div",{className:"modal-content"},r.a.createElement("h2",null,"Congrats!"),r.a.createElement("p",null,"You answered ",parseInt(a/t.length*100),"% of questions correctly"),r.a.createElement("button",{className:"close-btn",onClick:function(){l()}},"Play Again"))),r.a.createElement("div",{className:"quiz"},r.a.createElement("p",{className:"correct-answers"},"Correct Answers: ",a,"/",t.length," "),r.a.createElement("article",{className:"container"},r.a.createElement("h2",{dangerouslySetInnerHTML:{__html:i}}),r.a.createElement("div",{className:"btn-container"},Object(g.a)(Array(f)).map((function(e,t){if(t===d)return r.a.createElement("button",{key:t,className:"answer-btn",onClick:function(){c(!0)},dangerouslySetInnerHTML:{__html:u}});var a=m.splice(Math.floor(Math.random()*m.length),1);return r.a.createElement("button",{key:t,className:"answer-btn",onClick:function(){c(!1)},dangerouslySetInnerHTML:{__html:a}})})))),r.a.createElement("button",{className:"next-question",onClick:function(){c(!1)}},"Next Question")))};var y=function(){var e=b(),t=e.isLoading,a=e.isSetup;return t?r.a.createElement("main",{className:"section"},r.a.createElement(h,null)):r.a.createElement("main",{className:"section"},a?r.a.createElement(E,null):r.a.createElement(v,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null,r.a.createElement(y,null))),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.53d9ed11.chunk.js.map