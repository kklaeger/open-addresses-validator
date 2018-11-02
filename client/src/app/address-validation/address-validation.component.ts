import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';
import { Address } from '../model/address';
import { AddressValidationDTO } from '../model/addressValidationDTO';

@Component({
  selector: 'app-address-validation',
  templateUrl: './address-validation.component.html',
  styleUrls: ['./address-validation.component.css']
})
export class AddressValidationComponent implements OnInit {

  private addressExists: Boolean;
  private address: Address;
  private message: string;
  private showMessage: Boolean;

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    this.address = {
      id: -1,
      street: '',
      streetNumber: '',
      city: '',
      postcode: null
    };
    this.showMessage = false;
  }

  validateAddress(address: Address): void {
    this.addressService.validateAddress(address)
      .subscribe((res: AddressValidationDTO ) => {
        if (res.addressExists) {
          this.message = 'Address exists';
        } else {
          this.message = 'Address does not exist';
        }
        this.showMessage = true;
      });
  }

}
