import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectDetailsComponent} from './project-details.component';
import {ReportsListComponent} from './reports-list/reports-list.component';
import {FormsModule} from '@angular/forms';
import {MembersListComponent} from './members-list/members-list.component';

@NgModule({
  declarations: [
    ProjectDetailsComponent,
    ReportsListComponent,
    MembersListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProjectDetailsModule { }
