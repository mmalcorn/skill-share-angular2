import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MatchesComponent } from './matches/matches.component';
import { SkillDetailsComponent } from './skill-details/skill-details.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
