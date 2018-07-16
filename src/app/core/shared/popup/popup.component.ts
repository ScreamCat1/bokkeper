import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MonthSpentService } from '../month-spent.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  addedSumForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private monthSpentService: MonthSpentService
  ) {
    this.createForm();
   }

  ngOnInit() {
  }

  onSubmit() {
    this.monthSpentService.addSpentMoneyToCategory(this.addedSumForm.value);
  }

  private createForm() {
    this.addedSumForm = this.fb.group({
      sum:  ['', Validators.required],
      description:  ['']
    });
  }

}
