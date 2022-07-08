import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'
 ]
})


export class HeaderComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  showAdminBoard = false;
  errorMessage = '';
  username?: string;
  roles: string[] = [];

  constructor(private authService: AuthService, private TokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    if (this.TokenStorageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.TokenStorageService.getUser().roles;
    }
    this.isLoggedIn = this.TokenStorageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.TokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

      this.username = user.username;
    }
  }

  reloadPage(): void {
    window.location.reload();
  }

  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe({
      next: data => {
        this.TokenStorageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.TokenStorageService.getUser().roles;
        this.reloadPage();
      },

      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  logout(): void {
   this.TokenStorageService.logout();
  }

  }






