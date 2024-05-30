import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Helado, Tipo } from '../../models/helado';
import { addDoc, collection } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { CustomValidators } from '../../validators/custom-validators';

@Component({
  selector: 'app-alta-helado',
  templateUrl: './alta-helado.component.html',
  styleUrls: ['./alta-helado.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class AltaHeladoComponent {
  altaHeladoForm: FormGroup;
  submitted = false;
  @Output() heladoCreado = new EventEmitter<Helado>();

  constructor(private formBuilder: FormBuilder, private firestore : Firestore) {
    this.altaHeladoForm = this.formBuilder.group({
      sabor: ['', Validators.required],
      tipo: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      peso: ['', [Validators.required, CustomValidators.pesoValidator]],
    });
  }

  get sabor(): string {
    return this.altaHeladoForm.get('sabor')!.value;
  }

  get tipo(): string {
    return this.altaHeladoForm.get('tipo')!.value;
  }

  get precio(): number {
    return this.altaHeladoForm.get('precio')!.value;
  }

  get peso(): number {
    return this.altaHeladoForm.get('peso')!.value;
  }

  onSubmit() {
    this.submitted = true;
    if (this.altaHeladoForm.invalid) {
      return;
    } else {
      let col = collection(this.firestore, 'helados');
      addDoc(col, { "sabor": this.sabor, "tipo": this.tipo, "precio": this.precio, "peso": this.peso });

      alert("Helado agregado ok!");
    }

    const nuevoHelado: Helado = {
      sabor: this.sabor,
      tipo: this.tipo as Tipo,
      precio: this.precio,
      peso: this.peso
    };

    this.submitted = false;
  }
}

