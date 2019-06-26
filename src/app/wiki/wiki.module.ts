import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WikiComponent} from './wiki.component';
import { PostItemComponent } from './post-item/post-item.component';
import {WikiDetailsModule} from '../wiki-details/wiki-details.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    WikiComponent,
    PostItemComponent,
  ],
  imports: [
    CommonModule,
    WikiDetailsModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class WikiModule { }
