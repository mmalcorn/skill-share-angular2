import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MatchesComponent } from './matches/matches.component';
import { SkillDetailsComponent } from './skill-details/skill-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserFilterPipe } from './user-filter.pipe';

export const firebaseConfig = {
  apiKey: "AIzaSyDhyRz5WogFqRN9wBYLLIVhFUIOuNeebts",
  authDomain: "skill-share-angular2-19e00.firebaseapp.com",
  databaseURL: "https://skill-share-angular2-19e00.firebaseio.com",
  storageBucket: "skill-share-angular2-19e00.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HomeComponent,
    UserDetailsComponent,
    MatchesComponent,
    SkillDetailsComponent,
    UserFormComponent,
    UserFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
