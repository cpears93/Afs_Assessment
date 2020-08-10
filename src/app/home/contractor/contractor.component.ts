import { Component, OnInit } from '@angular/core';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
import * as subscriptions from './graphql/subscriptions';

@Component({
  selector: 'app-contractor',
  template: `
    <p>
      contractor works!
    </p>
  `,
  styles: [
  ]
})
export class ContractorComponent implements OnInit {

  constructor() { }

  ngOnInit(this): void {
    console.log();
  }

}
