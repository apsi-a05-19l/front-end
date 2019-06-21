import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsComponent} from './projects.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import {ProjectDetailsModule} from '../project-details/project-details.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectItemComponent,
  ],
  imports: [
    CommonModule,
    ProjectDetailsModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class ProjectsModule { }
