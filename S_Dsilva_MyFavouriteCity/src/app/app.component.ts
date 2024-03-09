import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { CityService } from './city.service';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  singleContent: Content | undefined; 
  inputId: number | undefined;

  constructor(private cityService: CityService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.cityService.getContentById(4).subscribe(
      (content: Content | undefined) => {
        this.singleContent = content;
      }
    );
  }

  retrieveContentById(): void {
    if (isNaN(this.inputId as number) || this.inputId === undefined) {
      this.messageService.addMessage('Error: Please enter a valid ID number.');
      return;
    }

    const inputId = this.inputId as number;
    
    this.cityService.getContentArray().subscribe((contentArray: Content[]) => {
      if (inputId < 1 || inputId > contentArray.length) {
        this.messageService.addMessage('Error: Entered ID is out of bounds.');
      } else {
        this.cityService.getContentById(inputId).subscribe(
          (content: Content | undefined) => {
            if (content) {
              this.singleContent = content;
              // this.messageService.addMessage(`Content Item at id: ${inputId}`);
            } else {
              this.messageService.addMessage('Error: Content not found.');
            }
          }
        );
      }
    });
  }
}
