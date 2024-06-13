import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/userModel';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService, private router: Router) { }

  ngOnInit(): void { }

  login(): void {
    this.accountService.login(this.model).subscribe({
      next: () => this.router.navigateByUrl('/members'),
      error: error => console.log(error),
      complete: () => console.log('This request completed successfully!')
    });
  }

  logout(): void {
    this.accountService.logout();
    this.router.navigateByUrl('/')
  }

  getUserName() {
    const user: UserModel = JSON.parse(localStorage.getItem('user')!);
    return user.userName;
  }

}
