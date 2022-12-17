import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  constructor(private counterService: CounterService) {
    this.counterService.activeToInactiveCounterUpdate.subscribe(
      (actToInact) => {
        this.activeToInactiveCounter = actToInact;
      }
    );
    this.counterService.inactiveToActiveCounterUpdate.subscribe(
      (inactToAct) => {
        this.inactiveToActiveCounter = inactToAct;
      }
    );
  }
  // ngOnInit() {
  //   this.activeToInactiveCounter = this.counterService.activeToInactiveCounter;
  //   this.inactiveToActiveCounter = this.counterService.inactiveToActiveCounter;
  // }
}
