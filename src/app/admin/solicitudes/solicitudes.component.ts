import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import Swal from 'sweetalert2';

import { SolicitudesService } from '../solicitudes/solicitudes.service';
import { Solicitud } from '../../shared/models/solicitud.model';



@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
  solicitudes: any;
  private gridApi;

  constructor(
    private solicitudesService: SolicitudesService,
    public router: Router
  ) { }

  columnDefs = [
    { headerName: 'Numero', field: 'idSolicitudes', sortable: true, filter: true, checkboxSelection: true, editable: true, resizable: true, width: 100},
    { headerName: 'Texto', field: 'TextoSolicitud', sortable: true, filter: true, resizable: true, width: 600 },
    // { headerName: 'email', field: 'email', sortable: true, filter: true, resizable: true }
  ];

  autoGroupColumnDef = {
    headerName: 'Numero',
    field: 'idSolicitudes',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true
    }
  };

  ngOnInit() {
    this.all();
  }

  all() {
    this.solicitudesService.all().subscribe(response => {
      this.solicitudes = response;
    });
  }

  deleteSelectedUser() {
    // console.log(this.users);
    if (this.Selected() !== null) {
      // const selectedFullNameUser = this.Selected()[0].TextoSolicitud ;
      Swal.fire({
        title: '¿Estas seguro que quieres borrar esta solicitud?',
        text: `${this.Selected()[0].TextoSolicitud}`,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrala.',
        cancelButtonText: 'No.'
      }).then((result) => {
        if (result.value) {
          // llamar al API
        this.solicitudesService.delete(this.Selected()[0].idSolicitudes).subscribe(response => {
            Swal.fire(
              '¡borrada!',
              `${this.Selected()[0].TextoSolicitud}`,
              'success'
            );
            this.all();
            // console.log(this.users);
            this.gridApi.redrawRows();
          }, error => {
            console.log(error);
            console.log('error solicitud no encontrada');
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

  updateSelected() {
    this.router.navigate(['/update', this.Selected()[0].idUser]);
    // Swal.fire({
    //   position: 'top-end',
    //   type: 'success',
    //   title: '¡Aqui ira el código de update!',
    //   showConfirmButton: false,
    //   timer: 3000
    // });
  }

  // create() {
  //   const solicitudNew = new Solicitud(
  //     5,
  //     'mam',
  //     'Martinez',
  //     'Martinez',
  //     'correomam@gmail.com',
  //     'mam',
  //     'mam0121',
  //     'a',
  //     'a',
  //     null,
  //     null,
  //     1,
  //     1
  //   );
  //   // console.log(userNew);
  //   this.solicitudesService.signUp(solicitudNew).subscribe((response => {
  //     //  console.log(response);
  //     if (response === 'user creado') {
  //       Swal.fire({
  //         position: 'top-end',
  //         type: 'success',
  //         title: '¡Te has registrado correctamente!',
  //         showConfirmButton: false,
  //         timer: 3000
  //       });
  //       this.all();
  //       this.gridApi.redrawRows();
  //     } else {
  //       console.log(JSON.stringify(response));
  //       // errorText = 'Error en la conexión.';
  //       Swal.fire({
  //         title: '¡Error!',
  //         // text: errorText,
  //         type: 'error',
  //         confirmButtonText: 'Aceptar'
  //       });
  //     }
  //   }));
  // }

  Selected() {
    if (this.agGrid.api.getSelectedNodes().length > 0) {
      // console.log(this.agGrid.api.getSelectedNodes().map(node => node.data));
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
