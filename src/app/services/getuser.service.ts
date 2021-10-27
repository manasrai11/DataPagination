import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetuserService {
  constructor(private http: HttpClient) {}
  getData(pageNo: number = 1): Observable<any> {
    let url = 'https://reqres.in/api/users?page=' + pageNo;
    // 'https://randomuser.me/api/?results=100';

    return this.http.get<any>(url);
  }
}
