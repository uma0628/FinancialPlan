import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BalanceSheetRoutingModule } from './balance-sheet-routing.module';
import { BalanceSheetComponent } from './balance-sheet.component';
import { AssetComponent } from './asset/asset.component';
import { LiabilityComponent } from './liability/liability.component';
import { TotalComponent } from './total/total.component';
import { BalanceSheetService } from './shared/balance-sheet.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BalanceSheetRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [BalanceSheetComponent, AssetComponent, LiabilityComponent, TotalComponent],
  providers: [
    BalanceSheetService
  ]
})
export class BalanceSheetModule { }
