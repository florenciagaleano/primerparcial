import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  guardarUsuario(usuario : string, esAdmin : string){
    localStorage.setItem("usuarioActual",usuario);
    localStorage.setItem("esAdmin",esAdmin);
  }

  getCurrentUser() {
    return localStorage.getItem("usuarioActual");
  }

  getIsAdmin(){
    return localStorage.getItem("esAdmin");
  }


}
