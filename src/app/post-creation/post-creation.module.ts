import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreationComponent } from './post-creation.component';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [PostCreationComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule
  ]
})
export class PostCreationModule { }
