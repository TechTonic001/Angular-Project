import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  imports: [],
 templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing {
  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
