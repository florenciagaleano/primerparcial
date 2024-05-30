import { Component, Input } from '@angular/core';
import { Repartidor } from '../../models/repartidor';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaisDetalleComponent } from '../pais-detalle/pais-detalle.component';

@Component({
  selector: 'app-repartidor-detalle',
  standalone: true,
  imports: [CommonModule,FormsModule,PaisDetalleComponent],
  templateUrl: './repartidor-detalle.component.html',
  styleUrl: './repartidor-detalle.component.css'
})
export class RepartidorDetalleComponent {
  @Input() repartidor!: Repartidor;


}
