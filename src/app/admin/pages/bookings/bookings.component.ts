import { Component, OnInit, inject } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { BookingsService } from '../../services/bookings.service';

@Component({
  standalone: true,
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
  providers: [BookingsService],
  imports: [TableComponent],
})
export class BookingsComponent implements OnInit {
  bookinsService = inject(BookingsService);

  data: any;

  ngOnInit() {
    this.bookinsService.getProductsMini().then((data) => {
      this.data = data;
    });
  }
}
