import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SidebarComponent } from './@theme/components';
import {environment} from '../environments/environment';
import * as environmentProd from '../environments/environment.prod';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export function HttpLoaderFactory(http: HttpClient) {
  if (environment.production) {
    // for production
    return new TranslateHttpLoader(http, "/admin/assets/i18n/");
  } else {
    // for development
    return new TranslateHttpLoader(http);
  }
}


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = environmentProd.environment.firebaseConfig;


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ThemeModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    AngularFirestore,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
