import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppLinkComponent } from './app-link/app-link.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppContainerComponent } from './app-container/app-container.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NavLinkComponent } from './nav-link/nav-link.component';

@NgModule({
  declarations: [AppLinkComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDividerModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatToolbarModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatTabsModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatTooltipModule,
    MatStepperModule,
    MatTableModule,
    MatPaginatorModule,
    AppContainerComponent,
    NavLinkComponent,
  ],
  exports: [
    // material
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDividerModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule,
    MatToolbarModule,
    MatBadgeModule,
    MatListModule,
    MatDialogModule,
    MatTooltipModule,
    MatStepperModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    // project
    CommonModule,
    AppLinkComponent,
    NavLinkComponent,
    AppContainerComponent,
  ],
})
export class AppLayoutModule {}
