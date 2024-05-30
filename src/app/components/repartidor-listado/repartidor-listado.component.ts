import { Component, EventEmitter, Output } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Repartidor } from '../../models/repartidor';
import { Subscription } from 'rxjs';
import { RepartidorDetalleComponent } from '../repartidor-detalle/repartidor-detalle.component';

@Component({
  selector: 'app-repartidor-listado',
  standalone: true,
  imports: [CommonModule, FormsModule, RepartidorDetalleComponent],
  templateUrl: './repartidor-listado.component.html',
  styleUrls: ['./repartidor-listado.component.css']
})
export class RepartidorListadoComponent {
  repartidores: Repartidor[] = [];
  selectedRepartidorDni: string | null = null;
  private sub!: Subscription;
  @Output() repartidorSeleccionado = new EventEmitter<Repartidor>();

  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    const colRepartidores = collection(this.firestore, 'repartidores');
    const observable = collectionData(colRepartidores);
    this.sub = observable.subscribe((respuesta: any) => {
      this.repartidores = respuesta;
      console.log(respuesta);
    });
  }

  seleccionarRepartidor(repartidor: Repartidor) {
    this.selectedRepartidorDni = repartidor.dni;
    this.repartidorSeleccionado.emit(repartidor);
  }
}
