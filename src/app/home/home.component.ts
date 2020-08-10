import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'app-routing.module';

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!

      <router-outlet></router-outlet>

    </p>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
