import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';
import { LogeadoService } from '../../services/logeado.service';
import { UsersService } from '../../../app/admin/users/users.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  rol: string;
  roles: object;

  constructor(
    private localStorage: LocalStorageService,
    // private sessionStorage: SessionStorageService,
    public router: Router,
    public logeadoService: LogeadoService,
    public userService: UsersService,
  ) { }

  ngOnInit() {
    this.logeadoService.estaLogeado();
  }

  logout() {
    this.localStorage.clear('authenticationToken');
    // this.sessionStorage.clear('authenticationToken');
    this.router.navigate(['/signIn']);
    this.logeadoService.estaLogeado();
    this.logeadoService.rol = null;
  }

}
