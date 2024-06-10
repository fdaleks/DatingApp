import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
import { UserModel } from 'src/app/models/userModel';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  baseUrl: string = 'https://localhost:5001/api/';
  private currentUserSource = new BehaviorSubject<UserModel | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  login(model: any) {
    return this.httpClient.post<UserModel>(this.baseUrl + 'account/login', model).pipe(
      map((response: UserModel) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  register(model: any) {
    return this.httpClient.post<UserModel>(this.baseUrl + 'account/register', model).pipe(
      map(user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  setCurrentUser(user: UserModel) {
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
