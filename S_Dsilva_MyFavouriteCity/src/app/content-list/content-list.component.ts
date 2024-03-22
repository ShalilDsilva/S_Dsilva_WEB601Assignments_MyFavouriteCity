import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CityService } from '../city.service';
import { InMemoryDataService } from '../in-memory-data.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  contentArray: Content[] = [];

  typeList: string[] = [];
  searchTitle: string = '';
  searchMessage: string = '';
  searchMessageColor: string = '';

  constructor(private cityService: CityService, private inMemoryDataService:InMemoryDataService) {}

  ngOnInit(): void {
    this.getContents();
    this.cityService.getContentArray().subscribe(contentArray => {
      this.contentArray = contentArray;
    });
    this.extractTypes();
  }

  extractTypes(): void {
    this.typeList = Array.from(new Set(this.contentArray.map(content => content.type).filter(type => type !== undefined))) as string[];
  }
  

  searchContent(): void {
    
    this.contentArray.forEach(content => content.highlight = false);

    const foundContent = this.contentArray.find(content => content.title === this.searchTitle);

    if (foundContent) {
      this.searchMessage = `Content with title "${this.searchTitle}" found!`;
      this.searchMessageColor = 'green';
      this.highlightContent(foundContent);
    } else {
      this.searchMessage = `No content found with title "${this.searchTitle}"`;
      this.searchMessageColor = 'red';
    }
  }

  highlightContent(content: Content): void {
    const index = this.contentArray.indexOf(content);
    this.contentArray[index].highlight = true;
  }

  handleImageClick(id: number | null, title: string): void {
    if (id !== null) {
      console.log(`Clicked on image with ID: ${id}, Title: ${title}`);
    } else {
      console.log(`Clicked on image with no ID, Title: ${title}`);
    }
  }
  

  addContentToList(newContentItem: Content): void {
    this.cityService.addContent(newContentItem)
    .subscribe(newContentFromServer =>
    this.contentArray.push(newContentFromServer)
    );
  }

  updateContentInList(contentItem: Content): void {
    this.cityService.updateContent(contentItem)
    .subscribe(() =>
    console.log("Content updated successfully")
    );
  }    

  getContents(): void {
    this.cityService.getContent().subscribe((contents) => {
      this.contentArray = contents;
    });
  }
  handleContentAdded(content: Content): void {
    const existingContentIndex = this.contentArray.findIndex((c) => c.id === content.id);

    if (existingContentIndex !== -1) {
      this.contentArray[existingContentIndex] = content;
    } else {
      this.contentArray.push(content);
    }
  }
}