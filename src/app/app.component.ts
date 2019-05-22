import { Component } from '@angular/core';
import { Item } from './model/item';
import { Check } from './model/check';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'BridgeTracker';
  items = [
    new Item("Hookshot", 'hookshot'),
    new Item("Boomerang", 'boomerang'),
  ];
  checks = [
    new Check("Saria's Song", "Lost Woods", [this.items[0]]),
    new Check("Kokiri Sword Chest", "Kokiri Forest", [this.items[0], this.items[1]]),
  ]

  visitCheck(check: Check) {
    check.visited = !check.visited;
  }

  incrementItem(item: Item) {
    item.has = !item.has;
    // this.checkAvailability(item);
  }

  // checkAvailability(item: Item) {
  //   this.checks.forEach(check => {
  //     var dependsOnItem = false;
  //     check.dependencies.forEach(item => {

  //     })
  //   });
  // }
}