(this.webpackJsonpcitas=this.webpackJsonpcitas||[]).push([[0],{10:function(e,a,t){e.exports=t(18)},15:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),o=t.n(r),c=(t(15),t(9)),i=t(2),m=t(4),s=t(5),u=t(8),h=t.n(u),p=function(e){var a=e.crearCita,t=Object(n.useState)({mascota:"",propietario:"",fecha:"",hora:"",sintomas:""}),r=Object(i.a)(t,2),o=r[0],c=r[1],u=Object(n.useState)(!1),p=Object(i.a)(u,2),d=p[0],E=p[1],b=function(e){c(Object(s.a)(Object(s.a)({},o),{},Object(m.a)({},e.target.name,e.target.value)))},f=o.mascota,v=o.propietario,g=o.fecha,w=o.hora,N=o.sintomas;return l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Crear citas"),d?l.a.createElement("p",{className:"alerta-error"}," todos los campos son obligatorios"):null,l.a.createElement("h2",{id:"mioB"},"Brayan Enrique Ramirez Partida"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==f.trim()&&""!==v.trim()&&""!==g.trim()&&""!==w.trim()&&""!==N.trim()?(E(!1),o.id=h()(),console.log(o),a(o),c({mascota:"",propietario:"",fecha:"",hora:"",sintomas:""})):E(!0)}},l.a.createElement("label",null,"Nombre Mascota"),l.a.createElement("input",{type:"text",className:"u-full-width",placeholder:"Nombre Mascota",name:"mascota",onChange:b,value:f}),l.a.createElement("label",null,"Propietario Mascota"),l.a.createElement("input",{type:"text",className:"u-full-width",placeholder:"Propietario Mascota",name:"propietario",onChange:b,value:v}),l.a.createElement("label",null,"Fecha"),l.a.createElement("input",{type:"date",className:"u-full-width",name:"fecha",onChange:b,value:g}),l.a.createElement("label",null,"Hora"),l.a.createElement("input",{type:"time",className:"u-full-width",name:"hora",onChange:b,value:w}),l.a.createElement("label",null,"Sintomas"),l.a.createElement("textarea",{type:"textarea",className:"u-full-width",placeholder:"Sintomas",name:"sintomas",onChange:b,value:N}),l.a.createElement("button",{type:"submit",className:"u-full-width button-primary"},"Agregar cita")))};var d=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1];return l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"administrados de pacientes"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"one-half column"},l.a.createElement(p,{crearCita:function(e){r([].concat(Object(c.a)(t),[e]))}})),l.a.createElement("div",{className:"one-half column"},"2"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.bff3a401.chunk.js.map