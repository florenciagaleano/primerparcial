import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  guardarUsuario(usuario : string){
    localStorage.setItem("usuarioActual",usuario);
  }

  getCurrentUser() {
    return localStorage.getItem("usuarioActual");
  }


}
