import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SolicitudesService } from '../../solicitudes/solicitudes.service';
import { Solicitud } from '../../../shared/models/solicitud.model';

import * as moment from 'moment';
// import 'moment/locale/es';

@Component({
  selector: 'app-solicitud-update',
  templateUrl: './solicitud-update.component.html',
  styleUrls: ['./solicitud-update.component.css']
})
export class SolicitudUpdateComponent implements OnInit {
  solicitud: Solicitud;
  idSolicitud = this.solicitudesService.getIdSolicitud();
  fechaPresentacion: string;
  fechaActual = moment();
  diasTranscurridos: number;

  constructor(
    public router: Router,
    private solicitudesService: SolicitudesService
  ) { }

  ngOnInit() {
    this.getSolicitud();
    }

  getSolicitud() {
    this.solicitudesService.get(this.idSolicitud).subscribe(response => {
      this.solicitud = response[0];
      // console.log(this.solicitud.TextoCabecera);
      this.fechaPresentacion = moment(this.solicitud.FechaPresentacion).utc().format('YYYY-MM-DD');
      this.diasTranscurridos = this.fechaActual.diff(this.fechaPresentacion, 'days');
      this.fechaPresentacion = moment(this.solicitud.FechaPresentacion).utc().format('DD-MM-YYYY');
      // console.log('Días transcurridos: ' + this.diasTranscurridos);
    });
  }

  aytoSoliIni() {
    this.router.navigate(['/aytoSoliIni']);
  }

}
