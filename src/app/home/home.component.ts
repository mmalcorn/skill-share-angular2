import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { FirebaseDataService } from '../firebase-data.service';

@Component({
  selector: 'app-home',
  providers: [FirebaseDataService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dataService: FirebaseDataService) {}
  skills: FirebaseListObservable<any[]>;
  ngOnInit() {
    this.getDataFromService();
  }
  getDataFromService() {
    this.skills = this.dataService.getSkills();
  }

}
