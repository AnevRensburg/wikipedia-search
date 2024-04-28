import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages: {
    title: string;
    snippet: string;
    wordcount: number;
    pageid: number; 
  }[] = [];

  constructor(private wikipedia: WikipediaService){}

  onTerm(term: string){
    this.wikipedia.search(term).subscribe((page) => {
      this.pages = page;
    })
  }
}
