import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { LoginModel } from 'src/app/Models/Login.model';
import { LoginResponse } from 'src/app/Models/login-response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginModel: LoginModel = {
    username: '',
    password: ''
  };

  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onLogin(): void {
    if (!this.isFormValid()) {
      this.errorMessage = 'Please fill in both username and password fields.';
      return;
    }

    this.userService.login(this.loginModel).subscribe(
      (response: LoginResponse) => {
        // Handle successful login response
        console.log(response.token);
        this.router.navigate(['/dashboard']);
      },
      error => {
        // Handle login error
        if (error.status === 401) {
          this.errorMessage = 'Username or password is incorrect. Please try again.';
        } else {
          this.errorMessage = 'An unexpected error occurred. Please try again later.';
        }
      }
    );
  }

  isFormValid(): boolean {
    return this.loginModel.username.trim() !== '' && this.loginModel.password.trim() !== '';
  }
  
}
