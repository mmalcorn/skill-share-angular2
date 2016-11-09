import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
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
  skill: FirebaseObjectObservable<any>;
  id: number;

  ngOnInit() {
    this.getDataFromService();
  }
  getDataFromService() {
    this.route.params.forEach((urlParametersArray) => {
      this.id = parseInt(urlParametersArray['id']);
      console.log(this.id);
    });
    // this.skills = this.dataService.getSkills();
    this.skill = this.dataService.goToSingleSkill(this.id);
    console.log(this.skill);
  }


}

//    this.skills = this.angularFire.database.list('skills');
