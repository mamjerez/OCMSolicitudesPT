import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-user-ag-grid',
  templateUrl: './user-ag-grid.component.html',
  styleUrls: ['./user-ag-grid.component.css']
})
export class UserAgGridComponent implements OnInit {
users;
rowData1;

  constructor(private usersService: UsersService) { }

//   columnDefs = [
//     {headerName: 'Make', field: 'make' },
//     {headerName: 'Model', field: 'model' },
//     {headerName: 'Price', field: 'price'}
// ];

// rowData = [
//     { make: 'Toyota', model: 'Celica', price: 35000 },
//     { make: 'Ford', model: 'Mondeo', price: 32000 },
//     { make: 'Porsche', model: 'Boxter', price: 72000 }
// ];

columnDefs1 = [
  {headerName: 'Nombre', field: 'nombre' },
  {headerName: 'Apellido', field: 'apellido1' },
  {headerName: 'email', field: 'email'}
];



  ngOnInit() {
    this.allUsers();
    console.log(this.users);
  }

  allUsers() {
    this.usersService.allUsers().subscribe( response => {
     this.users = response;
     console.log(this.users);
     this.rowData1 = this.users;
    });
   }

}
