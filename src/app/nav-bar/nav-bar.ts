import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../auth/auth-service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink , 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {
  authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;

  }
}