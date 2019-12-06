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
    { headerName: 'Numero', field: 'idSolicitudes', sortable: true, filter: true,
     checkboxSelection: true, editable: true, resizable: true, width: 100},
    { headerName: 'Texto', field: 'TextoSolicitud', sortable: true, filter: true, resizable: true, width: 600 },
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

  onGridReady(params: any) {
    this.gridApi = params.api; // To access the grids API
  }

  updateSelected() {
    this.solicitudesService.setIdSolicitud( this.Selected()[0].idSolicitudes);
    this.router.navigate(['/updateSolicitud', this.Selected()[0].idSolicitudes]);
     }

  Selected() {
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
