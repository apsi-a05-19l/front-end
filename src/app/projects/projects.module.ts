import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsComponent} from './projects.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import {ProjectDetailsModule} from '../project-details/project-details.module';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectItemComponent,
  ],
  imports: [
    CommonModule,
    ProjectDetailsModule
  ]
})
export class ProjectsModule { }
