import { Component, OnInit } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private authService: AuthService ) {}
  // backgroundColor= environment.navbarBackgroundColor;
  ngOnInit() {
  }
  logout(){
    this.authService.logout();
  }
}
