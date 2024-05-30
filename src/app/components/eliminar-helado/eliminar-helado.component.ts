import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Helado } from '../../models/helado';
import { collection, deleteDoc, doc, query, where } from 'firebase/firestore';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-eliminar-helado',
  standalone: true,
  imports: [],
  templateUrl: './eliminar-helado.component.html',
  styleUrl: './eliminar-helado.component.css',
})
export class EliminarHeladoComponent {
  @Input() helado: Helado | undefined;
  @Output() heladoEliminado = new EventEmitter<Helado>();

  private sub!: Subscription;

  constructor(private firestore: Firestore) {}

  ngOnInit() {
    if (this.helado) {
      this.eliminarHelado();
      //this.heladoEliminado.emit(this.helado);
    }
  }

  async eliminarHelado() {
    if (this.helado) {
      const heladosCollection = collection(this.firestore, 'helados');

      const queryEliminar = query(
        heladosCollection,
        where('sabor', '==', this.helado.sabor),
        where('tipo', '==', this.helado.tipo)
      );

      const observable = collectionData(queryEliminar, { idField: 'id' });

      this.sub = observable.subscribe(async (respuesta: any) => {
        if (respuesta.length > 0) {
          try {
            await deleteDoc(doc(this.firestore, `helados/${respuesta[0].id}`));
            alert('Helado eliminado correctamente');
          } catch (error) {
            alert('Error al eliminar el helado');
          }
        }
      });
    }
  }
}
