import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users;


  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.allUsers();
  }

 deleteUser(id: any) {
//   this.usersService.deleteUser(id).subscribe( response => {
//     this.users = response;
//     console.log(this.users);
//    });
}

allUsers() {
 this.usersService.allUsers().subscribe( response => {
  this.users = response;
  // console.log(this.users);
 });
}

}
