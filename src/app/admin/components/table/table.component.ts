import { Component, Input, OnInit } from '@angular/core';

import { Product } from './domain/product';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, TableModule],
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent  {
  @Input({ required: true }) data!: Product[];
}
