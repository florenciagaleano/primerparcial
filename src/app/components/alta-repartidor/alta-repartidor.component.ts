import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomValidators } from '../../validators/custom-validators';
import { addDoc, collection } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { TablaPaisesComponent } from '../tabla-paises/tabla-paises.component';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,TablaPaisesComponent]
})
export class AltaRepartidorComponent implements OnInit {
  repartidorForm!: FormGroup;
  auxPais : string = "";

  constructor(private fb: FormBuilder, private firestore : Firestore) { }

  ngOnInit(): void {
    this.repartidorForm = this.fb.group({
      dni: ['', [Validators.required, CustomValidators.dniValidator]],
      nombre: ['', Validators.required],
      edad: ['', [Validators.required, CustomValidators.edadValidator]],
      capacidadTransporte: ['', [Validators.required, CustomValidators.capacidadValidator]],
      unidadPropia: [false, Validators.required]
    });
  }

  get dni(): string {
    return this.repartidorForm.get('dni')!.value;
  }

  get nombre(): string {
    return this.repartidorForm.get('nombre')!.value;
  }

  get edad(): number {
    return this.repartidorForm.get('edad')!.value;
  }

  get capacidadTransporte(): number {
    return this.repartidorForm.get('capacidadTransporte')!.value;
  }

  get unidadPropia(): boolean {
    return this.repartidorForm.get('unidadPropia')!.value;
  }

  onSubmit(): void {
    if (this.repartidorForm.valid) {
      let col = collection(this.firestore, 'repartidores');
      addDoc(col, { "dni": this.dni, "nombre": this.nombre, "edad": this.edad, "capacidadTransporte": this.capacidadTransporte, "paisOrigen": this.auxPais, "unidadPropia": this.unidadPropia });
      alert("Repartidor dado de alta");
    } else {
      this.repartidorForm.markAllAsTouched();
    }
  }

  isFieldInvalid(field: string): boolean {
    const control = this.repartidorForm.get(field);
  
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  onPaisSeleccionado(nacionalidad: string): void {
    console.log("Pais seleccionado:", nacionalidad);
    this.auxPais = nacionalidad;
  }
  
}
