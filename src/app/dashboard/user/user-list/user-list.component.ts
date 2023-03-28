import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  isLoading=true;
  users:any;
  constructor(private user:UserService,private storageService:StorageService) { }

  ngOnInit(): void {
    this.user.getUsers().subscribe(
      {
        next: (data) => {  
          this.isLoading=false;        
          this.users=data;
        },
        error: (err) => {
        }
      }
    );

  }

  

}
