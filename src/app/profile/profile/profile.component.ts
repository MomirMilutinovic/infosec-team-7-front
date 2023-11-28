import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  selectedMenuItem: string | null = 'editProfile';

  selectMenuItem(item: string): void {
    this.selectedMenuItem = item;
  }}
