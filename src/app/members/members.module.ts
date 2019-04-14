import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { MembersComponent } from './members.component';
import { MembersItemComponent } from './members-item/members-item.component';

@NgModule({
  declarations: [
    MembersComponent,
    MembersItemComponent,
  ],
  exports: [
    MembersItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MembersModule { }
