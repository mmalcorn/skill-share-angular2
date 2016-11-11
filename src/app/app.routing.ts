import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MatchesComponent } from './matches/matches.component';
import { SkillDetailsComponent } from './skill-details/skill-details.component';
import { UserFormComponent } from './user-form/user-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'users/details',
    component: UserDetailsComponent
  },
  {
    path: 'users/matches',
    component: MatchesComponent
  },
  {
    path: 'skills/:id',
    component: SkillDetailsComponent
  },
  {
    path: 'users/:id',
    component: UserDetailsComponent
  },
  {
    path: 'login',
    component: UserFormComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
