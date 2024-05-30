import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../models/pais';

@Component({
  selector: 'app-pais-detalle',
  standalone: true,
  imports: [],
  templateUrl: './pais-detalle.component.html',
  styleUrl: './pais-detalle.component.css'
})
export class PaisDetalleComponent {
  @Input() nombrePais: string = "";
  private sub!: Subscription;
  pais : Pais = new Pais("","");
  constructor(private paisesService : PaisesService){}

  ngOnInit(): void {
    //console.log(this.nombrePais);
    this.paisesService.obtenerPais(this.nombrePais).subscribe((data) => {
      this.pais = data;
    });
  }

}
