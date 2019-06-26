import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostDetailsComponent} from './post-details.component';
import { PartsListComponent } from './parts-list/parts-list.component';

@NgModule({
  declarations: [
    PostDetailsComponent,
    PartsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostDetailsModule { }
