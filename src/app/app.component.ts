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
    // TODO determine if checks can be visited even when not available
    check.visited = !check.visited;
  }

  incrementItem(item: Item) {
    item.has = !item.has;
    this.notifyNewItem(item);
  }

  notifyNewItem(item: Item) {
    this.checks.forEach(check => {
      if (!check.visited && check.dependencies.includes(item)) {
        console.log("the check " + check.name + " depends on " + item.name);
        this.recalculateAvailability(check);
      }
    });
  }

  recalculateAvailability(check: Check) {
    var isNowAvailable = true;
    check.dependencies.forEach(itemDependency => {
      this.items.forEach(itemInBag => {
        if (itemDependency.name == itemInBag.name && itemInBag.has == false) {
          isNowAvailable = false;
        }
      })
    });
    check.available = isNowAvailable;
  }
}