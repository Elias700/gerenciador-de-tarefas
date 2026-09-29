import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardOverviewComponent } from './dashboard-overview/dashboard-overview.component';
import { DashboardStatsComponent } from './dashboard-stats/dashboard-stats.component';
import { RecentShiftsComponent } from './recent-shifts/recent-shifts.component';
import { UpcomingShiftsComponent } from './upcoming-shifts/upcoming-shifts.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    DashboardHeaderComponent,
    DashboardOverviewComponent,
    DashboardStatsComponent,
    RecentShiftsComponent,
    UpcomingShiftsComponent
],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}