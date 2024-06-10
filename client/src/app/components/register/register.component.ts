import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();
  
  constructor(private accountService: AccountService) { }

  ngOnInit(): void { }

  register() {
    this.accountService.register(this.model).subscribe({
      next: () => this.cancel(),
      error: error => console.log(error),
      complete: () => console.log('This request completed successfully!')
    });

  }

  cancel() {
    this.cancelRegister.emit(false);
  }


}
