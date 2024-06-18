import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();
  
  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void { }

  register() {
    this.accountService.register(this.model).subscribe({
      next: () => this.cancel(),
      error: error => this.toastr.error(error.error),
      complete: () => console.log('This request completed successfully!')
    });

  }

  cancel() {
    this.cancelRegister.emit(false);
  }


}
