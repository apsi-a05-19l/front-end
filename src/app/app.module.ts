import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ProjectsModule} from './projects/projects.module';
import { MembersModule } from './members/members.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './AuthInterceptor';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {WikiModule} from './wiki/wiki.module';
import {PostDetailsModule} from './post-details/post-details.module';
import {PostCreationModule} from './post-creation/post-creation.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    WelcomePageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsModule,
    MembersModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    WikiModule,
    NgSelectModule,
    PostDetailsModule,
    PostCreationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
