import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { MonthSpentService } from '../month-spent.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  type: string;
  title: string;
  addedSumForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private monthSpentService: MonthSpentService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.createForm(param.get('type'));
    });
  }

  onSubmit() {
    switch (this.type) {
      case 'addSpentMoney':
      this.monthSpentService.saveSpentMoneyToCategory(this.addedSumForm.value);
      break;
      case 'addNewCategory':
      this.monthSpentService.saveNewCategory(this.addedSumForm.value);
    }
  }

  private createForm(type: string) {
    let inputsGroup;
    this.type = type;

    switch (type) {
      case 'addSpentMoney':
      this.title = 'Add spent money';

      inputsGroup = {
        sum:  ['', Validators.required],
        description:  ['']
      };

      break;
      case 'addNewCategory':
        this.title = 'Add new category';

        inputsGroup = {
          category: ['', Validators.required]
        };
      break;
    }
    this.addedSumForm = this.fb.group(inputsGroup);
  }
}
