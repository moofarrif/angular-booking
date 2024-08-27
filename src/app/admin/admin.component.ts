import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@Component({
  standalone: true,
  selector: 'app-admin',
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
