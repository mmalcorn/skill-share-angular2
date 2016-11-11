import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: "userfilter",
  pure: false
})
export class UserFilterPipe implements PipeTransform {
  transform(users, skill_name) {
    console.log(skill_name);
    console.log(users);
    var usersWeWant = [];
    if(users === null || skill_name === undefined){

    } else {
      users.forEach(function(user){
        user.skills_held.forEach(function(skill){
          if(skill === skill_name){
            usersWeWant.push(user);
          }
        })
      });
      return usersWeWant;
    }
  }
}
