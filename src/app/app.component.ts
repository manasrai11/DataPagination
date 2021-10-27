import { Component } from '@angular/core';
import { GetuserService } from './services/getuser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dataPagination';
  retreive_data: Array<any>;
  totalRecords!: string;
  page!: number;
  per_page!: number;

  constructor(private userService: GetuserService) {
    this.retreive_data = new Array<any>();
    this.per_page = 6;
    this.page = 1;
  }
  fetchData(pageNo: number = 1) {
    this.userService.getData(pageNo).subscribe((getting_data) => {
      console.log(getting_data);
      this.per_page = getting_data.per_page;
      this.retreive_data = getting_data.data;

      this.retreive_data.length;
      console.log(this.retreive_data);

      this.totalRecords = getting_data.total;
      console.log(this.totalRecords);
      // console.log('this is fetching data' + this.retreive_data);
      // this.totalRecords = getting_data.data.length;
      // console.log(this.totalRecords);
    });
  }
  pageChanged(event: any) {
    this.page = event;
    console.log('requesting page' + this.page);
    this.fetchData(this.page);
    console.log('requesting page 2' + this.page);
  }
}
