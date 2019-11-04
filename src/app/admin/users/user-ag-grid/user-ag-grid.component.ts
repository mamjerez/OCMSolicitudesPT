import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../users.service';
import { AgGridAngular } from 'ag-grid-angular';
// import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

// import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-user-ag-grid',
  templateUrl: './user-ag-grid.component.html',
  styleUrls: ['./user-ag-grid.component.css']
})
export class UserAgGridComponent implements OnInit {
  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
  users: any;
  private gridApi;
  // d = new Date();

constructor(
  private usersService: UsersService,
  // private user: User
  // private http: HttpClient
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
  console.log( this.users);
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
        });
        Swal.fire(
          '¡borrado!',
          `${selectedFullNameUser}`,
          'success'
        );
        console.log('Justo antes allUsers()');
        this.allUsers();
        console.log(this.users);
        // this.gridApi.setRowData(this.users); // Refresh grid
        // this.gridApi.refreshView();
        this.gridApi.redrawRows();
        // this.gridApi.refreshCells();
        // this.gridApi.rowRenderer();
      }
    });
  }
}

onGridReady(params: any) {
  this.gridApi = params.api; // To access the grids API
}

editSelectedUser() {
  // Añadir codigo para editar.

  this.usersService.getUser(32).subscribe(response => {
    console.log(response);
    this.users.push(response);
    console.log(this.users);
    this.gridApi.redrawRows();
  });

  //     this.user = new User(
  //  5,
  //  'mam',
  //  'Martinez',
  //  'Martinez',
  //  'correomam@gmail.com',
  //  'mam',
  //  'mam0121',
  //  'a',
  //  'a',
  //  null,
  //  null,
  //   1,
  //  1
  //    );
  //     this.users.push(this.user);

}

// getSelectedRows() {
//   const selectedNodes = this.agGrid.api.getSelectedNodes();
//   const selectedData = selectedNodes.map(node => node.data);
//   const selectedDataStringPresentation = selectedData.map(node => node.nombre + ' ' + node.apellido1).join(', ');
//   alert(`Selected nodes: ${selectedDataStringPresentation}`);
// }


SelectedUser() {
  // const selectedNodes = this.agGrid.api.getSelectedNodes();
  if (this.agGrid.api.getSelectedNodes().length > 0) {
    // const selectedData = selectedNodes.map(node => node.data);
    // const selectedUser = selectedData.map( node => node.nombre + ' ' + node.apellido1).join(', ');
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
