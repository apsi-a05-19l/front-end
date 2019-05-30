import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { MembersComponent } from './members.component';
import { MembersItemComponent } from './members-item/members-item.component';
import {NgbdSortableHeader} from './sortable.directive';
import {MemberDetailsModule} from '../member-details/member-details.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MembersComponent,
    MembersItemComponent,
    NgbdSortableHeader,
  ],
  imports: [
    CommonModule,
    MemberDetailsModule,
    FormsModule
  ]
})
export class MembersModule { }
