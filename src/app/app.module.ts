import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyDhyRz5WogFqRN9wBYLLIVhFUIOuNeebts",
  authDomain: "skill-share-angular2-19e00.firebaseapp.com",
  databaseURL: "https://skill-share-angular2-19e00.firebaseio.com",
  storageBucket: "skill-share-angular2-19e00.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
