import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private storageService:StorageService) { }

  ngOnInit(): void {
  }

  isLoggedIn(){
    return this.storageService.isLoggedIn();
  }
}
