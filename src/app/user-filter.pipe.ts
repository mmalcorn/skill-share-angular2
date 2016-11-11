import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: "userfilter",
  pure: false
})
export class UserFilterPipe implements PipeTransform {
  transform(users, skill_name) {
    console.log(skill_name);
    console.log(users);
    return users;
  }
}
