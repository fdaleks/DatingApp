import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/userModel';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "'Hello World!'";

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: UserModel = JSON.parse(localStorage.getItem('user')!);
    this.accountService.setCurrentUser(user);
  }
}
