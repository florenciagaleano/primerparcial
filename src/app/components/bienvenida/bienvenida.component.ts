import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export class BienvenidaComponent {
  alumno : any;
  constructor(private githubService : GithubService){}

  ngOnInit(): void {
    this.getAlumno();
  }

  async getAlumno(){
    this.alumno = await this.githubService.getUsuario();
  }

}
