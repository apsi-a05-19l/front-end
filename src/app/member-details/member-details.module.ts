import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MemberDetailsComponent} from './member-details.component';
import {ActivitiesListComponent} from './activities-list/activities-list.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectButtonComponent } from './project-button/project-button.component';
import {NumberPickerModule} from 'ng-number-picker';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    MemberDetailsComponent,
    ActivitiesListComponent,
    ProjectListComponent,
    ProjectButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NumberPickerModule,
    NgSelectModule
  ]
})
export class MemberDetailsModule { }
