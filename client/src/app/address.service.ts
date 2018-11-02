import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from './model/address';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { AddressValidationDTO } from './model/addressValidationDTO';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private host = 'http://localhost:3000/address';

  constructor(private http: HttpClient) { }

  validateAddress(address: Address): Observable<AddressValidationDTO> {
    return this.http.post<AddressValidationDTO>(this.host, address, httpOptions);
  }

}
