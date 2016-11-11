import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { FirebaseDataService } from '../firebase-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-form',
  providers: [FirebaseDataService],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(
    public dataService: FirebaseDataService,
    private router: Router
  ) {}

  skills: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.getDataFromService();
  }
  getDataFromService() {
    this.skills = this.dataService.getSkills();
  }
  addAccount(){
    
  }

}
