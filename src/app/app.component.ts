import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  show = false;
  clicks: any = [];
  clickNumber = 0;
  onShowDetails() {
    !this.show ? (this.show = true) : (this.show = false);
    this.clickNumber++;
    this.clicks.push(this.clickNumber);
    console.log(this.clickNumber);
    console.log(this.clicks);
  }
  // getColor() {
  //   return this.clickNumber > 4 ? 'blue' : 'black';
  // }
}
