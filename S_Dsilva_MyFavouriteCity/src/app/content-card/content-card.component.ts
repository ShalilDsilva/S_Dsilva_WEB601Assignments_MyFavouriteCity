import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  @Input() content!: Content;
  @Input() index!: number;
  @Output() imageClick: EventEmitter<{ id: number; title: string }> = new EventEmitter();

  onImageClick(): void {
    this.imageClick.emit({ id: this.content.id, title: this.content.title });
  }
  
}
