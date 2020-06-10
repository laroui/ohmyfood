import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {LegalComponent} from './legalnotice/legal.component';
import { Routes, RouterModule } from '@angular/router';
import {MDelicesComponent} from './Menus/m-delices/m-delices.component';
import {MFrchicComponent} from './Menus/m-frchic/m-frchic.component';
import {MNoteComponent} from './Menus/m-note/m-note.component';
import {MPalgoutsComponent} from './Menus/m-palgouts/m-palgouts.component';

const routes: Routes = [
  { path: '', component : HomeComponent},
  {path: 'legal' , component : LegalComponent},
  {path: 'menu/le_delice_des_papilles' , component: MDelicesComponent }
  ,
  {path: 'menu/le_chic_a_la_francaise' , component: MFrchicComponent }
  ,
  {path: 'menu/la_note_enchantee' , component: MNoteComponent }
  ,
  {path: 'menu/la_palette_du_gout' , component: MPalgoutsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
