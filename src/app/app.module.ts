import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehiclesModule } from './vehicles/vehicles.module';
import { VehiclesStoreModule } from './store/store.module';
import 'hammerjs';
import { TranslateService  } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,
    
  // Modules
    VehiclesModule,

    // Core, Shared
    CoreModule,
    SharedModule,

    // App
    AppRoutingModule,

    //store
    VehiclesStoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('sv');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('sv');
  }
 }
