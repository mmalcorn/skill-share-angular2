import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-root',
  template: `
  <h1> Testing for sharing! {{title}} </h1>

  <div class='skill' *ngFor='let skill of models | async'>
    <p>{{skill.title}}</p>
  </div>
  `

})
export class AppComponent {
  models: FirebaseListObservable<any[]>;
  constructor(angularFire: AngularFire){
    this.models = angularFire.database.list('skills');
  }
title = 'app works more!';

}
