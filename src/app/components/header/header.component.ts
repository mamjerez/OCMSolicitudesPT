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
  rol = 'n';

  constructor(
    private localStorage: LocalStorageService,
    // private sessionStorage: SessionStorageService,
    public router: Router,
    public logeadoService: LogeadoService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.localStorage.clear('authenticationToken');
    // this.sessionStorage.clear('authenticationToken');
    this.router.navigate(['/signIn']);
    this.logeadoService.estaLogeado();
  }
}
