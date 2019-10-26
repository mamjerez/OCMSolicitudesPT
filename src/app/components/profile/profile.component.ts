import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(protected profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.query(null).subscribe(response => {
      console.log(response);
    });
  }

}