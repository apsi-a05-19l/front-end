import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ProjectsModule} from './projects/projects.module';
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
