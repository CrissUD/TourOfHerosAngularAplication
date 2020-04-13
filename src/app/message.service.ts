import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages = [];

  constructor() {}

  addMessage(message: string): void {
    this.messages.push(message);
  }

  clearMessages(): void {
    this.messages = [];
  }
}
