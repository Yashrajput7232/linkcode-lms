import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  token:any;
  userId:any;
  firstName:any;
  lastName:any;
  email:any;
  
  constructor(private userService:UserService,private storageService:StorageService) { }

  ngOnInit(): void {

    this.token=this.storageService.getToken();
    this.userId=JSON.parse(atob(this.token.split('.')[1]))._id
    this.getDetails(this.userId);
    
  }

  
  getDetails(userId:any): void {
   
    this.userService.getUser(userId).subscribe(
      {
        next: (data:any) => {
          this.firstName=data.user.firstName;
          this.lastName=data.user.lastName;
          this.email=data.user.email;
        },
        error: (err) => {
        }
      }
     );
  }

}
