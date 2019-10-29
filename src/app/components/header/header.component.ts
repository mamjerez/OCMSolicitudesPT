import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';
import { LogeadoService } from '../../services/logeado.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logeado: string;
  constructor(
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
    private router: Router,
    public logeadoService: LogeadoService
  ) { }

  ngOnInit() {
    this.logeado = this.logeadoService.estaLogeado();
     }

  logout() {
    this.localStorage.clear('authenticationToken');
    this.sessionStorage.clear('authenticationToken');
    this.logeado = this.logeadoService.estaLogeado();
    this.router.navigate(['/signIn']);
  }
}
