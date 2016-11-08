import { Injectable } from '@angular/core';
import { Skill } from './skill.model';
import { User } from './user.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class FirebaseDataService {

  skills: FirebaseListObservable<any[]>;
  users: FirebaseListObservable<any[]>;

  constructor(public angularFire: AngularFire) {
  }
  getSkills() {
    this.skills = this.angularFire.database.list('skills');
    return this.skills;
  }
  getUsers() {
    this.users = this.angularFire.database.list('users');
    return this.users;
  }
}
