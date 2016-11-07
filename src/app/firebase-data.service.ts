import { Injectable } from '@angular/core';
import { Skill } from './skill.model';
import { User } from './user.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class FirebaseDataService {

  skills: FirebaseListObservable<any[]>;
  users: FirebaseListObservable<any[]>;

  constructor(angularFire: AngularFire) { }
  getSkills() {
    var skills = this.angularFire.database.list('skills');
    return skills;
  }
  getUsers() {
    var users = this.angularFire.database.list('users');
    return users;
  }
}
