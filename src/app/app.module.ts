import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ProjectsModule} from './projects/projects.module';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ReportsListComponent } from './project-details/reports-list/reports-list.component';
import { MembersComponent } from './members/members.component';
import { MembersItemComponent } from './members/members-item/members-item.component';
import { MembersModule } from './members/members.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsModule,
    MembersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
