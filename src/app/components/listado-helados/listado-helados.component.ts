import { Component, EventEmitter, Output } from '@angular/core';
import { AltaHeladoComponent } from '../alta-helado/alta-helado.component';
import { Helado, Tipo } from '../../models/helado';
import { Subscription } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModificarHeladoComponent } from '../modificar-helado/modificar-helado.component';
import { EliminarHeladoComponent } from '../eliminar-helado/eliminar-helado.component';

@Component({
  selector: 'app-listado-helados',
  standalone: true,
  imports: [AltaHeladoComponent, FormsModule, CommonModule,AltaHeladoComponent,ModificarHeladoComponent,EliminarHeladoComponent],
  templateUrl: './listado-helados.component.html',
  styleUrls: ['./listado-helados.component.css'],
})
export class ListadoHeladosComponent {
  @Output() heladoSeleccionado = new EventEmitter<Helado>();
  selectedHelado: Helado | undefined = undefined;
  helados: Helado[] = [];
  sub!: Subscription;
  modo: 'alta' | 'modificar' | 'eliminar' | null = null;

  constructor(private firestore: Firestore) {}
  
  ngOnInit(): void {
    const colHelados = collection(this.firestore, 'helados');
    const observable = collectionData(colHelados);
    this.sub = observable.subscribe((respuesta: any) => {
      this.helados = respuesta;
      console.log(respuesta);
    });
  }

  seleccionarHelado(helado: Helado) {
    this.selectedHelado = helado;
  }

  mostrarAlta() {
    this.modo = 'alta';
  }

  mostrarModificar() {
    this.modo = 'modificar';
  }

  mostrarEliminar() {
    this.modo = 'eliminar';
  }

  agregarHelado(helado: Helado) {
    this.helados.push(helado);
    this.modo = null;
  }

  modificarHelado(helado: Helado) {
    const index = this.helados.findIndex(h => h.sabor === helado.sabor && h.tipo === helado.tipo);
    if (index !== -1) {
      this.helados[index] = helado;
    }
    this.modo = null;
  }

}
