import { Component, OnInit, DoCheck, Input } from '@angular/core';


interface Category {
  category: string;
  spentSum: number;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, DoCheck {
  @Input() categories: Array<Category>;
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {

  }

}
