import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {


  constructor(private storageService:StorageService,private router:Router) { }

  ngOnInit(): void {
    }

  public getRole(){
    return this.storageService.getRole();
  }
  public isLoggedIn(){
    return this.storageService.isLoggedIn();
  }

  public logout(){
    this.storageService.clear();
  }
}
