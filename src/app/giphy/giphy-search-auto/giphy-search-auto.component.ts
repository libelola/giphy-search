import { Component, OnInit } from '@angular/core';
import { GiphySearchManualComponent } from '../giphy-search-manual/giphy-search-manual.component';
import { Title } from '@angular/platform-browser';
import { GiphySearchService } from '../giphy-search.service';
import { Giphy } from '../giphy-search-manual/giphy.type';

@Component({
  selector: 'giphy-search-auto',
  templateUrl: './giphy-search-auto.component.html'
   
})


export class GiphySearchAutoComponent extends GiphySearchManualComponent implements OnInit {
  constructor(protected title: Title, protected giphySearchService: GiphySearchService ){
    super(title, giphySearchService);

  }

  
  gifs: Giphy[] = [];
  limit: string = "10";
  term: string;

    
  ngOnInit(){
    this.title.setTitle("Giphy search auto...");
  }
}
