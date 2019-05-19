import { Component } from '@angular/core';
import { Item } from './model/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'BridgeTracker';
  items = [
    new Item("Jake", 'hookshot'),
    new Item("Abby", 'boomerang'),
    new Item("Ronan", 'hookshot'),
    new Item("Mackenzie", 'hookshot'),
  ];
}