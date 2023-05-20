import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'neat tree',
      imageUrl: 'assets/tree.jpeg',
      username: '@nature',
      content: 'I saw this neat tree today.',
    },
    {
      title: 'snowy mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: '@mountainlover',
      content: 'here is a picture of a snowy mountain.',
    },
    {
      title: 'mountain biking',
      imageUrl: 'assets/biking.jpeg',
      username: '@biking12222',
      content: 'I did some biking today.',
    },
  ];
}
