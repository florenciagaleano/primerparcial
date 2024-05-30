import{b as L}from"./chunk-CTCIOC2J.js";import{a as _}from"./chunk-2EV3UQIX.js";import{$a as M,Aa as E,Bb as J,Ca as T,Da as l,Ea as N,Hb as H,Ib as K,Ja as h,Ka as g,S as b,Z as F,_ as S,_a as w,ab as O,ca as y,cb as C,gb as V,hb as A,ia as P,ib as u,jb as q,kb as D,la as d,ma as f,nb as R,ob as k,qb as G,rb as j,ta as m,ua as s,va as n,vb as z,wa as e,wb as U,xa as p,xb as $,ya as I,yb as B,za as v}from"./chunk-CRKVPKSU.js";function ee(i,r){if(i&1){let c=I();n(0,"div",2)(1,"input",3),v("change",function(){let t=F(c).$implicit,o=E();return S(o.seleccionarPais(t.nombre))}),e(),p(2,"img",4),n(3,"p"),l(4),e()()}if(i&2){let c=r.$implicit;d(),s("value",c.nombre),d(),T("alt","",c.nombre," flag"),s("src",c.imagen,P),d(2),N(c.nombre)}}var Q=(()=>{let r=class r{constructor(a){this.paisesService=a,this.paises=["nigeria","germany","france"],this.paisSeleccionado=new y,this.paisesInfo=[]}ngOnInit(){this.paises.forEach(a=>{this.paisesService.obtenerPais(a).subscribe(t=>{this.paisesInfo.push(t)})})}seleccionarPais(a){this.paisSeleccionado.emit(a)}};r.\u0275fac=function(t){return new(t||r)(f(L))},r.\u0275cmp=b({type:r,selectors:[["app-tabla-paises"]],outputs:{paisSeleccionado:"paisSeleccionado"},standalone:!0,features:[h],decls:2,vars:1,consts:[[1,"grid-container"],["class","grid-item",4,"ngFor","ngForOf"],[1,"grid-item"],["type","radio","name","nacionalidad",3,"change","value"],[1,"img-pais",3,"src","alt"]],template:function(t,o){t&1&&(n(0,"div",0),m(1,ee,5,5,"div",1),e()),t&2&&(d(),s("ngForOf",o.paisesInfo))},dependencies:[$,C,M],styles:[".img-pais[_ngcontent-%COMP%]{width:100px;height:auto}"]});let i=r;return i})();var x=i=>({"is-invalid":i});function ie(i,r){i&1&&(n(0,"div"),l(1," Dni invalido. "),e())}function te(i,r){i&1&&(n(0,"div"),l(1," Nombre invalido. "),e())}function re(i,r){i&1&&(n(0,"div"),l(1," Edad invalida. "),e())}function ae(i,r){i&1&&(n(0,"div"),l(1," Capacidad invalida. "),e())}var Ce=(()=>{let r=class r{constructor(a,t){this.fb=a,this.firestore=t,this.auxPais=""}ngOnInit(){this.repartidorForm=this.fb.group({dni:["",[u.required,_.dniValidator]],nombre:["",u.required],edad:["",[u.required,_.edadValidator]],capacidadTransporte:["",[u.required,_.capacidadValidator]],unidadPropia:[!1,u.required]})}get dni(){return this.repartidorForm.get("dni").value}get nombre(){return this.repartidorForm.get("nombre").value}get edad(){return this.repartidorForm.get("edad").value}get capacidadTransporte(){return this.repartidorForm.get("capacidadTransporte").value}get unidadPropia(){return this.repartidorForm.get("unidadPropia").value}onSubmit(){if(this.repartidorForm.valid){let a=J(this.firestore,"repartidores");H(a,{dni:this.dni,nombre:this.nombre,edad:this.edad,capacidadTransporte:this.capacidadTransporte,paisOrigen:this.auxPais,unidadPropia:this.unidadPropia}),alert("Repartidor dado de alta")}else this.repartidorForm.markAllAsTouched()}isFieldInvalid(a){let t=this.repartidorForm.get(a);return t?t.invalid&&(t.dirty||t.touched):!1}onPaisSeleccionado(a){console.log("Pais seleccionado:",a),this.auxPais=a}};r.\u0275fac=function(t){return new(t||r)(f(U),f(K))},r.\u0275cmp=b({type:r,selectors:[["app-alta-repartidor"]],standalone:!0,features:[h],decls:32,vars:17,consts:[["novalidate","",3,"ngSubmit","formGroup"],[1,"row"],[1,"col-sm-6"],["for","dni"],["type","text","id","dni","formControlName","dni","required","",3,"ngClass"],[4,"ngIf"],["for","nombre"],["type","text","id","nombre","formControlName","nombre","required","",3,"ngClass"],["for","edad"],["type","number","id","edad","formControlName","edad","required","",3,"ngClass"],["for","capacidadTransporte"],["type","number","id","capacidadTransporte","formControlName","capacidadTransporte","required","",3,"ngClass"],[1,"col-md-2"],["for","unidadPropia"],["type","checkbox","id","unidadPropia","formControlName","unidadPropia"],[1,"form-group"],[3,"paisSeleccionado"],["type","submit"]],template:function(t,o){t&1&&(n(0,"form",0),v("ngSubmit",function(){return o.onSubmit()}),n(1,"div",1)(2,"div",2)(3,"label",3),l(4,"DNI"),e(),p(5,"input",4),m(6,ie,2,0,"div",5),e(),n(7,"div",2)(8,"label",6),l(9,"Nombre"),e(),p(10,"input",7),m(11,te,2,0,"div",5),e(),n(12,"div",2)(13,"label",8),l(14,"Edad"),e(),p(15,"input",9),m(16,re,2,0,"div",5),e(),n(17,"div",2)(18,"label",10),l(19,"Capacidad de Transporte (potes de helado)"),e(),p(20,"input",11),m(21,ae,2,0,"div",5),e(),n(22,"div",12)(23,"label",13),l(24,"Unidad Propia"),e(),p(25,"input",14),e()(),n(26,"div"),l(27,"Pais de origen: "),e(),n(28,"div",15)(29,"app-tabla-paises",16),v("paisSeleccionado",function(X){return o.onPaisSeleccionado(X)}),e()(),n(30,"button",17),l(31," Dar de Alta "),e()()),t&2&&(s("formGroup",o.repartidorForm),d(5),s("ngClass",g(9,x,o.isFieldInvalid("dni"))),d(),s("ngIf",o.isFieldInvalid("dni")),d(4),s("ngClass",g(11,x,o.isFieldInvalid("nombre"))),d(),s("ngIf",o.isFieldInvalid("nombre")),d(4),s("ngClass",g(13,x,o.isFieldInvalid("edad"))),d(),s("ngIf",o.isFieldInvalid("edad")),d(4),s("ngClass",g(15,x,o.isFieldInvalid("capacidadTransporte"))),d(),s("ngIf",o.isFieldInvalid("capacidadTransporte")))},dependencies:[C,w,O,B,R,A,k,V,q,D,z,G,j,Q],styles:['*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}input[_ngcontent-%COMP%]{color:#fff;padding:0;border-width:4px;border-color:#909a9d;background-color:#888087d7;border-style:hidden;border-radius:6px;box-shadow:0 0 11px #bebbbba3;text-shadow:0px 0px 5px rgba(255,255,255,.75);margin:10px}button[_ngcontent-%COMP%]{cursor:pointer;display:block;font-family:"Jersey 10 Charted",sans-serif;background:none;background-color:#00f;color:white(15,33,236);font-size:45px}form[_ngcontent-%COMP%]{width:40%;min-width:320px;max-width:475px;background-color:#d5e6e980;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);box-shadow:2px 5px #00000040}button[_ngcontent-%COMP%]:hover{cursor:pointer;text-decoration:underline}']});let i=r;return i})();export{Ce as AltaRepartidorComponent};