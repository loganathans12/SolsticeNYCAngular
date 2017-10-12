import { ContactService } from './../services/contact.service';
import { Component, OnInit, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent implements OnInit, DoCheck {
  contacts: any[];
  selectedContact: any;
  isContactSelected: boolean;
  isFavorite: boolean;

  constructor(private ref: ChangeDetectorRef, private contactService: ContactService) { }

  ngDoCheck(){
    console.log('Do Check Event Fired');
  }

  ngOnInit() {
    this.contactService.getAll()
      .subscribe(
      contacts => {
        this.contacts = contacts;
        console.log(this.contacts);
      });

      this.isContactSelected = false;
      this.isFavorite = false;
      this.selectedContact = null;
      
      console.log('Test ngOnit');
  }

  selectContact(contact) {
    this.isContactSelected = !this.isContactSelected;
    this.selectedContact = contact;
    this.isFavorite = contact.isFavorite;

    //contact.isFavorite = !contact.isFavorite;


  }

  listContacts() {
    this.isContactSelected = !this.isContactSelected;
    this.selectedContact = {};
    this.isFavorite = false;
    this.ref.detectChanges();
    this.ref.markForCheck();
    this.contacts = this.contacts.slice();

    console.log(this.contacts);
  }

  updateContact() {
    if (this.contacts.length > 0 && this.selectedContact != null) {
          this.selectedContact.isFavorite = !this.isFavorite;

            let itemIndex = this.contacts.findIndex( item => item.id == this.selectedContact.id);
            this.contacts[itemIndex] = this.selectedContact;
    }
  }

}
