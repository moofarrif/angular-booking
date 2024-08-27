import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterModule, MenuModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  router = inject(Router);

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        routerLink: ['/admin'],
        items: [
          {
            label: 'Hoteles',
            icon: 'pi pi-building',
            routerLink: ['/dashboard/hotels'],
          },
          {
            label: 'Reservas',
            icon: 'pi pi-calendar-plus',
            routerLink: ['/dashboard/bookings'],
          },
          {
            separator: true,
          },
          {
            label: 'Cerrar sesión',
            icon: 'pi pi-sign-out',
            command: () => {
              localStorage.removeItem('token'),
                this.router.navigateByUrl('/auth/login');
            },
          },
        ],
      },
    ];
  }
}