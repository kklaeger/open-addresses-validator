import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';
import { Address } from '../model/address';


@Component({
  selector: 'app-address-validation',
  templateUrl: './address-validation.component.html',
  styleUrls: ['./address-validation.component.css']
})
export class AddressValidationComponent implements OnInit {

  addresses: Address[];
  addressExists: Boolean;

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    this.getAddresses();
    const address: Address = new Address();
    address.street = 'test';
    address.number = 'test';
    address.city = 'test';
    this.validateAddress(address);
  }

  getAddresses(): void {
    this.addressService.getAddresses()
      .subscribe(addresses => this.addresses = addresses);
  }

  validateAddress(address: Address): void {
    this.addressService.validateAddress(address)
      .subscribe(res => this.addressExists = res);
  }

}
