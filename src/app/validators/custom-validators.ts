import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
  static dniValidator(control: AbstractControl): ValidationErrors | null {
    const dni = control.value;
    if (!dni || dni.length !== 8) {
      return { dniInvalido: true };
    }
    return null;
  }

  static edadValidator(control: AbstractControl): ValidationErrors | null {
    const edad = control.value;
    if (isNaN(edad) || edad < 18) {
      return { edadInvalida: true };
    }
    return null;
  }

  static capacidadValidator(control: AbstractControl): ValidationErrors | null {
    const capacidad = control.value;
    if (isNaN(capacidad) || capacidad <= 0) {
      return { capacidadInvalida: true };
    }
    return null;
  }

  static pesoValidator(control: AbstractControl): ValidationErrors | null {
    const peso = control.value;
    if (isNaN(peso) || peso <= 0 || peso < 250 || peso > 1000) {
      return { invalidCapacity: true };
    }
    return null;
  }
  
}
