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
  private showSuccessMessage: Boolean;
  private showFailMessage: Boolean;
  private streetValueIsSet: Boolean;
  private numberValueIsSet: Boolean;

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    this.address = {
      id: -1,
      street: '',
      streetNumber: '',
      city: '',
      postcode: null
    };
    this.resetMessages();
  }

  validateAddress(address: Address): void {
    this.resetMessages();
    if (this.inputFieldsAreSet(address)) {
      this.addressService.validateAddress(address)
      .subscribe((res: AddressValidationDTO ) => {
        if (res.addressExists) {
          this.showSuccessMessage = true;
        } else {
          this.showFailMessage = true;
        }
      });
    }
  }

  inputFieldsAreSet(address: Address): Boolean {
    if (address.street == null || address.street === '') {
      this.streetValueIsSet = false;
    }
    if (address.streetNumber == null || address.streetNumber === '') {
      this.numberValueIsSet = false;
    }
    return this.streetValueIsSet && this.numberValueIsSet;
  }

  resetMessages(): void {
    this.streetValueIsSet = true;
    this.numberValueIsSet = true;
    this.showSuccessMessage = false;
    this.showFailMessage = false;
  }

}
