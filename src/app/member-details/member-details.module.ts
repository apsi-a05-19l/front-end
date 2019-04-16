import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MemberDetailsComponent} from './member-details.component';
import {ActivitiesListComponent} from './activities-list/activities-list.component';

@NgModule({
  declarations: [
    MemberDetailsComponent,
    ActivitiesListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MemberDetailsModule { }
