import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { IncomeConfirmationRoutingModule } from './income-confirmation-routing.module';
import { IncomeConfirmationComponent } from './income-confirmation.component';

import { SharedModule } from '../shared/shared.module';
import { ExpenseComponent } from './expense/expense.component';
import { IncomeComponent } from './income/income.component';

@NgModule({
  imports: [
    CommonModule,
    IncomeConfirmationRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    IncomeConfirmationComponent,
    ExpenseComponent,
    IncomeComponent
  ]
})
export class IncomeConfirmationModule { }
