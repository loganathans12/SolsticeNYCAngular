import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: any[];
  selectedContact: any;
  isContactSelected: boolean = false;
  isFavorite: boolean = false;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getAll()
      .subscribe(
      contacts => {
        this.contacts = contacts;
        console.log(this.contacts);
      });
  }

  selectContact(contact){
    this.isContactSelected = !this.isContactSelected;
    this.selectedContact = contact;
    this.isFavorite = contact.isFavorite;
    console.log('Contact: ' + contact);
    //alert('Contact: ' + contact);
  }

  updateContact(){
    this.isContactSelected = !this.isContactSelected;
    this.selectedContact = '';
    this.isFavorite = false;
  }



}
