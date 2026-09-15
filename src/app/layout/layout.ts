import { Component, ViewChild } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';

import { BreakpointObserver } from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatSidenav,
  MatSidenavModule
} from '@angular/material/sidenav';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-layout',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,

    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  isMobileOrTablet = false;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {

    this.breakpointObserver
      .observe('(max-width: 1279px)')
      .subscribe(result => {

        this.isMobileOrTablet = result.matches;

      });

  }

  abrirMenu(): void {
    this.sidenav.open();
  }

  fecharMenu(): void {

    if (this.isMobileOrTablet) {
      this.sidenav.close();
    }

  }

}