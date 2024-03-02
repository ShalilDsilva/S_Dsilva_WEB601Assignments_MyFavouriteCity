import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CreateContentComponent } from '../create-content/create-content.component';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  contentArray: Content[] = [
    { id: 1, title: 'Mumbai', description: 'Mumbai is the capital city of the Indian state of Maharashtra. Mumbai is the de facto financial centre and the most populous city of India', creator: 'Shalil', imgURL: 'https://lp-cms-production.imgix.net/image_browser/Mumbai_nightlife_S.jpg', type: 'City', tags: ['india', 'city'] },
    { id: 2, title: 'Toronto', description: 'The official website for the City of Toronto. Toronto is Canada\'s largest city, the fourth largest in North America, and home to a diverse population', creator: 'Shalil', imgURL: 'https://cdn.britannica.com/93/94493-050-35524FED/Toronto.jpg', type: 'City', tags: ['canada', 'city'] },
    { id: 3, title: 'Manchester', description: 'Manchester is a city and metropolitan borough of Greater Manchester, England, which had a population of 552,000 at the 2021 census.', creator: 'Shalil', imgURL: '', type: 'City', tags: ['england', 'city'] },
    { id: 4, title: 'Paris', description: 'Paris is the capital and most populous city of France. With an official estimated population of 2,102,650 residents as of 1 January 2023 ', creator: 'Shalil', imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg', type: 'City', tags: ['france', 'city'] },
    { id: 5, title: 'Barcelona', description: 'It is the capital and largest city of the autonomous community of Catalonia, as well as the second-most populous municipality of Spain.', creator: 'Shalil', imgURL: 'https://media.timeout.com/images/105890036/image.jpg', type: 'City', tags: ['spain', 'city'] },
    { id: 6, title: 'Las Vegas', description: 'Las Vegas often known simply as Vegas, is the most populous city in the U.S. state of Nevada and the county seat of Clark County.', creator: 'Shalil', imgURL: 'https://a.cdn-hotels.com/gdcs/production37/d1139/a8a147d0-c31d-11e8-825c-0242ac110006.jpg?impolicy=fcrop&w=800&h=533&q=medium', type: '', tags: ['usa', 'city'] },
    { id: 7, title: 'Germany', description: 'Germany, officially the Federal Republic of Germany, is a country in the western region of Central Europe. It is the second-most populous country in Europe', creator: 'Shalil', imgURL: 'https://cdn.britannica.com/06/152206-050-72BD5CAC/twin-towers-Church-of-Our-Lady-Munich.jpg', type: 'Country', tags: ['munich', 'country'] }
  ];

  typeList: string[] = [];
  searchTitle: string = '';
  searchMessage: string = '';
  searchMessageColor: string = '';

  @ViewChild(CreateContentComponent) createContentComponent: CreateContentComponent | undefined;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
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

  handleImageClick(id: number, title: string): void {
    console.log(`Clicked on image with ID: ${id}, Title: ${title}`);
  }

  handleContentAdded(newContent: Content): void {
    const clonedContent = { ...newContent }; // Clone the content
    this.addContentPromise(clonedContent)
      .then(() => {
        console.log('Content added successfully:', clonedContent.title);
        this.cdr.detectChanges(); // Trigger change detection
      })
      .catch(() => console.error('Failed to add content:', clonedContent.title));
  }
  
  
  addContentPromise(newContent: Content): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.validateContent(newContent)) {
        this.contentArray.push(newContent);
        resolve();
      } else {
        reject();
      }
    });
  }
  
  validateContent(newContent: Content): boolean {
    if (!newContent.title || !newContent.description || !newContent.creator) {
      console.error('Required fields are missing.');
      return false;
    }
    return true;
  }
  
  
}