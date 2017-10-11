import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: any[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    /*this.contactService.getAll()
      .subscribe(
      contacts => {
        this.contacts = contacts;
        console.log(this.contacts);
      });*/
  }

  contactDetail(contact){
    alert('Contact: ' + contact);
  }



}
