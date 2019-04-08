import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectDetailsComponent} from './project-details.component';
import {ReportsListComponent} from './reports-list/reports-list.component';

@NgModule({
  declarations: [
    ProjectDetailsComponent,
    ReportsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectDetailsModule { }
