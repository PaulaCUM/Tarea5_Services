import { Component, OnInit } from '@angular/core';
import { userDataService } from '../services/userData.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[] = [];
  
  constructor (private userDataService : userDataService) {}

  ngOnInit() {
    this.users = this.userDataService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userDataService.onSetToInactive(id);
  }
}
