import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Validators,
  FormGroup,
  FormControl
} from '@angular/forms';
import { User } from 'src/app/shared/interfaces';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted: boolean;

  constructor(
    private router: Router,
    public authService: AuthService
    ) {}

  ngOnInit(): void {
    this.submitted = false;
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]), 
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
      ])
    });
  }

  public onSubmit(): void {
    if(this.loginForm.invalid) {
      return;
    }

    this.submitted = true;

    const user: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.authService.login(user).subscribe(()=>{
      this.loginForm.reset(),
      this.router.navigate(['/']),
      this.submitted = false
    }, ()=>this.submitted = false);
  }
}
