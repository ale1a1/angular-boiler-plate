import { EventEmitter } from '@angular/core';

export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  activeToInactiveCounterUpdate = new EventEmitter<number>();
  inactiveToActiveCounterUpdate = new EventEmitter<number>();

  increaseActiveToInactiveCounter() {
    this.activeToInactiveCounter++;
    console.log('activeToInactiveCounter:' + this.activeToInactiveCounter);
    this.activeToInactiveCounterUpdate.emit(this.activeToInactiveCounter);
  }
  increaseInactiveToActiveCounter() {
    this.inactiveToActiveCounter++;
    console.log('inactiveToActiveCounter: ' + this.inactiveToActiveCounter);
    this.inactiveToActiveCounterUpdate.emit(this.inactiveToActiveCounter);
  }
}
