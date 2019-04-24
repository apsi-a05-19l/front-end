import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectDetailsComponent} from './project-details.component';
import {ReportsListComponent} from './reports-list/reports-list.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ProjectDetailsComponent,
    ReportsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProjectDetailsModule { }
