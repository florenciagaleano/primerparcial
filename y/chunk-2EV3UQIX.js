var i=class{static dniValidator(t){let a=t.value;return!a||a.length!==8?{dniInvalido:!0}:null}static edadValidator(t){let a=t.value;return isNaN(a)||a<18?{edadInvalida:!0}:null}static capacidadValidator(t){let a=t.value;return isNaN(a)||a<=0?{capacidadInvalida:!0}:null}static pesoValidator(t){let a=t.value;return isNaN(a)||a<=0||a<250||a>1e3?{invalidCapacity:!0}:null}};export{i as a};
