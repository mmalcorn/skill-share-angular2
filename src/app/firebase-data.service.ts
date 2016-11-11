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
    console.log(this.skills);
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
  getSingleUserSkills(userId) {
    var currentUser = this.angularFire.database.object('users/'+userId);
    // var currentUserSkillsId = currentUser.skills_held;
    console.log(currentUser);
    return currentUser;

  }

}
    //
//     var emptyArray=[];
//     foreach (currentUser) {
//       for (i=0; i <= currentUserSkillsId.length; i++)
//       if ( firebaseskills[[currentUser.skills_held[i]]) = )
//        emptyArray.push(firebasekills[i]);
//     }
//
//  // MistaKyle & Lisa
//
// var currentUserSkillsId = currentUser.skills_held;
// var skillsDatabase = currentUser.getSkills();
// console.log(skillsDatabase);
//
//     for (u=0; u <= currentUserSkillsId.length; u++) {
//       for (s=0; s <= skillsTable.length; s++)
//       if currentUserSkillsId[u] === skillsTable[s] {
//         push.emptyarray(matchingskills at index)
//
//       }
//     }
  //
  //   for()
  // }
  // getSingleUserInterests() {
  //
  // }
