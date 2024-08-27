import { Component, OnInit } from '@angular/core';


import { Product } from './domain/product';
import { ProductService } from './service/productservice';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, TableModule],
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });
  }
}
