import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginDialog } from '../../account/login-dialog/login-dialog.component';
import { Account } from '../../account/model/account.model';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  public role: String = "unregistered";
  public activeLink: String = "home";

  constructor (public dialog: MatDialog, private router: Router) {

  }

  onAccountClick() {
    this.activeLink = 'profile';
    this.router.navigate(['/profile']);
  }

  onHomeClick() {
    this.activeLink = 'home';
    this.router.navigate(['/home']);
  }


  onLogoutClick() {
    this.openLoginDialog();
  }

  openLoginDialog() {
    // Open login dialog
    const dialogRef = this.dialog.open(LoginDialog,{
      width: '40%'
    });
    dialogRef.afterClosed().subscribe(result => {
      const account = result as Account;
      if (!account) {
        return;
      }
      this.role = account.role;
    });
  }
}
