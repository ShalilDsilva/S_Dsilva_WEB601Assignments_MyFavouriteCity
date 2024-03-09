import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { contentArray } from './helper-files/contentDb';
import { Content } from './helper-files/content-interface';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  constructor(private messageService: MessageService) {}

  getContentArray(): Observable<Content[]> {
    return of(contentArray).pipe(
      tap(() => this.messageService.addMessage('Content array loaded!'))
    );
  }

  getContentById(id: number): Observable<Content | undefined> {
    const content = contentArray.find(item => item.id === id);
    this.messageService.addMessage(`Content Item at id: ${id}`);
    return of(content);
  }
}
