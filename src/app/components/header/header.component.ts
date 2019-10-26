import { Component, OnInit } from '@angular/core';
import { SessionStorageService, LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logeado = false;
  constructor(
    private localStorage: LocalStorageService, private sessionStorage: SessionStorageService
  ) { }

  ngOnInit() {
    if(this.localStorage.retrieve('authenticationToken')) {
      this.logeado = true;
    }

  }

  logout() {
    this.localStorage.clear('authenticationToken');
    this.sessionStorage.clear('authenticationToken');
    this.logeado = false;
  }

}
