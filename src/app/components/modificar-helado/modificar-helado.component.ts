import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Helado, Tipo } from '../../models/helado';
import { addDoc, collection, doc, query, updateDoc, where } from 'firebase/firestore';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { CustomValidators } from '../../validators/custom-validators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modificar-helado',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './modificar-helado.component.html',
  styleUrl: './modificar-helado.component.css'
})
export class ModificarHeladoComponent {
  @Input() helado: Helado | undefined;
  modificarHeladoForm!: FormGroup;
  submitted = false;
  private sub!: Subscription;

  constructor(private formBuilder: FormBuilder, private firestore: Firestore) {
    this.modificarHeladoForm = this.formBuilder.group({
      sabor: ['', Validators.required],
      tipo: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      peso: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit() {
    if (this.helado) {
      this.modificarHeladoForm.patchValue({
        sabor: this.helado.sabor,
        tipo: this.helado.tipo,
        precio: this.helado.precio,
        peso: this.helado.peso,
      });
    }
  }

  get sabor(): string {
    return this.modificarHeladoForm.get('sabor')!.value;
  }

  get tipo(): string {
    return this.modificarHeladoForm.get('tipo')!.value;
  }

  get precio(): number {
    return this.modificarHeladoForm.get('precio')!.value;
  }

  get peso(): number {
    return this.modificarHeladoForm.get('peso')!.value;
  }

  async onSubmit() {
    this.submitted = true;
    if (this.modificarHeladoForm.invalid) {
      return;
    }

    const heladosCollection = collection(this.firestore, 'helados');

    try {
      //const observable = collectionData(queryModificar, { idField: 'id' });
      const queryModificar = query(
        heladosCollection,
        where('sabor', '==', this.sabor),
        where('tipo', '==', this.tipo)
      );

      const observable = collectionData(queryModificar, { idField: 'id' });

      this.sub = observable.subscribe(async (respuesta: any) => {
        if (respuesta.length > 0) {
          try {
            const heladoDoc = doc(this.firestore, `helados/${respuesta[0].id}`);
            await updateDoc(heladoDoc, {
              precio: this.precio,
              peso: this.peso
            });
            alert("Helado actualizado correctamente");
          } catch (error) {
            alert("Error al actualizar el helado: " + error);
          } finally {
            this.sub.unsubscribe();
            this.submitted = false;
          }
        }
      });
    } catch (error) {
      alert("Error al buscar el helado: " + error);
    }
  }

}
