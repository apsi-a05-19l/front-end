import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WikiDetailsComponent} from './wiki-details.component';
import {FormsModule} from '@angular/forms';
import {MembersListComponent} from './members-list/members-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    WikiDetailsComponent,
    MembersListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ]
})
export class WikiDetailsModule { }
