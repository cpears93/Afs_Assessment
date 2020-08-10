import { Component, OnInit } from '@angular/core';
import * from tsconfig.json;
import { NzTableModule } from 'ng-zorro-antd/table';


@Component({
  selector: 'app-client',
  template: `
    <p>
      client works!
    </p>
  `,
  styles: [
  ]
})
export class ClientComponent implements OnInit {

  listData: listData[];

  constructor(private service: ListDataService) { }

  ngOnInit(): void {
    this.listData = this.service.getListData();
  }

  selectListData(client: Client) {this.listData = client; }
}
