import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }
  model = new Contact('','','','');
  
  ngOnInit(): void {
    
  }

  onSubmit(contactForm:NgForm){
    console.log(contactForm.form);
    if (contactForm.valid) {
      alert('your request has been save we will get back to you!')
      contactForm.reset();
      // ...our form is valid, we can submit the data
    }
  }
// TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
