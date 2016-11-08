import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { FirebaseDataService } from '../firebase-data.service';

@Component({
  selector: 'app-user-list',
  providers: [FirebaseDataService],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(public dataService: FirebaseDataService) { }
  users: FirebaseListObservable<any[]>;
  ngOnInit() {
    this.getDataFromService();
  }
  getDataFromService() {
    this.users = this.dataService.getUsers();
  }

}
