import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Content } from './helper-files/content-interface';
import { contentArray } from './helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    const content: Content[] = contentArray;
    return { content };
  }

  genId(content: Content[]): number {
    const ids: number[] = content.map(c => c.id).filter(id => id !== null) as number[];
    return ids.length > 0 ? Math.max(...ids) + 1 : 2000;
  }
  
}