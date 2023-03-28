import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LogoPath : string;
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl('')
  })
  submitted = false;
  errorMessage: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {

    this.LogoPath= ' /assets/logo 1.png'
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
      email: ['', [Validators.required, Validators.email]],
        pass: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20)
          ]
        ]
      }
    )
  }

  //getter to access form controls
  get formControls(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


  signIn(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const { email, pass } = this.form.value;
    this.authService.signIn(email, pass).subscribe(
      {
        next: (data) => {

          this.storageService.setToken(data.token);
          this.storageService.setRole(JSON.parse(atob(data.token.split('.')[1])).type)
          this.router.navigate(['dashboard']);

        },
        error: (err) => {
          this.errorMessage = err.error.message;
        }
      }
    );
  }
}
