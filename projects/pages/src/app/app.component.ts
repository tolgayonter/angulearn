import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentPage = 0

  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Uuu Snowy',
      url: 'https://images.unsplash.com/photo-1501621665255-6bc2dc9c0f6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Having Fun',
      url: 'https://images.unsplash.com/photo-1622495893726-f1478dcebc03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Coffee Time',
      url: 'https://images.unsplash.com/photo-1632494570925-189fd0025985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwd2luZG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Uuu Snowy',
      url: 'https://images.unsplash.com/photo-1501621665255-6bc2dc9c0f6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Having Fun',
      url: 'https://images.unsplash.com/photo-1622495893726-f1478dcebc03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Coffee Time',
      url: 'https://images.unsplash.com/photo-1632494570925-189fd0025985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwd2luZG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Uuu Snowy',
      url: 'https://images.unsplash.com/photo-1501621665255-6bc2dc9c0f6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Having Fun',
      url: 'https://images.unsplash.com/photo-1622495893726-f1478dcebc03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Coffee Time',
      url: 'https://images.unsplash.com/photo-1632494570925-189fd0025985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwd2luZG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Uuu Snowy',
      url: 'https://images.unsplash.com/photo-1501621665255-6bc2dc9c0f6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Having Fun',
      url: 'https://images.unsplash.com/photo-1622495893726-f1478dcebc03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Coffee Time',
      url: 'https://images.unsplash.com/photo-1632494570925-189fd0025985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwd2luZG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Uuu Snowy',
      url: 'https://images.unsplash.com/photo-1501621665255-6bc2dc9c0f6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Having Fun',
      url: 'https://images.unsplash.com/photo-1622495893726-f1478dcebc03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Coffee Time',
      url: 'https://images.unsplash.com/photo-1632494570925-189fd0025985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwd2luZG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Uuu Snowy',
      url: 'https://images.unsplash.com/photo-1501621665255-6bc2dc9c0f6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Having Fun',
      url: 'https://images.unsplash.com/photo-1622495893726-f1478dcebc03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Coffee Time',
      url: 'https://images.unsplash.com/photo-1632494570925-189fd0025985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwd2luZG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Uuu Snowy',
      url: 'https://images.unsplash.com/photo-1501621665255-6bc2dc9c0f6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Having Fun',
      url: 'https://images.unsplash.com/photo-1622495893726-f1478dcebc03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Coffee Time',
      url: 'https://images.unsplash.com/photo-1632494570925-189fd0025985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwd2luZG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Uuu Snowy',
      url: 'https://images.unsplash.com/photo-1501621665255-6bc2dc9c0f6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Having Fun',
      url: 'https://images.unsplash.com/photo-1622495893726-f1478dcebc03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Coffee Time',
      url: 'https://images.unsplash.com/photo-1632494570925-189fd0025985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwd2luZG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Uuu Snowy',
      url: 'https://images.unsplash.com/photo-1501621665255-6bc2dc9c0f6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Having Fun',
      url: 'https://images.unsplash.com/photo-1622495893726-f1478dcebc03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Coffee Time',
      url: 'https://images.unsplash.com/photo-1632494570925-189fd0025985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwd2luZG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Uuu Snowy',
      url: 'https://images.unsplash.com/photo-1501621665255-6bc2dc9c0f6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Having Fun',
      url: 'https://images.unsplash.com/photo-1622495893726-f1478dcebc03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Coffee Time',
      url: 'https://images.unsplash.com/photo-1632494570925-189fd0025985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwd2luZG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
  ]

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5
  }

}
