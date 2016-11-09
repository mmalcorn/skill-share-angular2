import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseDataService } from '../firebase-data.service';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
  selector: 'app-user-details',
  providers: [FirebaseDataService],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(
    public dataService: FirebaseDataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  users: FirebaseListObservable<any[]>;
  user: FirebaseObjectObservable<any>;
  id: number;

  ngOnInit() {
    this.getDataFromService();
  }
  getDataFromService() {
    this.route.params.forEach((urlParametersArray) => {
      this.id = parseInt(urlParametersArray['id']);
      console.log(this.id);
    });
    this.user = this.dataService.goToSingleUser(this.id);
    console.log(this.user);
  }
}
