(this["webpackJsonpunichat-template"]=this["webpackJsonpunichat-template"]||[]).push([[0],{157:function(e,t,a){e.exports=a(354)},162:function(e,t,a){},354:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(35),i=a.n(r),u=(a(162),a(68)),o=a(8),l=a(11),s=a(152),p=a.n(s),m=(a(163),p.a.initializeApp({apiKey:"AIzaSyDebFjBq0rnvChsL40_Ra99BRyQSrW5LzE",authDomain:"unichat-e8a7d.firebaseapp.com",projectId:"unichat-e8a7d",storageBucket:"unichat-e8a7d.appspot.com",messagingSenderId:"1095192837955",appId:"1:1095192837955:web:7c6b34b79b85c2bde579f6"}).auth()),h=c.a.createContext(),d=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(l.a)(a,2),i=r[0],u=r[1],s=Object(n.useState)(null),p=Object(l.a)(s,2),d=p[0],b=p[1],f=Object(o.f)();Object(n.useEffect)((function(){m.onAuthStateChanged((function(e){u(!1),b(e),e&&f.push("/chats")}))}),[d,f]);var g={user:d};return c.a.createElement(h.Provider,{value:g},!i&&t)},b=a(19),f=a.n(b),g=a(32),v=a(5),E=a.n(v),j=a(155),O=function(){var e=Object(o.f)(),t=Object(n.useContext)(h).user,a=Object(n.useState)(!1),r=Object(l.a)(a,2),i=r[0],u=r[1],s=function(){var t=Object(g.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.signOut();case 2:e.push("/");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var e=Object(g.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.blob();case 5:return n=e.sent,e.abrupt("return",new File([n],"userPhoto.jpg",{type:"image/jpeg"}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t?E.a.get("https://api.chatengine.io/users/me",{headers:{"project-id":"917972b4-910d-41a1-a73b-274d09e3007b","user-name":t.email,"user-secret":t.uid}}).then((function(){u(!1)})).catch((function(){var e=new FormData;e.append("email",t.email),e.append("username",t.email),e.append("secret",t.uid),p(t.photoURL).then((function(t){e.append("avatar",t,t.name),E.a.post("https://api.chatengine.io/users/",e,{headers:{"private-key":"018f7752-6dd6-4f97-8b50-3a7fcbfb1059"}})}))})):e.push("/")}),[t,e]),!t||i?"Loading...":c.a.createElement("div",{className:"chats-page"},c.a.createElement("div",{className:"nav-bar"},c.a.createElement("div",{className:"logo-tab"},"Unichat"),c.a.createElement("div",{onClick:s,className:"logout-tab"},"Logout")),c.a.createElement(j.d,{height:"calc(100vh - 66px)",projectID:"917972b4-910d-41a1-a73b-274d09e3007b",userName:t.email,userSecret:t.uid}))},w=a(356),k=a(357),S=a(97),y=a.n(S),x=function(){return c.a.createElement("div",{id:"login-page"},c.a.createElement("div",{id:"login-card"},c.a.createElement("h2",null,"Welcome to Unichat!"),c.a.createElement("div",{className:"login-button google",onClick:function(){return m.signInWithRedirect(new y.a.auth.GoogleAuthProvider)}},c.a.createElement(w.a,null)," Sign in with Google"),c.a.createElement("br",null)," ",c.a.createElement("br",null),c.a.createElement("div",{className:"login-button facebook",onClick:function(){return m.signInWithRedirect(new y.a.auth.FacebookAuthProvider)}},c.a.createElement(k.a,null)," Sign in with Facebook")))};var I=function(){return c.a.createElement("div",{style:{fontFamily:"Avenir"}},c.a.createElement(u.a,null,c.a.createElement(d,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/chats",component:O}),c.a.createElement(o.a,{path:"/",component:x})))))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root"))}},[[157,1,2]]]);
//# sourceMappingURL=main.9b7539f5.chunk.js.map