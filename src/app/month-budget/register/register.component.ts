import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { WhttpService } from '../../core/shared/whttp.service';
import { LocalStoreService } from '../../core/shared/local-store.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  sumForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private whttp: WhttpService,
    private router: Router,
    private localStoreService: LocalStoreService
  ) {
    this.createForm();
   }

  ngOnInit() {
    if (this.localStoreService.getItem('sum')) {
      this.redirect();
    }
  }

  onSubmit() {
    this.whttp.setUserMonthSum({ value: this.sumForm.value.sum}).subscribe(() => {
    this.redirect();
    });
  }

  hasPatternError(): boolean {
    return !!this.sumForm.controls.sum.errors && !!this.sumForm.controls.sum.errors.pattern;
  }

  private createForm() {
    this.sumForm = this.fb.group({
      sum:  ['', Validators.required]
    });
  }

  private redirect(): void {
    this.router.navigate(['main/month-budget/main']);
  }
}
