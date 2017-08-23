import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeConfirmationRoutingModule } from './income-confirmation-routing.module';
import { IncomeConfirmationComponent } from './income-confirmation.component';

@NgModule({
  imports: [
    CommonModule,
    IncomeConfirmationRoutingModule
  ],
  declarations: [IncomeConfirmationComponent]
})
export class IncomeConfirmationModule { }
