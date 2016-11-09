import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { FirebaseDataService } from '../firebase-data.service';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
  selector: 'app-skill-details',
  providers: [FirebaseDataService],
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent implements OnInit {

  constructor(
    public dataService: FirebaseDataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  skills: FirebaseListObservable<any[]>;
  ngOnInit() {
    this.getDataFromService();
  }
  getDataFromService() {
    this.skills = this.dataService.getSkills();
  }

}
