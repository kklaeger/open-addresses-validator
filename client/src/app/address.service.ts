import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from './model/address';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  configUrl = 'http://localhost:3000/address';

  constructor(private http: HttpClient) { }

  getAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(this.configUrl);
  }
  
  validateAddress(address: Address): Observable<Boolean> {
    console.log(address)
    return this.http.post<Boolean>(this.configUrl, address, httpOptions);
  }

}
