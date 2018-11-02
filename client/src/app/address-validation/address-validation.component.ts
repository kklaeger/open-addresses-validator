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
  private streetValueIsSet: Boolean;
  private numberValueIsSet: Boolean;
  private cityValueIsSet: Boolean;
  private requiredMessage: String = 'required';

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
    this.resetRequiredFields();
  }

  validateAddress(address: Address): void {
    this.resetRequiredFields();
    if (this.inputFieldsAreSet(address)) {
      this.addressService.validateAddress(address)
      .subscribe((res: AddressValidationDTO ) => {
        if (res.addressExists) {
          this.message = 'Address exists!';
        } else {
          this.message = 'Address does not exist!';
        }
        this.showMessage = true;
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
    if (address.city == null || address.city === '') {
      this.cityValueIsSet = false;
    }
    return this.streetValueIsSet && this.numberValueIsSet && this.cityValueIsSet;
  }

  resetRequiredFields(): void {
    this.streetValueIsSet = true;
    this.numberValueIsSet = true;
    this.cityValueIsSet = true;
  }

}
