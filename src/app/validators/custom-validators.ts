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
}
