import { Component, OnInit } from '@angular/core';
import { MainService } from './shared/main.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  defaultData: Object;

  constructor(
    private service: MainService
  ) {

   }

  ngOnInit() {
    this.defaultData = this.service.defaultData;
  }

}
