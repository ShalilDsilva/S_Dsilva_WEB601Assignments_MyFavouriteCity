import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor() {
    this.contentList.add({
      id: 1,
      title: 'Mumbai',
      description: 'Mumbai is the capital city of the Indian state of Maharashtra. Mumbai is the de facto financial centre and the most populous city of India',
      creator: 'Shalil Dsilva',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F7xZ48abwAAgNst.jpg/800px-F7xZ48abwAAgNst.jpg',
      type: 'Cities',
      tags: ['city', 'india']
    });

    this.contentList.add({
      id: 2,
      title: 'Barcelona',
      description: 'Barcelona is a major cultural, economic, and financial centre in southwestern Europe, as well as the main biotech hub in Spain',
      creator: 'Shalil Dsilva',
      imgURL: 'https://media.timeout.com/images/105890036/750/422/image.jpg',
      type: 'Cities',
      tags: ['city', 'spain']
    });

    this.contentList.add({
      id: 3,
      title: 'Toronto',
      description: 'Toronto is the most populous city in Canada and the capital city of the Canadian province of Ontario. With a recorded population of 2,794,356 in 2021',
      creator: 'Shalil Dsilva',
      imgURL: 'https://media.cntraveler.com/photos/5b2c0684a98055277ea83e26/1:1/w_2667,h_2667,c_limit/CN-Tower_GettyImages-615764386.jpg',
      type: 'Cities',
      tags: ['city', 'canada']
    });
  }

  
}
