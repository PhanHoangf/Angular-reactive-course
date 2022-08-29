import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages/messages.service';
import { AuthStore } from './services/auth.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private messagesService: MessagesService, public authStore: AuthStore) {
  }

  ngOnInit() {
  }

  logout() {
    this.authStore.logout();
  }
}
