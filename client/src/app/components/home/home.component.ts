import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false; 
  users: any;

  constructor(
    private httpClient: HttpClient,
    private toastr: ToastrService
  ) {}
  
  ngOnInit(): void { 
    this.getUsers();
  }
  
  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getUsers() {
    this.httpClient.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => this.toastr.error(error.error),
      complete: () => console.log('This request completed successfully!')
    });
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event
  }

}
