import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './UI/footer/footer.component';
import { HeaderComponent } from './UI/header/header.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { ContainerComponent } from './container/container.component';
import { LegalnoticeComponent } from './legalnotice/legalnotice.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuCardComponent,
    ContainerComponent,
    LegalnoticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
