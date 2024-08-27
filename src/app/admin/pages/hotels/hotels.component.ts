import { Component, inject, OnInit } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { HotelsService } from '../../services/hotels.service';

@Component({
  standalone: true,
  imports: [TableComponent],
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  providers: [HotelsService],

  styleUrls: ['./hotels.component.css'],
})
export class HotelsComponent implements OnInit {
  hotelsSerivces = inject(HotelsService);

  data: any;

  ngOnInit() {
    this.hotelsSerivces.getProductsMini().then((data) => {
      this.data = data;
    });
  }
}
