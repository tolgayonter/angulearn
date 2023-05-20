import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;

  images = Array(10)
    .fill([
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
        url: 'https://images.unsplash.com/photo-1682685796002-e05458d61f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      },
      {
        url: 'https://images.unsplash.com/photo-1622495893726-f1478dcebc03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      },
      {
        url: 'https://images.unsplash.com/photo-1632494570925-189fd0025985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwd2luZG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
      {
        url: 'https://images.unsplash.com/photo-1684511616162-bab241eeaed3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      },
    ])
    .flat();

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
