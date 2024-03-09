import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent implements OnInit {
  messages: string[] = []; 

  constructor(private messagesService: MessageService) { }

  ngOnInit(): void {
    this.messages = this.messagesService.messages;
  }
}