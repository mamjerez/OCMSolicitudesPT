import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-user-bootstrap',
  templateUrl: './user-bootstrap.component.html',
  styleUrls: ['./user-bootstrap.component.css']
})
export class UserBootstrapComponent implements OnInit {
  users;
  constructor(private usersService: UsersService) { }


  ngOnInit() {
    this.allUsers();
    console.log(this.users);
  }

  allUsers() {
    this.usersService.allUsers().subscribe( response => {
     this.users = response;
     console.log(this.users);
     });
   }


}
