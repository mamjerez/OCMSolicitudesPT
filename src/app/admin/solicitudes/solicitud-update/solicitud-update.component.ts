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
  FecSolicitud: string;
  fecIniAyu: string;
  fecFinAyu: string;
  fecIniCon: string;
  fecFinCon: string;
  fecIniDef: string;
  fecFinDef: string;
  fechaActual = moment();
  diasAyu: number;
  diasCon: number;
  diasDef: number;

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
      this.FecSolicitud = moment(this.solicitud.fecIniAyu).utc().format('DD-MM-YYYY');
      // console.log(this.FecSolicitud );
      this.fecIniAyu = moment(this.solicitud.fecIniAyu).utc().format('YYYY-MM-DD');
      this.fecFinAyu = moment(this.solicitud.fecFinAyu).utc().format('YYYY-MM-DD');
      this.fecIniCon = moment(this.solicitud.fecIniCon).utc().format('YYYY-MM-DD');
      this.fecFinCon = moment(this.solicitud.fecFinCon).utc().format('YYYY-MM-DD');
      this.fecIniDef = moment(this.solicitud.fecIniDef).utc().format('YYYY-MM-DD');
      this.fecFinDef = moment(this.solicitud.fecFinDef).utc().format('YYYY-MM-DD');
      this.diasAyu = this.fechaActual.diff(this.fecIniAyu, 'days');
      // this.fecIniAyu = moment(this.solicitud.FechaPresentacion).utc().format('DD-MM-YYYY');
      // console.log('Días transcurridos: ' + this.diasTranscurridos);
      this.diasCon = this.fechaActual.diff(this.fecIniCon, 'days');
      this.diasDef = this.fechaActual.diff(this.fecIniDef, 'days');
    });
  }

  aytoSoliIni() {
    this.router.navigate(['/aytoSoliIni']);
  }

}
