import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrl: './searcher.component.css',
  imports: [
    RouterOutlet,
    RouterLink,
    ButtonModule,
    CalendarModule,
    InputNumberModule,
    DropdownModule,
  ],
  standalone: true,
})
export class SearcherComponent {
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
}
