import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../models/User'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
    // age: null,
    // address: {
    //   street: '',
    //   city: '',
    //   state: ''
    // }
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor() { }

  ngOnInit() {
   
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@op.pl',
          // age: 70,
          // address: {
          //   street: '50 Main st',
          //   city: 'Boston',
          //   state: 'MA'
          // },
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          email: 'kevin@gmail.com',
          // age: 34,
          // address: {
          //   street: '20 School st',
          //   city: 'Lynn',
          //   state: 'MA'
          // },
          isActive: false,
          registered: new Date('03/11/2017 06:20:00'),
          hide: true
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          email: 'karen@gmail.com',
          // age: 26,
          // address: {
          //   street: '55 Mill st',
          //   city: 'Miami',
          //   state: 'FL'
          // },
          isActive: true,
          registered: new Date('11/02/2016 10:30:00'),
          hide: true
        }
      ];

      this.loaded = true;
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();

    this.users.unshift(this.user);

    this.user = {
      firstName: '',
       lastName: '',
       email: ''
      //  age: null,
      //  address: {
      //   street: '',
      //   city: '',
      //   state: ''
      // }
  }
}
  
  // onSubmit(e) {
  //   e.preventDefault();
  // }
  onSubmit({ value, valid}: {value: User, valid: boolean}) {
    if(!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);

      this.form.reset();
    }
  }

  // fireEvent(e) {
  //   console.log(e.type);
  //   console.log(e.target.value);
  // }



}
