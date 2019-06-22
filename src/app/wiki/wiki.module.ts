import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WikiComponent} from './wiki.component';
import { WikiItemComponent } from './wiki-item/wiki-item.component';
import {WikiDetailsModule} from '../wiki-details/wiki-details.module';
import {HttpClient} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    WikiComponent,
    WikiItemComponent,
  ],
  exports: [
    WikiItemComponent
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
