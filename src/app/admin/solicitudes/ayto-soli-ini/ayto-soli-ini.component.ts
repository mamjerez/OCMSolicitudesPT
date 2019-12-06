import { Component, OnInit , ViewChild} from '@angular/core';
import { Router } from '@angular/router';

import { AgGridAngular } from 'ag-grid-angular';
import { DocumentosService } from '../documentos/documentos.service';

@Component({
  selector: 'app-ayto-soli-ini',
  templateUrl: './ayto-soli-ini.component.html',
  styleUrls: ['./ayto-soli-ini.component.css']
})
export class AytoSoliIniComponent implements OnInit {
  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
  documentos: any;
  private gridApi;

  constructor(
    private documentosService: DocumentosService,
    public router: Router
  ) { }

  columnDefs = [
    { headerName: 'Descripcion', field: 'Descripcion', sortable: true, filter: true, resizable: true, width: 200 },
    { headerName: 'Observaciones', field: 'Observaciones', sortable: true, filter: true, resizable: true, width: 200 },
    { headerName: 'Ruta', field: 'Ruta', sortable: true, filter: true, resizable: true, width: 200, cellRenderer: this.linkRender },
     ];

  ngOnInit() {
    this.all();
  }

  all() {
    this.documentosService.getAll().subscribe(response => {
      console.log(response);
      this.documentos = response;
    });
  }

  onGridReady(params: any) {
    this.gridApi = params.api; // To access the grids API
  }

  linkRender(params: any) {
   // <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
    return `<a href="${params.value}" target="_blank">${params.value}</a>`;
  }

}



