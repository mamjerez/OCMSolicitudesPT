import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  isSaving: boolean;
  constructor() { }

  ngOnInit() {
  }

  save() {
    this.isSaving = true;
    // if (this.lineaEnvasado.idLineaEnvasado !== null) {
    //   this.lineaEnvasadoService
    //     .update(this.lineaEnvasado)
    //     .subscribe((response) => this.onSaveSuccess(response), () => this.onSaveError());
    // } else {
    //   this.lineaEnvasadoService
    //     .create(this.lineaEnvasado)
    //     .subscribe((response) => this.onSaveSuccess(response), () => this.onSaveError());
    // }
  }

}
