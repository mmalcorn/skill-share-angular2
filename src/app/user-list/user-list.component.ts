import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { FirebaseDataService } from '../firebase-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  providers: [FirebaseDataService],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    public dataService: FirebaseDataService,
    private router: Router
  ) { }

  users: FirebaseListObservable<any[]>;
  ngOnInit() {
    this.getDataFromService();
  }
  getDataFromService() {
    this.users = this.dataService.getUsers();
  }
  goToUserDetail(userObject) {
    console.log(userObject);
    this.router.navigate(['users', userObject.$key]);
  }
}
