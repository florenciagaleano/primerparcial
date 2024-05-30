import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { addDoc, collection, collectionData, Firestore, getDocs } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  nuevoUsuario: Usuario = new Usuario("", "",false);
  loginExitoso: number = -1;
  private sub!:Subscription;
  usuarios : Usuario[] = [];

  constructor(private router: Router, private firestore : Firestore, private authService : AuthService) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }

  async login(){
    await this.getUsuarios();
    this.usuarios.forEach(u => {
      if(this.nuevoUsuario.usuario == u.usuario &&
        this.nuevoUsuario.clave == u.clave &&
        this.nuevoUsuario.esAdmin == u.esAdmin
      ){
        this.loginExitoso = 1;
        this.authService.guardarUsuario(this.nuevoUsuario.usuario,this.nuevoUsuario.esAdmin.toString());
        console.log("pasa");
        this.goTo('/bienvenida');
        return;
      }
    });

    this.loginExitoso = 0;
  }

  async getUsuarios() {
    let colUsuarios = collection(this.firestore, 'usuarios');
    const snapshot = await getDocs(colUsuarios);
    this.usuarios = snapshot.docs.map(doc => doc.data() as Usuario);
    
  }


  entrarComoInvitadoAdmin(){
    this.nuevoUsuario.usuario = 'invitadoAdmin';
    this.nuevoUsuario.clave = '123456';
    this.nuevoUsuario.esAdmin = true;
  }
  
  entrarComoInvitadoEmpleado(){
    this.nuevoUsuario.usuario = 'invitadoEmpleado';
    this.nuevoUsuario.clave = '123456';
    this.nuevoUsuario.esAdmin = false;
  }

  closeError(){
    this.loginExitoso = -1;
  }

}

