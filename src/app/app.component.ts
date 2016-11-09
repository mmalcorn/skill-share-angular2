import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <div id="brand" class="navbar-brand">APP NAME</div>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a routerLink="">Home</a></li>
        <li class="active"><a routerLink="users">Community</a></li>
        <li class="active"><a routerLink="skill-details">Skills</a></li>
      </ul>
    </div>
  </div>
</nav>
<div class="container">
  <router-outlet></router-outlet>
  <div class="footer">
    <p id="footer-text">&copy; 2016 by TEAM APP NAME</p>
  </div>
</div>
`
})
export class AppComponent {
}
