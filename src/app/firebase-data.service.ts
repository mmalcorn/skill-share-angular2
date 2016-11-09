import { Injectable } from '@angular/core';
import { Skill } from './skill.model';
import { User } from './user.model';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class FirebaseDataService {

  skills: FirebaseListObservable<any[]>;
  skill: FirebaseObjectObservable<any>;
  users: FirebaseListObservable<any[]>;
  user: FirebaseObjectObservable<any>;



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
  goToSingleSkill(id) {
    this.skill = this.angularFire.database.object('skills/'+id);
    return this.skill;
  }
  goToSingleUser(id) {
    this.user = this.angularFire.database.object('users/'+id);
    return this.user;
  }
}
