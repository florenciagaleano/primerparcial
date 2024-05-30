import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'primerparcial-93d98',
        appId: '1:450450027866:web:a0bd8035386aaa7d35ef63',
        storageBucket: 'primerparcial-93d98.appspot.com',
        apiKey: 'AIzaSyC-BCAZSR40q_ZfSkvhDVSAqTsI2-Oumwc',
        authDomain: 'primerparcial-93d98.firebaseapp.com',
        messagingSenderId: '450450027866',
      })
    ),
    provideFirestore(() => getFirestore()),provideHttpClient(),

  ],

};
