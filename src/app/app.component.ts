import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseDataService } from './firebase-data.service';


@Component({
  selector: 'app-root',
  providers: [FirebaseDataService],
  template: `
  <router-outlet></router-outlet>
  
  <h1> Testing for sharing! </h1>

  <div class='skill' *ngFor='let skill of skills | async'>
    <p>{{skill.skill_name}}</p>
  </div>

  <div class='users' *ngFor='let user of users | async'>
    <p>{{user.username}}</p>
  </div>
  `

})
export class AppComponent {
  skills: FirebaseListObservable<any[]>;
  users: FirebaseListObservable<any[]>;
  constructor(angularFire: AngularFire, public dataService: FirebaseDataService){
    // this.skills = angularFire.database.list('skills');
    // this.users = angularFire.database.list('users');
    this.getDataFromService();
  }
  getDataFromService() {
    this.skills = this.dataService.getSkills();
    this.users = this.dataService.getUsers();
  }

}
