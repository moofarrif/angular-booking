import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-admin',
  imports: [RouterOutlet],
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
