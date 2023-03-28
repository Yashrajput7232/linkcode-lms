import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  form: FormGroup = new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email: new FormControl(''),
    role:new FormControl('')
  })

  submitted=false;
  constructor(private formBuilder: FormBuilder,private storageService:StorageService,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        role: ['', [Validators.required]]
      }
    )
  }

  get formControls(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  addUser(){
    this.submitted=true;
    if (this.form.invalid) {
      return;
    }

    const{firstName,lastName,email,role}=this.form.value;
    this.userService.addUser(firstName,lastName,email,role).subscribe(
      {
        next: (data) => {
          this.router.navigate(['dashboard/user']);
        },
        error: (err) => {
        }
      }
    );

  }

  getRole(){
    return this.storageService.getRole();
  }

}
