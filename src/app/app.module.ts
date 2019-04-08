import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ProjectsModule} from './projects/projects.module';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ReportsListComponent } from './project-details/reports-list/reports-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailsComponent,
    ReportsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
