import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud-update',
  templateUrl: './solicitud-update.component.html',
  styleUrls: ['./solicitud-update.component.css']
})
export class SolicitudUpdateComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
  }

   aytoSoliIni() {
    // Hay que pasar el id de la solicitud
    this.router.navigate(['/aytoSoliIni', 1]);
      }

}
