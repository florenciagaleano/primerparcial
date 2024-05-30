import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor() { }

  getUsuario() {
    return fetch('https://api.github.com/users/florenciagaleano')
      .then(response => response.json());
  }
}
