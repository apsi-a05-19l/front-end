import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from './projects/projects.component';
import {ProjectDetailsComponent} from './project-details/project-details.component';
import { MembersComponent } from './members/members.component';
import {MemberDetailsComponent} from './member-details/member-details.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {LoginComponent} from './login/login.component';
import {WikiComponent} from './wiki/wiki.component';
import {PostDetailsComponent} from './post-details/post-details.component';
import {PostCreationComponent} from './post-creation/post-creation.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'project/:id',
    component: ProjectDetailsComponent,
  },
  {
    path: 'members',
    component: MembersComponent,
  },
  {
    path: 'member/:id',
    component: MemberDetailsComponent,
  },
  {
    path: '',
    component: WelcomePageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'wiki',
    component: WikiComponent,
  },
  {
    path: 'wiki/:id',
    component: PostDetailsComponent,
  },
  {
    path: 'post-creation',
    component: PostCreationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
