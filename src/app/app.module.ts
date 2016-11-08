import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';

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
    HomeComponent
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
