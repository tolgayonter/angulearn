import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';

  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onInputLength(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    const parsedVal = parseInt(value);
    if (!isNaN(parsedVal)) {
      this.length = parsedVal;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    const letters = 'qazwsxedcrfvtgbyhnujmikiolp';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      generatedPassword +=
        validChars[Math.floor(Math.random() * validChars.length)];
    }

    this.password = generatedPassword;
  }
}
