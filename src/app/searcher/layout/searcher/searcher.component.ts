import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrl: './searcher.component.css',
  imports:[
    RouterOutlet,
    RouterLink
  ],
  standalone:true
})
export class SearcherComponent {

}
