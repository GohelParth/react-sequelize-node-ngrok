(this["webpackJsonpreact-node-app"]=this["webpackJsonpreact-node-app"]||[]).push([[0],{68:function(e,t,s){},69:function(e,t,s){"use strict";s.r(t);var c,a=s(1),l=s(31),n=s.n(l),i=s(5),r=s(3),o=s(12),d=s.n(o),x=s(15),m=s(9),b=s(32),j=s(16),u=s.n(j),h=s(10),p=s(0),f=function(e){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"mb-5 border-b",children:Object(p.jsx)("input",{type:e.type,autoComplete:"text",onChange:function(t){return e.setFunction(t.target.value)},value:e.value,required:!0,className:"appearance-none bg-transparent relative block w-full px-3 py-2  placeholder-yellow-200 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:e.PH})})})},g=s(33),O=s.n(g),w=s(19),v=Object(w.css)(c||(c=Object(b.a)(["\n            display: flex;\n            margin-left:185px;\n            margin-top:250px;\n            "]))),N=function(){var e=Object(a.useState)(),t=Object(m.a)(e,2),s=t[0],c=t[1],l=Object(a.useState)(),n=Object(m.a)(l,2),r=n[0],o=n[1],b=Object(a.useState)(),j=Object(m.a)(b,2),g=j[0],w=j[1],N=Object(a.useState)(),y=Object(m.a)(N,2),k=y[0],S=y[1],A=Object(a.useState)(!1),F=Object(m.a)(A,2),H=F[0],P=F[1],B=function(){var e=Object(x.a)(d.a.mark((function e(t){var c,a,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),P(!0),e.prev=2,c={fullName:s,email:r,contact:g,password:k},console.log(c),e.next=7,u.a.post("".concat("https://a-react-backend-api-1.herokuapp.com/","base/api/insert"),c);case 7:a=e.sent,l=a.data,console.log("data : ",l.status),200===l.status&&(P(!1),h.b.success(l.message)),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),400===e.t0.response.data.status&&(P(!1),h.b.error(e.t0.response.data.message)),console.log(e.t0.response.data.message);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 bg-black bg-cover",children:[Object(p.jsx)("div",{className:"",children:Object(p.jsx)("div",{className:"min-h-screen flex items-center justify-center py-12 px-4 mt-5 sm:px-6 lg:px-8",children:Object(p.jsxs)("div",{className:" max-w-md w-full space-y-7 -mt-24",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{className:"mx-auto h-12 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",alt:"Workflow"}),Object(p.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-white",children:"Signup for new account"})]}),Object(p.jsxs)("form",{onSubmit:B,className:"mt-8 space-y-6",method:"POST",children:[Object(p.jsxs)("div",{className:"rounded-md shadow-sm",children:[Object(p.jsx)(f,{type:"text",setFunction:c,value:s,PH:"Username"}),Object(p.jsx)(f,{type:"email",setFunction:o,value:r,PH:"email"}),Object(p.jsx)(f,{type:"integer",setFunction:w,value:g,PH:"contact"}),Object(p.jsx)(f,{type:"password",setFunction:S,value:k,PH:"password"})]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Signup"})}),Object(p.jsxs)("p",{className:"text-white mt-5 font-bold",children:["Already have an account ? ",Object(p.jsx)(i.b,{className:"text-blue-500",to:"/login",children:"Login"})]}),Object(p.jsxs)("p",{className:"text-white font-bold",children:["Back to home ? ",Object(p.jsx)(i.b,{className:"text-blue-500",to:"/",children:"Click here"})]})]}),H?Object(p.jsx)(O.a,{size:25,color:"#325aee",loading:H,css:v}):""]})})}),Object(p.jsx)("div",{className:"col-span-2 bg-bckfood bg-cover",children:Object(p.jsxs)("div",{className:"animate-bounce font-serif text-4xl mt-96 font-bold text-center ",children:[Object(p.jsx)("p",{className:"text-red-500",children:"Hey! Register"}),Object(p.jsx)("p",{className:"mt-3 text-gray-800",children:"Welcome to our site!"})]})})]})})},y=function(){var e=Object(a.useState)(),t=Object(m.a)(e,2),s=t[0],c=t[1],l=Object(a.useState)(),n=Object(m.a)(l,2),r=n[0],o=n[1],b=function(){var e=Object(x.a)(d.a.mark((function e(t){var c,a,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,c={userName:s,password:r},console.log(c),e.next=6,u.a.post("https://a-react-backend-api-1.herokuapp.com/base/api/login",c);case 6:a=e.sent,200===(l=a.data).status&&h.b.success(l.message),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),400===e.t0.response.data.status&&h.b.error(e.t0.response.data.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"grid grid-cols-6 gap-4 bg-black bg-cover ",children:Object(p.jsx)("div",{className:"col-start-2 col-span-4 ...",children:Object(p.jsx)("div",{className:"min-h-screen flex items-center justify-center py-12 px-4 mt-4 sm:px-6 lg:px-8",children:Object(p.jsxs)("div",{className:" max-w-md w-full space-y-7 -mt-24",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{className:"mx-auto h-12 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",alt:"Workflow"}),Object(p.jsx)("h2",{className:"mt-6 text-center text-2xl font-extrabold text-blue-50",children:"Login to your account"})]}),Object(p.jsxs)("form",{onSubmit:b,className:"mt-5 space-y-6",method:"POST",children:[Object(p.jsxs)("div",{className:"rounded-md shadow-sm",children:[Object(p.jsx)(f,{type:"text",setFunction:c,value:s,PH:"username"}),Object(p.jsx)(f,{type:"password",setFunction:o,value:r,PH:"password"})]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Login"})}),Object(p.jsx)("div",{className:"flex items-center justify-between",children:Object(p.jsxs)("div",{className:"text-sm",children:[Object(p.jsxs)("p",{to:"",className:"font-bold text-white hover:text-yellow-200",children:["Forgot your password ? ",Object(p.jsx)(i.b,{className:"text-blue-500",to:"#",children:"Click here"})]}),Object(p.jsxs)("p",{className:"text-white mt-5 text-center font-bold -ml-4",children:["Don't have an acoount ? ",Object(p.jsx)(i.b,{className:"text-blue-500",to:"/signup",children:"Signup"})]}),Object(p.jsxs)("p",{className:"text-white font-bold mt-5",children:["Back to home ? ",Object(p.jsx)(i.b,{className:"text-blue-500",to:"/",children:"Click here"})]})]})})]})]})})})})})},k=s.p+"static/media/bckbg.a9dba0bb.webp",S=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("main",{children:[Object(p.jsxs)("div",{className:"relative pt-16 pb-32 flex content-center items-center justify-center",style:{minHeight:"75vh"},children:[Object(p.jsx)("div",{className:"absolute top-0 w-full h-full bg-center bg-cover",style:{backgroundImage:"url('https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"},children:Object(p.jsx)("span",{id:"blackOverlay",className:"w-full h-full absolute opacity-75 bg-black"})}),Object(p.jsx)("div",{className:"container relative mx-auto",children:Object(p.jsx)("div",{className:"items-center flex flex-wrap",children:Object(p.jsx)("div",{className:"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center",children:Object(p.jsxs)("div",{className:"pr-12",children:[Object(p.jsx)("h1",{className:"text-white font-semibold text-4xl  ml-12",children:"Welcome to this site"}),Object(p.jsx)("p",{className:"mt-4 text-lg text-gray-300 ml-11",children:"This is a simple example of a Landing Page you can build using Tailwind Starter Kit. It features multiple CSS components based on the Tailwindcss design system."}),Object(p.jsxs)("div",{className:" text-center mt-12 animate-bounce -ml-2",children:[Object(p.jsx)(i.b,{className:" bg-yellow-400 hover:bg-yellow-200 text-gray-700 font-bold py-2 px-4 rounded-full  ml-10",to:"/signup",children:"Register"}),Object(p.jsx)(i.b,{className:" bg-green-600 hover:bg-green-400 text-gray-700 font-bold py-2 px-7 rounded-full ml-10",to:"/login",children:"Login"})]})]})})})}),Object(p.jsx)("div",{className:"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden",style:{height:"70px"},children:Object(p.jsx)("svg",{className:"absolute bottom-0 overflow-hidden",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0",children:Object(p.jsx)("polygon",{className:"text-gray-300 fill-current",points:"2560 0 2560 100 0 100"})})})]}),Object(p.jsx)("section",{className:"pb-20 bg-gray-300 -mt-24",children:Object(p.jsx)("div",{className:"container mx-auto px-4",children:Object(p.jsxs)("div",{className:"flex flex-wrap",children:[Object(p.jsx)("div",{className:"lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center",children:Object(p.jsx)("div",{className:"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg",children:Object(p.jsxs)("div",{className:"px-4 py-5 flex-auto",children:[Object(p.jsx)("div",{className:"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400",children:Object(p.jsx)("i",{className:"fas fa-award"})}),Object(p.jsx)("h6",{className:"text-xl font-semibold",children:"Online booking"}),Object(p.jsx)("p",{className:"mt-2 mb-4 text-gray-600",children:"user can do the online booking from this site."})]})})}),Object(p.jsx)("div",{className:"w-full md:w-4/12 px-4 text-center",children:Object(p.jsx)("div",{className:"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg",children:Object(p.jsxs)("div",{className:"px-4 py-5 flex-auto",children:[Object(p.jsx)("div",{className:"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400",children:Object(p.jsx)("i",{className:"fas fa-retweet"})}),Object(p.jsx)("h6",{className:"text-xl font-semibold",children:"Some festive offers"}),Object(p.jsx)("p",{className:"mt-2 mb-4 text-gray-600",children:"for some fix prices"})]})})}),Object(p.jsx)("div",{className:"pt-6 w-full md:w-4/12 px-4 text-center",children:Object(p.jsx)("div",{className:"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg",children:Object(p.jsxs)("div",{className:"px-4 py-5 flex-auto",children:[Object(p.jsx)("div",{className:"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400",children:Object(p.jsx)("i",{className:"fas fa-fingerprint"})}),Object(p.jsx)("h6",{className:"text-xl font-semibold",children:"CompanyName"}),Object(p.jsx)("p",{className:"mt-2 mb-4 text-gray-600",children:"Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!"})]})})})]})})}),Object(p.jsxs)("section",{className:"relative py-20 bg-yellow-200",children:[Object(p.jsx)("div",{className:"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20",style:{height:"80px"},children:Object(p.jsx)("svg",{className:"absolute bottom-0 overflow-hidden",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0",children:Object(p.jsx)("polygon",{className:"text-white fill-current",points:"2560 0 2560 100 0 100"})})}),Object(p.jsx)("div",{className:"container mx-auto px-4",children:Object(p.jsxs)("div",{className:"items-center flex flex-wrap",children:[Object(p.jsx)("div",{className:"w-full md:w-4/12 ml-auto mr-auto px-4",children:Object(p.jsx)("img",{alt:"...",className:"max-w-full rounded-lg shadow-lg",src:"https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"})}),Object(p.jsx)("div",{className:"w-full md:w-5/12 ml-auto mr-auto px-4 ",children:Object(p.jsxs)("div",{className:"md:pr-12",children:[Object(p.jsx)("h3",{className:"text-3xl font-semibold pt-10",children:"A growing company"}),Object(p.jsx)("p",{className:"mt-4 text-lg leading-relaxed text-gray-600",children:"The extension comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go."}),Object(p.jsxs)("ul",{className:"list-none mt-6",children:[Object(p.jsx)("li",{className:"py-2",children:Object(p.jsxs)("div",{className:"flex items-center",children:[Object(p.jsx)("div",{children:Object(p.jsx)("span",{className:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3",children:Object(p.jsx)("i",{className:"fas fa-fingerprint"})})}),Object(p.jsx)("div",{children:Object(p.jsx)("h4",{className:"text-gray-600",children:"Carefully crafted components"})})]})}),Object(p.jsx)("li",{className:"py-2",children:Object(p.jsxs)("div",{className:"flex items-center",children:[Object(p.jsx)("div",{children:Object(p.jsx)("span",{className:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3",children:Object(p.jsx)("i",{className:"fab fa-html5"})})}),Object(p.jsx)("div",{children:Object(p.jsx)("h4",{className:"text-gray-600",children:"Amazing page examples"})})]})}),Object(p.jsx)("li",{className:"py-2",children:Object(p.jsxs)("div",{className:"flex items-center",children:[Object(p.jsx)("div",{children:Object(p.jsx)("span",{className:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3",children:Object(p.jsx)("i",{className:"far fa-paper-plane"})})}),Object(p.jsx)("div",{children:Object(p.jsx)("h4",{className:"text-gray-600",children:"Dynamic components"})})]})})]})]})})]})})]}),Object(p.jsx)("section",{className:"pt-20 pb-48 bg-green-200",children:Object(p.jsxs)("div",{className:"container mx-auto px-4",children:[Object(p.jsx)("div",{className:"flex flex-wrap justify-center text-center mb-24",children:Object(p.jsxs)("div",{className:"w-full lg:w-6/12 px-4",children:[Object(p.jsx)("h2",{className:"text-4xl font-semibold",children:"employee"}),Object(p.jsx)("p",{className:"text-lg leading-relaxed m-4 text-gray-600",children:"According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum."})]})}),Object(p.jsx)("div",{className:"flex flex-wrap",children:Object(p.jsx)("div",{className:"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4",children:Object(p.jsxs)("div",{className:"px-6",children:[Object(p.jsx)("img",{alt:"...",src:k,className:"shadow-lg rounded-full max-w-full mx-auto",style:{maxWidth:"120px"}}),Object(p.jsxs)("div",{className:"pt-6 text-center",children:[Object(p.jsx)("h5",{className:"text-xl font-bold",children:"Name"}),Object(p.jsx)("p",{className:"mt-1 text-sm text-gray-500 uppercase font-semibold",children:"Web Developer"}),Object(p.jsxs)("div",{className:"mt-6",children:[Object(p.jsx)("button",{className:"bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1",type:"button",children:Object(p.jsx)("i",{className:"fab fa-twitter"})}),Object(p.jsx)("button",{className:"bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1",type:"button",children:Object(p.jsx)("i",{className:"fab fa-facebook-f"})}),Object(p.jsx)("button",{className:"bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1",type:"button",children:Object(p.jsx)("i",{className:"fab fa-dribbble"})})]})]})]})})})]})}),Object(p.jsxs)("section",{className:"pb-20 relative block bg-gray-900",children:[Object(p.jsx)("div",{className:"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20",style:{height:"80px"},children:Object(p.jsx)("svg",{className:"absolute bottom-0 overflow-hidden",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0",children:Object(p.jsx)("polygon",{className:"text-gray-900 fill-current",points:"2560 0 2560 100 0 100"})})}),Object(p.jsxs)("div",{className:"container mx-auto px-4 lg:pt-24 lg:pb-64",children:[Object(p.jsx)("div",{className:"flex flex-wrap text-center justify-center",children:Object(p.jsxs)("div",{className:"w-full lg:w-6/12 px-4",children:[Object(p.jsx)("h2",{className:"text-4xl font-semibold text-white",children:"Build something"}),Object(p.jsx)("p",{className:"text-lg leading-relaxed mt-4 mb-4 text-gray-500",children:"Put the potentially record low maximum sea ice extent tihs year down to low ice. According to the National Oceanic and Atmospheric Administration, Ted, Scambos."})]})}),Object(p.jsx)("p",{className:"text-yellow-300 text-center font-bold text-3xl",children:"Thank you"})]})]})]})})},A=(s(68),function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(h.a,{position:"top-left"}),Object(p.jsxs)(r.c,{children:[Object(p.jsx)(r.a,{exact:!0,path:"/",component:S}),Object(p.jsx)(r.a,{exact:!0,path:"/login",component:y}),Object(p.jsx)(r.a,{exact:!0,path:"/signup",component:N})]})]})});n.a.render(Object(p.jsx)(i.a,{children:Object(p.jsx)(A,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.14d9ffce.chunk.js.map