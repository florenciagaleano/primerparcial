import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pais } from '../models/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private apiUrl = 'https://restcountries.com/v3.1/name/';

  constructor(private http: HttpClient) {}

  obtenerPais(nombre: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${nombre}`).pipe(
      map((data) => {
        let country = data[0];
        return {
          nombre: country.name.common,
          imagen: country.flags.png,
        } as Pais;
      })
    );
  }
}
