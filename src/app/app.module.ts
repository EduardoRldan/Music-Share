import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';

import { AuthService } from './services/auth.service'; // Importa tu servicio de autenticación
import { OAuthService } from 'angular-oauth2-oidc'; // Importa el servicio OAuth

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService, // Añade tus servicios aquí
    OAuthService // Añade tus servicios aquí
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
