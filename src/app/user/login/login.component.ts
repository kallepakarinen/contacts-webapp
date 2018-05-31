import {Component, OnInit} from '@angular/core';
import {UserCredientials} from '../user-credientials';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userCredentials: UserCredientials;
  loginFailed: boolean;
  errorMessage: string;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.userCredentials = new UserCredientials();
    this.loginFailed = false;
    this.errorMessage = '';
  }

  ngOnInit() {
    this.authenticationService.signOutUser();
  }

  onSignIn() {
    this.loginFailed = false;
    this.errorMessage = '';

    this.authenticationService.signInUser(this.userCredentials).subscribe(result => {
      this.router.navigate(['/contacts']);
    }, error1 => {
      this.userCredentials.username = '';
      this.userCredentials.password = '';
      this.loginFailed = true;
      this.errorMessage = 'sign in failed';
    });
  }

}
