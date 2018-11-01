import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';
import { Address } from '../model/address';


@Component({
  selector: 'app-address-validation',
  templateUrl: './address-validation.component.html',
  styleUrls: ['./address-validation.component.css']
})
export class AddressValidationComponent implements OnInit {

  addressExists: Boolean;
  address: Address;

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    this.address = {
      id: 0,
      street: '',
      number: '',
      city: ''
    };
  }

  validateAddress(address: Address): void {
    this.addressService.validateAddress(address)
      .subscribe(res => this.addressExists = res);
  }

}
