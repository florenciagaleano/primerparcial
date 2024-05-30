import{Ba as N,Ca as p,Cb as L,Da as x,Ha as C,Ia as h,R as b,Wa as V,Xa as A,Y as _,Ya as q,Z as y,Za as F,ba as I,cb as D,db as M,eb as u,fb as R,gb as w,ha as T,jb as O,ka as l,kb as G,la as v,mb as j,nb as k,ob as U,pb as $,qb as z,rb as B,sa as c,ta as s,ua as n,ub as H,va as t,vb as J,wa as m,wb as K,xa as E,ya as g,za as P}from"./chunk-Q6U5B5OO.js";var f=class{static dniValidator(e){let o=e.value;return!o||o.length!==8?{dniInvalido:!0}:null}static edadValidator(e){let o=e.value;return isNaN(o)||o<18?{edadInvalida:!0}:null}static capacidadValidator(e){let o=e.value;return isNaN(o)||o<=0?{capacidadInvalida:!0}:null}};function ee(i,e){if(i&1){let o=E();n(0,"div",2)(1,"input",3),g("change",function(){let a=_(o).$implicit,d=P();return y(d.seleccionarPais(a.nombre))}),t(),m(2,"img",4),n(3,"p"),p(4),t()()}if(i&2){let o=e.$implicit;l(),s("value",o.nombre),l(),N("alt","",o.nombre," flag"),s("src",o.imagen,T),l(2),x(o.nombre)}}var Q=(()=>{let e=class e{constructor(r){this.paisesService=r,this.paises=["nigeria","germany","france"],this.paisSeleccionado=new I,this.paisesInfo=[]}ngOnInit(){this.paises.forEach(r=>{this.paisesService.obtenerPais(r).subscribe(a=>{this.paisesInfo.push(a)})})}seleccionarPais(r){this.paisSeleccionado.emit(r)}};e.\u0275fac=function(a){return new(a||e)(v(L))},e.\u0275cmp=b({type:e,selectors:[["app-tabla-paises"]],outputs:{paisSeleccionado:"paisSeleccionado"},standalone:!0,features:[C],decls:2,vars:1,consts:[[1,"grid-container"],["class","grid-item",4,"ngFor","ngForOf"],[1,"grid-item"],["type","radio","name","nacionalidad",3,"change","value"],[1,"img-pais",3,"src","alt"]],template:function(a,d){a&1&&(n(0,"div",0),c(1,ee,5,5,"div",1),t()),a&2&&(l(),s("ngForOf",d.paisesInfo))},dependencies:[z,F,A],styles:[".img-pais[_ngcontent-%COMP%]{width:100px;height:auto}"]});let i=e;return i})();var S=i=>({"is-invalid":i});function ie(i,e){i&1&&(n(0,"div"),p(1," Dni invalido. "),t())}function te(i,e){i&1&&(n(0,"div"),p(1," Nombre invalido. "),t())}function ae(i,e){i&1&&(n(0,"div"),p(1," Edad invalida. "),t())}function re(i,e){i&1&&(n(0,"div"),p(1," Capacidad invalida. "),t())}var Fe=(()=>{let e=class e{constructor(r,a){this.fb=r,this.firestore=a,this.auxPais=""}ngOnInit(){this.repartidorForm=this.fb.group({dni:["",[u.required,f.dniValidator]],nombre:["",u.required],edad:["",[u.required,f.edadValidator]],capacidadTransporte:["",[u.required,f.capacidadValidator]],unidadPropia:[!1,u.required]})}get dni(){return this.repartidorForm.get("dni").value}get nombre(){return this.repartidorForm.get("nombre").value}get edad(){return this.repartidorForm.get("edad").value}get capacidadTransporte(){return this.repartidorForm.get("capacidadTransporte").value}get unidadPropia(){return this.repartidorForm.get("unidadPropia").value}onSubmit(){if(this.repartidorForm.valid){let r=H(this.firestore,"repartidores");J(r,{dni:this.dni,nombre:this.nombre,edad:this.edad,capacidadTransporte:this.capacidadTransporte,paisOrigen:this.auxPais,unidadPropia:this.unidadPropia}),alert("Repartidor dado de alta")}else this.repartidorForm.markAllAsTouched()}isFieldInvalid(r){let a=this.repartidorForm.get(r);return a?a.invalid&&(a.dirty||a.touched):!1}onPaisSeleccionado(r){console.log("Pais seleccionado:",r),this.auxPais=r}};e.\u0275fac=function(a){return new(a||e)(v($),v(K))},e.\u0275cmp=b({type:e,selectors:[["app-alta-repartidor"]],standalone:!0,features:[C],decls:30,vars:17,consts:[["novalidate","",3,"ngSubmit","formGroup"],[1,"row"],[1,"col-sm-6"],["for","dni"],["type","text","id","dni","formControlName","dni","required","",3,"ngClass"],[4,"ngIf"],["for","nombre"],["type","text","id","nombre","formControlName","nombre","required","",3,"ngClass"],["for","edad"],["type","number","id","edad","formControlName","edad","required","",3,"ngClass"],["for","capacidadTransporte"],["type","number","id","capacidadTransporte","formControlName","capacidadTransporte","required","",3,"ngClass"],[1,"col-md-2"],["for","unidadPropia"],["type","checkbox","id","unidadPropia","formControlName","unidadPropia"],[1,"form-group"],[3,"paisSeleccionado"],["type","submit"]],template:function(a,d){a&1&&(n(0,"form",0),g("ngSubmit",function(){return d.onSubmit()}),n(1,"div",1)(2,"div",2)(3,"label",3),p(4,"DNI"),t(),m(5,"input",4),c(6,ie,2,0,"div",5),t(),n(7,"div",2)(8,"label",6),p(9,"Nombre"),t(),m(10,"input",7),c(11,te,2,0,"div",5),t(),n(12,"div",2)(13,"label",8),p(14,"Edad"),t(),m(15,"input",9),c(16,ae,2,0,"div",5),t(),n(17,"div",2)(18,"label",10),p(19,"Capacidad de Transporte (potes de helado)"),t(),m(20,"input",11),c(21,re,2,0,"div",5),t(),n(22,"div",12)(23,"label",13),p(24,"Unidad Propia"),t(),m(25,"input",14),t()(),n(26,"div",15)(27,"app-tabla-paises",16),g("paisSeleccionado",function(X){return d.onPaisSeleccionado(X)}),t()(),n(28,"button",17),p(29," Dar de Alta "),t()()),a&2&&(s("formGroup",d.repartidorForm),l(5),s("ngClass",h(9,S,d.isFieldInvalid("dni"))),l(),s("ngIf",d.isFieldInvalid("dni")),l(4),s("ngClass",h(11,S,d.isFieldInvalid("nombre"))),l(),s("ngIf",d.isFieldInvalid("nombre")),l(4),s("ngClass",h(13,S,d.isFieldInvalid("edad"))),l(),s("ngIf",d.isFieldInvalid("edad")),l(4),s("ngClass",h(15,S,d.isFieldInvalid("capacidadTransporte"))),l(),s("ngIf",d.isFieldInvalid("capacidadTransporte")))},dependencies:[F,V,q,B,O,M,G,D,R,w,U,j,k,Q]});let i=e;return i})();export{Fe as AltaRepartidorComponent};
