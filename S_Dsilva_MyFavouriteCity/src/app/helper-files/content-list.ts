import { Content } from './content-interface';

export class ContentList {
  private contentArray: Content[] = [];

  constructor() {}

  get getContentArray(): Content[] {
    return this.contentArray;
  }

  add(contentItem: Content): void {
    this.contentArray.push(contentItem);
  }

  count(): number {
    return this.contentArray.length;
  }

  getContentDetails(index: number): string {
    if (index < 0 || index >= this.contentArray.length) {
      return '<p>Error: Index out of range.</p>';
    }

    const contentItem = this.contentArray[index];

    // Generate HTML output
    return `
      <h2>${contentItem.title}</h2>
      <p>${contentItem.description}</p>
      <p>Creator: ${contentItem.creator}</p>
      <p>Type: ${contentItem.type || 'N/A'}</p>
      ${contentItem.imgURL ? `<img src="${contentItem.imgURL}" alt="Image" width="300px" height="300px"/>` : ''}
    `;
  }
}
