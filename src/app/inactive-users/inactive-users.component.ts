import { Component, OnInit } from '@angular/core';
import { userDataService } from '../services/userData.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[] = [];

  constructor (private userDataService : userDataService) {}

  ngOnInit() {
      this.users = this.userDataService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userDataService.onSetToActive(id);
  }
}
