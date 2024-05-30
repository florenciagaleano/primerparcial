import { Component, EventEmitter, Output } from '@angular/core';
import { Pais } from '../../models/pais';
import { PaisesService } from '../../services/paises.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.css'
})
export class TablaPaisesComponent {
  paises = [
    'nigeria',
    'germany',
    'france',
  ];
  @Output() paisSeleccionado = new EventEmitter<string>();
    paisesInfo: Pais[] = [];
  constructor(private paisesService: PaisesService) {}

  ngOnInit(): void {
    this.paises.forEach((pais) => {
      this.paisesService.obtenerPais(pais).subscribe((data) => {
        this.paisesInfo.push(data);
      });
    });
  }

  seleccionarPais(nacionalidadSeleccionada: string): void {
    this.paisSeleccionado.emit(nacionalidadSeleccionada);
  }

}
