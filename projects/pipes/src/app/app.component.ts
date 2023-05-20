import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string | undefined;
  date: string | undefined;
  amount: number | undefined;

  onNameChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.name = value;
  }

  onDateChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.date = value;
  }

  onAmountChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.amount = parseFloat(value);
  }
}
