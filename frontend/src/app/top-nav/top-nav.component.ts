import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  @Input() isLogedIn = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onLogOut(){
    this.userService.logOutUser();
  }

}
