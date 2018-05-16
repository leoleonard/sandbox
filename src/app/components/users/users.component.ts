import { Component, OnInit } from '@angular/core';

import { User } from '../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAll: boolean = true;
  currentClasses = {};
  currentStyles = {};


  constructor() { }

  ngOnInit() {
   
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
          },
          isActive: true,
          registered: new Date('01/02/2018 08:00')
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 34,
          address: {
            street: '20 School st',
            city: 'Lynn',
            state: 'MA'
          },
          isActive: false,
          registered: new Date('02/03/2017 06:00')
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 26,
          address: {
            street: '55 Mill st',
            city: 'Miami',
            state: 'FL'
          },
          isActive: true,
          registered: new Date('11/02/2018 08:11')
        }
      ];

      this.loaded = true;

      // this.addUser({
      //   firstName: 'David',
      //   lastName: 'Jackson',
      //   age: 40,
      //   address: {
      //     street: 'One St',
      //     city: 'Loop',
      //     state: 'MA'
      //   }
      // });
  
      // this.setCurrentClasess();
      // this.setCurrentStyles();
}

  addUser(user: User) {
    this.users.push(user);
  }

  // setCurrentClasess() {
  //   this.currentClasses = {
  //     'btn-success': this.enableAll,
  //     'big-text': this.showExtended
  //   }
  // }

  // setCurrentStyles() {
  //   this.currentStyles = {
  //     'padding-top': this.showExtended ? '0' : '40px',
  //     'font-size': this.showExtended ? '' : '40px',
  //   } 
  // }
  
}
