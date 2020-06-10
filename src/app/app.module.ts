import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './UI/footer/footer.component';
import { HeaderComponent } from './UI/header/header.component';

import { ContainerComponent } from './container/container.component';
import { LegalComponent } from './legalnotice/legal.component';
import { HomeComponent } from './home/home.component';
import { MNoteComponent } from './Menus/m-note/m-note.component';
import { MFrchicComponent } from './Menus/m-frchic/m-frchic.component';
import { MDelicesComponent } from './Menus/m-delices/m-delices.component';
import { MPalgoutsComponent } from './Menus/m-palgouts/m-palgouts.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContainerComponent,
    LegalComponent,
    HomeComponent,
    MNoteComponent,
    MFrchicComponent,
    MDelicesComponent,
    MPalgoutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
