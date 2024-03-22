import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { contentArray } from './helper-files/contentDb';
import { Content } from './helper-files/content-interface';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  constructor(private messageService: MessageService, private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':'application/json' })
    };

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

  getContent() : Observable<Content[]>{
    return this.http.get<Content[]>("api/content");
  }

  addContent(newContentItem: Content): Observable<Content>{
    return this.http.post<Content>("api/content", newContentItem, this.httpOptions);
  }

  updateContent(contentItem: Content): Observable<any>{
    return this.http.put("api/content", contentItem, this.httpOptions);
  }  
}
