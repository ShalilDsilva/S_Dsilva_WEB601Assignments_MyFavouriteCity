import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  @Output() contentAdded: EventEmitter<Content> = new EventEmitter<Content>();
  newContent: Content = { id: 0, title: '', description: '', creator: '', imgURL: '', type: '', tags: [] }; // Initialize new content object

  constructor() {}

  addContent(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.validateContent()) {
        this.contentAdded.emit(this.newContent);
        this.newContent = this.createEmptyContent(); // Clear input fields
        console.log('Content added successfully:', this.newContent.title);
        resolve();
      } else {
        console.error('Required fields are missing.');
        reject();
      }
    });
  }
  

  validateContent(): boolean {
    if (!this.newContent.title || !this.newContent.description || !this.newContent.creator) {
      console.error('Required fields are missing.');
      return false;
    }
    return true;
  }

  createEmptyContent(): Content {
    return { id: 0, title: '', description: '', creator: '', imgURL: '', type: '', tags: [] };
  }
}
