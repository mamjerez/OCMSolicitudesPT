import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import Swal from 'sweetalert2';

import { UsersService } from '../users.service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-user-ag-grid',
  templateUrl: './user-ag-grid.component.html',
  styleUrls: ['./user-ag-grid.component.css']
})
export class UserAgGridComponent implements OnInit {
  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
  users: any;
  private gridApi;

  constructor(
    private usersService: UsersService
  ) { }

  columnDefs = [
    { headerName: 'Nombre', field: 'nombre', sortable: true, filter: true, checkboxSelection: true, editable: true, resizable: true },
    { headerName: 'Apellido', field: 'apellido1', sortable: true, filter: true, resizable: true },
    { headerName: 'email', field: 'email', sortable: true, filter: true, resizable: true }
  ];

  autoGroupColumnDef = {
    headerName: 'Nombre',
    field: 'nombre',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true
    }
  };

  ngOnInit() {
    this.allUsers();
  }

  allUsers() {
    this.usersService.allUsers().subscribe(response => {
      this.users = response;
    });
  }

  deleteSelectedUser() {
    console.log(this.users);
    if (this.SelectedUser() !== null) {
      const selectedFullNameUser = this.SelectedUser()[0].nombre + ' ' + this.SelectedUser()[0].apellido1;
      Swal.fire({
        title: '¿Estas seguro que quieres borrar este usuario?',
        text: `${selectedFullNameUser}`,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borralo.',
        cancelButtonText: 'No.'
      }).then((result) => {
        if (result.value) {
          // llamar al API
          this.usersService.deleteUser(this.SelectedUser()[0].idUser).subscribe(response => {
            console.log(response);
            Swal.fire(
              '¡borrado!',
              `${selectedFullNameUser}`,
              'success'
            );
            this.allUsers();
            console.log(this.users);
            this.gridApi.redrawRows();
          }, error => {
            console.log(error);
            console.log('error usuario no encontrado');
            Swal.fire(
              '¡Error al borrar!',
              `${error}`,
              'error'
            );
          });

        }
      });
    }
  }

  onGridReady(params: any) {
    this.gridApi = params.api; // To access the grids API
  }

  editSelectedUser() {
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: '¡Aqui ira el código de update!',
      showConfirmButton: false,
      timer: 3000
    });
  }

  createUser() {
    const userNew = new User(
      5,
      'mam',
      'Martinez',
      'Martinez',
      'correomam@gmail.com',
      'mam',
      'mam0121',
      'a',
      'a',
      null,
      null,
      1,
      1
    );
    // console.log(userNew);
    this.usersService.signUp(userNew).subscribe((response => {
      //  console.log(response);
      if (response === 'user creado') {
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: '¡Te has registrado correctamente!',
          showConfirmButton: false,
          timer: 3000
        });
        this.allUsers();
        this.gridApi.redrawRows();
      } else {
        console.log(JSON.stringify(response));
        // errorText = 'Error en la conexión.';
        Swal.fire({
          title: '¡Error!',
          // text: errorText,
          type: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    }));
  }

  SelectedUser() {
    if (this.agGrid.api.getSelectedNodes().length > 0) {
      return this.agGrid.api.getSelectedNodes().map(node => node.data);
    } else {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: '¡Debes seleccionar un registro!',
      });
      return null;
    }
  }

}

// https://www.ag-grid.com/javascript-grid-filter-quick/
