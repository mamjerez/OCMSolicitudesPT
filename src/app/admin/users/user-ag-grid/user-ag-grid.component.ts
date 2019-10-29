import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../users.service';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-ag-grid',
  templateUrl: './user-ag-grid.component.html',
  styleUrls: ['./user-ag-grid.component.css']
})
export class UserAgGridComponent implements OnInit {
  @ViewChild('agGrid', {static: false}) agGrid: AgGridAngular;
  users: any;

  constructor(
    private usersService: UsersService,
    private http: HttpClient) { }

  columnDefs = [
    {headerName: 'Nombre', field: 'nombre', sortable: true, filter: true, checkboxSelection: true, editable: true },
    {headerName: 'Apellido', field: 'apellido1', sortable: true, filter: true},
    {headerName: 'email', field: 'email', sortable: true, filter: true}
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
      console.log(this.users);
    });
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.nombre + ' ' + node.apellido1).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
}

}


// https://www.ag-grid.com/javascript-grid-filter-quick/
