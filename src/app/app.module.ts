import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FoterComponent } from './components/foter/foter.component';
import { IniComponent } from './components/ini/ini.component';
import { PrinciComponent } from './components/princi/princi.component';
import { GastroComponent } from './components/gastro/gastro.component';
import { routing } from './app.routing';
import { PrvinComponent } from './components/prvin/prvin.component';
import { RegusuComponent } from './components/regusu/regusu.component';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { from } from 'rxjs';
import { ReservasComponent } from './components/reservas/reservas.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoterComponent,
    IniComponent,
    PrinciComponent,
    GastroComponent,
    PrvinComponent,
    RegusuComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,routing,FormsModule,HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
