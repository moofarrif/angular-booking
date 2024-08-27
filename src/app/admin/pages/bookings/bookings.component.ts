import { Component, OnInit, inject } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { ProductService } from '../../components/table/service/productservice';

@Component({
  standalone: true,
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
  providers: [ProductService],
  imports: [TableComponent],
})
export class BookingsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
