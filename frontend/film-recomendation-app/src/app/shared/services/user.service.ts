import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/user`);
  }

  public register(user: User): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user/register`, user);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/user/${id}`);
  }
}
